from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required

auth_bp = Blueprint('auth', __name__, url_prefix='/fitness_guru/api')

# Mock user data (Replace with database in real projects)
users = {'user@example.com': 'password123',
         'sabarish@mail.com': '1234'}

@auth_bp.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if email not in users or users[email] != password:
        return jsonify({"msg": "Invalid credentials"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"token": access_token}), 200

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"msg": "Welcome! You have access to this protected route"}), 200