import React, { useState } from 'react';
import './ChatBot.css';

function ChatBot() {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = () => {
        if (message.trim() !== "") {
            setChatHistory(prevChat => [...prevChat, { sender: 'user', text: message.trim() }]);

            setTimeout(() => {
                setChatHistory(prevChat => [...prevChat, { sender: 'bot', text: "Hello! How can I assist you?" }]);
            }, 1000);

            setMessage("");
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className="chatbot-container">
            <div className="chat-history">
                {chatHistory.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..." 
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
