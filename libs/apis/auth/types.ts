export interface IAuthLocal {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface IAuthenticated {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
}
