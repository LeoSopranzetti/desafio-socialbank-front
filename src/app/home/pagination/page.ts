import { User } from '../novo-user/user';

export interface Page {
  content: Array<User>;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort?: any;
  numberOfElements: number;
  first: boolean;
}
