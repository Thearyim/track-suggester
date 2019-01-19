function showTrack(track) {
  $("#output").text(track);
  $("#tracker").hide();
  $("#result").show();
}

function getTrack(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer, question6Answer) {
  var track = "Wow! You might enjoy full-stack development, courses like CSS/Design, Ruby/Rails, PHP, Java and C#.";
  var backEndDeveloperAnswerCount = 0;
  var frontEndDeveloperAnswerCount = 0;

  if (question1Answer === "yes") {
    backEndDeveloperAnswerCount++;
  }
  else {
    frontEndDeveloperAnswerCount++;
  }

  if (question2Answer === "yes"){
    frontEndDeveloperAnswerCount++;
  }
  else {
    backEndDeveloperAnswerCount++;
  }

  if (question3Answer === "yes") {
    frontEndDeveloperAnswerCount++;
  }
  else {
    backEndDeveloperAnswerCount++;
  }

  if (question4Answer === "yes") {
    frontEndDeveloperAnswerCount++;
  }
  else {
    backEndDeveloperAnswerCount++;
  }

  if (question5Answer === "yes") {
    backEndDeveloperAnswerCount++;
  }
  else {
    frontEndDeveloperAnswerCount++;
  }

  if (question6Answer === "yes") {
    frontEndDeveloperAnswerCount++;
  }
  else {
    backEndDeveloperAnswerCount++;
  }

  if (frontEndDeveloperAnswerCount > backEndDeveloperAnswerCount)
  {
     track = "You might like front-end development, courses like CSS/Design.";
  }
  else if (backEndDeveloperAnswerCount > frontEndDeveloperAnswerCount)
  {
    track = "You might like back-end development, courses like Ruby/Rails, PHP, Java and C#.";
  }

  return track;
}

$(document).ready(function(){
  $("form#trackerForm").submit(function(event) {
    var question1 = $("input:radio[name=question1-answer]:checked").val();
    var question2 = $("input:radio[name=question2-answer]:checked").val();
    var question3 = $("input:radio[name=question3-answer]:checked").val();
    var question4 = $("input:radio[name=question4-answer]:checked").val();
    var question5 = $("input:radio[name=question5-answer]:checked").val();
    var question6 = $("input:radio[name=question6-answer]:checked").val();
    var track = getTrack(question1, question2, question3, question4, question5, question6);

    showTrack(track);
    event.preventDefault();
  });
});

$(document).ready(function() {
    $("button#refreshPage").click(function() {
      $("form#trackerForm").show();
      $("#result").hide();
      location.reload();

  });
});
