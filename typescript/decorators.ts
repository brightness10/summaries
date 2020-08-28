// DECORATORS

// Decorator Factory
function decorator(arg: string) { // This is the factory that allows us to accept strings
  return function(target: any) { // This is the decorator itself
    // do something with 'target' and 'value'...
  }
}

/*
** Class
** Applied to the class constructor
*/

// Example #1
function unextendable(constructor: Function) {
  Object.freeze(constructor)
  Object.freeze(constructor.prototype)
}

@unextendable
class User {
  constructor(
    public email: string,
    public username: string
  ) {}
}

// Uncomment to see the error
// class Person extends User {
//   name = 'Joe'
// }

// Example #2
function addName(name: string) {
  return function<T extends {new(...args: any[]): {}}>(constructor: T): T & { name: string } {
    return class extends constructor {
      name = name
    }
  }
}



@addName('Joe')
class Employee {
  constructor(
    public job: string
  ) {}
}

const joe = new Employee('Clerk')
console.log('joe', joe)

/*
** Property
** 
*/
function addPrefix(prefix: string) {
  return function (target: Pfeffer, propName: keyof Pfeffer) {
    target.prefix = prefix
  }
}
function staticPrefix(prefix: string) {
  return function (target: typeof Pfeffer, propName: keyof typeof Pfeffer) {
  }
}

class Pfeffer {
  prefix?: string;
  @addPrefix('Mr')
  name: string;
  
  @staticPrefix('Mr')
  static surname = 'Pfeffer'
  constructor(name: string) {
    this.name = name
  }
}

const john = new Pfeffer('John')
console.log('john', john.prefix, john.name)

/*
** Method
** 
*/
function multiplyReturnBy(multiplier: number){
  return function (target: Scanner, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value
    descriptor.value = function (...args: any[]) {
      return original(...args) * multiplier
    }
  }
}

class Scanner {
  @multiplyReturnBy(10)
  scan(pageFrom: number, pageTo: number): number {
    // Amount of pages scanned
    return (pageTo - pageFrom)
  }
}

const MultipliedScannedPages = new Scanner().scan(1, 4)
console.log('MultipliedScannedPages', MultipliedScannedPages)

/*
** Parameters
** 
*/ 

/*
** Accessors
** 
*/ 
