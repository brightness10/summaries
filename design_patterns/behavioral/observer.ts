/*
  OBSERVER

  Intent: Allows many objects ("observers") to watch an object ("observable") so that when the observable
  is changed it runs a method in all of its observers, giving the effect of them updating automatically
*/

interface Observable {
  observers: Observer[];
  subscribe: (observer: Observer) => void;
  removeObserver: (observer: Observer) => void;
}

interface Observer {
  subscription: Observable;
  notify: (...args) => void
}

enum LightColors {
  RED = 'red',
  GREEN = 'green'
}

class TrafficLight implements Observable {
  observers: Observer[] = [];
  lightColor: LightColors = LightColors.RED;
  constructor() {
    setInterval(this._changeColor, 2000)
  }

  private _changeColor() {
    this.lightColor = this.lightColor === LightColors.RED ? LightColors.GREEN : LightColors.RED
    this.observers.forEach(observer => observer.notify(this.lightColor))
  }

  subscribe(observer: Observer) {
    this.observers.push(observer)
    observer.subscription = this
  }

  removeObserver(observer: Observer) {
    const observerIndex = this.observers.indexOf(observer)
    this.observers.splice(observerIndex, 1)
  }
}

class Truck implements Observer {
  subscription: Observable;

  notify(lightColor: LightColors) {
    switch (lightColor) {
      case LightColors.RED:
        console.log('Stopping')
        break;
      case LightColors.GREEN:
        console.log('VVVRRRRROOOOOOOOMMMM!!!')
        this.subscription.removeObserver(this)
    }
  }
}

class Car implements Observer {
  subscription: Observable;

  notify(lightColor: LightColors) {
    switch (lightColor) {
      case LightColors.RED:
        console.log('Stopping')
        break;
      case LightColors.GREEN:
        console.log('Brimmbrimbrambram')
        this.subscription.removeObserver(this)
    }
  }
}

const trafficLight = new TrafficLight()

const car = new Car()
const truck = new Truck()