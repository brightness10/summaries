// UTILITY TYPES

interface Product {
  name: string;
  price: string;
  description?: string,
  code: { USA: string },
  quantity?: number
}

const doll: Product = {
  name: 'Hello Kitty',
  price: '1000',
  description: 'A doll',
  code: {
      USA: '1234'
  }
}


// Partial<Interface> - Marks all props as optional (T | undefined)
// does not affect nested objects props
const partialDoll: Partial<Product> = doll
partialDoll.name = 'G.I.Joe'
partialDoll.name = undefined
partialDoll.code = undefined
partialDoll.code = { USA: '84750'}
partialDoll.code = { USA: undefined } // Nested props cannot be undefined


// Required<Interface> - Mark all props as not optional
const requiredDoll: Required<Product> = { ...doll, quantity: 10 }
requiredDoll.quantity = undefined // Warning, no props are optional


// Readonly<Interface> - Marks all props as readonly, meaning typescript will 
// warn if you try to reassign any if its props
// does not affect nested objects props
const readonlyDoll: Readonly<Product> = doll
readonlyDoll.name = 'G.I.Joe' // Gives a warning, but does not actually prevent prop mutation
console.log(readonlyDoll)
Object.freeze(readonlyDoll) // Prevents prop mutation at run time
readonlyDoll.price = '999999'
// This is not safe 


// Record<Props, Value> - Describes an object where the props are `Props` (string | number | Symbol | enum values)
// and the values are `Value` 
type RecordProps = 'book' | 'shelf' | 'dvd';
enum RecordPropsEnum {
  prop1 = `book`,
  prop2 = 'shelf',
  prop3 = 'dvd'
}
const record: Record<RecordPropsEnum | RecordProps, Product> = {
  book: {
      name: `Ender's Game`,
      price: '30',
      description: 'A pretty good book',
      code: { USA: '823756' }
  },
  shelf: {
      name: 'Mobious',
      price: '50',
      description: 'A nifty shelf',
      code: { USA: '9238' }
  },
  dvd: {
      name: 'I Am Legend',
      price: '15',
      description: 'A zombies movue',
      code: { USA: '195678' }
  }
}


// Pick<Interface, Props> - Pick props out of an interface
type ProductPrice = Pick<Product, 'price'>


// Omit<Interface, Props> - Omit props out of an interface
type ProductDesc = Omit<Product, 'price' | 'name'>


// Exclude<Type, TypesToOmit> - Omit types out of a type
type ExcludeType = Exclude<Product | RecordProps, 'book'>
type ExcludeFunc = Exclude<string | number | (() => void), Function>


// Extract<Type, TypesToPick> - Pick types out of a type
type ExtractType = Extract<Product | RecordProps, 'book'>


// NonNullable<Type> - Omits `null` and `undefined` out of type `Type`
type Nullish = number | 'hello' | null | undefined
let nonNullable: NonNullable<Nullish>;
nonNullable = 'hello'
nonNullable = undefined // Warning
nonNullable = 10
nonNullable = null // Warning


// Parameter<Function> - Produces a tuple from the function respective parameter types
type Func = (arg1: string, arg2: number, arg3: Product) => Promise<string>
type FuncParamsTuple = Parameters<Func> // [string, number, Product]


// ConstructorParameters<Constructor> - Produces a tuple from the constructor respective parameter types
type ProductConstructor = new (arg1: string, arg2: number, arg3: Product) => Product
type ConsTypes = ConstructorParameters<ProductConstructor> // [string, number, Product]

// ReturnType<Function> - Produces a type consisting of the return type of function `Function`
type FuncReturn = ReturnType<Func> // Promise<string>


// 