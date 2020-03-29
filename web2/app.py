# app.py
from flask import Flask
import mysql.connector
import config

app = Flask(__name__)
app.config['SECRET_KEY'] = config.app['secret_key']
from controller.applicant.applicant import *

if __name__ == '__main__':
    app.run()
