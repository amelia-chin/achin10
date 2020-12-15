#!/usr/bin/env python
# Team E and F (Karl Hernandez, Eric Lo, Amelia Chin, Ari Schechter)
# SoftDev
# K16 — No Trouble / write a simple Python script to import CSV data into a relational database
# 2020-12-14

import csv
import sqlite3  # enable control of an sqlite database

# ==========================================================
# The following two lines were to make sure the old data
# import os
# os.remove("./discobandit.db")
# ==========================================================
DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE)  # open if file exists, otherwise create
c = db.cursor()  # facilitate db ops -- you will use cursor to trigger db events

# Read in database with csv
# ==========================================================
courses = {
    "code": [],
    "mark": [],
    "id": []
}

with open("./courses.csv", "r") as csv_file:
    reader = csv.DictReader(csv_file)
    for row in reader:
        courses["code"].append(row["code"])
        courses["mark"].append(row["mark"])
        courses["id"].append(row["id"])

students = {
    "name": [],
    "age": [],
    "id": []
}

# This may work so we don't need to use DictReader twice
# files = ["students.csv", "courses.csv"]
# for file in files:
#     with open(file, "r") as csv_file:
#         print(file)


with open("./students.csv", "r") as csv_file:
    reader = csv.DictReader(csv_file)
    for row in reader:
        students["name"].append(row["name"])
        students["age"].append(row["age"])
        students["id"].append(row["id"])

# ==========================================================
# We decided to create two since we weren't sure
# Create the first Table
# ==========================================================
command = 'CREATE TABLE courses(code TEXT, mark INT, id INT);'

# interate
for i in range(len(courses["id"])):
    code = courses["code"][i]
    mark = courses["mark"][i]
    _id = courses["id"][i]
    command += 'INSERT INTO courses VALUES ("{}", {}, {});'.format(code, mark,
                                                                   _id)

# ==========================================================
# Create the second Table
# ==========================================================
command += 'CREATE TABLE students(name TEXT, age INT, id INT PRIMARY KEY);'
# interate
for i in range(len(students["id"])):
    name = students["name"][i]
    age = students["age"][i]
    _id = students["id"][i]
    command += 'INSERT INTO students VALUES ("{}", {}, {});'.format(name, age,
                                                                    _id)

# print(command.replace(";", "\n"))
# we wanted to be lazy so we found executescript instead of execute
# allows us to write one command instead multiple
c.executescript(command)    # run SQL statement
# ==========================================================
# To test we actually added the data correctly
# for row in c.execute("SELECT * FROM courses"):
#   print(row)
# for row in c.execute("SELECT * FROM students"):
#   print(row)
# ==========================================================

db.commit()  # save changes
db.close()  # close database
