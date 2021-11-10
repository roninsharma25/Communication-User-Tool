"""

Takes an input job field and returns the top communication skills required for that job field.

"""

import pandas as pd
import numpy as np
import sys
from resumeParser import parseResume

jobAdDataset = "merged_data_final.csv"
commSkillsMapping = "coded_list_items.csv"

def detectSkills(phrase, skillFields):
    skills = [i for i in skillFields if isinstance(i, str)]

    # ADD MORE CASES IF NEEDED
    if 'write' in phrase or 'written' in phrase:
        skills += ['written']
    if 'verbal' in phrase:
        skills += ['verbal']
    if 'aural' in phrase:
        skills += ['aural']
    if 'team' in phrase or 'teamwork' in phrase:
        skills += ['team']

    return list(set(skills))

def parseDataset(keyword):
    #keyword = sys.argv[1] if len(sys.argv) > 1 else "Computer Hardware Engineer"
    df = pd.read_csv("data/" + jobAdDataset)
    df = df[df["Keyword"] == keyword]
    df2 = pd.read_csv("data/" + commSkillsMapping)
    allSkills = []

    for des in df["Description"].to_numpy():
        des = des.lower()
        for row in df2.to_numpy():
            phrase = row[2].lower()
            if phrase in des:
                skillFields = np.array(row[-4:])
                skills = detectSkills(phrase, skillFields)
                allSkills += skills

    dict_ = dict((val, allSkills.count(val)) for val in set(allSkills) if val != "complicated!")
    sortedDict = sorted(dict_.items(), key = lambda x: x[1], reverse = True)
    #print("Important Skills For", keyword+"s", "Are:", sortedDict)

    return sortedDict

if __name__ == "__main__":
    parseDataset()
    parseResume()
