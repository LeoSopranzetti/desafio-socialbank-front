import { Adress } from './adress';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthdate: Date;
  thumb: string;
  adress: Adress;
}

export type Users = Array<User>;
