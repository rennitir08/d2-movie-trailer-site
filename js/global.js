// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
        constructor(movieTitle, movieID) {

        // 3. Call the parent constructor function using the super function
        super(movieTitle, movieID);
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = movieTitle;
        this.id = movieID;
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var matrixFilm = new Trailer('The Matrix','vKQi3bBA1y8');
var inceptionFilm = new Trailer('Inception','YoHD9XEInc0');
var limitlessFilm = new Trailer('Limitless','jOLqNOfzus4');
var takenFilm = new Trailer('Taken','kZ02_Uzf7So');

$(document).ready(function(){
    $("body,button").sparkle({
  color: "#FFFFFF",
  count: 30,
  overlap: 0,
  speed: 10,
  minSize: 4,
  maxSize: 7,
  direction: "both"
    });
})

