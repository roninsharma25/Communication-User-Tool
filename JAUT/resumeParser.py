"""
Takes an input pdf resume and returns the communication skills highlighted in it.
"""

import pandas as pd
import numpy as np
import sys
import io

sys.path.append("/usr/home/username/pdfminer")

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

def parseResume():
    allSkills = list(map(lambda word: word.lower() if len(word) > 2 else None, convert_pdf_to_txt(resume).split()))
    resumeWords = set(allSkills)
    communicationSkills = {"written", "verbal", "aural", "team"}

    parsedCommunicationSkills = resumeWords.intersection(communicationSkills)
    #print("Types of Communication Skills Found In Resume:", parsedCommunicationSkills)

    dict_ = dict((val, allSkills.count(val)) for val in parsedCommunicationSkills)
    sortedDict = sorted(dict_.items(), key = lambda x: x[1], reverse = True)
    #print("# of Times Each Skill Is Mentioned in Resume:", sortedDict)

    return sortedDict

if __name__ == "__main__":
    parseResume()
