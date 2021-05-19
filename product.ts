export interface IProduct {
    id: number
    name: string
    price: number
    code: number
}

export class Product implements IProduct {
    id: number
    name: string
    price: number
    code: number

    constructor(id, name, price, code) {
        this.id = id
        this.name = name
        this.price = price
        this.code = code
    }
}
