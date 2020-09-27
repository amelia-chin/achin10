"""
Amelia Chin (Team Name: Team AMA with Michelle Thaung and Arib Chowdhury)
SoftDev
K05 -- Teamwork, but Better This Time/Takes user input of the team name, prints randomly selected name from chosen team
2020-09-30
"""

import random

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

teamName = ""

while teamName not in ['orpheus', 'rex', 'endymion']:
    teamName = str(input("Choose a team: orpheus, rex, or endymion ")).lower()

print(random.choice(KREWES[teamName]))
