# """
# Takes an input pdf resume and returns the communication skills highlighted in it.
# """

# import pandas as pd
# import numpy as np
# import sys
# import io

# from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
# from pdfminer.converter import TextConverter
# from pdfminer.layout import LAParams
# from pdfminer.pdfpage import PDFPage

# resume = "data/ExampleResume.pdf"

# def convert_pdf_to_txt(path):
#     rsrcmgr = PDFResourceManager()
#     retstr = io.StringIO()
#     codec = 'utf-8'
#     laparams = LAParams()
#     device = TextConverter(rsrcmgr, retstr, laparams=laparams)
#     fp = open(path, 'rb')
#     interpreter = PDFPageInterpreter(rsrcmgr, device)
#     password = ""
#     maxpages = 0
#     caching = True
#     pagenos = set()

#     for page in PDFPage.get_pages(fp, pagenos, maxpages=maxpages,
#                                   password=password,
#                                   caching=caching,
#                                   check_extractable=True):
#         interpreter.process_page(page)

#     fp.close()
#     device.close()
#     text = retstr.getvalue()
#     retstr.close()
#     return text

# def checkSkillGroups(word):

#     team = {'team', 'teamwork', 'teams', 'group', 'groups', 'groupwork', 'conflict management', 'managing conflict', 'feedback'}
#     listening = {'empathy', 'listening', 'listen', 'active listening', 'listening actively', 'empathetic listening', "point of view", 'understanding others'}
#     technical_creation = {'writing skill', 'writing ability', 'technical writing', 'technical document', 'presentation', 'drafting documents', 'creating presentations', 'memo writing', 'memo creation', 'creating reports', 'drafting emails', 'email drafting'}
#     personableness = {'relationships', 'engaging', 'small talk', 'rapport', 'impromptu speaking', 'body language', 'small talk', 'working in diverse group'}
#     oral_communication = {'oral communication', 'public speaking', 'speaking public', 'orally communicating', 'verbal communication', 'verbal skill', 'respect', 'confidence', 'friendliness', 'friendly'}
#     negotiation = {'negotiation', 'persuasion', 'infleunce'}
#     planning = {'planning', 'structuring', 'structure', 'organizing', 'organize', 'arrange', 'arranging'}

#     if word in team:
#         return "team"
#     elif word in listening:
#         return "listening"
#     elif word in technical_creation:
#         return "technical creation"
#     elif word in personableness:
#         return "personableness"
#     elif word in oral_communication:
#         return "oral communication"
#     elif word in negotiation:
#         return "negotiation"
#     elif word in planning:
#         return "planning"

# def parseResume(resumeFile):
#     allSkills = list(map(lambda word: word.lower() if len(word) > 2 else None, convert_pdf_to_txt('data/' + resumeFile).split()))
#     resumeWords = set(allSkills)
#     skillsSet = {'team', 'teamwork', 'teams', 'group', 'groups', 'groupwork', 'conflict management', 'managing conflict', 'feedback',
#     'empathy', 'listening', 'listen', 'active listening', 'listening actively', 'empathetic listening', "point of view", 'understanding others',
#     'writing skill', 'writing ability', 'technical writing', 'technical document', 'presentation', 'drafting documents', 'creating presentations',
#     'memo writing', 'memo creation', 'creating reports', 'drafting emails', 'email drafting', 'relationships', 'engaging', 'small talk', 'rapport',
#     'impromptu speaking', 'body language', 'small talk', 'working in diverse group', 'oral communication', 'public speaking', 'speaking public',
#     'orally communicating', 'verbal communication', 'verbal skill', 'respect', 'confidence', 'friendliness', 'friendly', 'negotiation', 'persuasion',
#     'infleunce', 'planning', 'structuring', 'structure', 'organizing', 'organize', 'arrange', 'arranging'}
#     dict_ = {}
#     resumeWords = resumeWords.intersection(skillsSet)

#     for val in resumeWords:
#         count = allSkills.count(val)
#         skillGroup = checkSkillGroups(val)
#         if skillGroup in dict_.keys():
#             dict_[skillGroup] += count
#         else:
#             dict_[skillGroup] = count

#     sortedDict = sorted(dict_.items(), key = lambda x: x[1], reverse = True)
#     print("# of Times Each Skill Is Mentioned in Resume:", sortedDict)

