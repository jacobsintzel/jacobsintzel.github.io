$.get("http://jacobsintzel.github.io/partials/nav.html", function(data){

$(document).ready(function(){
$("container").prepend(data);
$(".container").fadeIn();

})
})
