// primitive number, boolean, string

let yourName: string;
yourName = "anuj panwar";

let myLuckyNumber: number = 6;

let check: boolean = false;
check = true;

//---------------------------------- arrays --------------------------------//

let myArray: number[];
myArray = [3423, 23432, 23423];

let myArray2: string[];
myArray2 = ["werwer", "wrwerewr"];

//---------------------------------- Object --------------------------------//

let obj: Person;

obj = {
  name: "anuj panwar",
  age: 324324,
};

// obj = {
//   ok: true,
// };

//---------------------------------- Union types --------------------------------//
let ageIs: number | string | string[];
ageIs = "32";
ageIs = 32;
ageIs = ["anuj"];

//---------------------------------- type alias --------------------------------//
type Person = {
  name: string;
  age: number;
};

let arr: Person[];
arr = [{ name: "sdf", age: 234234 }];
