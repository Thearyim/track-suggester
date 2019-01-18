function showTrack(track) {
  $("#output").text(track);
  $("#tracker").hide();
  $("#result").show();
}

function getTrack(question1Answer, question2Answer, question3Answer, question4Answer, questions5Answer) {
  var track = "Unsure. The important thing is to get the basic principles of coding down, practice a lot, and be ready to change to another language when your job inevitably does.";

  if (question1Answer === "yes") {
    track = "a back-end developer";
  } else if (question2Answer === "no") {
    track = "a front-end developer";
  } else if (question3Answer === "yes") {
    track = "a back-end developer";
  } else if (question4Answer === "yes") {
    track = "a front-end developer";
  } else if (question4Answer === "no") {
    track = "unsure. The important thing is to get the basic principles of coding down, practice a lot, and be ready to change to another language when your job inevitably does.";
  }

  // if (question1Answer === "yes") {
  //   track = "Front End1";
  // } else if (question2Answer === "yes") {
  //   track = "Front End2";
  // } else if (question3Answer === "yes") {
  //   track = "Front End3";
  // } else if (question4Answer === "yes") {
  //   track = "Front End4";
  // } else if (question5Answer === "yes") {
  //   track = "Front End5";
  // } else if (question5Answer === "no") {
  //   track = "Unsure";
  // }

  return track;
}

$(document).ready(function(){
  $("form#trackerForm").submit(function(event) {
    var question1 = $("input:radio[name=question1-answer]:checked").val();
    var question2 = $("input:radio[name=question2-answer]:checked").val();
    var question3 = $("input:radio[name=question3-answer]:checked").val();
    var question4 = $("input:radio[name=question4-answer]:checked").val();
    var question5 = $("input:radio[name=question5-answer]:checked").val();
    var track = getTrack(question1, question2, question3, question4, question5);

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
