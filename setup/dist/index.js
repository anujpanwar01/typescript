"use strict";
class User {
    email;
    name;
    city = "Dehradun";
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }
}
const myUser = new User("anuj", "anujpanwar7911@gmail.com");
