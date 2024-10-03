from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-secret-key'  # Change this to a strong secret key
jwt = JWTManager(app)

# Mock user data (Replace with database in real projects)
users = {'user@example.com': 'password123',
         'sabarish@mail.com': '1234'}

@app.route('/api/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if email not in users or users[email] != password:
        return jsonify({"msg": "Invalid credentials"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"token": access_token}), 200

@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"msg": "Welcome! You have access to this protected route"}), 200

if __name__ == '__main__':
    app.run(debug=True)
