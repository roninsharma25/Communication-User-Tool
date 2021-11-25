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
    keyword = " ".join(request.args.get('keyword').split("_"))
    skills = datasetParser.parseDataset(keyword)
    print(skills)
    return str(skills)

if __name__ == '__main__':
    app.run(host = 'localhost', port = '8080')
