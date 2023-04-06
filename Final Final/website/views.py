from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/evaluation')
def evaluation():
    return render_template("evaluation.html")


@views.route('/support')
def support():
    return render_template("support.html")