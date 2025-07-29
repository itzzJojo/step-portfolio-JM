console.log("Hello World");

let chicken = 123;
console.log(chicken);


console.log(10+ "eggs");
console.log(10+8+ "eggs")
console.log("eggs"+ 10+8);

//Both Conditions need to be true
console.log(7>3)&&(10>8);

//only one condition must be true 
console.log(10>3) ||(5>10);

//if the staement is logical or not
console.log(!5>3)


const hour = new Date().getHours();
let greeting = "";

if (hours<12){
    greeting ="Good morning";
}else if (hour<18){
    greeting = "Good afternoon";
}else{
    greeting = "Good evening";
}

document.getElementById("greeting").innerText = greeting;