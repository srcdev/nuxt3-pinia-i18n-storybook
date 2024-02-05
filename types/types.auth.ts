export interface IUser {
  id: string;
  username: string;
  password: string;
  roles: string[];
}

export type IUserWithoutPassword = Omit<IUser, "password">;
export type IUserWithoutRoles = Omit<IUser, "roles">;

export interface ILoginPayload {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginResponse {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}
