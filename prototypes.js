// Classical Inheritance
// - Verbose.

// Prototypal Inheritance
//  - flexible
//  - extensible
//  - easy to understand

// Everything is an Object (or a primitive)

var a = {};
var b = function() {};
var c = [];

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: "John",
    lastname: "Doe"
}

john.__proto__ = person;

