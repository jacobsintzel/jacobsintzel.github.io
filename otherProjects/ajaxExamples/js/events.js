$(document).ready(function() {
  $("#getEvents").on("click", function() {

    var link="http://jacobsintzel.github.io/otherProjects/ajaxExamples/jsonDatabase/events.json";

    $.getJSON(link, function(data) {
      var list = "<ul class='list-group'>";
        $.each(data, function(index, value) {
        list +=
        "<li class='list-group-item list-group-item-success'>"+"<h4 class='list-group-item-heading'>"+ value.location +"</h4>"+"</li>" +
        "<li class='list-group-item list-group-item-info'>" + value.date + "</li>" +
        "<li class='list-group-item list-group-item-warning'>" + value.time + "</li>";
        }); //each
        list += "</ul>"
        $("#data").append(list);//appends data to div
    }) //getJSON
  }) //click event
}); //document ready
