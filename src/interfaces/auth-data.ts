export type UserInAuthData = {
  id: string;
  name: string | null;
  email: string | null;
}

export interface AuthData {
  token: string;
  user: UserInAuthData;
}
