$.get("http://jacobsintzel.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {
	//check if this document has .container
	var container = $(".container");
	//if so add nav.html contents to the top
	if (container) {
  	container.prepend(data)
  	container.fadeIn(600);
	}
  });
});

$.get("http://jacobsintzel.github.io/partials/footer.html", function(data) {

  $(document).ready(function() {
	//check if this document has .container
	var container = $(".container");
	//if so add footer.html contents to the bottom
	if (container) {
  	container.append(data)
  	container.fadeIn(600);
	}
  });
});
