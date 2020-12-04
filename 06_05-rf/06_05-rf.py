# Team JIA (Jeffrey Huang, Amelia Chin, Ishita Gupta)
# SoftDev
# K06 -- Learnination Through Amalgamation/Combined team members' code from K05
# Made a rand_team variable that is a random team from the dictionary
# Lastly prints out a random name from the team
# 2020-09-30

import random

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

# Chooses a random team/key from the dictionary [orpheus, rex, endymion]
rand_team = random.choice(list(KREWES))

# Prints a random name from the rand_team
print(random.choice(KREWES[rand_team]))
