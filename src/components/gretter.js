"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        // return `${firstName} ${lastName}`;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
function gretter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new User('sam', 'wangs');
console.log(gretter(user));
exports["default"] = gretter;
