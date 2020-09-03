import { User } from './user.model';
import { ItemOrder } from './item-order.model';

export class Order {
  id: number;
  createAt: Date;
  user: User;
  discount: number;
  statusOrder: string;
  items: ItemOrder[];
}
