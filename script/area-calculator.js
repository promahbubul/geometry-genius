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
  return (element.innerText = area);
}

// Triangle
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    const base = getInputElement("traingle-base");
    const height = getInputElement("traingle-height");
    if (isNaN(base) || isNaN(height)) {
      return alert("Please input only number.");
    }
    const triangleCal = 0.5 * base * height;
    setElement("triangle-area", triangleCal);
    itemAdded("triangle", triangleCal);
  });

// Reactangle
document
  .getElementById("rectangle-calculate")
  .addEventListener("click", function () {
    const width = getInputElement("rectangle-width");
    const length = getInputElement("rectangle-length");
    if (isNaN(width) || isNaN(length)) {
      return alert("Please input only number.");
    }
    const calculation = width * length;
    setElement("rectangle-area", calculation);
    itemAdded("rectangle", calculation);
    
  });

// Parallelogram
document
  .getElementById("parallelogram-calculate")
  .addEventListener("click", function () {
    const base = getInputElement("parallelogram-base");
    const height = getInputElement("parallelogram-height");
    if (isNaN(base) || isNaN(height)) {
      return alert("Please input only number.");
    }
    const calculation = base * height;
    setElement("parallelogram-area", calculation);
    itemAdded("parallelogram", calculation);
  });

// ellipse
document
  .getElementById("ellipse-calculate")
  .addEventListener("click", function () {
    const roundFrist = getInputElement("ellipse-frist-area");
    const roundSecond = getInputElement("ellipse-second-area");
    if (isNaN(roundFrist) || isNaN(roundSecond)) {
      return alert("Please input only number.");
    }
    const calculation = (Math.PI * roundFrist * roundSecond).toFixed(2);
    setElement("ellipse-area", calculation);
    itemAdded("ellipse", calculation);
  });

// Rhombus
document.getElementById('diagonal-calculate').addEventListener('click', function() {
  const diagonalOne = getInputElement('diagonal-one')
  const diagonalTwo = getInputElement('diagonal-two')
  if(isNaN(diagonalOne) || isNaN(diagonalTwo)) {
    return alert('Please input number only')
  }
  const calculate = 0.5 * diagonalOne * diagonalTwo
  setElement('rhombus-area', calculate)
  itemAdded('rhombus', calculate)
})

// Pentagon
document.getElementById('Pentagon-calculate').addEventListener('click', function() {
  const base = getInputElement('Pentagon-base')
  const height = getInputElement('Pentagon-height')
  if(isNaN(base) || isNaN(height)) {
    return alert('Please input number only')
  } 
  const calculate = 0.5 * base * height;
  setElement('Pentagon-area', calculate)
  itemAdded('pentagon',  calculate)
})

// add to calculation entry
function itemAdded(areaName, area) {
  const itemContainer = document.getElementById("calculate-container");
  const count = itemContainer.childElementCount;
  const itemName = document.getElementById(areaName).innerText;
  const p = document.createElement("p");
  p.classList.add("mt-2");
  itemContainer.appendChild(p).innerHTML = `
   <div class="flex text-sm flex-row items-center justify-between">
   <div>${count + 1}. ${itemName}  </div>
   <div>
   ${area} 
   <span>cm<sup>2</sup></span>
   </div>
   <div><button id="convert-mm" class="btn  bg-blue-500 btn-sm text-xs text-white normal-case"><span>Convert to m<sup>2</sup></span></button>
   </div>
   </div>`;
}
