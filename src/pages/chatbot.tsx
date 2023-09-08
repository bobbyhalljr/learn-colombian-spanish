// src/components/Chatbot.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const apiKey = 'YOUR_OPENAI_API_KEY';

  useEffect(() => {
    // Welcome message from the chatbot
    addMessage("¡Hola! Soy tu asistente virtual en español. ¿En qué puedo ayudarte?");
  }, []);

  const addMessage = (text: string, isUser = false) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUser }]);
  };

  const handleInputSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add user's message to the chat
    addMessage(input, true);

    // Clear the input field
    setInput('');

    // Call the OpenAI API to get a response
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 50,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      // Add chatbot's response to the chat
      const chatbotResponse = response.data.choices[0].text;
      addMessage(chatbotResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <div className="chatbot-messages h-64 overflow-y-auto p-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message p-2 ${
              message.isUser ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 rounded-bl-none'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleInputSubmit} className="mt-4 flex">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </form>
    </Layout>
  );
};

export default Chatbot;
