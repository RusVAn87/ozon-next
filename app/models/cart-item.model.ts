import { Product } from "./product.modal";

export interface CartItem extends Product {
    count: number
}