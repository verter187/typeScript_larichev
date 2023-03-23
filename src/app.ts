class User {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: User): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}
  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }
  public AuthUser(user: User): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.jwtToken) {
      return true;
    } else {
      return false;
    }
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.githubToken) {
      //Идем в API
      return true;
    } else {
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
