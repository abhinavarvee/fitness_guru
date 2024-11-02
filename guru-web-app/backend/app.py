from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
import os
from dotenv import load_dotenv

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')  # Change this to a strong secret key
jwt = JWTManager(app)

load_dotenv()
google_api_key = os.getenv("GOOGLE_API_KEY")

model = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key="AIzaSyDHQwHuQ6c6C26kJvisefXwh94w9ag5OYg",
    temperature=0.5,
)

prompt = ChatPromptTemplate.from_messages([
    ('system', 'You are a workout trainer. Suggest a workout routine after asking the user their preference like arms, legs, back, etc., and also ask about whether they want to train with weights or not..'),
    MessagesPlaceholder(variable_name="chat_history"),
    ('human', '{input}')
])

memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

chain = LLMChain(
    llm=model,
    prompt=prompt,
    memory=memory
)

users = {'user@mail.com': 'password', 'sabarish@mail.com': '1234'}

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

@app.route('/api/chat', methods=['POST'])
@jwt_required()
def chat():
    user_input = request.json.get('input')
    response = chain.invoke({"input": user_input})
    return jsonify({"response": response['text']}), 200

if __name__ == '__main__':
    app.run(debug=True)