// incomplete

/*
  PROTOTYPE

  Intent: Allows copying objects without coupling to their specific class
*/

class Prototype {
  primitive: string;
  objectProp: object;
  circularReference: ReferencingBack;

  clone(): this {
    const clone = Object.create(this)
    // 
    return clone
  }
}