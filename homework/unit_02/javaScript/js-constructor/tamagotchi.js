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

}


//create new Tamagotchis
let t1 = new Tamagotchi("Lulu", "Dinosaur");
let t2 = new Tamagotchi("Patty", "Chicken");

t1.puke();
t2.yawn();



//test out your Tamagotchies below via console.logs
