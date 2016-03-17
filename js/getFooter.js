$.get("http://jacobsintzel.github.io/partials/footer.html", function(data) {

  $(document).ready(function() {
	//check if this document has .container
	var footer = $(".footer");
	//if so add nav.html contents to the top
	if (footer) {
  	footer.append(data)
  	footer.fadeIn(600);
	}
  });
});
