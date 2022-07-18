// let userOne = {
//   email: "FreshyyIDk@gmail.com",
//   name: "Freshyy",
//   login() {
//     console.log( this.name, "has logined in succesfully!")
//   },
//   logout() {
//     console.log( this.name, "has logged out succesfully!")
//   }
// }

// console.log(userOne.email);

// Creating class !

class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    console.log(this.name);
  }
  // ^ Class Methods
  login() {
    console.log( this.name, "has logined in succesfully!")
  }
  // ^ Class Methods
  logout() {
    console.log( this.name, "has logged out succesfully!")
  }
}

let userOne = new User('FreshyyIDk@gmail.com', 'Freshyy')
let userTwo = new User('IDkU@gmail.com', 'MarioJudahh')
console.log(userOne);
console.log(userTwo);

userOne.login()
userTwo.logout()

// ~ the 'new' keyword
// ~ creates a new empty object {}
// ~ sets the value of 'this' to be the new empty object
// ~ calls the constructor method
