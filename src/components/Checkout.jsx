import React, { useState, useEffect } from 'react';

import './Checkout.css';  // Assuming you will have a corresponding CSS file named 'Checkout.css'

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'creditcard'
    });
    
    const [orders, setOrders] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
    }, []);

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Shipping Address</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                        <option value="creditcard">Credit Card</option>
                        <option value="debitcard">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>

                <button type="submit" className="submit-button">Place Order</button>
            </form>
            
            <section className="order-tracking-section">
                <h2>Order Tracking</h2>
                {orders.map((order, index) => {
                    const elapsedTime = (currentTime - new Date(order.orderTime)) / (1000 * 60 * 60); // Time passed in hours
                    const eta = 72; 
                    const progress = (elapsedTime / eta) * 100;

                    return (
                        <div key={index} className="order-track">
                            <p>Order for {order.name} placed at {new Date(order.orderTime).toLocaleTimeString()}</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
                            </div>
                            <p>ETA: {elapsedTime >= 72 ? 'Completed' : `${Math.floor(72 - elapsedTime)} hours left`}</p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default Checkout;
