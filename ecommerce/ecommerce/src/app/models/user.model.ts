import { Order } from './order.model';

export class User {
  id: number;
  name: string;
  lastname: string;
  user: string;
  password: string;
  cash: number;
  state: boolean;
  rol: [];
  orders: Order[];
}
