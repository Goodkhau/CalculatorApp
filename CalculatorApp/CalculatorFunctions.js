function display(input) {
    const element = document.getElementById("calculatorDisplay");
    if (element.value.length == 0) {
        if (!Number.isNaN(Number(input))) {
            element.value = input;
        }
        return;
    }

    element.value += input;
}

function clearDisplay() {
    const element = document.getElementById("calculatorDisplay");
    element.value = "";
}

function removeChar() {
    const element = document.getElementById("calculatorDisplay");
    element.value = element.value.substring(0,element.value.length-1);
}

function calculate() {
    const element = document.getElementById("calculatorDisplay");
    try {
        element.value = eval(element.value);
    }
    catch (error) {
        element.value = "Error";
    }
}