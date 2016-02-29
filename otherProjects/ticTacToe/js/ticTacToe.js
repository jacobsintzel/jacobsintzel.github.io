$(document).ready(function () {

    var circleOrEx = "o"; //this variable represents/stroes the o mark which the represents the first player//
    var isGameInProgress = true; //represents the boolean value true. Tells us that the game is currently in progress//
    var winningCombos = { //this object represents all the possible outcomes in this game that leads to a win.The keys act like variables representing the different winning combinations. The values are 2-D nested arrays that are stacked to replicate the rows and columns of the game. The numbers represent the index number/placement of the circleOrEx symbol//
        0: [ //0 is key
            [1, 2], //this multiDimensional Array is values
            [3, 6],
            [4, 8]
        ],
        1: [
            [0, 2],
            [4, 7]
        ],
        2: [
            [0, 1],
            [5, 8],
            [4, 6]
        ],
        3: [
            [0, 6],
            [4, 5]
        ],
        4: [
            [1, 8],
            [2, 6],
            [1, 7],
            [3, 5]
        ],
        5: [
            [2, 8],
            [3, 4]
        ],
        6: [
            [0, 3],
            [2, 4],
            [7, 8]
        ],
        7: [
            [1, 4],
            [6, 8]
        ],
        8: [
            [0, 4],
            [2, 5],
            [6, 7]
        ]
    };

    //when you click on the div with #board, JQuery will find that div the user clicked on and the function will run.//
    $("#board").find("div").on("click", function () {

        if (isGameInProgress && $(this).hasClass("empty")) {
            //if isGameInProgress is True, and the div has a class of empty/has nothing in it, the .empty class will be removed from that div and JQuery will append a <span> element containing the symbol contained in the circleOrEx variable onto the end of the div the user clicked on//
            $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx +
                "</span");

            checkIfWon($(this).index(), circleOrEx); //the checkIfWon method will return the index number of the div you clicked on and check what the value of circleOrEx is.//

            //if the value of the circleOrEx was last equal to "o", the new spot's circleOrEx variable will be equal to "x". Otherwise, it will remain as "o" //
            if (circleOrEx === "o") {
                circleOrEx = "x";
            } else {
                circleOrEx = "o";
            }
        }

    });

    // When you click on the button with id newGame, this function will run that will reset the tic tac toe board and move the previous games to the columns with the class .nine//
    $("#newGame").on("click", function () {

        var boardSquares = $("#board").find("div"); //this variable holds a JQuery function that will find all the divs on the main board currently playing on//
        var firstEmptyMemorySquare = $(".container").find(".nine").filter(function () { //this will create a new array with all the columns that have a .nine class. This will be stored in the firstEmptySquare variable//
            return $.trim($(this).text()) === "" && $(this).children().length === 0;
        }).not("#board").first();

        if (firstEmptyMemorySquare.length == 1) { //if length of firstEmptyMemorySquare's variable is equal to 1, meaning an empty square is available, that square will be filled with the completed game.If this condition is false, the entire container will be checked for the columns with .nine and will be emptied. The main game board will not be emptied.//
            firstEmptyMemorySquare.html($("#board").html());
        } else {
            $(".container").find(".nine").not("#board").empty();
            $(".container").find(".nine").first().html($("#board").html());
        }

        //the each method specifies that the function will run for the boardSquares/divs on the main game board. When you click on the new game button, each div/boardsquare will be emptied and given a class of .empty. The isGameInProgress will return back to being true to begin a new game//
        boardSquares.each(function () {
            $(this).addClass("empty").empty();
        })
        isGameInProgress = true;
    })

    //this function will check the winner of whatever gameboard square number is put in for chosenSquare. For example, the user could choose the third board square, by substituting 3 for chosenSquare, if they wanted to see the winner of that game.//
    function checkIfWon(chosenSquare) {

        var mulitArr = winningCombos[chosenSquare];
        var playerWon;

        for (var i = 0; i < mulitArr.length; i++) { //The chosenSquare goes through the winningCombos object at the top of the page to match to the possible winning combinations. This is put in a variable called multiArr. The variable i starts at 0 and goes through each key in the multiArr variable by one each time//
            playerWon = true;
            for (var j = 0; j < mulitArr[i].length; j++) {
                if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //this playerWon variable prevents an infinite loop by being set to a boolean value of false//
                    playerWon = false;
                }
            }

            if (playerWon) { //the if statements condition is true because playerWon is set to a boolean value of true. Since this condition is met, the for loop begins. The for loop has a variable j that starts at 0 and continues through the loop until it is no longer less than the length of the multiArr[i] variable.//

                for (var j = 0; j < mulitArr[i].length; j++) {
                    $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //this will go through the board and find a div that has the specific index #'s represented by the iterators [i] & [j]. A class of green will be added to these to make them appear green//
                }
                $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
                alert("Winner is " + circleOrEx.toUpperCase() + "!");
                isGameInProgress = false;
                return false; //this exits the loop
            }
        }


    }
})