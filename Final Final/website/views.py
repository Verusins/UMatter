from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/evaluation')
def evaluation():
    return "Evaluation"

@views.route('/professionals')
def professionals():
    return "Professionals"

@views.route('/support')
def support():
    return "Support"