from flask import Flask
from flask_jwt_extended import JWTManager
from auth import auth_bp  # Import the blueprint

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'f5b12e71b4a23c6ecd000211fd40e447'  # Change this to a strong secret key
jwt = JWTManager(app)

# Register the blueprint with the app
app.register_blueprint(auth_bp)

if __name__ == '__main__':
    app.run(debug=True)