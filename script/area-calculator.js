/**
 * 1. Add event handeler on button
 * 2. get base element and convert it number
 * 3. get height element and convert it number
 * 4. calculate: 0.5 * base * height
 * 
 */


function getInputElement(id) {
    const inputElement = document.getElementById(id);
    const inputValueString = inputElement.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function setElement(id, area) {
    const element = document.getElementById(id);
    return element.innerText = area;
}


// Triangle
document.getElementById('triangle-calculate').addEventListener('click', function() {
    const base = getInputElement('traingle-base')
    const height = getInputElement('traingle-height')
    const triangleCal = 0.5 * base * height
   setElement('triangle-area', triangleCal)
})

// Reactangle
document.getElementById('rectangle-calculate').addEventListener('click', function() {
    const width = getInputElement('rectangle-width')
    const length = getInputElement('rectangle-length')
    const calculation = width * length;
    setElement('rectangle-area', calculation)
})

// Parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function() {
    const base = getInputElement('parallelogram-base')
    const height = getInputElement('parallelogram-height')
    const calculation = base * height;
    setElement('parallelogram-area', calculation)
})