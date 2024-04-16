const UserModel = require('../infrastructure/models/UserModel');

class UserService {
    async saveAnswer(userId, question, answer) {
        const update = {
          $push: {
            questionsAndAnswers: { question, answer }
          }
        };
        const options = { new: true };
        const user = await UserModel.findByIdAndUpdate(userId, update, options);
        return user;
      }
}

module.exports = UserService;