from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
import os
from dotenv import load_dotenv

#key
# load_dotenv()
# key = os.getenv("GOOGLE_API_KEY")

#model
model = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key= "AIzaSyDHQwHuQ6c6C26kJvisefXwh94w9ag5OYg",
    temperature=0.5,
)

#prompt
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

print("Chatbot: Hello! How can I help you today? Type 'exit' or 'quit' to end the conversation.")
while True:
    user_input = input("You: ")
    if user_input.lower() in ['exit', 'quit']:
        print("Chatbot: Goodbye!")
        break
    response = chain.invoke({"input": user_input})
    print("Chatbot:", response['text'])
