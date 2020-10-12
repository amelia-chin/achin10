# Team Tissue (Maddy Andersen, Liam Kronman, Amelia Chin)
# SoftDev
# K10 - Putting Little Pieces Together (experimenting with different versions of app.py and then write a flask app to
# send the output of your occupation-chooser to a webpage)
# 2020-10-12

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

'''
Observations and Expected Outcomes:
- expected output as follows:
    - prints "about to print __name__..." in the terminal 
    - prints __name__, which will be "__main__" in the terminal on a new line
    - both will be printed once we open the local webpage
    - a local webpage with "No hablo queso!" written in the top left corner
    - if the file is not imported, meaning __name__ is "__main__" which we think is true:
        - debug mode in the terminal will be turned on
        - it will also run
    - if the file is imported, meaning __name__ is not "__main__":
        - debug mode will not turn on and the app will not run
    - terminal will tell us that the "Debugger is active!" along with its Debugger PIN
    - every time we make an edit to the file, it will tell us that it detected a change in our file and will reload
    - every time it reloads, it will give us the same active message and PIN
    
- tested output met all of our expectations
- not sure what would happen if the file was imported, because we're not sure how to test that
'''