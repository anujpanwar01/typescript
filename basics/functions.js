var sum = function (a, b) {
    return a + b;
};
var myLords = ["Jai Sri Ram", "Jai Ist devta", "Jai Bajrangbali"];
myLords.map(function (lord) { return "I love my Lord, ".concat(lord); });
// TODO: never types -: when we want to terminate the program and throw an error
var handleErrors = function (msg) {
    throw new Error("There is something breaking please refresh the page" + " " + msg);
};
