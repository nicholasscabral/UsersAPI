class UserController {
  async create(req, res) {
    console.log(req.body);

    const { email, name, password } = req.body;

    if (!email || !name || !password) return res.status(400).send({message: 'Invalid credential'});
    
  }
}

module.exports = new UserController();