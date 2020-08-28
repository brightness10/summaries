/*
  DECORATOR

  Intent: Attach props and methods to existing object. Allows creating versatile objects where
  inheritance wouldn't do.
*/

class Animal {
  
  constructor(
    readonly name: string,
  ) {}
}

const flyer = <T extends Animal>(baseAnimal: T) => ({
    ...baseAnimal,
    fly() { console.log(`${baseAnimal.name} is flying`) }
})

const climber = <T extends Animal>(baseAnimal: T) => ({
  ...baseAnimal,
  climb() { console.log(`${baseAnimal.name} is climbing`) }
})

const eagle = flyer(new Animal('Eagle'))
const monkey = climber(new Animal('Monkey'))
const flyingSquirrel = flyer(climber(new Animal('Flying Squirrel')))

eagle.fly()
monkey.climb()
flyingSquirrel.fly()
flyingSquirrel.climb()