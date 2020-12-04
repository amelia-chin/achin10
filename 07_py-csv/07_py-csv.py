# Team JIA (Jeffrey Huang, Amelia Chin, Ishita Gupta)
# SoftDev
# K07 -- StI/O: Divine your Destiny!/Read occupations.csv and built dictionary based on that,
# then used weighted probability to randomly select a job.
# 2020-09-30

import random

# Create an empty dictionary
jobsPercentages = {}

# Opens and reads the occupations.csv file
occupations = open("occupations.csv")
# Goes through each line of the file one-by-one
for line in occupations:
    # Skips the first and last line
    if line.startswith("Job Class") or line.startswith("Total"): continue
    # Removes whitespace and splits along commas
    line = line.strip().split(",")
    # Joins everything except the percentage (in case job has commas within title)
    jobTitle = "".join(line[:-1])
    # Converts the percentage into a float
    percentage = float(line[-1])
    # Updates dictionary with new key_value pair
    jobsPercentages[jobTitle] = percentage

# Prints a random job based on the weighted probability retrieved from occupations.csv
# jobsPercentages.keys() gives all the job titles and jobsPercentages.values() gives the percentages
# jobsPercentages.keys() and jobsPercentages.values() return non-iterable objects, they need to be casted as lists
# random.choices returns a list, so we include the index to remove the brackets
print((random.choices(list(jobsPercentages.keys()), weights=list(jobsPercentages.values()), k=1))[0])
