/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
    size >= 2 &&
    size <= 50);
}

/**calculate area from two sides */

function calculateArea(aSide, bSide) {
  return (aSide * bSide) / 2;
}

/** calculate hypotenuse from two sides */

function calculateHypotenuse(aSide, bSide) {
  return Math.round(Math.sqrt((aSide * aSide) + (bSide * bSide)));
}

/** craft message from hypotenuse and area results */

function craftMessage(area, hypotenuse) {
  let message = `Hypotenuse is ${hypotenuse} and area is ${area}.`;
  if (area > 50) {
    message += ` That's a really big triangle!`;
  }
  return message;
}

/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  const firstSide = +document.getElementById("side-a").value;
  const secondSide = +document.getElementById("side-b").value;

  const firstValid = validateEdge(firstSide);
  const secondValid = validateEdge(secondSide);

  let firstMessage = firstValid ? "" : "Invalid!";
  let secondMessage = secondValid ? "" : "Invalid!";

  let outputMessage;

  if (firstValid && secondValid) {
    const area = calculateArea(firstSide, secondSide);
    const hypot = calculateHypotenuse(firstSide, secondSide);
    outputMessage = craftMessage(area, hypot);
  } else {
    outputMessage = "";
  }

  document.getElementById("a-msg").innerHTML = firstMessage;
  document.getElementById("b-msg").innerHTML = secondMessage;
  document.getElementById("msg").innerHTML = outputMessage;
}

/** Form Submit Event Listener */

document.getElementById("triangle-form").addEventListener(
  "submit",
  processForm);
