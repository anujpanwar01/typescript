//Enums are used to define named constants in Typescript
// just like we define the constants in js with const keywords

const enum MyConst {
  SUPER_ADMIN = 0,
  ADMIN,
  OPERATOR,
}

const isAdmin = MyConst.ADMIN === 1;
