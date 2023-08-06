"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 3; // only two values can be assignable
score = "234";
var userDetails = {
    _id: 1947,
    name: "anuj Panwar",
};
userDetails = { _id: 1947, userName: "ap" };
// both just work fine here
function addIdToDB(id) {
    if (typeof id === "string")
        id.toLocaleString();
    else
        id.toFixed(2);
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
var myArray = [23, "23", 23]; // it works fine
console.log(myArray);
var seat = "left window";
seat = "driver seat"; //giving error
seat = "left window";
