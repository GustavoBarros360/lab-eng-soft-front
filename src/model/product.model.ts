import { Category } from "./category.model";

export interface Product {
  id: string;
  price: number;
  quantity: number;
  category: Category;
}
