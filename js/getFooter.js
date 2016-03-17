$.get("http://jacobsintzel.github.io/partials/footer.html", function(data) {

  $(document).ready(function() {
	//check if this document has .container
	var footer = $(".footer");
	//if so add footer.html contents to the bottom
	if (footer) {
  	footer.append(data)
  	footer.fadeIn(600);
	}
  });
});
