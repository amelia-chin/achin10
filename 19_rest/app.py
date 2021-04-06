"""
Team Eggs and Bagels (Amelia Chin, Ari Schechter)
SoftDev
K19 -- A RESTful Journey Skyward // exploration into REST APIs
2021-04-05
"""

from flask import Flask, render_template
import urllib as url
import json
app = Flask(__name__)

API_KEY = open("key_nasa.txt", "r").read()

@app.route("/")
def index():
    # this is the HTTP request for the data
    data = url.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=" + API_KEY)

    # returns the contents of the webpage 
    readable = data.read()

    # returns the JSON data as a dic
    d = json.loads(readable)

    # accesses the data in the json with key "url"
    img = d["url"]

    explanation = d["explanation"]

    return(render_template("main.html", img_url = img, exp = explanation))

if __name__ == "__main__":
    app.debug = True
    app.run()