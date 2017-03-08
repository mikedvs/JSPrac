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

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: "Jane",
    getFormalFullName: function () {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstlName: function () {
        return this.firstname;
    }
}

// Extend using Underscore.

_.extend(john, jane, jim);

console.log(john);

