import pandas as pd
import numpy as np
import sys
import io

def convert_txt_to_text(path):
    content = open(path).read().split()
    # print(content)
    return content


def parseJobAd():
    allSkills = list(map(lambda word: word.lower() if len(word) > 2 else None, convert_txt_to_text("data/exampleJobAd.txt")))
    jobAdWords = set(allSkills)
    communicationSkills = {"written", "verbal", "aural", "team"}

    parsedCommunicationSkills = jobAdWords.intersection(communicationSkills)
    print("Types of Communication Skills Found In Job Ad:", parsedCommunicationSkills)

    dict_ = dict((val, allSkills.count(val)) for val in parsedCommunicationSkills)
    sortedDict = sorted(dict_.items(), key = lambda x: x[1], reverse = True)
    print("# of Times Each Skill Is Mentioned in Job Ad:", sortedDict)

    return sortedDict

if __name__ == "__main__":
    parseJobAd()
