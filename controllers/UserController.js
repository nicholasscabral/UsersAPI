const User = require('../models/User');

class UserController {

  async index(req, res) {
    var users = await User.findAll();
    res.send(users);
  }

  async create(req, res) {
    console.log(req.body);

    const { email, name, password } = req.body;

      if (!email || !name || !password) {
        return res.status(400).send({message: 'Invalid credential'});
      }

    var emailExists = await User.findEmail(email)

    if (emailExists) {
      return res.send({message: 'Email already in use'})
    }
    else await User.new(email, name, password);

    res.status(200).send({success: true, message: 'user registered'});
  }
}

module.exports = new UserController();