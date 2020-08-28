/* 
  FACTORY

  Intent: todo: fill in
*/

/*
  The parent Factory class primary responsibility (despite its name) is
  to implement core business logic that rely on a Product. The
  Factory subclasses will each create a different Product therefore
  altering the business logic.
*/
abstract class AbstractFactory {

  /*
    A product creation method for the concrete Factories
    to implement, each with its own concrete product
  */
  abstract createProduct(): Product

  useProduct() {
    const product = this.createProduct()
    product.print()
  }
}

/*
  Each concrete factory decides which product to create
*/
class ConcreteAFactory extends AbstractFactory {
  createProduct() { return new ProductA() }
}
class ConcreteBFactory extends AbstractFactory {
  createProduct() { return new ProductB() }
}

interface Product {
  name: string;
  print(): void;
}

class ProductA implements Product {
  name = 'Product A';
  print() {
    console.log(`I'm ${this.name}, and I am used in a particular way`)
  }
}

class ProductB implements Product {
  name = 'Product B'
  print() {
    console.log(`I'm ${this.name}, and I do all sort of stuff`)
  }
}


///////////


const consumerCode = () => {
  /*
    The consumer code expects the base factory, so
    you can pass any concrete factory to it
  */
  const useAnyProduct = (factory: AbstractFactory) => {
    factory.useProduct()
  }

  const aFactory = new ConcreteAFactory()
  useAnyProduct(aFactory)

  const bFactory = new ConcreteBFactory()
  useAnyProduct(bFactory)
}

consumerCode()