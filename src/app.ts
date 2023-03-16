interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}
// @nullUser
@CreatedAt
class UserService implements IUserService {
  users: number;

  getUsersInDatabase(): number {
    return this.users;
  }
}
function SetCreatedAt(createdAt: Date) {
  return (target: Function) => {
    target.prototype.createdAt = createdAt;
  };
}
function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

type CreatedAt = {
  createdAt: Date;
};
console.log((new UserService() as IUserService & CreatedAt).createdAt);
