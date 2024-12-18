export type AuthStateType = {
  isLoggedIn: boolean;
  user: UserType | null;
};

export type UserType = {
  email: string;
  password: string;
};
