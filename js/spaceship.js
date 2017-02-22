// Object literal
var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}
spaceship1.launch()


// Object New
var spaceship2 = new Object()
spaceship2.topSpeed = '4lyph'
spaceship2.shipName = 'Intergalactica'
spaceship2.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }

spaceship2.launch()

// Constructor Function
var Spaceship3 = function() {
    this.topSpeed = '6lyph'
    this.shipName = 'Cosmic Charger'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var ship = new Spaceship3()

ship.launch()

// Class
class Spaceship4 {
    constructor() {
       this.topSpeed = '8lyph'
        this.shipName = 'Galaxy Quester'
    }

    launch() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var ship = new Spaceship4()

ship.launch()