function display(input) {
    const element = document.getElementById("calculatorDisplay");
    if (element.value.length == 0) {
        if (typeof input === "number") {
            element.value = input;
        }
        return;
    }

    let equationList = element.value.split(" ");
    if (equationList.length == 1) {
        if (typeof input === "number") {
            element.value += input;
        }
        if (typeof input === "string") {
            element.value += " " + input;
        }
        return;
    }

    if (equationList.length == 2) {
        if (typeof input === "number") {
            element.value += " " + input;
        }
        if (typeof input === "string") {
            element.value.charAt(element.value.length) = input;
        }
        return;
    }

    if (equationList.length == 3) {
        if (typeof input === "number") {
            element.value += input;
        }
        return;
    }
}

function clearDisplay() {
    const element = document.getElementById("calculatorDisplay");
    element.value = "";
}