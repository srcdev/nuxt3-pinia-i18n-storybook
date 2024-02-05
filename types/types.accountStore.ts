export interface IAccountState {
  authenticated: boolean;
  loading: boolean;
  currentUser: {
    name: null | string;
  };
}
