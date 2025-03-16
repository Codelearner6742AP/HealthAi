// types/index.ts
export interface Message {
    text: string;
    isUser: boolean;
  }
  
  export interface ChatResponse {
    response: string;
    error?: string;
  }
  
  export interface GeminiResponse {
    candidates: {
      content: {
        parts: {
          text: string;
        }[];
      };
    }[];
  }
  