let score: number | string = 3; // only two values can be assignable
score = "234";

// score = false;// got error here

type Operator = {
  readonly _id: number;
  name: string;
};

type Admin = {
  readonly _id: number;
  userName: string;
};

let userDetails: Operator | Admin = {
  _id: 1947,
  name: "anuj Panwar",
};

userDetails = { _id: 1947, userName: "ap" };

// both just work fine here

function addIdToDB(id: number | string) {
  if (typeof id === "string") id.toLocaleString();
  else id.toFixed(2);
  console.log(id);
}

addIdToDB(3);
addIdToDB("3");

//array
/**
 * Giving the error in myArray because it can be either an array of string
 * or an array of numbers there is some syntax mistake here
 **/
// const myArray: string[] | number[] = [23, "23", 23];

const myArray: (string | number)[] = [23, "23", 23]; // it works fine
console.log(myArray);

// literal type only assign some values
type literal = "left window" | "middle" | "right window";
let seat: literal = "left window";
// seat = "driver seat"; //giving error
seat = "left window";

export {};
