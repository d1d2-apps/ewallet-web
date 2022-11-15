export type AuthUser = {
  id: string;
  name: string;
  picture: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UserResponse = {
  token: string;
  user: AuthUser;
};
