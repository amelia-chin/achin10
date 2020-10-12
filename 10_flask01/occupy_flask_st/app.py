# Team Tissue (Maddy Andersen, Liam Kronman, Amelia Chin)
# SoftDev
# K10 - Putting Little Pieces Together (experimenting with different versions of app.py and then write a flask app to
# send the output of your occupation-chooser to a webpage)
# 2020-10-12

import random, csv
from flask import Flask
app = Flask(__name__) # create instance of class Flask

# Code from Team WinLose (Liam and William)
def jobGetter(dict):
    x = random.uniform(0, 99.8) # picks a random float between 0 and 99.8
    for key, value in dict.items():
        x = x - float(value) # keeps subtracting the occupation percentages from the random float value
        if x <= 0: # returns key when the random float value becomes negative
            return key
    return "Invalid"

@app.route("/") #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)

    # makes a dictionary (JobClass) based on the occupations.csv file
    JobClass = {}
    with open("occupations.csv") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            JobClass[row[0]] = row[1]
    # removes the first and last entries
    JobClass.pop("Job Class")
    JobClass.pop("Total")

    # added for K10
    # formatting for returned value (includes TNPG, roster, occupations list, and selected occupation)
    TNPG = "Team Tissue (Maddy Andersen, Liam Kronman, Amelia Chin)"
    jobString = "List of occupations: <br>"
    for i in JobClass.keys():
        jobString += i + "<br>"
    return TNPG + "<br><br>" + jobString + "<br> Selected Occupation: " + jobGetter(JobClass)

# from v4 app.py
if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()