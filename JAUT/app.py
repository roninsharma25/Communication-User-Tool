from flask import *
import main
import datasetParser
import resumeParser

app = Flask(__name__)

@app.route('/score') #/score?keyword=val&score=0
def getScore():
    keyword = " ".join(request.args.get('keyword').split("_"))
    #scoreMetric = int(request.args.get('score'))
    scoreMetric = 0
    score = main.calculateScore(keyword, scoreMetric)

    return f'Your score is: {score}'

@app.route('/skills') #/skills?keyword=val
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

if __name__ == '__main__':
    app.run(host = 'localhost', port = '8080')
