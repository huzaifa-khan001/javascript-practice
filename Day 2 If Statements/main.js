let nameInput = prompt("Enter Your Name");

let ageInput = prompt("How old are you?");

let isMember = prompt("Do you have membership");

if(ageInput <=10){
    console.log("Congrats!🎉, Your Ticket🎫 is Free lil Kid");
}

if(ageInput >=10 <=20){
    console.log("You are Eligible for Inclusive Discount👍 since you are" + ageInput + "Years old");
}

if(ageInput >60){
    console.log("Congratulations!🎉, Mr." + nameInput + "Your Ticket is 💯% Free  Old Man 😊");
}

if(isMember == 'yes'){  
    console.log("Welcome Back!🤚," + nameInput);
}

if(ageInput !== 10 >=20 <=10 !== 60 <60 !== isMember !== 'yes'){
    console.log("Unfortunately😐, Mr" + " " + nameInput + " " + "You are uneligible for any of our offers. Since you don't meet the following: \n1. 10 Years old or younger. \n2. 60 or Older. \n3. Must be a VIP member. \n4. Age b / w 10 - 20. \nBut Don't worry, We've got you covered. \nBecome a 👑VIP👑 Member & get 🫴50% Discount for getting 1st Time Membership🙂.");
}