from db import db


class ContactModel(db.Document):
    name = db.StringField(required=True)
    email = db.StringField(required=True)
    message = db.StringField(required=True)

    def json(self):
        return {
            "name": self.name,
            "email": self.email,
            "message": self.message,
        }
