import {IProduct} from "./product.js";

export interface IProductDatabase {
    products: IProduct[]
}

export class ProductDatabase implements IProductDatabase {
    private _products: IProduct[] = []

    addProduct(product: IProduct) {
        this._products.push(product)
    }

    addProducts(products: IProduct[]) {
        this._products = [...this._products, ...products]
    }

    getProductByCode(code: number): IProduct {
        return this._products.find((product: IProduct) => product.code === code)
    }

    get products(): IProduct[] {
        return this._products
    }

    set products(products: IProduct[]) {
        this._products = products
    }

}