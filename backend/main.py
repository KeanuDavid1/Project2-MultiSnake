import threading
import time
from subprocess import check_output

import serial
import socketio
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO
from RPi import GPIO
Input_pins = [21,20,1,26,19,13,25,24]

GPIO.setmode(GPIO.BCM)
GPIO.setup(Input_pins, GPIO.IN, pull_up_down=GPIO.PUD_UP)

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)


def input_trigger(pin):
    print("sending")
    if pin == 20:
        socketio.emit('gameInput',{'direction': 'up','player': 0})
    elif pin == 21:
        socketio.emit('gameInput', {'direction': 'left','player': 0})
    elif pin == 1:
        socketio.emit('gameInput', {'direction': 'right','player': 0})
    elif pin == 26:
        socketio.emit('gameInput', {'direction': 'down','player': 0})
    elif pin == 19:
        socketio.emit('gameInput', {'direction': 'down','player': 1})
    elif pin == 13:
        socketio.emit('gameInput', {'direction': 'up','player': 1})
    elif pin == 25:
        socketio.emit('gameInput', {'direction': 'right','player': 1})
    elif pin == 24:
        socketio.emit('gameInput', {'direction': 'left','player': 1})



# @socketio.on("connect")
# def connecting():
#     socketio.emit("connect")
#     print("Connection with client established")

# @app.route('/')
# def test():
#     return jsonify('api')


for pin in Input_pins:
    GPIO.add_event_detect(pin, GPIO.FALLING, callback=input_trigger, bouncetime=500)

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", port="5000")
