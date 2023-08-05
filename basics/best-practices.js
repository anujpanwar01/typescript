/**
 * Don't define type if we just assign the value immediately.
 **/
// example:
var myNumber = 123;
/**
 *  we can skip this define type here
 * TODO: because type script is smart enough to detect the type of variable
 * typescript has a feature called type inference
 * so if we don't define the type here typescript automatically take the number type of myNumber variable
 * TODO: and also we can assign other types to this variable
 **/
function signup(name, email, isPaid) { }
signup("werw", "rwer", true);
/**
 * If we don't want to pass the first parameter means skip the parameter for function
 * show how we can achieve this -: Todo: just pass the default value of that parameter
 **/
var login = function (name, email, isPaid) {
    if (name === void 0) { name = "anuj"; }
    if (email === void 0) { email = "anuj@gmail.com"; }
    if (isPaid === void 0) { isPaid = false; }
};
login(undefined, undefined);
