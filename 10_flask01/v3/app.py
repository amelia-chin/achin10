# Team Tissue (Maddy Andersen, Liam Kronman, Amelia Chin)
# SoftDev
# K10 - Putting Little Pieces Together (experimenting with different versions of app.py and then write a flask app to
# send the output of your occupation-chooser to a webpage)
# 2020-10-12

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()

'''
Observations and Expected Outcomes:
- expected output as follows:
    - prints "about to print __name__..." in the terminal 
    - prints __name__, which will be "__main__" in the terminal on a new line
    - both will be printed once we open the local webpage
    - a local webpage with "No hablo queso!" written in the top left corner
    - debug mode in the terminal will be turned on
    
- tested output met all of our expectations
- terminal also told us that the "Debugger is active!" along with its Debugger PIN, which is 727-157-692
- every time we make an edit to the file, it tells us that it detected a change in our file and reloads
- every time it reloads, it gives us the same active message and PIN
'''