import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

const Chatbot: React.FC = () => {
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const chatHistoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = 'Fitness Guru Chatbot';
        setChatHistory(['Bot: Hello! How can I help you today?']);
    }, []);

    useEffect(() => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [chatHistory]);

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
                setChatHistory(prevHistory => [...prevHistory, `Bot: ${response.data.response}`]);
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
            <div className="chatbox">
                <div className="chat-history" ref={chatHistoryRef}>
                    {chatHistory.map((message, index) => (
                        <div key={index} className={message.startsWith('You:') ? 'user-message' : 'bot-message'}>
                            <ReactMarkdown>{message}</ReactMarkdown>
                        </div>
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