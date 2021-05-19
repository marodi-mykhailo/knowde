import {ProductDatabase} from "./database.js";
import {IProduct} from "./product.js";
import {ProductFactory} from "./productFactory.js";

const productFactory = new ProductFactory()

const p1 = productFactory.createProduct("bread", 10, 12314341)
const p2 = productFactory.createProduct("milk", 4, 82838527)
const p3 = productFactory.createProduct("garlic", 2, 56131451)
const p4 = productFactory.createProduct("beef", 8, 74521456)
const p5 = productFactory.createProduct("egg", 12, 13500554)

const myDataBase = new ProductDatabase()

myDataBase.addProduct(p1)
myDataBase.addProduct(p2)
myDataBase.addProduct(p3)
myDataBase.addProduct(p4)
myDataBase.addProduct(p5)

const output = document.getElementById('output')
const printOutput = document.getElementById('print-output')
const input = document.getElementById("input") as HTMLInputElement
const exit__btn = document.getElementById("exit__btn") as HTMLButtonElement

input.addEventListener('input', checkCode)
exit__btn.addEventListener("click", onExitBtnHandler)

const scannedProducts = new Set<IProduct>()

function checkCode() {
    const product = myDataBase.getProductByCode(+input.value)
    if (product) {
        output.innerText = `name: ${product.name} \n price: ${product.price}`
        scannedProducts.add(product)
    } else {
        output.innerText = 'Product not found'
        if (!input.value.length) {
            output.innerText = ''
        }
    }
}

function onExitBtnHandler() {
    const sum = getProductsSum([...scannedProducts])

    let printOutputText = ''
    output.innerText = `price of all scanned products is:  ${sum}`

    if (!scannedProducts.size) {
        printOutput.innerText = "No products scanned \n Sum: 0"
    }else {
        scannedProducts.forEach((item) => {
            printOutputText += `${item.name} --- ${item.price} \n`
        })
        printOutputText += `Sum: ${sum}`

        printOutput.innerText = printOutputText
    }

    window.print()
}

////////////////////////////////////////////////////////////////////////////////////////////

function getProductsSum(arr: IProduct[]): number {
    return arr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price
    }, 0)
}





