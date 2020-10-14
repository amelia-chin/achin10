# Team Tissue (Maddy Andersen, Liam Kronman, Amelia Chin)
# SoftDev
# K11 - Some Things Never Change (experimenting with using flask to serve static files and making our own)
# 2020-10-13

# DEMO
# basics of /static folder

from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()