//---Friday---
// // 1
// num = 15;
// if (num % 2 === 1){
//     console.log("odd");
// }
// else{
//     console.log("even");
// }
// // 2
// a = 7
// b = 78
// c = 78
// if (a > c){
//     if (a > b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// else{
//     if (c > b){
//         console.log(c);
//     }
//     else{
//         console.log(b);
//     }
// }
// // 3
// const HasCat = true;
// switch(HasCat){
//     case true:
//         console.log("let buy");
//     default:
//         break

// }
// // 4
// const dog = true;
// const cat = false;
// if (cat === true || dog === true){
//     console.log("let buy");
// }
// // 5
// const score = 51;
// if (score < 51){
//     console.log("Fail");
// }
// else if (score > 50 && score < 70){
//     console.log("pass");
// }
// else if (score > 69 && score < 80){
//     console.log("D");
// }
// else if (score > 79 && score < 90){
//     console.log("C");
// }
// else if (score > 89 && score <100){
//     console.log("B");
// }
// else if (score === 100){
//     console.log("A");
// }
//---sunday---
// // 6
// const arr = [
//     {
//         name: "Liam",
//         surname: "Smith",
//         points: 50
//     },
//     {
//         name: "Sergey",
//         surname: "Brin",
//         points: 95

//     },
//     {
//         name: "Elon",
//         surname: "Musk",
//         points: 100
//     }
// ];
// if (arr[0].points > 60){
//     console.log(arr[0]);
// };
// if (arr[1].points > 60){
//     console.log(arr[1]);
// };
// if (arr[2].points > 60){
//     console.log(arr[2]);
// }
// //7
// const people = [
//     {
//         name: "Elon",
//         surname: "Musk",
//         phone: "+1 800 613 8840"
//     },
//     {
//         name: "Mark",
//         surname: "Zuckerberg",
//         phone: "+1 650 543 4800"
//     },
//     {
//         name: "Bill",
//         surname: "Gates",
//         phone: "(206) 709-3100"
//     },
//     {
//         name: "Jimmy",
//         surname: "Donaldson",
//         phone: "+1(917)259-6364"
//     },
// ];
// console.log("name: " + people[0].name);
// console.log("surname: " + people[0].surname);
// console.log("phone: " + people[0].phone);
// console.log();
// console.log("name: " + people[1].name);
// console.log("surname: " + people[1].surname);
// console.log("phone: " + people[1].phone);
// console.log();
// console.log("name: " + people[2].name);
// console.log("surname: " + people[2].surname);
// console.log("phone: " + people[2].phone);
// console.log();
// console.log("name: " + people[3].name);
// console.log("surname: " + people[3].surname);
// console.log("phone: " + people[3].phone);
// //8
// const passwords = {
//     Meta: "M1e1t1a1",
//     Google: "pro001",
//     twitter: "pro001",
//     Microsoft: "bill01ms",
// };
// if (passwords.Meta === passwords.Google){
//     console.warn("Warning: Passwords of Meta and Google are the same. please change");
// };
// if (passwords.Meta === passwords.twitter){
//     console.warn("Warning: Passwords of Meta and twitter are the same. please change");
// };
// if (passwords.Meta === passwords.Microsoft){
//     console.warn("Warning: Passwords of Meta and Microsoft are the same. please change");
// };
// if (passwords.Google === passwords.twitter){
//     console.warn("Warning: Passwords of Meta and twitter are the same. please change");
// };
// if (passwords.Google === passwords.Microsoft){
//     console.warn("Warning: Passwords of Meta and Microsoft are the same. please change");
// };
// if (passwords.twitter === passwords.Microsoft){
//     console.warn("Warning: Passwords of twitter and Microsoft are the same. please change");
// };
// // 9
// const users = [
//     {
//         EMail: "info@tesla.com",
//         password: "tsla1"
//     },
//     {
//         EMail: "zuck@fb.com",
//         password: "metameta"
//     },
//     {
//         EMail: "info@linusmediagroup.com",
//         password: "linustechtips"
//     }
// ];
// let i = 0;

// while (i < users.length) {
//     if (users[i].password.length < 6){
//         console.warn("password of " + users[i].EMail + ' account is less than 6 symbols. please change')
//     };
//     i++;
// }
// // 10
// const inputs = {
//     first: "+1 123 123 5546",
//     second: "+78 500 522 213",
//     third: "+995 555 000 001"
// };

// let i = 0;
// var input = inputs[Object.keys(inputs)[i]]
// let num = input[0] + input[1] + input[2] + input[3];
// i += 1
// if (num !== "+995"){
//     console.log(input);
//     console.log("enter number which starts with +995");
// }
// else{
//     console.log(input);
// }
// while (num !== "+995"){
//     var input = inputs[Object.keys(inputs)[i]]
//     num = input[0] + input[1] + input[2] + input[3];
//     i += 1;
//     if (num !== "+995"){
//         console.log(input);
//         console.log("enter number which starts with +995");
//     }
//     else{
//         console.log(input);
//     }
    
// }