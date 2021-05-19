import {IProduct, Product} from "./product.js"

export class ProductFactory {
    private id: number = 0

    createProduct(name: string, price: number, code: number): IProduct {
        this.id++
        return new Product(this.id, name, price, code)
    }
}