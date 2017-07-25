// store everything related to the users data structure
[{
  id: '/#12qerqpupeupoeiurp',
  name: 'Andrew',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id) from the side bar when the leave a room
// getUser(id)
// getUserList(room) - get list of users in a room and return the list of names
// All of the above will be done by using ES6 classes:

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    // return user that was removed - using filter() is recommended, but not the only way
    let user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;


  }
  getUser (id) {
    // return user object - using filter() is recommended, but not the only way
    return this.users.filter((user) => user.id === id)[0]
  }
  getUserList (room) {
    // return array of users (as objects) such as ['Mike', 'Jen', 'Caleb']
    let users = this.users.filter((user) => user.room === room);
    let namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// let me = new Person('Andrew', 25);
// let description = me.getUserDescription();
// console.log(description);
