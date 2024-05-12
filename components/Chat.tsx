"use client"
// components/Chat.tsx
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import styles from './Chat.module.css';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
    const [input, setInput] = useState<string>('');

    const handleMessageSend = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, isUser: true }]);
            // Call backend service to get response from AI model
            // For now, let's simulate a bot response
            setTimeout(() => {
                setMessages([...messages, { text: 'This is a bot response', isUser: false }]);
            }, 500);
            setInput('');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Type your message here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={styles.sendButton} onClick={handleMessageSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
