/*
  COMPOSITE

  Intent: Compose objects into tree structures to represent part-whole hierarchies. 

  Example: A delivery management system, each delivery is contained in a box which can contain products and
  additional boxes, which can also contain products and additional boxes and so forth
*/

// In a Composite pattern, the branches and the leaves must have the same interface
interface DeliveredItem {
  weight: number;
  price: number;
}

class Product implements DeliveredItem {
  constructor(
    readonly weight: number,
    readonly price: number
  ) {}
}

class Box implements DeliveredItem {
  constructor(private _content: DeliveredItem[]) {}

  get weight(): number {
    return this._content.reduce((accumulator, deliveredItem) => accumulator + deliveredItem.weight, 0)
  }

  get price(): number {
    return this._content.reduce((accumulator, deliveredItem) => accumulator + deliveredItem.price, 0)
  }
}


// Consumer Code
(() => {
  const sunScreen = new Product(400, 10)
  const swimSuit = new Product(250, 80)
  const summerShopping = new Box([sunScreen, swimSuit])

  const rainBoots = new Product(1000, 100)
  const shoeBox = new Box([rainBoots])
  const gloves = new Product(200, 40)
  const socks = new Product(100, 15)
  const winterShopping = new Box([shoeBox, gloves, socks])

  const shipmentBox = new Box([summerShopping, winterShopping])

  console.log(`The shipment box weighs ${shipmentBox.weight} and the total price is ${shipmentBox.price}`)
})()
