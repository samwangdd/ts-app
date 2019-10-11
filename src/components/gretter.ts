class User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    // return `${firstName} ${lastName}`;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

interface IPerson {
  firstName: string;
  lastName: string;
}

function gretter(person: IPerson) {
  return `Hello ${person}`;
}

let user = new User('sam', 'wangs');

console.log(gretter(user));

export default gretter;
