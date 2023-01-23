from flask import Flask
from flask_restful import Api
from resource.contact import Contact

app = Flask(__name__)
api = Api(app)

# config

app.config['MONGODB_SETTINGS'] = {
    "db": "personal_website",
}

api.add_resource(Contact, "/contact")

if __name__ == "__main__":
    app.run(debug=True)
