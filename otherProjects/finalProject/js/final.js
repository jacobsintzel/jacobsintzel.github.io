$(document).ready(function(){
//function that will retrieve data from partials folder.     
function getPartial(page) {
console.log(page);
    /*if page parameter equal to the id of home, insert the
    HTML into the span with id #pageContent*/ 
    if (page == "home") {
      $.get("partials/home.html", function(data) {
        $("#pageContent").html(data);
        $('.carousel').carousel();
      });//.get
    }//if
    //ORDER PAGE BEGINS
     else if (page == "order") {
          $.get("partials/order.html", function(data) {
           $("#pageContent").html(data);
    
    //Phone hover animation          
    $("img").hover(function(){
    $(this).css("cursor", "pointer");    
    $(this).animate({width: "300%", height: "300%"}, "fast");
    },function(){
    $(this).animate({width: "75%", height: "75%"}, "fast");
    });          

    //focus and blur events
    $("#mySingleLineText").on("focus", function () {
        $("#log").append("<br>input focus");
        $(this).css("background-color", "#F7F8E0");
    }).on("blur", function () {
        $("#log").append("<br>input blur")
        $(this).css("background-color", "white");
    });
    
    $("#myTextArea").on("focus", function () {
        $("#log").append("<br>text area focus");
        $(this).css("background-color", "#F7F8E0");
    }).on("blur", function () {
        $("#log").append("<br>text area blur")
        $(this).css("background-color", "white");
    });          

    //mouse enter & leave event
    $("#myButton").on("mouseenter", function () {
        $("#log").append("<br>mouse enter")
        $(this).text("ORDER NOW!");
    }).on("mouseleave", function () {
        $("#log").append("<br>mouse leave")
        $(this).text("Click Me!");
    })
    
    //change event thank you message    
        $("#mySingleLineText" || "#myTextArea").on("change", function(){
        $("#log").append("<br>Change Event")
        var value = $("#mySingleLineText").val();   
        $("#changeEvent").html("Thank you, " + value + ", for shopping with CellSpot.");
        });      
    
          
    $("#myButton").on('click', function () {
          
        //object holding the user's responses
        var userOrder = {};
        userOrder.myInput = $("#mySingleLineText").val();
        userOrder.myTextarea = $("#myTextArea").val();
        userOrder.mySelection = $("#mySelect").val();
        userOrder.myRadio = [];
        userOrder.myCheckValues = [];

        //jQuery loop for checkboxes
        $("[name='accessories']:checked").each(function () {
            userOrder.myRadio.push($(this).val());
        });
        
        //jQuery loop for checkboxes
        $("[name='phoneOptions']:checked").each(function () {
            userOrder.myCheckValues.push($(this).val());
        });

        //appending answers to log
        $("#log").append("<br>Value of text input is: " + userOrder.myInput);
        $("#log").append("<br>Value of text area input is: " + userOrder.myTextarea);
        $("#log").append("<br>Value of radio buttons is: " + userOrder.myRadio.join());
        $("#log").append("<br>Value of checkboxes are: " + userOrder.myCheckValues.join());
        $("#log").append("<br>Value of userOrder is: " + JSON.stringify(userOrder));
        
        //order summary function
        var displayOrder=function(){
        //object containing phone and accessory prices    
        var phonePrices={
        phone1:{name:"S7 Edge", price:999}, 
        phone2:{name:"iPhone 6S Plus", price:1159}, 
        phone3:{name:"Sony Xperia Z5 Compact", price:600}, 
        phone4:{name:"LG G4", price:699}, 
        phone5:{name:"Google Nexus 6P", price:800},
        phone6:{name:"Samsung Galaxy Note 5", price:900},
        accessory1:{name:"Sony Headphones", price:59.99},
        accessory2:{name:"Battery Pack", price:29.97},
        accessory3:{name:"Car Charger", price:19.99}    
        }; 
        
        //var total is to hold what customer will see in order summary
        var total=[];
        //var numbers holds just the prices of order    
        var numbers=[];    
        //variables that hold values of selected radio buttons & checkboxes    
        var checkBoxValue=userOrder.myCheckValues;
        var radioValue=userOrder.myRadio; 
            
        /*loop that goes through checkbox values 
        and compare with name of phonePrices object. If they match, will push to the total array & numbers array*/      
        for(var loop=0; loop<checkBoxValue.length; loop++){    
        for(var loop2 in phonePrices){
        if(phonePrices[loop2].name===checkBoxValue[loop]){
        total.push(phonePrices[loop2].name + ": " + "$" + phonePrices[loop2].price + "<br>");
        numbers.push(phonePrices[loop2].price);    
        }//if
        }//for loop
        }//first for loop 
        
        //this loop is to check the radio button prices    
        for(var loop3=0; loop3<radioValue.length; loop3++){    
        for(var loop4 in phonePrices){
        if(phonePrices[loop4].name===radioValue[loop3]){
        total.push(phonePrices[loop4].name + ": " + "$" + phonePrices[loop4].price + "<br>");
        numbers.push(phonePrices[loop4].price);    
        }
        }//loop4
        }//loop3    
        $("#summary").append(total);
        
        //calculates total order and appends to order summary    
        var calculate=Number("");    
        for(var add=0; add<numbers.length; add++){
        calculate+=numbers[add];    
        }   
        $("#summary").append( "<div class='totalAmount'><span class='label label-pill label-success'>Total Amount</span> " + 
                             "$" + calculate + "</div>");      
        }//displayorder
        
        
        //if/else that verifies fields are entered
        if($("#myTextArea").val().length === 0 && $("#mySingleLineText").val().length !== 0){
        alert('Please enter Address');
        $("#myTextArea").css("background-color", "#EE6363");
        }
        else if($("#mySingleLineText" && "#myTextArea").val().length === 0 ){
        alert('Please enter name and address');
        $("#myTextArea").css("background-color", "#EE6363");
        $("#mySingleLineText").css("background-color", "#EE6363");    
        }
        else if($("#myTextArea").val().length !== 0 && $("#mySingleLineText").val().length === 0){
        alert('Please enter name');
        $("#mySingleLineText").css("background-color", "#EE6363");
        }
        else{    
        displayOrder();     
        }
        });//click event function 
        });//.get
    }//else if
    //SEE PRODUCTS PAGE
    else if (page == "products") {
        //retrieves data from json file
      $.getJSON("jsonDatabase/finalPhones.json", function(data) {
        console.dir(data);
        //will hold values from JSON  
        var html = "";
        //how JSON information will appear on page  
        $.each(data, function(index, item) {
            html += '<div class="col-xs-12 col-lg-4">' +
              '<div class="phoneName">'+'<h3>' + item.model + '</h3>'+ '</div>' +
              '<div class="phoneBrand"><strong>Brand </strong>' + item.brand + '</div>' +
              '<div class="phoneStorage"><strong>Memory </strong>' + item.storage + '</div>' +
              '<img class="phoneImage" src="' + item.image + '"/>' +
            //panels with phone reviews 
              '<div class="panel panel-default">' + 
              '<div class="panel-heading">Reviews</div>';
            
            //Review section of panel
                        $.each(item.comments, function(ind, info) {
                html += '<div class="panel-body">' + //added
                  '<div class="customerName">' + info.username + '</div>' +
                  '<div class="customerComment">' + info.comment + '</div>' +
                  '<div class="customerRating">';
                            //loop that shows stars based on customers' reviews
                            for(var star=1; star<=5; star++){
                                if(star<=info.rating){
                                html+='<img src="images/star.png">';
                                }
                            else{
                            html+='<img src="images/empty_star.png">';
                            }
                            }
                            
                html += '</div>'+//end customerRating
                        '</div>'; //end of the panel body
              }) //each comment

            html += '</div>' + //panel
              '</div>'; //col-md-4
          }) //each phone function

        $("#pageContent").html(html);
            
  
      });//get JSON function
      };//else if 
};//getPartial

/*will call getPartial function when navigation clicked. 
Will pass argument to function based on id value of <a> in nav*/    
$(".nav").find("a").on("click", function(){

var id = $(this).attr("id");

getPartial(id);

})

getPartial("home");    
});//$(document).ready    
