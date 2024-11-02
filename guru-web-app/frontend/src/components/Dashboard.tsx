import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Dashboard.css';
import './Chatbot.css';

const Dashboard: React.FC = () => {

    useEffect(() => {
        document.title = 'Fitness-Guru';
    }, []);


    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{paddingTop: '150px'}} >Welcome to Fitness Guru</h1>
            <p>Your ultimate destination for all things fitness and diet.</p>

            <section>
                <h2>Chat with our ChatBot</h2>
                <div className="chatbot-link-container">
                    <p>Experience personalized fitness guidance with our state-of-the-art ChatBot. Click below to start your journey towards a healthier you!</p>
                    <Link to="/chatbot" className="chatbot-link">Go to Chatbot</Link>
                </div>
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