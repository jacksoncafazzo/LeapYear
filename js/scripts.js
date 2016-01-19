var leapYear = function(year) {
  return ((year % 4 === 0) && (year % 100 !== 0) && (year > 0)) || (year % 400 === 0) ;
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $(".year").text(year);
    $("#result").hide();

    if (isNaN(year)) {
      $("#NaN").show();
    }
    else if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
      $("#NaN").hide();
      $("#result").show();
    }
    else {
      $(".not").text("");
      $("#NaN").hide();
      $("#result").show();
    }

        event.preventDefault();
  });
});
