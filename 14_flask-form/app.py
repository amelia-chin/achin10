# Team E and F (Karl Hernandez, Eric Lo, Amelia Chin, Ari Schechter)
# SoftDev
# K14 — Form and Function / write a Flask app to echo a site visitor their input via an HTML form
# 2020-12-08

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
   return render_template("login.html")


@app.route("/auth", methods=['GET', 'POST'])
def authenticate():
    if request.method == "GET":
        username = request.args["username"]
    elif request.method == "POST":
        username = request.form["username"]
    return render_template("response.html", user=username,
                           request=request.method)

if __name__ == "__main__":
    app.run(debug=True)
