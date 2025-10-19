'use strict';
// 1-topshiriq
let a = 5;
let b = 8;
console.log(a + b);
// 2-topshiriq
console.log(a - b);
// 3-topshiriq
console.log(a * b);
// 4-topshiriq
console.log(a / b);
// 5-topshiriq
let c = 10;
let d = 3;
console.log(c % d);
// 6-topshiriq
let s = 5;
let f = 10;
let p = 15;

let ortacha = (s + f + p) / 3;

console.log("O‘rtacha qiymat: " + ortacha);
// 7-topshiriq
let q = 5;
let P = 4 * q;
let S = q * q;
console.log("Perimetr: " + P);
console.log("Yuza: " + S);
// 8-topshiriq
let r = 5;
let pt = 6;
let P1 = 2 * (r + pt);
let S1 = r * pt;
console.log("Perimetr: " + P1);
console.log("Yuza: " + S1);
// 9-topshiriq


// 10-topshiriq
let a1 = 100;

let oshirilgan = a1 + 1;
let kamaytirilgan = a1 - 1;

console.log("Asl son: " + a1);
console.log("1 ga oshirilgan: " + oshirilgan);
console.log("1 ga kamaytirilgan: " + kamaytirilgan);
// 11-topshiriq
let ism = "Mr";
let familiya = "Nineteen";
console.log(ism + "." + familiya);
// 12-topshiriq
let ism1 = "Sherozbek";
console.log("Salom, " + ism1 + "!");
// 13-topshiriq
let age = 18;
console.log("Mening yoshim " + age + " da.");
// 14-topshiriq
let place = "Farg'ona";
console.log("Men " + place + " shahrida yashayman.");
// 15-topshiriq
let text = "Men";
let text1 = "bugun";
let text2 = "darsdaman";
console.log(text + " " + text1 + " " + text2 + ".");
//-------------------------------------------------------------
// 16-topshiriq
document.getElementById("button").onclick = function() {
    let login = document.getElementById("login").value;
    alert("Sizning loginingiz: " + login + "!");
}
//-------------------------------------------------------------
// 17-topshiriq
document.getElementById("button2").onclick = function() {
    let login2 = document.getElementById("login2").value;
    let password = document.getElementById("password").value;
    console.log("Sizning loginingiz: " + login2 + " va parolingiz: " + password + "!");
} 


