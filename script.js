// Memory variable
let memory = 0;

// Append values to the display
function appendValue(value) {
    document.calc.display.value += value;
}

// Clear the display
function clearDisplay() {
    document.calc.display.value = '';
}

// Delete the last character
function deleteLastChar() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

// Perform the calculation
function calculateResult() {
    try {
        document.calc.display.value = eval(document.calc.display.value) || '';
    } catch (error) {
        document.calc.display.value = 'Error';
    }
}


// Memory Functions
function memoryClear() {
    memory = 0;
    alert('Memory Cleared');
}

function memoryRecall() {
    document.calc.display.value += memory;
}

function memoryAdd() {
    const currentValue = parseFloat(document.calc.display.value) || 0;
    memory += currentValue;
    alert(`Added to Memory: ${currentValue}`);
}

function memorySubtract() {
    const currentValue = parseFloat(document.calc.display.value) || 0;
    memory -= currentValue;
    alert(`Subtracted from Memory: ${currentValue}`);
}
