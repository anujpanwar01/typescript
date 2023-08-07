interface USER {
  readonly _id: string;
  name: string;
  isActive: boolean;
  googleOauthId?: string;
  //   startTrail: (day: number) => number;
  startTrail(day: number): number; //you don't need to copy paste same variable name we can use out params
  getCoupon(couponName: string, discount: number): string;
}

/**
 * TODO: One of the big advantage to use the interface you can create a new interface with same name
 * and it will take all previous interfaces prop as well
 * example -:
 */

// TODO: Most common name "REOPENING INTERFACE"
// TODO: IMP: Type can't be reopen like this;
interface USER {
  facebookId: number;
}

/**
 * TODO: Inheritance
 */

interface MyRole extends USER {
  roleName: "Super Admin" | "Admin" | "Operator";
  readonly roleId: 0 | 1 | 2;
}
const myUser: MyRole = {
  _id: "123123",
  name: "anuj",
  roleName: "Admin",
  roleId: 0,
  isActive: true,
  facebookId: 123123123,
  startTrail: (remainingDays = 40) => remainingDays,
  getCoupon: (name = "Diwali", discount = 10) =>
    `You got the ${name} coupon and use it to in amazon you got atleast ${discount}%`,
};

export {};
