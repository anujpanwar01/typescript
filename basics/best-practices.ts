/**
 * Don't define type if we just assign the value immediately.
 **/

// example:
let myNumber = 123;

/**
 *  we can skip this define type here
 * TODO: because type script is smart enough to detect the type of variable
 * typescript has a feature called type inference
 * so if we don't define the type here typescript automatically take the number type of myNumber variable
 * TODO: and also we can assign other types to this variable
 **/

function signup(name: string, email: string, isPaid: boolean) {}
signup("werw", "rwer", true);

/**
 * If we don't want to pass the first parameter means skip the parameter for function
 * show how we can achieve this -: Todo: just pass the default value of that parameter
 **/

const login = (
  name: string = "anuj",
  email: string = "anuj@gmail.com",
  isPaid: boolean = false
) => {};

login(undefined, undefined);
