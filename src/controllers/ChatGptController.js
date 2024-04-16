const askAndSaveQuestionClass = require('../usecases/askAndSaveQuestion');

class ChatGPTController {


    async interaction(req, res) {
        try {
          const { userId } = req.params;
          const { question } = req.body;
          const askAndSaveQuestion = new askAndSaveQuestionClass();
          const user = await askAndSaveQuestion.execute(userId, question);
          res.json(user);
        } catch (error) {
            console.error('Headers:', error.response.headers); // Logar cabeçalhos do erro
          res.status(500).json({ message: error.message });
        }
    }

}

module.exports = ChatGPTController;