#     return sortedDict

# if __name__ == "__main__":
#     parseResume()


"""
Takes an input pdf resume and returns the communication skills highlighted in it.
"""

import pandas as pd
import numpy as np
import sys
import io

from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage

resume = "data/ExampleResume.pdf"


def convert_pdf_to_txt(path):
    rsrcmgr = PDFResourceManager()
    retstr = io.StringIO()
    codec = 'utf-8'
    laparams = LAParams()
    device = TextConverter(rsrcmgr, retstr, laparams=laparams)
    fp = open(path, 'rb')
    interpreter = PDFPageInterpreter(rsrcmgr, device)
    password = ""
    maxpages = 0
    caching = True
    pagenos = set()

    for page in PDFPage.get_pages(fp, pagenos, maxpages=maxpages,
                                  password=password,
                                  caching=caching,
                                  check_extractable=True):
        interpreter.process_page(page)

    fp.close()
    device.close()
    text = retstr.getvalue()
    retstr.close()
    return text


def checkSkillGroups(word):

    team = {'team', 'teamwork', 'teams', 'group', 'groups', 'groupwork',
            'conflict management', 'managing conflict', 'feedback'}
    listening = {'empathy', 'listening', 'listen', 'active listening',
                 'listening actively', 'empathetic listening', "point of view", 'understanding others'}
    technical_creation = {'writing skill', 'writing ability', 'technical writing', 'technical document', 'presentation', 'drafting documents',
                          'creating presentations', 'memo writing', 'memo creation', 'creating reports', 'drafting emails', 'email drafting'}
    personableness = {'relationships', 'engaging', 'small talk', 'rapport',
                      'impromptu speaking', 'body language', 'small talk', 'working in diverse group'}
    oral_communication = {'oral communication', 'public speaking', 'speaking public', 'orally communicating',
                          'verbal communication', 'verbal skill', 'respect', 'confidence', 'friendliness', 'friendly'}
    negotiation = {'negotiation', 'persuasion', 'infleunce'}
    planning = {'planning', 'structuring', 'structure',
                'organizing', 'organize', 'arrange', 'arranging'}

    if word in team:
        return "team"
    elif word in listening:
        return "listening"
    elif word in technical_creation:
        return "technical creation"
    elif word in personableness:
        return "personableness"
    elif word in oral_communication:
        return "oral communication"
    elif word in negotiation:
        return "negotiation"
    elif word in planning:
        return "planning"


def parseResume(resumeFileAsString):
    allSkills = list(map(lambda word: word.lower() if len(
        word) > 2 else None, resumeFileAsString.split()))
    resumeWords = set(allSkills)
    skillsSet = {'team', 'teamwork', 'teams', 'group', 'groups', 'groupwork', 'conflict management', 'managing conflict', 'feedback',
                 'empathy', 'listening', 'listen', 'active listening', 'listening actively', 'empathetic listening', "point of view", 'understanding others',
                 'writing skill', 'writing ability', 'technical writing', 'technical document', 'presentation', 'drafting documents', 'creating presentations',
                 'memo writing', 'memo creation', 'creating reports', 'drafting emails', 'email drafting', 'relationships', 'engaging', 'small talk', 'rapport',
                 'impromptu speaking', 'body language', 'small talk', 'working in diverse group', 'oral communication', 'public speaking', 'speaking public',
                 'orally communicating', 'verbal communication', 'verbal skill', 'respect', 'confidence', 'friendliness', 'friendly', 'negotiation', 'persuasion',
                 'infleunce', 'planning', 'structuring', 'structure', 'organizing', 'organize', 'arrange', 'arranging'}
    dict_ = {}
    resumeWords = resumeWords.intersection(skillsSet)

    for val in resumeWords:
        count = allSkills.count(val)
        skillGroup = checkSkillGroups(val)
        if skillGroup in dict_.keys():
            dict_[skillGroup] += count
        else:
            dict_[skillGroup] = count

    sortedDict = sorted(dict_.items(), key=lambda x: x[1], reverse=True)
    print("# of Times Each Skill Is Mentioned in Resume:", sortedDict)

    return sortedDict


if __name__ == "__main__":
    print("Input your resume below")
    resumeFileAsString = str(input())
    parseResume(resumeFileAsString)
