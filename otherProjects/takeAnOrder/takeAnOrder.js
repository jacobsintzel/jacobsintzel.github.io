$(document).ready(function () {

    //focus and blur events
    $("#mySingleLineText").on("focus", function () {
        $("#log").append("<br>input focus");
        $(this).css("background-color", "#F7F8E0");
    }).on("blur", function () {
        $("#log").append("<br>input blur")
        $(this).css("background-color", "white");
    });

    //change event
    $("#mySelect").on("change", function () {
        $("#log").append("<br>selection")
        var value = $(this).val();
        $("#mySelectMessage").html(value + " is a great selection!");

        //product logos
        switch (value) {
        case "Microsoft":
            $("#mySelectMessage").append(
                '<img src="images/microsoft.png" class="img-responsive brandLogo">');
            break;
        case "Sony":
            $("#mySelectMessage").append('<img src="images/sony.png" class="img-responsive brandLogo">');
            break;
        case "Nintendo":
            $("#mySelectMessage").append(
                '<img src="images/nintendo.png" class="img-responsive brandLogo">');
            break;
        default:
            break;
        };

        //brand logo effect
        $(".brandLogo").click(function () {
            $(this).effect('fold', 'slow');
        });
    });



    //mouse enter & leave event
    $("#myButton").on("mouseenter", function () {
        $("#log").append("<br>mouse enter")
        $(this).text("ORDER NOW!");
    }).on("mouseleave", function () {
        $("#log").append("<br>mouse leave")
        $(this).text("Click Me!");
    })

    $("#myButton").on('click', function () {
        //object holding the user's responses
        var userOrder = {};
        userOrder.myInput = $("#mySingleLineText").val();
        userOrder.myTextarea = $("#myTextArea").val();
        userOrder.mySelection = $("#mySelect").val();
        userOrder.myRadio = $("[name='gender']:checked").val();
        userOrder.myCheckValues = [];

        //jQuery loop for checkboxes
        $("[name='vehicle']:checked").each(function () {
            userOrder.myCheckValues.push($(this).val());
        });

        //appending answers to log
        $("#log").append("<br>Value of text input is: " + userOrder.myInput);
        $("#log").append("<br>Value of text area input is: " + userOrder.myTextarea);
        $("#log").append("<br>Value of select box is: " + userOrder.mySelection);
        $("#log").append("<br>Value of radio buttons is: " + userOrder.myRadio);
        $("#log").append("<br>Value of checkboxes are: " + userOrder.myCheckValues.join());
        $("#log").append("<br>Value of userOrder is: " + JSON.stringify(userOrder));
    });
});
