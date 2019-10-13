# Psychic Game

This application picks a random letter, and the user will have to input keystrokes to guess the correct answer. The user will have 9 chances and once a) the user guesses correctly and b) the user uses up all 9 chances, then the game resets while adding a point to Wins or Losses. The display of the webpage is detailed as below:

##Psychic Game

Guess the letter I am thinking of: 

Wins: (# of times the user has guessed the letter correctly)

Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

Guesses Left: (# of guesses left. This will update)

Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

The way this webpage is put together is by using primarily javascript. First I set up an alphabet array named abc that contains all the 26 English Letters, then I set the variables for wins losses, guesses left. I also set a variable for choice that takes the keystroke from event.key as input and a variable rand that chooses a random letter from the array at the start of the round.

I set up a simple if else statement stating if rand === choice, then it will count as a will by sending an alert saying you won and then resetting the game. In the else part of this statement, the guesses left variable is decremented each time rand is not === choice. When left hits 0, the losses increments and it alerts you lost then restarts the game. 

The DOM elements are primarily updated by innerHTML to display the values mentioned above. At the end I set up the reset function that sets the guesses left back to 9, and choice to null, and rand (have the computer chooses another random variable), and resets the DOM element for Guesses so far.


