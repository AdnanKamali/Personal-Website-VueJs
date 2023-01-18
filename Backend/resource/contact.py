from flask_restful import Resource, reqparse


class Contact(Resource):
    # TODO: authentication
    def get(self):
        try:
            contacts = Contact.objects()
            return {"contacts": contacts}, 200
        except:
            return {"error": "Some problem"}, 500

    def post(self):
        rqp = reqparse.RequestParser()

        rqp.add_argument("name", required=True, help="You need a name")
        rqp.add_argument("email", required=True, help="You need an email")
        rqp.add_argument("subject")
        rqp.add_argument("message", required=True, help="Message is required")

        data = rqp.parse_args()

        contact_message = Contact(**data)
        try:
            contact_message.save()
            return {"message": "your message sended!!"}, 201
        except:
            return {"error": "sorry we have some problem"}, 500
