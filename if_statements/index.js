var arithmeticalOperand = prompt("Unesite aritmeticki operator: ");

var a = prompt("Unesite prvi broj: ");
var b = prompt("Unesite drugi broj: ");

a = parseInt(a);
b = parseInt(b);

if(a >= b){
    console.log("Prvi broj " + a + " je veci od " + b);
}

if(a <= b){
    console.log("Prvi broj " + a + " je manji od " + b);
}

if(arithmeticalOperand === "-"){
    console.log("Razlika dva broja je: " + (a - b));
}
else if(arithmeticalOperand === "/"){
    console.log("Kolicnik dva broja je: " + (a / b));
}
else if(arithmeticalOperand === "*"){
    console.log("Proizvod dva broja je: " + (a * b));
}
else{
    console.log("Unet je nepostojeci operand!!!")
}