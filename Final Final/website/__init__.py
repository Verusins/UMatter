from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Brian Harrington'

def create_app():
    from .views import views
    from .auth import auth

    app.register_blueprint(views, urlprefix='/')
    app.register_blueprint(auth, urlprefix='/')

    return app