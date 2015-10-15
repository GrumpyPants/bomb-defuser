function solveButtonPuzzle(){
  var color = $('input[name="buttonColor"]:checked').val();
  var label = $('input[name="buttonLabel"]:checked').val();
  var numOfBatteries = $('#buttonBatteries').val();

  //Case 1
  if(color == "blue" && label == "abort"){
    $('#buttonResult').html("");
    $('#releaseHeldButtonText').css('display', 'block');
  }
  else
  //Case 2
  if(numOfBatteries > 1 && label == "detonate"){
    $('#releaseHeldButtonText').css('display', 'none');
    $('#buttonResult').html("Press and immediately release button");
  }
  else
  //Case 3
  if(color == "white" && $("#indicatorCAR").is(':checked')){
    $('#buttonResult').html("");
    $('#releaseHeldButtonText').css('display', 'block');
  }
  else
  //Case 4
  if(numOfBatteries > 2 && $("#indicatorFRK").is(':checked')){
    $('#releaseHeldButtonText').css('display', 'none');
    $('#buttonResult').html("Press and immediately release button");
  }
  else
  //Case 5
  if(color == "yellow"){
    $('#buttonResult').html("");
    $('#releaseHeldButtonText').css('display', 'block');
  }
  else
  //Case 6
  if(color == "red" && label == "hold"){
    $('#releaseHeldButtonText').css('display', 'none');
    $('#buttonResult').html("Press and immediately release button");
  }
  else{
    $('#buttonResult').html("");
    $('#releaseHeldButtonText').css('display', 'block');
  }
}
