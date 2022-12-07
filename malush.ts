// class Method1 {
//   name: string;
//   age: number;
//   stack: string;

//   constructor(name: string, age: number, stack: string) {
//     (this.name = name), (this.age = age), (this.stack = stack);
//   }
//   static intro(): void {
//     console.log(`Hello world`);
//   }
// }

// Method1.intro();
// let Method2 = new Method1("david", 29, "MERN-STACK");
// let Method3 = new Method1("mike", 39, "FULL-STACK");
// let Method4 = new Method1("segun", 19, "FRONT-END");

// console.log(Method1);
// let x = (Method2.age, Method3.age, Method4.age);

// class tokenkey extends Method1 {
//   tokenData: number;

//   constructor(token: number, name: string, age: number, stack: string) {
//     super(name, age, stack);
//     this.tokenData = token;
//   }
//   user(a: number) {
//     if (a === this.tokenData) {
//       console.log(`Correct Token`);
//     } else {
//       console.log(`Incorrect Input`);
//     }
//   }
// }

// let tokenUser = new tokenkey(837479, "david", 30, "php developer");
// // console.log(tokenUser);
// tokenUser.user(837479);

// interface motoTypes {
//   name: string;
//   model: number;
//   color: string;
//   size: number;
// }

// class allCart implements motoTypes {
//   name: string;
//   model: number;
//   color: string;
//   size: number;

//   constructor(options: motoTypes) {
//     this.name = options.name;
//     this.model = options.model;
//     this.color = options.color;
//     this.size = options.size;
//   }
// }

// let newCar = new allCart({
//   name: "toyota",
//   model: 2009,
//   color: "Black",
//   size: 45,
// });
// console.log(newCar);

class Arrayo {
  name: string;
  age: number;
  stack: string;

  constructor(name: string, age: number, stack: string) {
    this.name = name;
    this.age = age;
    this.stack = stack;
  }

  intro(): string {
    return `I am ${this.age}`;
  }

  static sum() {
    let el: number[] = [];
    el.push(Arrayo1.age, Arrayo2.age, Arrayo3.age);

    return el.reduce((a, b): number => {
      return a + b;
    });
  }
}

const Arrayo1 = new Arrayo("David", 20, "FRONT-END");
// console.log(Arrayo1.intro())
const Arrayo2 = new Arrayo("Micheal", 19, "BACK-END");
const Arrayo3 = new Arrayo("Emem", 18, "FULL-STACK");
// console.log(Arrayo3);

// Assignment: use array method to sum all ages in the class
console.log(`Total sum of the age are ${Arrayo.sum()}`);
