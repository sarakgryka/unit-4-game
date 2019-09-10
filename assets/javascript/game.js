$(document).ready(function () {

    console.log("ready!");

    /// Create variables///

    let counter = 0;
    let randomNumGuess;
    let crystals = [];
    let wins = 0;
    let losses = 0;
    let userGuess = [];
    // let imagesOb = {

    //     "src": "assets/images/crystal 1.jpg",
    //     "src": "assets/images/crystal 2.jpg",
    //     "src": "assets/images/crystal 3.jpg",
    //     "src": "assets/images/crystal 4.jpg"
    // }    
    let imagesOb = [
    "assets/images/crystal 1.jpg",
    "assets/images/crystal 2.jpg",
    "assets/images/crystal1.jpg",
    "assets/images/crystal 4.jpg"
];

        
      


    ///Show player random number at start of the game between 19-120. Should change at the begininng of each game///

    function randomNumber() {

        randomNumGuess = Math.floor(Math.random() * 101) + 19;

        let numButton = randomNumGuess;

        $("#randomNumber").append(numButton);


    }

    randomNumber();

    function crystalRandoms() {




        for (var i = 0; i < 4; i++) {



            crystals.push(Math.floor(Math.random() * 12) + 1);


        }
    };

    crystalRandoms();
    console.log(crystals);



    /////Create Counter///

    //let counterBox = $("<div>");
    //counterBox.addClass("counterBox");
    //counterBox.attr("currentCount", counter);
    $(".counterbox").append(counter);




    ///Show 4 crystals///
    ///Each crystal will have a random number value 1-12//



    for (var i = 0; i < crystals.length; i++) {


        let crystalPic = $("<img>");
        crystalPic.addClass("crystalPics");
        crystalPic.attr("src", imagesOb[i]);
        crystalPic.attr("crystalValue", crystals[i]);
        $(".crystals").append(crystalPic);






    }
    function clear() {

        $("#randomNumber").empty();
        $(".counterbox").empty();
        crystals = [];
        counter = 0;

    }

    function restart() {
        clear();
        randomNumber();

        crystalRandoms();





    }


    ///Once crystal is clicked the value will be added to total 1-12 counter///
    /// If total less than random number keep playing, is over lose, if equal win///
    ///Restart all values////

    $(".crystalPics").on("click", function (event) {

        let crystalNumber = ($(this).attr("crystalValue"));
        crystalNumber = parseInt(crystalNumber);


        counter += crystalNumber;

        let counterBox = counter;

        $(".counterbox").text(counterBox);

        console.log(crystalNumber);
        console.log(counter);

        if (randomNumGuess === counter) {

            wins++;
            alert("You win!");
            console.log("wins" + wins);
            restart();

        }

        else if (counter > randomNumGuess) {

            losses++;
            alert("you lose!");
            console.log("loss" + losses);
            restart();
        }


    })




























});