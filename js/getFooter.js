$.get("http://jacobsintzel.github.io/partials/footer.html", function(data) {

  $(document).ready(function() {
	//check if this document has .container
	var container = $(".container");
	//if so add footer.html contents to the bottom
	if (footer) {
  	container.append(data)
  	container.fadeIn(600);
	}
  });
});
