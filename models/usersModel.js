const db = require('./con');

class Reviewers {
    constructor (id, name, email, trust, password) {
        this.id = id;
        this.name = name;
        this.email = email; 
        this.trust = trust;
        this.password;
    }
static async getUserInfo() {
  try {
      const response = await db.any('SELECT * FROM reviewer;');
      return response
  } catch (error) {
      console.error('ERROR', error)
      return error
  }
}
static async newUser() {
    try {
        const response = await db.any('INSERT INTO reviewer (name, email, trust, password) VALUES ($1, $2, $3, $4)');
        return response
    } catch (error) {
        console.error('ERROR', error)
        return error
    }
}
}