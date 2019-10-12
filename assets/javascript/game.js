    var rps = ["r", "p", "s"];
    //randomly chooses one of the 3;
    
    
    var wins = 0;
    var losses = 0;
    var ties = 0;
   
    document.onkeyup = function(event) {
    // Determines which key was pressed.
    var choice = event.key;  
    var rand = rps[Math.floor(Math.random() * rps.length)];
    console.log(rand);
    

    

   
        
    if (rand === choice){
        ties++;
    }
    else if (choice === "r" && rand === "p"){
        losses = losses + 1;
    }
    else if (choice === "r" && rand === "s"){
        wins = wins + 1;
        console.log(wins);
    }
    else if (choice === "p" && rand === "s"){
        losses = losses + 1;
    }
    else if (choice === "p" && rand === "r"){
        wins = wins + 1;
    }
    else if (choice === "s" && rand === "r"){
        losses = losses + 1;
    }
    else if (choice === "s" && rand === "p"){
        wins = wins + 1;
    }
    
    console.log("User Input " + choice);
    console.log("Computer Input " + rand);
    console.log("wins " + wins);
    console.log("losses " + losses);
    console.log("ties " + ties);
    

    var userInput = document.getElementById("userInput");
    userInput.innerHTML = "User Input: "+ choice;
    var cpuInput = document.getElementById("cpuInput");
    cpuInput.innerHTML = "Computer Input: "+ rand;
    var winDisp = document.getElementById("winDisp");
    winDisp.innerHTML = "wins: "+ wins;
    var loseDisp = document.getElementById("loseDisp");
    loseDisp.innerHTML = "losses: "+ losses;
    var tieDisp = document.getElementById("tieDisp");
    tieDisp.innerHTML = "ties: " + ties;
    
    }
