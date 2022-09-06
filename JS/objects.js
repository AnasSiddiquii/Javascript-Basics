
// object

let person = {
    firstName:"Anas",
    lastName:"Siddiqui",
    // hello: function () {
    //     console.log("hello");
    // }                           //3rd way
    hello () {
        console.log("hello, i am "+this.firstName+" & i have a "+car.brand+" car");
    }                              //4th way in es6 n above
};

let car = {
    brand:"tata",
    model: 2015

}

person.hello();




console.log(person.firstName); //before-

person.firstName="Amaan"
person.age=20

console.log(person.firstName);
console.log(person); //all
console.log(person.lastName); //['lastName']
console.log(person.age); //add
delete person.age //delete
console.log(person.age); //undefined
console.log("age" in person); //true or false

for(let a in person) {
    console.log(a +" "+person[a]); //dont use .key
}



//function to object = method

// 1st way
person.hello = function () {
    console.log("hello");
}
person.hello()

console.log(person);

// 2nd way // 3rd n 4th scroll up
function hi (){
    console.log("hi");
}

person.hello = hi;

person.hello()




console.log(Math.PI);
console.log(Math.E);
console.log(Math);

var x = Math.round(9.7); //roundoff
console.log(x);

var x = Math.ceil(7.2); //upper
console.log(x);

var x = Math.floor(5.8); //lower
console.log(x);

var x = Math.trunc(3.8); //only no,
console.log(x);

var x = Math.pow(10,3); //square,cube,etc
console.log(x);

var x = Math.sqrt(100); //square root
console.log(x);

var x = Math.min(100, 55, -8, -90, 64); //min no.
console.log(x);

var x = Math.max(100, 55, -8, -90, 64); //mAX no.
console.log(x);

var x = Math.trunc(Math.random()*10)+1; //random no.
// (normally the range will be -1 from multiplication value)
// (+1 to get the range from 1 to 10)
console.log(x);

function random(min,max){
var x = Math.trunc(Math.random()*(max-min+1))+min;
return x;
}

console.log(random(10,20));



