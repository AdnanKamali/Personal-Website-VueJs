from flask import Flask
from flask_restful import Api
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)

CORS(app)
# config

app.config['MONGODB_SETTINGS'] = {
    "db": "personal_website",
}


if __name__ == "__main__":
    from resource.contact_resource import ContactResource
    api.add_resource(ContactResource, "/contact")
    app.run(debug=True)
