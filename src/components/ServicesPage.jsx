import React, { useState, useEffect } from 'react';
import './ServicesPage.css'; // Assuming you'll have a CSS file named ServicesPage.css

function ServicesPage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Your fetch logic here...
        setServices([ { id: 1, name: "Content Strategy", description: "Navigating the vast expanse of the digital realm requires a roadmap. At Matterwings, our content strategy acts as that guiding compass." },             
        { id: 1, name: "Content Creation", description: "Content is more than just words on a screen; it’s the heart and soul of your digital presence. At Matterwings, we believe in crafting narratives that captivate, inform, and inspire." },             
        { id: 1, name: "Content Delivery", description: "A masterpiece deserves an audience. At Matterwings, we don’t just create content; we ensure it reaches the right eyes and ears. " },             // ... add more services
            // ...your services data
        ]);
    }, []);

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <ul className="services-list">
                {services.map(service => (
                    <li key={service.id} className="service-item">
                        <h3 className="service-title">{service.name}</h3>
                        <p className="service-description">{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ServicesPage;
