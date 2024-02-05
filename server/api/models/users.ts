import type { IUser } from "../../../types/types.auth";

// Fake users data
const users: IUser[] = [
  {
    id: "41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6",
    username: "admin@gmail.com",
    password: "$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm",
    roles: ["ADMIN"],
  },
  {
    id: "d0065700-1707-4ad9-811b-8bbed0364318",
    username: "user@gmail.com",
    password: "$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm",
    roles: ["USER"],
  },
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
