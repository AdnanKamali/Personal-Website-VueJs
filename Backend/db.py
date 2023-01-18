from flask_mongoengine import MongoEngine
from app import app

db = MongoEngine(app)