const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends "success" | "failed"> {
  code: number;
  data: T extends "success" ? string : Error;
  // additionalData: T extends "success" ? string : number;
}

const suc: HTTPResponse<"success"> = {
  code: 200,
  data: "done",
};

const err: HTTPResponse<"failed"> = {
  code: 200,
  data: new Error(),
};

class User {
  id: number;
  name: string;
}

class UserPersistence extends User {
  dbId: string;
}

function getUser(id: number): User;
function getUser(dbId: string): UserPersistence;
function getUser(dbIdOrId: string | number): User | UserPersistence {
  if (typeof dbIdOrId === "number") {
    return new User();
  } else {
    return new UserPersistence();
  }
}

type UserOrUserPersistence<T extends string | number> = T extends number
  ? User
  : UserPersistence;

function getUser2<T extends string | number>(id: T): UserOrUserPersistence<T> {
  if (typeof id === "number") {
    return new User() as UserOrUserPersistence<T>;
  } else {
    return new UserPersistence() as UserOrUserPersistence<T>;
  }
}

const res = getUser2(1);
const res1 = getUser2("sfdfsffds");
