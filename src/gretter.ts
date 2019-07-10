class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }

}

interface Person {
  firstName: string;
  lastName: string;
}

function gretter(person: Person) {
  return "Hello," + person
}

let user = new Student("sam", "wang", "dd")

document.body.innerHTML = gretter(user)

export default gretter