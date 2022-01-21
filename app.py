from flask import *
import main
import datasetParser
import jobAdParser

app = Flask(__name__)


@app.route('/score')  # /score?keyword=val&score=0
def getScore():
    keyword = " ".join(request.args.get('keyword').split("_"))
    #scoreMetric = int(request.args.get('score'))
    scoreMetric = 0
    score = main.calculateScore(keyword, scoreMetric)

    return f'Your score is: {score}'


@app.route('/skills')  # /skills?keyword=val
def getSkills():
    keywordInput = request.args.get('keyword').split("_")
    print(keywordInput)
    keyword = ""
    for word in keywordInput:
        keyword += word[0].upper() + word[1:] + " "

    # Remove extra space
    keyword = keyword[:-1]
    #keyword = " ".join(request.args.get('keyword').split("_"))

    print("KEYWORD: ", keyword)

    skills = datasetParser.parseDataset(keyword)
    print(skills)

    outputDict = {}
    for entry in skills:
        outputDict[entry[0]] = entry[1]
    print(outputDict)

    return {"output": outputDict}


@app.route('/resume_analysis')  # /resume_analysis?keyword=test&resume=file
def resumeAnalysis():
    print('IN RESUME ANALYSIS')
    keywordInput = request.args.get('keyword').split("_")
    print(keywordInput)
    keyword = ""
    for word in keywordInput:
        keyword += word[0].upper() + word[1:] + " "

    # Remove extra space
    keyword = keyword[:-1]

    resumeFile = request.args.get('resume')
    resumeFile = "".join(resumeFile.split("_"))
    print(resumeFile)

    output = main.calculateScore(keyword, 0, resumeFile)
    print(output)

    print("BACKEND")

    return {"output": output}


@app.route('/job_ad')  # /job_ad?content=txtfilecontent
def jobAdAnalysis():
    content = request.args.get('content')
    output = jobAdParser.parseJobAd(content)
    print(output)
    return {"output": output}


if __name__ == '__main__':
    #app.run(host='localhost', port='8080')
    app.run(host='0.0.0.0')
