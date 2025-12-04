let nic = true;

let age = prompt("Enter Your Age");

let nameInput = prompt("Enter You name");

if(nameInput == "" && age >=18 && nic == true){
    console.log("You didn't provide you name, but we respect your privacy, Since you meet the required criteria, you are eligible for the driving license.");
}

else if(age <18){
    console.log("You must be 18 or above to be eligible for the Driver License.");
}

else if(nic !== true){
    console.log("Please Provide your National Identity Card to be eligible for the driving license.");
}

else {
    console.log("You are eligible for the Driving License.");
}