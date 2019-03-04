

var random_result;

var lost = 0;

var win = 0;

var previous = 0;

var resetAndStart = function (){

    $(".crystals").empty();

    //need to make it link to local files in the images folder
    var images = ["https://mbch.guide/wp-content/uploads/crystal_multi_redevent.png", 
                "https://pngimage.net/wp-content/uploads/2018/05/blue-crystal-png-1.png", 
                "https://pasever.github.io/week-4-game/assets/images/Crystal_multi_mutant.png", 
                "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c4/Crystal_weekly_event.png/revision/latest?cb=20151122000423"];

    //random result, TARGET, has a value between 19-120
    random_result = Math.floor(Math.random() * 101) + 19;
    console.log(random_result);

    $("#result").html('Target: ' + random_result);


    //4 crystals
    for (var i = 0; i < 4; i++){

    //each crystal has a value of random number between 2-12
        var random = Math.floor(Math.random() * 11) + 2;
        console.log(random);
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size": "cover"
            });

            //this shows the value for each crystal (just for now, need to remove for final)
            //crystal.html(random);

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);

}

resetAndStart();

var reset = function () {

}

//when clicking a crystal, value should be added to the TOTAL
$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr('data-random'));

//when clicking a crystal, value should be added to the TOTAL
    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);
//if TOTAL is greater than TARGET, +loss and restart
    if (previous > random_result){
        lost ++;
        $("#lost").html("Losses: " + lost);

        previous = 0;

        resetAndStart();
    }
//if TOTAL does equal TARGET, +win and restart
    else if (previous === random_result){
        win++;
        
        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();
    }
    


});

//pseudocode

// make a game with: 
//4 crystals and a random result(TARGET)
//every crystal needs to have a random number value between 1-12
//the random number TARGET should be between 19-120

//a new random number should be generated for each crystal each time we win or lose
//when clicking a crystal, value should be added to the TOTAL
//crystal values added until TOTAL equals target score
//if TOTAL is greater than TARGET, +loss and restart
//if TOTAL does equal TARGET, +win and restart
