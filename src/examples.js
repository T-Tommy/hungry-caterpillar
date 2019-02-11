const examples = () => {

    /* TERNARY OPERATOR */
    // useful as a binary switch
    // <condition> ? <expression1> : <expression2>
    console.log(1 > 2 ? '1 > 2 is true' : '1 > 2 is false');



    /* FUNCTIONS */
    // all of the following will make a function and store it in a variable
    
    // arrow function
    const divide = (a, b) => {
        return a / b;
    };
    // arrow function: implicit return
    const multiply = (a, b) => a * b;
    // arrow function: single argument, implicit return
    const addFive = a => a + 5;

    // function expression
    const add = function (a, b) {
        return a + b;
    };

    // function definition
    // this is hoisted, meaning you can call it before it's defined
    function subtract(a, b) {
        return a - b;
    }



    /* EVENT LISTENER CALLBACKS */
    // the second argument must be a value of type function
    // the log method of the console object is a function so..
    document.addEventListener('click', console.log);
    // is equivalent to 
    document.addEventListener('click', event => console.log(event));
    // is equivalent to 
    document.addEventListener('click', event => {
        console.log(event);
    });
    // is equivalent to
    document.addEventListener('click', function(event) {
        console.log(event);
    });
    // to understand this, it's key to know that when the event occurs, the event object is created.
    // that object is passed to the handler function (given as the second argument of the addEventListener method)
    // as its first argument!
    // if the handler you set up doesn't take arguments, whatevs nbd
    // but if it has any parameters set up, the first one will always be the event object
    // for example, this is the same as all the ones above
    document.addEventListener('click', function(e) {
        console.log(e);
    });
    // the event object is just stored in var e now
    // if you want your handler to have access to variables outside of its scope, you'll need a closure
    
    // aside: if you want to go down the rabbit hole, think about why 
    // () => console.log('thing')
    // returns the same value as 
    // () => {
    //     console.log('thing')
    // }
    // hint: what's console.log(console.log('sjfd')) ?




    /* CLOSURES */
    // at their most basic, closures are functions that return functions
    function setupEventHandler() {
        function eventHandler(event) {
            console.log(event);
        }

        return eventHandler;
    }
    // equivalent to 
    function setupEventHandlerV2() {
        return e => {
            console.log(e);
        };
    }
    // equivalent to
    function setupEventHandlerV3() {
        return console.log;
    }
    // equivalent to
    const setupEventHandlerV4 = () => console.log;

    // used in
    document.addEventListener('click', setupEventHandler());
    // is the same as
    document.addEventListener('click', console.log);

    // they're useful when you need to give the eventHandler function access to
    // variables that it wouldn't get from the event object.
    // like say if you wanted to console.log something else

};

export default examples;