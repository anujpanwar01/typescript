class User {
  email: string;
  name: string;
  readonly city: string = "Dehradun";
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

const myUser = new User("anuj", "anujpanwar7911@gmail.com");
