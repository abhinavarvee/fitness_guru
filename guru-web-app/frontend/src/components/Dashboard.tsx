import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState<string[]>([]);

    useEffect(() => {
        document.title = 'Fitness-Guru';
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
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to Fitness Guru</h1>
            <p>Your ultimate destination for all things fitness and diet.</p>

            <section>
                <h2>Chat with our ChatBot</h2>
                <Link to="/chatbot">Go to Chatbot</Link>
            </section>

            <section>
                <h2>About Us</h2>
                <p>
                    At Fitness Guru, we are dedicated to helping you achieve your fitness goals. Whether you're looking to lose weight, build muscle, or just stay healthy, we have the resources and support you need. We also provide personalized diet plans to complement your fitness regime and a ChatBot feature to assist you 24/7.
                </p>
            </section>
            <section>
                <h2>Our Features</h2>
                <ul>
                    <li>ChatBot</li>
                    <li>Fitness</li>
                    <li>Diet</li>
                </ul>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>Email: abhinav@gmail.com</p>
                <p>Phone: (+91) 98765 43210</p>
            </section>
        </div>
    );
};

export default Dashboard;