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

//---------------------------------- function types --------------------------------//

// explicitly setting the return type of the function
// ts can also handle this for us

// if we not define return type here this will call type inference
const addTwo = (a: number, b: number): number => {
  return a + b;
};
console.log(addTwo(12, 23));

const voidReturn = (a: any, b: any) => {
  // return a + b;
};

//---------------------------------- Generics --------------------------------//

// generics always look the first argument
// if argument is number then we can only pass number array
function returnNewArray<A>(valueToAdd: A, array: A[]) {
  const newArray = [valueToAdd, ...array];
  return newArray;
}

const stringARR: string[] = ["a", "b", "c", "d", "e"];
returnNewArray("c", stringARR);

const numberARR: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
returnNewArray(3, stringARR); // got error because first argument is 
