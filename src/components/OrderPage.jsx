import React, { useState, useEffect } from 'react';
import './OrderPage.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import SideMenu from './SideMenu';  
import ChatBot from './Chatbot';

function OrderPage() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'creditcard'
    });
    const [orders, setOrders] = useState([]);
    const [setCurrentTime] = useState(new Date());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrders(prevOrders => [...prevOrders, { ...formData, orderTime: new Date() }]);
        setFormData({
            name: '',
            email: '',
            address: '',
            paymentMethod: 'creditcard'
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
}, [setCurrentTime]);
    const handleChatClick = () => {
        setIsChatOpen(true);
    };

    return (
        
            <div className="order-container">
                <header className="app-header">
                    <h1>Order Page</h1>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </header>
    
                <SideMenu isMenuOpen={isMenuOpen} />

            <form onSubmit={handleSubmit} className="order-form">
                {/* ... Your existing form fields ... */}
            </form>

            <section className="order-tracking-section">
                {/* ... Your existing order tracking JSX ... */}
            </section>
 {/* New section for displaying list of orders */}
 <section className="orders-list-section">
                <h2>Orders Placed:</h2>
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            <div>Name: {order.name}</div>
                            <div>Email: {order.email}</div>
                            <div>Address: {order.address}</div>
                            <div>Payment Method: {order.paymentMethod}</div>
                            <div>Order Time: {new Date(order.orderTime).toLocaleString()}</div>
                        </li>
                    ))}
                </ul>
            </section>

            <button onClick={handleChatClick} className="chat-button">Chat with Matterwings</button>
            
            {isChatOpen && (
                <div className="chatbot-modal">
                    <div className="chatbot-header">
                        <h3>Matterwings Chat</h3>
                        <button onClick={() => setIsChatOpen(false)}>Close</button>
                    </div>
                    <ChatBot />
                </div>
            )}
        </div>
    );
}

export default OrderPage;
