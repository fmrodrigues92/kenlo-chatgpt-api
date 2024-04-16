const ChatGPTAdapter = require('../adapters/chatgptAdapter');
const UserRepository = require('./userRegistration');

class AskAndSaveQuestion {
  constructor() {
    this.chatGpt = new ChatGPTAdapter(process.env.CHATGPT_API_KEY);
    this.userRepository = new UserRepository();
  }

  async execute(userId, question) {
    const answer = await this.chatGpt.ask(question);
    const user = await this.userRepository.saveAnswer(userId, question, answer);
    return user;
  }
}

module.exports = AskAndSaveQuestion;