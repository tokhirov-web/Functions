// function name(params) { // DECLARATION

// }



// let func = () => {  // EXPRESSION

// }


// function sayHi(params) {
//     alert("Hi " + params);
// }

// sayHi("Amal")
// sayHi("John")


// let boys = ["John", "Mike", "Joe"];

// let girls = ["Monica", "Sasha", "Fanoza"];


// // for(let item of boys) {
// //     console.log("Hi " + item);
// // }


// function sayHi(arr, word) {
//     for (let item of arr) {
//         console.log("Hi " + word + " " + item);
//     }
// }

// sayHi(boys, "Mr")
// sayHi(girls, "Ms")



// let name = "Alex"
// let age = 29

// function check(identity, maturnity) {

//     if (identity[0] === "A" && maturnity >= 18) {
//         alert("Checked")
//     } else {
//         alert("Not qualified")
//     }

// }

// check("Timur", 17)

// function claculator(a, b, method) {
//     switch (method) {
//         case "+": console.log(a + b);

//             break;

//         case "-": console.log(a - b);

//             break;

//         case "*": console.log(a * b);

//             break;

//         case "/": console.log(a / b);

//             break;


//         default:
//             break;
//     }

// }

// claculator(2,2, "+")
// claculator(8,10, "*")


// let qualifiedCars = + prompt("Enter the number of cars that you exported")
// let brokenCars = + prompt("Enter the number of broken cars")

// function thePercentage(bad, normal, isPercent) {
//     if(isPercent === true) {
//         console.log(Math.round(bad * 100 / normal));
//     } else {
//         console.log(bad * normal / 100);
//     }
// }

// thePercentage(243, 17000, true)


// function getTheLongestName(n1, n2, n3) {
//     let arr = [n1, n2, n3]

//     let ln = ''

//     for (let item of arr) {
//         if (item.length > ln.length) {
//             ln = item
//         }
//     }
//     console.log(ln);
// }

// getTheLongestName("Baskov", "Morgenshtern", "Meladze")