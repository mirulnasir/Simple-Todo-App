import time
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__,static_folder='../build',static_url_path='/')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://mqt@localhost:5432/demotodoapp'

db = SQLAlchemy(app)


class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String, nullable=False)

    def __repr__(self):
        print(f'<Todo id={self.id} task={self.task}>')


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/welcome')
def get_welcome_message():
    return {'message': 'Hello Pepega'}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')