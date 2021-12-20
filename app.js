// Email Pattern

let email = 'admin@proariful.me';

let emailPattern = /^[a-z0-9\._\-]{1,}@[a-z0-9\-]*\.[a-z]{2,5}$/;

console.log(emailPattern.test(email));


// User Name Pattern

let userName = 'arif2021';

let userNamePattern = /^[a-z]{3,}[0-9]{2,}$/;

console.log(userNamePattern.test(userName));


// Bangladesh Phone Number

let phone = '+8801738640546';

let phoneNumberPattern = /^(01|8801|\+8801)[0-9]{9,9}$/;

console.log(phoneNumberPattern.test(phone));


// Password Pattern

let pass = 'a!Ae#D6q'

let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%*])(?=.*[0-9]).*$/;

console.log(passPattern.test(pass));


// Zip Code Pattern

let zip = '6720';

let zipPattern = /^[1-9]{1}[0-9]{3}$/; // Only For Bangladesh

console.log(zipPattern.test(zip));