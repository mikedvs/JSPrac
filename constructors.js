// Calling a function to specifically create an object
// is called a funciton constructor!

function Person(name) {

    console.log(this);
    this.firstname = name;
    this.lastname = 'Doe';
    console.log('this is being invoked when creating a new object:' + name);
    console.log('so you need to be careful as each invocation runs the function, creates a new object etc.');
}

var john = new Person('John');

var john = new Person('jane');

