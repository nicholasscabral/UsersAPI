const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class User {

  async findAll() {
    try {
      var result = await knex.select(['id', 'email', 'role']).table('users');

      return (result.length > 0) ? result[0] : [];
    } 
    catch (error) {
      console.log(error)
    }
  }

  async findById(id) {
    try {
      var result = await knex.select(['id','email','role','name']).where({id:id}).table('users');
      
      return (result.length > 0) ? result[0] : undefined;
    } 
    catch (error) {
      console.log(error)
    }
  }

  async new(email, name, password) {
    try {

      const hashedPassword = await bcrypt.hash(password, 8)

      await knex.insert({email: email, name: name, password: hashedPassword, role: 0}).table("users")
    }
    catch(err) {
      console.log(err)
    }
  }

  async findEmail(email) {
    try {
      var result = await knex.select("*").from("users").where({email: email});  

      return (result.length > 0) ? true : false
    } 
    catch (err) {
      console.log(err)
    }
  } 
}

module.exports = new User();