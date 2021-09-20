from flask import Flask

app = Flask(__name__)

@app.route('/test')
def get_test():
    return {'result', 'test'}