from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os
os.environ['LANG'] = 'en_US.utf8'
os.environ['LC_ALL'] = 'en_US.utf8'


app = Flask(__name__)

# Database configuration
DB_HOST = '162.241.230.55'
DB_NAME = 'evilgeo2_vobi'
DB_USER = 'vobistats'
DB_PASS = 'M!oIHvxR#FtO6s1r'
DB_PORT = '3306'

# SQLAlchemy configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Sample model class


class Example(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

# Basic route


@app.route('/')
def home():
    return 'Database connected!'


@app.route('/test')
def test():
    return 'Database connection test successful!'


@app.route('/dbtest')
def dbtest():
    try:
        db.session.execute('SELECT 1')
        return 'Database connection successful!'
    except Exception as e:
        return f'Database connection failed: {str(e)}'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
