

function calculateArea(length, width) {
    let area = length * width;  // Area calculate ho raha hai
    return area;  // Area ko wapas return kar rahe hain
}

// User input ke liye prompt use karte hain
let length = prompt("Length enter karo: ");
let width = prompt("Width enter karo: ");

// String ko number mein convert karte hain
let areaResult = calculateArea(Number(length), Number(width));  // User input ko number mein convert kiya
console.log(areaResult);  // Area print hoga
