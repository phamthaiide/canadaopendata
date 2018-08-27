#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Aug 25 17:32:50 2018

@author: theopham
"""

from flask import Flask, render_template, Blueprint
app = Flask(__name__,static_folder='./static',template_folder='./templates')

bp = Blueprint(name='flaskapp')
app.register_blueprint(bp)

@app.route("/canopen")

def hello():
    return "Hello, world!"

@app.route("/flaskapp")

def start():
    return render_template("index.html")

if __name__=="__main__":
    app.run()