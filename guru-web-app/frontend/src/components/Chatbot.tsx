import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot: React.FC = () => {
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);

    useEffect(() => {
        document.title = 'Fitness Guru Chatbot';
    }, []);

    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (chatInput.trim()) {
            setChatHistory([...chatHistory, `You: ${chatInput}`]);
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found');
                    return;
                }
                const response = await axios.post('/api/chat', { input: chatInput }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setChatHistory([...chatHistory, `You: ${chatInput}`, `Bot: ${response.data.response}`]);
            } catch (error) {
                console.error('Error sending chat message:', error);
                if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
                    console.error('Unauthorized: Invalid or expired token');
                }
            }
            setChatInput('');
        }
    };

    return (
        <div className="chatbot-container">
            <h1>Chat with our ChatBot</h1>
            <div className="chatbox">
                <div className="chat-history">
                    {chatHistory.map((message, index) => (
                        <p key={index}>{message}</p>
                    ))}
                </div>
                <form onSubmit={handleChatSubmit} className="chat-form">
                    <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Type your message..."
                        className="chat-input"
                    />
                    <button type="submit" className="chat-submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;