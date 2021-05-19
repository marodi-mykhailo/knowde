import { Product } from "./product.js";
export class ProductFactory {
    constructor() {
        this.id = 0;
    }
    createProduct(name, price, code) {
        this.id++;
        return new Product(this.id, name, price, code);
    }
}
