import threading
import time
from subprocess import check_output

#import serial
# import pip
# import socketio
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO
from RPi import GPIO
from db_file.Database import Database
from models.HRM import HRM
from bluepy import btle
from PIL import ImageFont, ImageDraw, Image
from luma.core.interface.serial import i2c
from luma.core.render import canvas
from luma.oled.device import ssd1306, ssd1325, ssd1331, sh1106




try:
    endpoint = '/api/snakedata'
    Input_pins = [18,23,24,25,1,12,16,20,21,26,6,19,5,13,27,22]
    dev1 = HRM('A0:9E:1A:34:79:38', 0)
    dev2 = HRM('A0:9E:1A:34:79:37', 1)
    dev3 = HRM('A0:9E:1A:34:79:36', 2)
    dev4 = HRM('A0:9E:1A:34:79:35', 3)
    arrDev = [dev1,dev2,dev3,dev4]
    chosenDev = []
    # GPIO.cleanup()
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(Input_pins, GPIO.IN, pull_up_down=GPIO.PUD_UP)

    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'Secret!'
    socketio = SocketIO(app,cors_allowed_origins="*")
    CORS(app)

    conn = Database(app=app, user='mctsnake02', password='mctsnake0', db='SnakeData')

    app.config['SECRET_KEY'] = 'Secret!'
    socketio = SocketIO(app,cors_allowed_origins="*")
    CORS(app)

    conn = Database(app=app, user='mct', password='mct', db='SnakeData')
    def input_trigger(pin):
        print("sending")
        print(pin)
        if pin == 18:
            socketio.emit('gameInput', {'direction': 'left', 'player': 0})
        elif pin == 23:
            socketio.emit('gameInput', {'direction': 'down', 'player': 0})
        elif pin == 24:
            socketio.emit('gameInput', {'direction': 'right', 'player': 0})
        elif pin == 25:
            socketio.emit('gameInput', {'direction': 'up', 'player': 0})

        elif pin == 1:
            socketio.emit('gameInput', {'direction': 'left', 'player': 1})
        elif pin == 12:
            socketio.emit('gameInput', {'direction': 'down', 'player': 1})
        elif pin == 20:
            socketio.emit('gameInput', {'direction': 'right', 'player': 1})
        elif pin == 16:
            socketio.emit('gameInput', {'direction': 'up', 'player': 1})

        elif pin == 21:
            socketio.emit('gameInput', {'direction': 'left', 'player': 2})
        elif pin == 26:
            socketio.emit('gameInput', {'direction': 'down', 'player': 2})
        elif pin == 19:
            socketio.emit('gameInput', {'direction': 'right', 'player': 2})
        elif pin == 6:
            socketio.emit('gameInput', {'direction': 'up', 'player': 2})

        elif pin == 5:
            socketio.emit('gameInput', {'direction': 'left', 'player': 3})
        elif pin == 13:
            socketio.emit('gameInput', {'direction': 'down', 'player': 3})
        elif pin == 22:
            socketio.emit('gameInput', {'direction': 'right', 'player': 3})
        elif pin == 27:
            socketio.emit('gameInput', {'direction': 'up', 'player': 3})
    for pin in Input_pins:
        GPIO.add_event_detect(pin, GPIO.RISING, callback=input_trigger, bouncetime=500)
    def get_max_game_id():
        max_id = conn.get_data('SELECT MAX(GameId) FROM Score')
        id = max_id[0]["MAX(GameId)"]
        return id

    # database endpoint
    @app.route(endpoint + "/data/scorebord", methods=["GET"])
    def get_game_data():
        data = conn.get_data('Select * from Score where GameId = %s order by Score desc limit 4', get_max_game_id())
        return jsonify(data), 200
    @app.route(endpoint + "/data/max_heartrate", methods=["get"])
    def get_max_heartrate():
        data = conn.get_data('Select MAX(Hartslag) from Score WHERE GameId = %s LIMIT 1', get_max_game_id())
        return jsonify(data), 200
    @app.route(endpoint + "/data/game_length", methods=["GET"])
    def get_game_length():
        data = conn.get_data('Select MAX(Tijd) from Score where GameId = %s limit 1', get_max_game_id())
        return jsonify(data), 200

    @app.route(endpoint + "/data/global/game_length", methods=["GET"])
    def get_global_game_length():
        data = conn.get_data('Select MAX(Tijd) from Score limit 1')
        return jsonify(data), 200

    @app.route(endpoint + "/data/global/max_heartrate", methods=["GET"])
    def get_global_max_heartrate():
        data = conn.get_data('Select MAX(Hartslag) from Score limit 1')
        return jsonify(data), 200


    @app.route(endpoint + "/data/global/scorebord", methods=["GET"])
    def get_global_game_data():
        data = conn.get_data('Select * from Score where SpelerNaam not like "Speler %" order by Score desc limit 20')
        return jsonify(data), 200

    # logs game & player scores
    @app.route(endpoint + '/save/game', methods=["POST"])
    def save_game_score():
        body = request.get_json()
        print(body)
        data = conn.set_data('insert into Game (tijd, hartslag, mode, aantalspelers, moeilijkheid, timestamp) '
                             'values (%s, %s, %s, %s, %s, current_timestamp)',
                             [body['Tijd'], body['Hartslag'],
                              body['Mode'], body['AantalSpelers'],
                              body['Moeilijkheid']])
        return jsonify(id=data), 200

    @app.route(endpoint + '/save/player', methods=["POST"])
    def save_player_score():
        body = request.get_json()
        print(body)
        for item in body:
            data = conn.set_data('insert into Score (SpelerNaam, hartslag, Score, Tijd, GameId) '
                                 'values (%s, %s, %s, %s, (select GameId from Game order by GameId desc limit 1))',
                                 [item['Naam'], item['Hartslag'],
                                  item['Score'], item['Tijd']])
        return jsonify(message="ok"), 200

    def HeartRate():
        while True:
            global chosenDev
            # print(arrDev)
            for devices in chosenDev:
                try:

                    # devices.reconnect()
                    if devices.device.waitForNotifications(1.0):
                        # handleNotification() was called
                        pass
                # except btle.BTLEDisconnectError:
                #     print('player {0} disconnected \n reconnecting...'.format(devices.playerNumber))
                #     devices.reconnect()
                except AttributeError as ex:
                    # print("No answer recived from: {0}".format(devices.MAC))
                    # print('device: {0}, was removed'.format(devices.MAC))
                    pass
                    # arrDev.remove(devices)
                    # print('remaining devices: {0}',len(arrDev))
                    # if(len(arrDev) == 0):
                    #     raise Exception('no devices detected, stopping thread...')
                    # break
                except Exception as ex:
                    print('Exception: {0}'.format(ex))
                print(devices.playerNumber)
                print("Player Number: {0} | Heart rate: {1}".format(devices.playerNumber,devices.heart_rate))
                socketio.emit('hr', {'hr': devices.heart_rate, 'player': devices.playerNumber})
            time.sleep(2)


    def ip():
        serial = i2c(port=1, address=0x3C)
        device = ssd1306(serial, rotate=0)
        # i=0
        while True:
            # i+=1
            ips = check_output(['hostname', '--all-ip-addresses'])
            # print('ips: %s' % ips)
            ip1 = str(ips).split(' ', 1)[-1].split(' ', 1)[0].lstrip('b\'')
            ip2 = str(ips).split(' ', 1)[0].split(' ', 1)[0].lstrip('b\'')
            # device.clear()
            with canvas(device) as draw:
                draw.text((20, 0), "Surf naar:", fill="white")
                draw.text((20, 20), ip2, fill="white")
            time.sleep(5)

    @socketio.on('startHR')
    def startHR(spelers):
        global chosenDev
        chosenDev = arrDev[0:spelers]


    def reconnect_devices():
        global chosenDev
        while True:
            for devices in chosenDev:
                print('reconnect thread active')
                try:
                    try:
                        devices.device.status()
                    except:
                        devices.reconnect()
                        # print(devices.device.status())
                except:
                    pass
            time.sleep(1)


    HRMThread = threading.Thread(target=HeartRate)
    ip_thread= threading.Thread(target=ip)
    hrm_connect_thread= threading.Thread(target=reconnect_devices)
    HRMThread.start()
    ip_thread.start()
    hrm_connect_thread.start()

    if __name__ == '__main__':
        socketio.run(app, host="0.0.0.0", port=5000, debug=0)
except Exception as ex:
    print(ex)
    GPIO.cleanup()
finally:
    GPIO.cleanup()