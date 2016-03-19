$(document).ready(function() {
  $("#getEvents").on("click", function() {

    var link="http://jacobsintzel.github.io/otherProjects/ajaxExamples/jsonDatabase/events.json";

    $.getJSON(link, function(data) {
      var table = "<table class='table table-hover table-striped'>" +
        "<tr><th>Location</th><th>Date</th><th>Time</th></tr>";
        $.each(data, function(index, value) {
        table +="<tr>" +
        "<td>" + value.events.location +"</td>" +
        "<td>" + value.events.date + "</td>" +
        "<td>" + value.events.time + "</td>" +
        "</tr>";
        }); //each
        table += "</table>"
        $("#data").append(table);//appends data to div
    }) //getJSON
  }) //click event
}); //document ready
