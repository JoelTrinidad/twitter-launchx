const User = require('./../models/User')
class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }
    static getInfo(user){
        return Object.values(user);
    }
    static updateUserUsername(user, username) {
        user.username = username;
    }
    static getAllUsernames(users){
        return users.map(user => user.username);
    }
}

module.exports = UserService;