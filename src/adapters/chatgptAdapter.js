const axios = require('axios');

class ChatGPTAdapter {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: 'https://api.openai.com/v1',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "OpenAI-Organization": "org-oE2RsUSNtD59Eslt4W3iACsd",
        'Content-Type': 'application/json'
      }
    });
  }

  async ask(question) {
    try {
      const response = await this.client.post('/chat/completions', {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
              "role": "user",
              "content": question
            }
        ],
        "temperature": 0.7
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error contacting ChatGPT:', error);
      throw error;
    }
  }
}

module.exports = ChatGPTAdapter;
