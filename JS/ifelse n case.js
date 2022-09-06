let age = 15; votercard = "yes";

if(age >= 14){
    
    if(votercard != "yes"){
        alert("Get your card");
       }
       
    else{  
        alert("You can vote");
    }   
}
   
else{  
    alert("You cannot vote");
}

let user = 0;

if(user==0){
    document.write("Logged In")
}

else if(user==1){
    document.write("Logged Out")
}

else{
    document.write("Invalid Input")
}



// let user = 0;

// let option = user == 0 ? "Logged In" : "Logged Out";

// document.write(option)



let user1;

// user1="anas";

alert(user1 ?? "guest") 

// ?? means assigning value to undefined variable











let input;

input ="y";




// use of basic if else 





// if(input===1){
//     document.write("continue");
// }

// else if(input==="y"){
//     document.write("continue");
// }

// else if(input==="yes"){
//     document.write("continue");
// }

// else if(input===0){
//     document.write("end");
// }

// else if(input==="n"){
//     document.write("end");
// }

// else if(input==="no"){
//     document.write("end");
// }

// else{
//     document.write("ivnvalid");
// }






// use of basic case





// switch(input){
// case 1:
//     document.write("continue");
//     break;
// case "y":
//     document.write("continue");
//     break;
// case "yes":
//     document.write("continue");
//     break;
// case 0:
//     document.write("end");
//     break;
// case "n":
//     document.write("end");
//     break;
// case "no":
//     document.write("end");
//     break;
// default :
//     document.write("invalid");
// }





// use of advance case




// switch(input){
// case 1:
// case "y":
// case "yes":
//     document.write("continue");
//     break;
// case 0:
// case "n":
// case "no":
//     document.write("end");
//     break;
// default :
//     document.write("invalid");
// }






// use of advance if else






if(input===1 || input==="y" || input==="yes"){
    document.write("continue");
}

else if(input===0 || input==="n" || input==="no"){
    document.write("end");
}

else{
    document.write("ivnvalid");
}
