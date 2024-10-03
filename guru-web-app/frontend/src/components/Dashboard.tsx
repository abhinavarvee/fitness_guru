import React, { useEffect } from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    useEffect(() => {
        document.title = 'Fitness-Guru';
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to Fitness Guru</h1>
            <p>Your ultimate destination for all things fitness and diet.</p>
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