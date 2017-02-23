// Functional Programming 101

var arr1 = [1,2,3];

console.log(arr1);

// var arr2 = [];
// for(var i=0; i < arr1.length; i++) {
//     arr2.push(arr1[i]*2);
// }

// Same event but with funcitonal programming

function mapForEach(arr, fn){
    var newArr = [];
    for(var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
            );
    }
    return newArr;
}

function deuceMultiplier(item, multiplier) {
    return item * 2;
}

function greaterThanTwo(item) {
    return item > 2;
}

var arr2 = mapForEach(arr1, deuceMultiplier);

console.log(arr2);

var arr3 = mapForEach(arr1, greaterThanTwo);

console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

// How to preset the intial item.

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 5));

console.log(arr4);

// can also be written thusly

var checkPastLimitSImplified = function(limiter) {
    return function(limiter,item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSImplified(2));

console.log(arr5);
