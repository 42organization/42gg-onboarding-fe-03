import { AccessType } from './accessType';

export interface userType {
  username: string;
  password: string;
  token: string;
  role: AccessType;
}

export interface userResponse {
  username: string;
  role: AccessType;
}
