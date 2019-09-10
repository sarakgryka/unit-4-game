$(document).ready(function () {

    console.log("ready!");

    /// Create variables///

    let counter = 0;
    let randomNumGuess;
    let crystals = [];
    let wins = 0;
    let losses = 0;
    let userGuess = [];


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


        let crystalPic = $ ("<img>") ;
        crystalPic.addClass("crystalPics");
        crystalPic.attr("src", "data:image/png;base64,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")
        crystalPic.attr("crystalValue", crystals[i]);
        $(".crystals").append(crystalPic);

       




    }
    function clear(){

        $("#randomNumber").empty();
        $(".counterbox").empty();
        crystals =[];
        counter = 0;

    }

    function restart (){
        clear();
        randomNumber();
        
        crystalRandoms();
        




    }


 ///Once crystal is clicked the value will be added to total 1-12 counter///
    /// If total less than random number keep playing, is over lose, if equal win///
    ///Restart all values////

    $(".crystalPics").on("click", function(event) {

        let crystalNumber = ($(this).attr("crystalValue"));
        crystalNumber = parseInt(crystalNumber);

        
        counter += crystalNumber;
       
        let counterBox = counter;

        $(".counterbox").text(counterBox);

        console.log(crystalNumber);
        console.log(counter);

        if (randomNumGuess === counter) {

            wins ++;
            alert("You win!");
            console.log("wins"+ wins);
            restart();

        }

        else if (counter > randomNumGuess) {

            losses ++;
            alert("you lose!");
            console.log("loss" + losses);
            restart();
        }


    })

    


























});