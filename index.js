const receivesAFunction = (callback) =>  callback()

const returnsANamedFunction = () => {
    return function Name() {
    } 
}

const returnsAnAnonymousFunction = () => {
    return function () {
        console.log("This is an anonymous function.")
    }
}

const anonymous = returnsAnAnonymousFunction();

anonymous;