export class ProductDatabase {
    constructor() {
        this._products = [];
    }
    addProduct(product) {
        this._products.push(product);
    }
    addProducts(products) {
        this._products = [...this._products, ...products];
    }
    getProductByCode(code) {
        return this._products.find((product) => product.code === code);
    }
    get products() {
        return this._products;
    }
    set products(products) {
        this._products = products;
    }
}
