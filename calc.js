

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

let currentInput = "";
let operator = null;
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput === "") return; // Prevent invalid operations
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        } else if (value === ".") {
            if (!currentInput.includes(".")) {
                currentInput += value;
            }
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || previousInput || "0";
    });
});

clear.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = null;
    display.textContent = "0";
});

equal.addEventListener("click", () => {
    if (!operator || !currentInput || !previousInput) return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
    }

    display.textContent = result;
    currentInput = result;
    previousInput = "";
    operator = null;
});
