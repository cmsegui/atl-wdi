console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        this.name = name;
        this.creatureType = creatureType;
    }
    cry() {
        console.log(this.name,'WAHH!!!');
    }
    puke() {
        this.foodInTummy--;
        console.log(this.foodInTummy,'WAHH!!!');
    }
    yawn() {
        this.restedness--;
        console.log(this.name + ' has a current restedness of: ' + this.restedness);
    }
    start() {
        this.hungerTimer = setInterval(function() {
            this.cry();
        }, 6000); 
        this.yawnTimer = setInterval(function() {
            this.cry();
        }, 10000); 
        this.sickTimer = setInterval(function) {
            this.cry();
        }, 20000);
    }
    stop() {
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    }
}

function add(a, b) {
    return a + b;
}
let sum = add(3,3);
//create new Tamagotchis
let t1 = new Tamagotchi("Lulu", "Dinosaur");
let t2 = new Tamagotchi("Patty", "Chicken");




//test out your Tamagotchies below via console.logs
