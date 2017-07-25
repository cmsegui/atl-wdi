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
        this.foodInTummy--;
        console.log(this.name,'WAHH!!!');
    }

}


//create new Tamagotchis
let t1 = new Tamagotchi("Lulu", "Dinosaur");
let t2 = new Tamagotchi("Patty", "Chicken");

t1.cry();
t2.cry();



//test out your Tamagotchies below via console.logs
