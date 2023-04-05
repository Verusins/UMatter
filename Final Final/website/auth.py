from flask import Blueprint, render_template, request, flash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    data = request.form
    print(data)
    return render_template("login.html")

@auth.route('/logout')
def logout():
    return render_template("logout.html")

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    print("debug1")
    if request.method == 'POST':
        print("debug2")
        username = request.form.get('username')
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        # user = User.query.filter_by(email=email).first()
        # if user:
        #     flash('Email already exists.', category='error')
        # el
        if len(email) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        elif len(username) < 2:
            flash('Username must be greater than 1 character.', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(password1) < 6:
            flash('Password must be at least 6 characters.', category='error')
        else:
            # new_user = User(email=email, first_name=username, password=generate_password_hash(
            #     password1, method='sha256'))
            # db.session.add(new_user)
            # db.session.commit()
            # login_user(new_user, remember=True)
            flash('Account created!', category='success')
            # return redirect(url_for('views.home'))

    return render_template("sign_up.html")