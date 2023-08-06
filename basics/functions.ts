const sum = (a: number, b: number): number => {
  return a + b;
};

const myLords = ["Jai Sri Ram", "Jai Ist devta", "Jai Bajrangbali"];

myLords.map((lord): string => `I love my Lord, ${lord}`);

// TODO: never types -: when we want to terminate the program and throw an error, we don't assign the value in never type

const handleErrors = (msg: string): never => {
  throw new Error(
    "There is something breaking please refresh the page" + " " + msg
  );
};

