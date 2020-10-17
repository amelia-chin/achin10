#Team Antemeridian (Amelia Chin, May Hathaway, Madelyn Mao)
#SoftDev
#K13 -- Template for Success
#Summary: Wrote a flask app to generate a table showing the occupations data and a randomly selected occupation. We read egoless programming.
#2020-10-15

#link to run : http://127.0.0.1:5000/occupyflaskst
import csv
from random import choices
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")

def random_occupations():
    with open("./data/occupations.csv", "r", newline='') as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        header = next(csv_file)  # we wanted to get rid of the header

        global occupations
        occupations = {}  # initialize the dictionary
        
        for row in reader:
            occupations[row[0]] = [float(row[1]), row[2]]  # populated the dictionary
        del occupations['Total']  # deleted the last row
        # next two lines are so we can use random.choices()
        key = list(occupations.keys())

        bigList = list(occupations.values())

        values = []
        for i in bigList:
            values.append(i[0])
        

        ##values = list(occupations.values())
        global return_string
        return_string = "Random career: " + choices(key, weights=values, k=1)[0]



@app.route("/occupyflaskst") 
def test_tmplt():
    random_occupations()
    return render_template( 'tablified.html', title="random occupation generator", collection = return_string, occupationsList = occupations) 

if __name__ == "__main__":
    app.debug = True
    app.run()
