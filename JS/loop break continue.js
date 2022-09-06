let counter=12;


// while(counter <= 10){
//     document.write("Anas");
//     document.write("<br>");
//     counter++;
// }


// let sum=0;

// while(counter <= 100){
    
    //     if(counter%2==0){
        //         sum+=counter;
        //     }
        //     counter++;
        // }
        // document.write(sum);
        
        
        
        
        // do{
            //     document.write("Anas");
            //     counter++;
            // }
            
            // while(counter <= 10);
            
    outer:for(let count=1;count<=10;count++){

        //  if(count>=7){
            //     continue;
            // }
            
            document.write(count);
            document.write("<br>");
            
            for(let newcount = 1; newcount<3; newcount++){
                
                if(count==5){
                    break outer;
                }

            document.write("Anas");
            document.write("<br>");
            
                    
        }
    }
    
//     alert("hello");
    
//     let age = prompt("age",20);
    
//     if(age!=null){
//         document.write(age)
//     }
//     else{
//         document.write("blank")
    
// }


// let click = confirm("delete");

// if(click){
    
//     document.write("deleted")
    
// }
// else{
//     document.write("not deleted")
    
// }




// String,Number,Boolean (type conversion)

let type = "anas";

document.write("<br><br><br>");
document.write(type);
document.write("<br><br><br>");
document.write(typeof type);

// newtype=String(type);
// document.write("<br><br><br>");
// document.write(newtype);
// document.write("<br><br><br>");
// document.write(typeof newtype);

// newtype=Number(type);
// document.write("<br><br><br>");
// document.write(newtype);
// document.write("<br><br><br>");
// document.write(typeof newtype);

newtype=Boolean(type);
document.write("<br><br><br>");
document.write(newtype)
document.write("<br><br><br>");
document.write(typeof newtype);
document.write("<br><br><br>");

let str = "anas siddiqui";

let str2 = "bca";
let str3 = "mca";

let str4 = str.concat(str2,str3);
    console.log(str4)


// if("Anas siddiqui"== str){
//     console.log("equal")
// }else{
//     console.log("notequal")
// }


// console.log(str+" "+str2);  //length

//console.log(str[9]);  //length


//console.log(str.length);  //length



// let greet = `hi ${str}`;

// document.write(greet);


let phara = "this is a Javascript program"

console.log(word=phara.substr(10,10));
console.log(word=phara.substring(10,20));
console.log(word=phara.indexOf("javascript",6)); //from start //6=leave no. char
console.log(word=phara.lastIndexOf("javascriptt")); //from end
console.log(word=phara);
console.log(word=phara.trim());
console.log(word=phara.toUpperCase());
console.log(word=phara.toLowerCase());
console.log(word=phara.replace("this", "it"));



console.log(word=phara.includes("javascript"));
