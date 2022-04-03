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

export interface IVerifyEmail {
  code: string;
}

export interface IAddress {
  province_id: string;
  province_name: string;
  district_id: string;
  district_name: string;
  ward_id: string;
  ward_name: string;
}

export interface IProfile {
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  avatar?: string;
  address?: IAddress;
  email?: string;
  phoneNumber?: string;
}
