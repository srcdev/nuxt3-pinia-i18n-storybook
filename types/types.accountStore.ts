export interface IAccountMenuItem {
  title: string;
  icon: string;
  to: string;
}

export interface IUserData {
  id: string;
  username: string;
  roles?: string[];
}

export interface IAccountState {
  isAuthenticated: boolean;
  userData?: IUserData;
}
