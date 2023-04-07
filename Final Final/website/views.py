from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html", user=current_user)

@views.route('/evaluation')
def evaluation():
    return render_template("evaluation.html", user=current_user)


@views.route('/support')
def support():
    return render_template("support.html", user=current_user)

@views.route('/test')
def test():
    return render_template("test.html", user=current_user)