from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://mqt@localhost:5432/demotodoapp'
db = SQLAlchemy(app)


class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f'<Todo id={self.id} task={self.task}>'


db.create_all()


@app.route('/')
def index():
    return render_template('index.html', data=db.session.query(Todo).all())
