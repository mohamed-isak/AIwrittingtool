// components/ChatMessage.tsx
import React from 'react';
import styles from './ChatMessage.module.css';

interface ChatMessageProps {
    message: string;
    isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
    return (
        <div className={`${styles.message} ${isUser ? styles.user : styles.bot}`}>
            {message}
        </div>
    );
};

export default ChatMessage;
