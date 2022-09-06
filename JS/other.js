// let x = new Date(2018,11,23,10,22,56,7);
let x = new Date("oct 13, 2018 11:12:33");

console.log(x);

console.log(x.getTime());

console.log(x.getFullYear());

console.log(x.getMonth());

console.log(x.getDate());

console.log(x.getDay());

console.log(x.getHours());

console.log(x.getMinutes());

console.log(x.getSeconds());

console.log(x.getMilliseconds());


x.setDate(x.getDate()+10);
x.setFullYear(2020);
x.setMonth(11);
console.log(x);


let a = new Date("oct 13, 2018 11:12:33");
let b = new Date("oct 23, 2018 11:12:33");

if(a>b){
    console.log("a is future")
}
else if(a<b){
    console.log("a is past")
    
}
else{
    console.log("a & b are same")

}
  
// new keyword

var person = new Object();

person.name = "anas";

console.log(person.name)



var person2 = {
    name:"anas",
    age:23,
    
    // getname:function(){
        //     return this.name.toUpperCase();
        //     }
        
        // get getname(){
            // return this.name.toUpperCase();
            // },
            
            set setname(n){
                this.name=n.toUpperCase();
            }
        }
        
        // console.log(person2.getname());
        console.log(person2.getname);
        
        person2.setname="amaan"
        console.log(person2);
        
        // console.log(person2.name.toUpperCase())
        console.log(person2.age)
        
        
        
        
        // var std2 = {
        //     fname:"anas",
        //     lname:"siddiqui",
        //     age:23,
        //     year: 2
        // }

        // var std3 = {
        //     fname:"amaan",
        //     lname:"siddiqui",
        //     age:20,
        //     year: 1
        // }

function Student(first,last,age,cls){
      this.fname = first;
      this.lname = last;
      this.age = age;
      this.class = cls;
}

var Student1 = new Student ("anas","siddiqui",23,2);
var Student2 = new Student ("amaan","siddiqui",20,1);



Student1.nationality="indian";

// Student1.name=function(){
//     return this.fname+" "+this.lname;
// }                                     // THIS OR

Student.prototype.gender = "male";

Student.prototype.name =function(){        // THIS  
    return this.fname+" "+this.lname;
}

console.log(Student1);
console.log(Student2);


console.log(Student1.name());


console.log(Student1.gender);



//nested object //api = mblapp/website to server 
var user = {
    id: 101,
    email: "scd8055@gmail.com",
    personalinfo:{
        name:"abs",
        address:{
            street:"gherryt5it",
            city:"jhdfgyitdrf",
            country:"kyhgfjfuoytg"
        }
    }

};


console.log(user.personalinfo.address.city)














hello(); //calling first before execution //hoisting to pull or lift

function hello(){
    console.log("hello world");
}











var f; // f=undefined

console.log(f);

f=9;



// let h;

// console.log(h);

// h=9;









console.log(g);

var g;
g=9;



// console.log(l);

// let l;
// l=9;






//let = error





console.log(v);

var v=9;




// console.log(k);

// let k=9;





x=4; //gives var or let bt itself
console.log(x)

//       "use strict"     for strict mode (let or var needed)