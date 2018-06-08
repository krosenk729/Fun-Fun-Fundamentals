/*******************************************************************
Bind () method primarily to call a function with the 
this value set explicitly


The need for bind usually occurs when we use the this keyword 
in a method and we call that method from a receiver object


$ ("button").click (user.clickHandler);
$ ("button").click (user.clickHandler.bind (user));
*/

const myObjWrapper = {
    num: 222,
    logNum: function(){
        return this.num;
    }
};
const num = 111;
const logNum = myObjWrapper.logNum;

console.log('1. ', logNum());
console.log('2. ', myObjWrapper.logNum());
console.log('3. ', myObjWrapper.logNum.bind(myObjWrapper)());
console.log('4. ', myObjWrapper.logNum.bind({num: 333})());


/*******************************************************************
Call () and Apply ()
execute a function in the context, or scope, of the first argument

call - subsequent arguments are passed in to the function as they are
apply - expects the second argument to be an array that it unpacks as arguments for the called function
*/
const sayHello = function(param){
    console.log('Hello, ' + this.name + ' ... ' + param);
};

const sayGoodbye = function(param){
    console.log('Goodbye, ' + this.name + ' ... ' + param);
};

sayHello('hooray'); // undefined
sayGoodbye('hooray'); // undefined
sayHello.call({name: 'Oreo'}, 'hooray'); // Oreo
sayGoodbye.call({name: 'Oreo'}, 'hooray'); // Oreo
sayHello.apply({name: 'Soccer'}, ['hooray']); // Soccer
sayGoodbye.apply({name: 'Soccer'}, ['hooray']); // Soccer
