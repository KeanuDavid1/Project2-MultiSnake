import threading
import time
from subprocess import check_output

import serial
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO
from RPi import GPIO


@socketio.on("connect")
def connecting():
    socketio.emit("connect")
    print("Connection with client established")


if __name__ == '__main__':
    socketio.run(main, host="0.0.0.0", port="5000")
