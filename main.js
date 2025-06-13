debugger

let expenses = [];

for (let i = 1; i <= 7; i++) {
let userInput = prompt(`Enter your expense for day ${i}:`);
    let expense = parseFloat(userInput);

    
    if (isNaN(expense)) {
        alert("Invalid input. Please enter a number.");
    } else {
        expenses.push(expense);
    }
}

function getTotalExpense(expensesArray) {
    let total = 0;
    for (let i = 0; i < expensesArray.length; i++) {
        total += expensesArray[i];
    }
    return total;
}


function getAverageExpense(expensesArray) {
    let total = getTotalExpense(expensesArray);
    return total / expensesArray.length;
}


let total = getTotalExpense(expenses);
let average = getAverageExpense(expenses);

document.write("Total expenses for the week: $" + total);
document.write("Average daily expense: $" + average);
