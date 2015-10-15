var configurationMap = {
  up: [["001011", "111101"], ["101010", "011011"]],
  down: [["011001", "111101"], ["101010", "010001"]],
  left : [["000010", "100111"], ["000010", "000110"]],
  right: [["101111", "111010"], ["101100", "111010"]]
};

function solveKnobPuzzle(){
  var key1 = document.getElementById("configurationKey1").value;
  var key2 = document.getElementById("configurationKey2").value;
  var result = calculateKnobPosition(key1, key2);
  if (result === null){
    document.getElementById('resultLabel').innerHTML = "No valid solution found for this configuration. Please check your input. Keep in mind that this only works with version 1 of the manual";
  }
  else{
    document.getElementById('resultLabel').innerHTML = result + " position";
  }
}

function calculateKnobPosition(configuration1, configuration2){
  var keys = Object.keys(configurationMap);
  for (var i = 0; i < keys.length; i++){
    var position = keys[i];
    var possibleConfigurations = configurationMap[position];
    for (var j = 0; j < possibleConfigurations.length; j++){
      var possibleConfig = possibleConfigurations[j];
      var keyConfig1 = possibleConfig[0];
      var keyConfig2 = possibleConfig[1];
      if (configuration1 === keyConfig1 && configuration2 === keyConfig2){
        return position;
      }
    }
  }

  return null;
}
