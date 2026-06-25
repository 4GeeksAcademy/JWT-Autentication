"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)




@api.route('/signup', methods=['POST'])
def handle_signup():

    try:
        email = request.json.get('email')
        password = request.json.get('password')

        if not email or not password:
            return jsonify({"message": "Email and password are required"}), 400

        
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({"message": "User already exists"}), 400

        # Create a new user
        new_user = User(email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        db.session.refresh(new_user) 


        return jsonify({"message": "User created successfully", "user": new_user.serialize()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "An error occurred", "error": str(e)}), 500

    

