import type { IUser } from "../../../types/types.auth";

// Fake users data
const users: IUser[] = [
  {
    id: "11dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b2",
    username: "admin@gmail.com",
    password: "!5illyPa55w0rd+",
    roles: ["ADMIN"]
  },
  {
    id: "60065700-1707-4ad9-811b-8bbed036431a",
    username: "user@gmail.com",
    password: "!5illyPa55w0rd+",
    roles: ["USER"]
  }
];

export async function getUsers() {
  return users;
}

export async function getUserByEmail(username: string) {
  return users.find((user) => user.username === username);
}

export async function getUserById(id: string) {
  return users.find((user) => user.id === id);
}

export async function isAdmin(user?: IUser) {
  return user && user.roles.includes("ADMIN");
}
