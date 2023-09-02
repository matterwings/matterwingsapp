import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

import { FaBars, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import SideMenu from './SideMenu';


function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [contentType, setContentType] = useState(['Website']);  // Default content type is Website
    const [needsGraphicDesign, setNeedsGraphicDesign] = useState(false);  // Default for graphic design checkbox

    const services = [
        {
            id: 1,
            name: "Content Strategy",
            price: 100,
            description: "Content strategy focuses on the planning, creation, delivery, and governance of content. It ensures that you have usable and useful content, that is well structured, and easily found, and that it meets the needs of its users."
        },
        { id: 2, name: "Content Creation", price: 200 },
        { id: 3, name: "Content Delivery (Graphic Design)", price: 300, description: "Need design for the content you've created? Opt for our content delivery option." }
    ];


    const addToCart = (service) => {
        let updatedCart = [...cart];
        let existingService = updatedCart.find(item => item.id === service.id);
    
        if (existingService) {
            existingService.quantity++;
        } else {
            service.quantity = 1;
            if (service.name === "Content Creation") {
                service.selectedContentTypes = contentType;
            }
            updatedCart.push(service);
        }
    
        setCart(updatedCart);
    };
    

    const removeFromCart = (service) => {
        let updatedCart = [...cart];
        let existingService = updatedCart.find(item => item.id === service.id);

        if (existingService && existingService.quantity > 1) {
            existingService.quantity--;
        } else {
            updatedCart = updatedCart.filter(item => item.id !== service.id);
        }

        setCart(updatedCart);
    };
    

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Matterwings</h1>
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            <SideMenu isMenuOpen={isMenuOpen} />

            <main>
                <section className="service-list">
                    {services.map(service => (
                        <div key={service.id} className="service-item">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <p>Price: ₹{service.price}</p>
                            {service.name === 'Content Creation' && (
                                
                                <div>
                                    <label>Type of Content: </label>
                                    <select 
    value={contentType} 
    onChange={(e) => {
        // Convert the HTMLCollection to an array and filter out options that aren't selected
        const selectedOptions = Array.from(e.target.selectedOptions).map(o => o.value);
        setContentType(selectedOptions);
    }} 
    multiple
>                                        <option value="Website">Website Content</option>
                                        <option value="Blog">Blog Articles</option>
                                        <option value="Social Media">Social Media Posts</option>
                                        <option value="Ebook">E-books</option>
                                        <option value="Whitepaper">Whitepapers</option>
                                        <option value="CaseStudy">Case Studies</option>
                                        <option value="Infographic">Infographics</option>
                                        <option value="VideoScript">Video Scripts</option>
                                        <option value="PodcastScript">Podcast Scripts</option>
                                        <option value="PressRelease">Press Releases</option>
                                        <option value="Newsletter">Newsletters</option>
                                        <option value="EmailCampaign">Email Campaigns</option>
                                        <option value="ProductDescription">Product Descriptions</option>
                                        <option value="Tutorial">Tutorials/Guides</option>
                                        <option value="Interview">Interviews</option>
                                        <option value="Review">Reviews</option>
                                        <option value="AdCopy">Advertisement Copy</option>
                                    </select>

                                </div>
                            )}
                            {service.name === 'Content Delivery (Graphic Design)' && (
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={needsGraphicDesign}
                                            onChange={() => setNeedsGraphicDesign(!needsGraphicDesign)}
                                        />
                                        Needed for created content
                                    </label>
                                </div>
                            )}
                            <button onClick={() => addToCart(service)}><FaPlus /> Add to Cart</button>
                        </div>
                    ))}
                </section>

                <section className="cart">
    <h2>Your Cart</h2>
    {cart.map(service => (
        <div key={service.id} className="cart-item">
            <span>{service.name}</span>
            {service.name === 'Content Creation' && (
                <span> (Type: {service.selectedContentTypes.join(', ')})</span>
            )}
            <span>Quantity: {service.quantity}</span>
            <span>Total: ₹{service.quantity * service.price}</span>
            {service.name === 'Content Delivery (Graphic Design)' && needsGraphicDesign && (
                <span>For Created Content: Yes</span>
            )}
            <button onClick={() => removeFromCart(service)}><FaMinus /> Remove from Cart</button>
        </div>
    ))}
    <p>Total Amount: ₹{cart.reduce((acc, service) => acc + (service.price * service.quantity), 0)}</p>
    <Link to="/Checkout">
        <button>Proceed to Checkout</button>
    </Link>
</section>

            </main>
        </div>
    );
}

export default Homepage;
