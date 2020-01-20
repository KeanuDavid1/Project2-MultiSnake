import threading
import time
from subprocess import check_output

import serial
import socketio
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO
from RPi import GPIO
from db_file.Database import Database

Input_pins = [21, 20, 1, 26, 19, 13, 25, 24]

GPIO.setmode(GPIO.BCM)
GPIO.setup(Input_pins, GPIO.IN, pull_up_down=GPIO.PUD_UP)

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)
endpoint = '/api/snakedata'
conn = Database(app=app, user='mctsnake02', password='mctsnake0', db='SnakeData')


def input_trigger(pin):
    print("sending")
    if pin == 20:
        socketio.emit('gameInput', {'direction': 'up', 'player': 0})
    elif pin == 21:
        socketio.emit('gameInput', {'direction': 'left', 'player': 0})
    elif pin == 1:
        socketio.emit('gameInput', {'direction': 'right', 'player': 0})
    elif pin == 26:
        socketio.emit('gameInput', {'direction': 'down', 'player': 0})
    elif pin == 19:
        socketio.emit('gameInput', {'direction': 'down', 'player': 1})
    elif pin == 13:
        socketio.emit('gameInput', {'direction': 'up', 'player': 1})
    elif pin == 25:
        socketio.emit('gameInput', {'direction': 'right', 'player': 1})
    elif pin == 24:
        socketio.emit('gameInput', {'direction': 'left', 'player': 1})


# database endpoint
# logs game & player scores
@app.route(endpoint + '/save/game', methods=["POST"])
def save_game_score():
    body = request.get_json()
    data = conn.set_data('insert into Game (tijd, hartslag, mode, aantalspelers, moeilijkheid, timestamp) '
                         'values (%s, %s, %s, %s, %s, current_timestamp)',
                         [body['Tijd'], body['Hartslag'],
                          body['Mode'], body['AantalSpelers'],
                          body['Moeilijkheid']])
    return jsonify(id=data), 200


@app.route(endpoint + '/save/player')
def save_player_score():
    data = conn.get_data('Select * from Score')
    return jsonify(data)


for pin in Input_pins:
    GPIO.add_event_detect(pin, GPIO.FALLING, callback=input_trigger, bouncetime=500)

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", port="5000")
