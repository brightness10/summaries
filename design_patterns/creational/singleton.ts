// Find a way to make abstract

/* 
  SINGLETON

  Intent: Ensures a class only has one instance and provides a global point of access to it
*/

// IMPLEMENTATION #1

class Singleton1 {
  // Any logic...
}

export const singleton1 = new Singleton1

// IMPLEMENTATION #2

class Singleton2 {
  /*
    A single instance is stored in a static property
    for the entire application to consume
  */
  private static instance: Singleton2;

  /*
    A singleton must always have a private constructor 
    to prevent direct access to the new operator
  */
  private constructor() {}

  /*
    A public static method is exposed for the app to access
    the single instance
  */
  static getInstance(): Singleton2 {
    if (!Singleton2.instance) Singleton2.instance = new Singleton2()
    return Singleton2.instance
  }
}

const consumerCode = () => {
  const singleton1 = Singleton2.getInstance()
  const singleton2 = Singleton2.getInstance()
  const isReferencingSameObject = singleton1 === singleton2
  if (isReferencingSameObject) {
    console.log(`Singleton Works!`)
  }
}

consumerCode()