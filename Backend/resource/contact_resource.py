from flask_restful import Resource, reqparse
from model.contact_model import ContactModel


class ContactResource(Resource):
    # TODO: authentication
    def get(self):
        try:
            contacts = ContactModel.objects()
            print(contacts)
            return {"contacts": contacts}, 200
        except Exception as e:
            print(e)
            return {"error": "Some problem"}, 500

    def post(self):
        rqp = reqparse.RequestParser()

        rqp.add_argument("name", required=True, help="You need a name")
        rqp.add_argument("email", required=True, help="You need an email")
        rqp.add_argument("message", required=True, help="Message is required")

        data = rqp.parse_args()

        contact_message = ContactModel(**data)
        try:
            contact_message.save()
            return {"message": "your message recived!!"}, 201
        except:
            return {"error": "sorry we have some problem"}, 500
