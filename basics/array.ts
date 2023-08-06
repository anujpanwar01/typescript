const myArray: string[] = [];
myArray.push("df");

const myArray2: Array<number> = [];
myArray2.push(1);

const allUsers: Array<User> = [];
allUsers.push({ name: "anuj", isActive: false });

//2d array
const d2Array: number[][] = [[1, 2, 3]];


export {};

type User = {
  name: string;
  isActive: boolean;
};
