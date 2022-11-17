//   Example 1

let promiseResult = new Promise((resolve, reject) => {
    let val = 1 + 7;
    if (val === 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promiseResult
    .then((message) => {
        console.log("This is in THEN " + message);
    })
    .catch((message) => {
        console.log("This is in CATCH " + message);
    });

//   Example 2

function add(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n1 === 0) {
            reject("First number is zero!");
        }
        resolve(n1 + n2);
    });
}

function multiply(n1, n2) {
    return new Promise((resolve, reject) => {
        resolve(n1 * n2);
    });
}

add(10, 10)
    .then((sum) => {
        console.log("Sum is :" + sum);
        return multiply(sum, 10);
    })
    .then((product) => {
        console.log("Product is :" + product);
    })

    .catch((message) => {
        console.log(message);
    });

/*****************PROMISE METHODS******************/

let promise1 = new Promise((resolve, reject) => {
    resolve("Resolved Promise 1");
});

let promise2 = new Promise((resolve, reject) => {
    resolve("Resolved Promise 2");
});

let promise3 = new Promise((resolve, reject) => {
    resolve("Resolved Promise 3");
});

Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages); // returned all promises when all are success.
});

Promise.race([promise1, promise2, promise3]).then((message) => {
    console.log(message); // returned only the first promise, if it is success.
});

Promise.any([promise1, promise2, promise3]).then((message) => {
    console.log(message); // returned only one promise when atleast one is success. else gives an AggregateError.
});
