from db import db


class ContactModel(db.Document):
    name = db.SrtringFiled(required=True)
    email = db.SrtringFiled(required=True)
    subject = db.SrtringFiled()
    message = db.SrtringFiled(required=True)
