console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor() {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry() {
        this.foodInTummy--;
        console.log(this.foodInTummy,'WAHH!!!');
    }

}


//create new Tamagotchis
let t1 = new Tamagotchi();
let t2 = new Tamagotchi();

t1.cry();
t2.cry();



//test out your Tamagotchies below via console.logs
