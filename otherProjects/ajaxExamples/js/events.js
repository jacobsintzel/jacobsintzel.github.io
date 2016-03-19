$(document).ready(function() {
  $("#getEvents").on("click", function() {

    var link="http://jacobsintzel.github.io/otherProjects/ajaxExamples/jsonDatabase/events.json";

    $.getJSON(link, function(data) {
      var table = "<table class='table table-hover table-striped'>" +
        "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
        $.each(data, function(index, item) {
        table +="<tr>" +
        "<td>" + item.location +"</td>" +
        "<td>" + item.date + "</td>" +
        "<td>" + item.time + "</td>" +
        "</tr>";
        }); //each
        table += "</table>"
        $("#data").append(table);//appends data to div
    }) //getJSON
  }) //click event
}); //document ready
