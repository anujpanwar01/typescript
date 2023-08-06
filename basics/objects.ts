// const user = {
//   name: "anuj",
//   email: "anuj@gmail.com",
//   isPaid: true,
//   isActive: true,
// };

// const createUser = ({ name: string, isActive: boolean }) => {};
// createUser(user);

/**
 * TODO: Weird behavior in typescript for objects
 **/

// const addUser = ({ name: string, isEmail: boolean }) => {};
// addUser({ name: "anuj", isEmail: true, isPaid: false }); // function is telling us please don't send this isPaid argument

/**
 * but if we define the obj property in variables it's not giving me error
 * i can add another properties as well
 **/

// const userObj = { name: "anuj", isEmail: true, isPaid: false };
// addUser(userObj);

/**
 * TODO: readonly, optional(?), combine types
 **/

type cardNumber = {
  cardNumber: number;
};
type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: string }; // combine the multiple types

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isPaid: boolean;
  credDetails?: cardDetails; // if value exists ok if not then it's also ok
};

const myDetail: User = {
  _id: "12321312",
  name: "anuj panwar",
  email: "a@p.com",
  isPaid: true,
};

myDetail.email = "anuj@gmail.com";
myDetail.isPaid = false;
// myDetail._id = 324234; //giving me the error you cannot assign the value to id
