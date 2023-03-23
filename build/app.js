"use strict";
class User {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    AuthUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            return true;
        }
        else {
            return false;
        }
    }
}
class GithubStrategy {
    auth(user) {
        if (user.githubToken) {
            //Идем в API
            return true;
        }
        else {
            return false;
        }
    }
}
const user = new User();
user.jwtToken = "token";
const auth = new Auth(new JWTStrategy());
console.log(auth.AuthUser(user));
auth.setStrategy(new GithubStrategy());
console.log(auth.AuthUser(user));
