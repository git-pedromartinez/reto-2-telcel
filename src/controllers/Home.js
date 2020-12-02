const user = require('../models/user');
const userSchema = require('../models/user')

class Home {
    async index(req, res) {
        var users=await userSchema.find({})
        res.render('index', {users})
        return
    };
};
module.exports = Home;