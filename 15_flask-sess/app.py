# Team E and F (Karl Hernandez, Eric Lo, Amelia Chin, Ari Schechter)
# SoftDev
# K15 — Sessions Greetings / write a Flask app that uses session capabilities to allow a user to login and logout
# 2020-12-12

from flask import Flask, render_template, request, session
import os
app = Flask(__name__)
app.secret_key = os.urandom(32)  # random 32 bit key
# Our hardcoded username and password
username = "EandF"
password = "softdev"

@app.route("/")
def disp_loginpage():
    # If you are login then you are taken to welcome page
    if 'username' in session:
        # print(session['username'])
        return render_template("welcome.html", user=session['username'])
    return render_template("login.html")


@app.route("/auth", methods=['POST'])
def authenticate():
    temp_user = request.form['username']
    temp_pssd = request.form['password']
    # print(temp_user)
    # print(temp_pssd)
    if temp_user == username and temp_pssd == password:
        session['username'] = temp_user
        session['password'] = temp_user
        return render_template("welcome.html", user=temp_user)
    # Error handling and just using one error page
    if temp_user == '' and temp_pssd == '':
        error = "No input provided"
    elif temp_user == '':
        error = "No username provided"
    elif temp_pssd == '':
        error = "No password provided"
    elif temp_user != username and temp_pssd != password:
        error = "Incorrect username and password"
    elif temp_user != username:
        error = "Incorrect username"
    elif temp_pssd != password:
        error = "Incorrect password"
    return render_template("error.html", error=error)


# Removes session input and redirects  to main page
@app.route("/logout")
def log_out():
    session.pop('username')
    session.pop('password')
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
