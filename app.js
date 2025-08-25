let lst = [];

while (true) {
    let prp = prompt("Enter which task you want to perform (add / quit)");

    if (prp === 'quit') {
        console.log("Have a nice day!! 😊😊");
        break;
    } 
    else if (prp === 'add') {
        let task = prompt("Please enter your task:");
        lst.push(task);
        console.log(`Task "${task}" added!`);
    } 
    else {
        console.log("Invalid input! Type 'add' to add a task or 'quit' to exit.");
    }
}

console.log("Your task list:", lst);
