interface AbstractFactory {
  createProductA(): AbstractProductA
  createProductB(): AbstractProductB
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1()
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1()
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2()
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2()
  }
}

interface AbstractProductA {
  usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA() {
    return 'Product A1 result'
  }
}

class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA() {
    return 'Product A2 result'
  }
}

interface AbstractProductB {
  usefulFunctionB(): string;
  collaborationFunctionB(collaborator: AbstractProductA): string
}

class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB() {
    return 'Product B1 result'
  }

  collaborationFunctionB(collaborator: AbstractProductA) {
    return 'Product B1 is getting collaborator result - ' + collaborator.usefulFunctionA()
  }
}

class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB() {
    return 'Product B2 result'
  }

  collaborationFunctionB(collaborator: AbstractProductA) {
    return 'Product B2 is getting collaborator result - ' + collaborator.usefulFunctionA()
  }
}

function useFactory(factory: AbstractFactory) {
  const productA = factory.createProductA()
  const productB = factory.createProductB()

  console.log(productB.usefulFunctionB())
  console.log(productB.collaborationFunctionB(productA))
}

useFactory(new ConcreteFactory1())
useFactory(new ConcreteFactory2())