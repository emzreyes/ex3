let arrays = [[1, 2, 3], [4, 5], [6]];
// task 3.1: use the reduce method in combination with the concat method to “flatten” an array 
// of arrays into a single array that has all the elements of the original arrays.

export function flattening(list) {
    // return a flattened array of all the arrays using reduce method
    return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
}
console.log("task 3-1")
console.log(flattening(arrays))
// 3.2: second task asking us to create a function but to implement it using a regular loop
// Write a higher-order function loop that provides something like a for loop statement. 
// It takes a value, a test function, an update function, and a body function. 
export function loop(value, test, update, body) {
    let curValue = value
    while(true) {
        // console.log("Iteration, curValue " + curValue)
        if(test(curValue)) {
            //if test is true, do body
            // console.log("Calling body...")
            body(curValue)
            curValue = update(curValue)
        } else {
            //console.log("curValue test is false")
            break;
        }
    }
    // the for loop version would be this:
        // for(let curValue = value; test(curValue); curValue = update(curValue)) {
        //     body(curValue)
        // }

// Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
// Then it calls the body function, giving it the current value. Finally, it calls the update 
// function to create a new value and starts from the beginning.

}
console.log("task 3-2")
loop(3, n => n > 0, n => n - 1, console.log);

// tasks 3.3 and 3.4
// every single value when tested must return true for the entire function to return true
export function everyLoop(array, test) {
    let curResult = true
    for(let item of array) {
        // console.log(test(item))
        curResult = curResult && test(item)
    }
    return curResult
}

export function everySome(array, test) {
   return !array.some((value) => !test(value))

}
console.log("tasks 3-3 and 3-4")
//console.log("should be true")
console.log(everySome([1, 3, 5], n => n < 10));
// → true
//console.log("should be false")
console.log(everySome([2, 4, 16], n => n < 10));
// → false
//console.log("should be true")
console.log(everySome([], n => n < 10));
// → true