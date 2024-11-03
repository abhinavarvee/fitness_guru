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
            <h1 style={{ paddingTop: '150px' }}>Welcome to Fitness Guru: Your Path to a Healthier, Happier Life!</h1>
            <p>
                In today’s fast-paced world, taking care of our health is more important than ever. A healthy lifestyle is not just about looking good—it’s about feeling your best, having the energy to do the things you love, and supporting your body and mind for long-term well-being. Regular exercise and a balanced diet are the foundation of physical and mental health, helping reduce stress, boost immunity, and improve overall quality of life. With Fitness Guru, we make it easy to reach your wellness goals by offering personalized guidance tailored to your unique needs.
            </p>

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
                <h2>Why Choose Fitness Guru?</h2>
                <h3>Your Personalized Health and Fitness Partner</h3>
                <p>
                    Fitness Guru uses the latest AI-driven technology to understand your goals, preferences, and lifestyle, providing recommendations designed just for you. Whether you’re looking to improve your diet, start a workout routine, or track your progress, we’re here to support you every step of the way.
                </p>
                <h3>Key Features</h3>
                <ul>
                    <li><strong>AI-Powered Diet Recommendations:</strong> Our intelligent chatbot learns your dietary needs and goals, providing meal suggestions that are both nutritious and delicious. Whether you're vegan, gluten-free, or looking for weight loss tips, our AI adapts to support your journey.</li>
                    <li><strong>Home Workout Guidance:</strong> No gym? No problem! Fitness Guru provides a variety of home-based workouts tailored to your fitness level and objectives. Choose from strength training, cardio, flexibility, and more, all designed to be effective and accessible.</li>
                    <li><strong>Real-Time Progress Tracking:</strong> Track your progress over time and stay motivated by visualizing your achievements. Our platform records your metrics and provides insights to help you stay on track toward your health goals.</li>
                    <li><strong>Engaging and Easy-to-Use Interface:</strong> Built with user experience in mind, our platform is intuitive and easy to navigate. Access your personalized recommendations, explore new exercises, and manage your health journey—all from one convenient space.</li>
                    <li><strong>Secure Data Management:</strong> We prioritize your privacy and use advanced data management tools to keep your information secure, allowing you to focus on your fitness journey with peace of mind.</li>
                </ul>
            </section>

            <section id="contact">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Have a question or want to connect? Reach out to us below!</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Type your message here"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;