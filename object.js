// var house = {
//     stories: 3,
//     location: 'Carmel',
//     zipCode: 46032,
//     materials: ['brick', 'gold', 'marble'],
//     color: 'yellow',
//     clean: function(){
//         console.log('All clean.');
//     }
// };

// console.log(house.stories);
// house.clean();

// var house2 = {
//     stories: 1,
//     location: 'Indianapolis',
//     zipCode: 46240,
//     materials: ['wood', 'siding'],
//     color: 'tan',
//     clean: function(){
//         console.log('All clean.');
//     }
// };


// Constructor Functions (uppercase variable (template for other objects to be made from))
// 'this' refers to that particular variable
// var House = function(){
//     // Instance Variables
//     this.stories = 1;
//     this.materials = ['wood', 'brick'];
// }

// // New Instances
// var carmelHouse = new House();
// carmelHouse.stories = 3;

// console.log(carmelHouse);

// var indyHouse = new House();
// console.log(indyHouse);

// var movie = function(){
//     this.title ='';
//     this.youtubeID = '';

//     this.play = function( {
//         youtube.play(this.youtubeID);
//     }
// }

// var laLalandTrailer = new movie();
// laLalandTrailer.title = 'La La Land';
// laLalandTrailer.youtubeID = '0pdqf4P9MB8';

//ES6 Classes
class Movie {

    constructor(movieTitle, movieID){
        this.title = movieTitle;
        this.youtubeID = movieID;
        // Method Bindings
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play(pauseAtStart) {
        console.log('Playing ' + this.title);
    }
    pause(){
         console.log('Pausing ' + this.title);
    }
}

class ThrillerMovie extends Movie {
    constructor(movieTitle, movieID) {
        // runs original constructor and then runs new constructor
        super(movieTitle, movie);
        this.genre = 'Thriller';
    }
}

var jawsFilm = new ThrillerMovie('Jaws','U1fu_sA7XhE');
jawsFilm.play();
jawsFilm.pause();
