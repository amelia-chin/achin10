# Team Tissue (Maddy Andersen, Liam Kronman, Amelia Chin)
# SoftDev
# K10 - Putting Little Pieces Together (experimenting with different versions of app.py and then write a flask app to
# send the output of your occupation-chooser to a webpage)
# 2020-10-12

from flask import Flask
app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    return "No hablo queso!"  # Q3: Will this appear anywhere? How u know?

app.run()  # Q4: Where have you seen similar construcs in other languages?

'''
Answers to QS from K09:

Q0: we've seen this syntax in Java when initializing an object. It's taking app.py as a parameter 
and creating a Flask object called app. 

Q1: All directories end in '/'

Q2: We think it will print out to the terminal.

Q3: It will print the name of the file, "app"
update: "__main__" is printed after we open the http link in our browser

Q3.5: No, because when things are returned, they aren't printed.
update: once we opened the http link given by the terminal in our web browser, it displayed "No hablo
queso!" on a white screen.

Q4: It's like calling an object.function() in Java.
'''
