    
    
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //randomly chooses an alphabet
    
    
    var wins = 0;
    var losses = 0;
    var left = 9;
    var rand = abc[Math.floor(Math.random() * abc.length)];
   
    document.onkeyup = function(event) {
    // Determines which key was pressed.
    var choice = event.key;  
    
    console.log(rand);
    

   
        
    if (rand === choice){
        wins++;
        alert("You Win! Restarting...");
        reset();
    }
    else{
        left--;
      
    }
    
    if (left == 0){
        left = 0;
        losses++;
        alert("You lost! Restarting...");
        reset();
       
    }
    
    console.log("User Input " + choice);
    console.log("Computer Input " + rand);
    console.log("wins " + wins);
    console.log("losses " + losses);

    

    var userInput = document.getElementById("userInput");
    userInput.innerHTML += choice + " ";
    var cpuInput = document.getElementById("cpuInput");
    cpuInput.innerHTML = "Guesses Left: "+ left
    var winDisp = document.getElementById("winDisp");
    winDisp.innerHTML = "Wins: "+ wins;
    var loseDisp = document.getElementById("loseDisp");
    loseDisp.innerHTML = "Losses: "+ losses;
    
    function reset(){
        left = 9;
        choice = " ";
        rand = abc[Math.floor(Math.random() * abc.length)];
        document.getElementById("userInput").textContent = " ";
    }
    }
