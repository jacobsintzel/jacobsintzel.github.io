$(document).ready(function() {
  $("#getClients").on("click", function() {

    var link="http://jacobsintzel.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json";

    $.getJSON(link, function(data) {
      var table = "<table class='table table-hover table-striped'>" +
        "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
        .each(data, function(index, item) {
        table +="<tr>" +
        "<td>" + item.name +"</td>" +
        "<td>" + item.email + "</td>" +
        "<td>" + item.company + "</td>" +
        "</tr>";
        }); //each
        table += "</table>"
        $("#data").append(table);//appends data to div
    }) //getJSON
  }) //click event
}); //document ready
