/*
  BUILDER

  Intent: A way of constructing complex objects by adding members to
  it step by step, allows reuse of construction code.
*/


class RoomBuilder {
  floor = false;
  walls = false;
  roof = false

  withFloor() {
    this.floor = true
    return this
  }
  withWalls() {
    this.walls = true
    return this
  }
  withRoof() {
    this.roof = true
    return this
  }
}


// Consumer Code

(() => {
  const room = new RoomBuilder().withFloor().withWalls().withRoof()
  if (room.floor && room.walls && room.roof) { console.log('Room built successfully') }
})()