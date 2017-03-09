// Calling a function to specifically create an object
// is called a funciton constructor!

function Person(name) {

    console.log(this);
    this.firstname = name;
    this.lastname = 'Doe';
    console.log('this is being invoked when creating a new object:' + name);
    console.log('so you need to be careful as each invocation runs the function, creates a new object etc.');
}

var John = new Person('John');

var Jane = new Person('jane');

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(Jane.getFullName());

console.log(John.getFormalFullName());

