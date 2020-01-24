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

endpoint = '/api/snakedata'
Input_pins = [18,23,24,25,1,12,16,20,21,26,6,19,5,13,27,22]
# GPIO.cleanup()
GPIO.setmode(GPIO.BCM)
GPIO.setup(Input_pins, GPIO.IN, pull_up_down=GPIO.PUD_UP)

app = Flask(__name__)

app.config['SECRET_KEY'] = 'Secret!'
socketio = SocketIO(app,cors_allowed_origins="*")
CORS(app)

conn = Database(app=app, user='mctsnake', password='mctsnake0', db='SnakeData')

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
def get_global_scorebord():
    data = conn.get_data('select * from Score order by Score desc LIMIT 20')
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

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", port=5000, debug=0)