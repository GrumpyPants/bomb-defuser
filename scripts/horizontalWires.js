function wireNumberChangeHandler(event){
  var numWires = event.target.value;
  if (numWires === "4" || numWires === "5" || numWires === "6"){
    document.getElementById("radioHolder").style.visibility = "visible";
  }
  else{
    document.getElementById("radioHolder").style.visibility = "hidden";
  }

  var selects = document.getElementsByClassName("wireColorSelector");
  for (var i = 0; i < selects.length; i++){
    var select = selects[i];
    if (i >= numWires){
      select.style.visibility = 'hidden';
    }
    else{
      select.style.visibility = "visible";
    }
  }
}

function getWireColorsArray(numWires){
  var selects = Array.prototype.slice.call(document.getElementsByClassName("wireColorSelector"));
  var colorArray = selects.map(function(select){
    return select.value;
  });
  return colorArray.slice(0, numWires);
}

function isSerialNumberLastDigitOdd(){
  var radios = document.getElementsByName('oddLastDigit');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
}

function get3WirePuzzleResult(colorArray){
  if (colorArray.indexOf("red") === -1){
    return "Cut the second wire.";
  }
  else if (colorArray[2] === "white"){
    return "Cut the last wire.";
  }
  else if (filterWireColors("blue", colorArray).length > 1){
    return "Cut the last blue wire."
  }
  else{
    return "Cut the last wire."
  }
}

function get4WirePuzzleResult(colorArray){
  if (filterWireColors("red", colorArray).length > 1 && isSerialNumberLastDigitOdd() === "yes"){
    return "Cut the last red wire.";
  }
  else if (colorArray[colorArray.length - 1] === "yellow" && colorArray.indexOf("red") === -1){
    return "Cut the first wire.";
  }
  else if (filterWireColors("blue", colorArray).length === 1){
    return "Cut the first wire."
  }
  else if (filterWireColors("yellow", colorArray).length > 1){
    return "Cut the last wire."
  }
  else{
    return "Cut the second wire."
  }
}

function get5WirePuzzleResult(colorArray){
  if (colorArray[colorArray.length - 1] === "black" && isSerialNumberLastDigitOdd() === "yes"){
    return "Cut the fourth wire.";
  }
  else if (filterWireColors("red", colorArray).length === 1 && filterWireColors("yellow", colorArray).length > 1){
    return "Cut the first wire.";
  }
  else if (colorArray.indexOf("black") === -1){
    return "Cut the second wire."
  }
  else{
    return "Cut the first wire."
  }
}

function get6WirePuzzleResult(colorArray){
  if (colorArray.indexOf("yellow") === -1 && isSerialNumberLastDigitOdd() === "yes"){
    return "Cut the third wire.";
  }
  else if (filterWireColors("yellow", colorArray).length === 1 && filterWireColors("white", colorArray).length > 1){
    return "Cut the fourth wire.";
  }
  else if (colorArray.indexOf("red") === -1){
    return "Cut the last wire."
  }
  else{
    return "Cut the fourth wire."
  }
}

function solveWirePuzzle(){
  var numWires = document.getElementById("wireNumberSelector").value;
  var colorArray = getWireColorsArray(numWires);
  var result;
  if (numWires === "3"){
    result = get3WirePuzzleResult(colorArray);
  }
  else if (numWires === "4"){
    result = get4WirePuzzleResult(colorArray);
  }
  else if (numWires === "5"){
    result = get5WirePuzzleResult(colorArray);
  }
  else if (numWires === "6"){
    result = get6WirePuzzleResult(colorArray);
  }
  else{
    result = "Invalid number of wires.";
  }

  document.getElementById("horizontalWireResultLabel").innerHTML = result;
}

function filterWireColors(color, colorArray){
  return colorArray.filter(function(element){
    return element === color;
  });
}