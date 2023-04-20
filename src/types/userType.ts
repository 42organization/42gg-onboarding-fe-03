import { AccessType } from './accessType';

export interface userType {
  username: string;
  password: string;
  token: string;
  role: AccessType;
}
