"use client"; // Mark as client component for Next.js App Router


import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Message, ChatResponse } from "@/types";
import ReactMarkdown from 'react-markdown';

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
  
    // Auto-scroll to bottom of messages
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
  
    const handleSendMessage = async (): Promise<void> => {
      if (!input.trim()) return;
  
      // Add user's message to the chat
      const userMessage: Message = { text: input, isUser: true };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setLoading(true);
  
      try {
        // Call your Next.js API endpoint
        const response = await axios.post<ChatResponse>('/api/chat', { message: input });
  
        // Add bot's response to the chatc
        const botMessage: Message = {
          text: response.data.response || "Sorry, I couldn't process that.",
          isUser: false,
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error calling API:", error);
        const errorMessage: Message = {
          text: "Oops! Something went wrong. Try again later.",
          isUser: false,
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setLoading(false);
      }
    };
  
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };
  

  return (
    
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
        <Navbar/>
        <div className="w-full max-w-7xl min-h-[65vh] mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

        {/* Chat Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Chat with HealthAI
            </h2>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 ${
                message.isUser ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                  message.isUser
                    ? "bg-blue-100 dark:bg-blue-900/30"
                    : "bg-purple-100 dark:bg-purple-900/30"
                }`}
              >
                {message.isUser ? (
                  <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                )}
              </div>
              <div
                className={`rounded-2xl p-4 max-w-[80%] ${
                  message.isUser
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-tr-none"
                }`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown> 
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                <p>Thinking...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
                        <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a health question..."
              className="flex-1 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
              onKeyDown={handleKeyPress}
            />
            <Button
              onClick={handleSendMessage}
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
}