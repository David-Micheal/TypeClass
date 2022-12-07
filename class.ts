// let x:string = "David"
// x = "true"

// console.log(x);

// let x:number = 10

// x = 10 + 5

// console.log(x);

// let y:number = 15;
// let z:number = 15;

// let w = y + z
// console.log(w)

// let person:boolean = true
// console.log(person)

// let person: boolean | string | number = 10;

// console.log(person)

// let jaji:null = null;
// console.log(jaji)

// -----------------------ARRAY-METHOD TYPESCRIPT---------------------------------

// let names: (string | number | Boolean | null)[] = ["Jaji","Finbar", 20, true, null]
// console.log(names)

//  let arr: (number | string | boolean | null | undefined)[] = [3, 6, 9, 12, "jaji", null, undefined]

//  console.log(arr)
// arr [2] = "micheal"
// console.log(arr)

// let me: [number,string] = [10, "my guy"]
// console.log(me)

// ------------------------- OBJECT METHOD TYPESCRIPT------------------------------------

// let person: {name:string,
// age:number;
// color:string,
// height:number,
// score:(number[])} = {
//     name:"micheal",
//     age:20,
//     color:"dark",
//     height:200,
//     score:[3,5,7,8,9]
// }

// let final:number = person.score.reduce((a,b)=>{
//     return a+b
// })

// console.log(person,final)

// type person = {
//     name:string;
//     age:number;
//     short:boolean;
//     color?:string|number
// };
// let student1: person = {
//     name:"micheal",
//     age:18,
//     short:false,
//     color:"blue"
// }

// let student2 = {
//     name:"david",
//     age:20,
//     short:false,
// }

// console.log(student1)
// console.log(student2)

// type person = {
//     name:string;
//     age:number;
//     short:boolean;
//     color?:string|number
// };

// type person2 = {
//     headSize:number
// };

// let student1: person | person2 = {
//     name:"micheal",
//     age:18,
//     short:false,
//     color:"blue",
//     headSize:20,
// }

// let student2:person = {
//     name:"david",
//     age:20,
//     short:false,
// }

// console.log(student1)
// console.log(student2)

// interface Mydata {
//     name:string
//     age:number
//     color:string
// }

// interface Mydata{
//     height:number
//     short:boolean
// }

// let data: Mydata = {
//     name:"david",
//     age:20,
//     height:180,
//     color:"black",
//     short: false,
// }

// console.log(data)

// type fruits ={
//     name:string;
//     color:string;
//     qty:number;
//     variety:any[]
// }

// interface newfruit extends fruits{
//     seed:string
// }

// let data:newfruit = {
//     name:"mango",
//     color:"green",
//     qty:20,
//     seed:"oval",
//     variety:[20,"manny"]

// }

// console.log(data)

// enum myData{
//     SMALL = 200,
//     MEDIUM = 300,
//     LARGE = 400,
// }

// const user1 = myData.SMALL;
// console.log(user1);

// const myFunc2 =(x: number[]): number =>{
//    return x.reduce((a,b) => a + b)
// };
// console.log(myFunc2([3, 45, 6, 20]));

class Allstudent {
  name: string;
  age: number;
  score: number;

  constructor(name: string, age: number, score: number) {
    (this.name = name), (this.age = age), (this.score = score);
  }

  //   intro(): void {
  //     console.log(
  //       `my name is ${this.name} and i scored ${this.score} and i am ${this.age}years old.`
  //     );
  //   }
}

let student = new Allstudent("david", 18, 200);
// console.log(student.name);
// student.intro();

let student1 = new Allstudent("emem", 18, 290);
// console.log(student1);

function ch(x) {
  let c = x.reduce((a, b) =>
    typeof a === "number" && typeof b === "number" ? a + b : a * 500
  );
  let s = x.filter((a) => typeof a === "string");

  if (c === c) {
    console.log(c);
  }
  if (s) {
    console.log(s.length);
  }
}

ch([1, 3, 4, "sa", "me"]);