// let book = [["math",300], ["msc",400], ["sst",500], ["science",600]];
// book[2][0]="eng";
// console.log(book.length);

// let book = ["math", "msc", "sst", "science"];
// book.push("eng"); //at the end
// book.unshift("eng"); //at the start
// book.pop(); //to delete
// book.shift(); //to delete
// book.splice(1,2); //to delete mcs n sst
// book=[]; //same
// book.length=0; //same
// console.log(book);


let book = ["math", "msc", "sst", "science"]; //on
// let position = book.indexOf("msc");
// let book = 'maths'; //off
console.log(Array.isArray(book));

let text = "this is a random text";
let split = text.split(" ");

let books = ["math", "msc", "sst", "science"]; //on
let join = book.join(" ");

console.log(split);
console.log(join);

let book2 =["hindi","english"];
let book3 =["hindi","english"];

let newbook = book.concat(book2,book3);
console.log(newbook);


let length = book.length;
console.log(length)

for(i=0;i<length;i++){
    console.log(`Element ${i} is ${book[i]}`)
}

// same

book.forEach(myfu);

function myfu(value){
  console.log(value)
}





// functions

// alert();




function table(a){
    
    for(i=1; i<=5; i++){
        document.write(`${a} x ${i} = ${a*i}`);
        document.write("<br>");
    }
    document.write("<br>");
    
}

table(12);

document.write("hello <br>");
document.write("<br>");

table(5);



function add(){
    console.log(arguments[1]);
}

// add(2,5);
add(2,5,7);
// add(2,5,7,9);




function add1(){

    if(arguments.length==0){
        console.log("no number found");
    } else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum=sum+arguments[i];
        } console.log(sum);
    }
}

let cab = add1; //function in variable

add1(2,3,4,5,6)
cab(2,3,4,6)



function compare(a,b){
    if(a>b){
        return 1;
    }else if(b>a){
        return -1;
    }else{
        return 0;
    }
}
let c = compare(7,5);

document.write(c);
document.write("<br>");




let car1="tata";
console.log(car1)

function add4(){
    
    let car2="tvs";
    console.log(car2); 
    console.log(car1);
}

function add5(){
    
    let car2="nano";
    console.log(car2);
}

add4()

add5()

let car2="audi";


console.log(car2)




//anonymous function
let show = function(){
    console.log("hi");
}

//() //show()

// timer
setTimeout(show,2000);

setTimeout(function(){console.log("hello");},3000);



//immidiate invoke for 3rd party codes
(function(){console.log("hi");})();

