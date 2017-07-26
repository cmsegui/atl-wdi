//1. Ultra Email App
// User - user id / password / name 
// Email providers - email address / password / last login

let user = {
    userId: "string", 
    password: "string", 
    name: "string"
}
let emailProvider = {
    emailAddress: "string", 
    password: "string",
    lastLogin: Number
}

//Relationship

let user = {
    userId: "string", 
    password: "string", 
    name: "string",
    emailProviders: [{
        emailAddress: "string", 
        password: "string",
        lastLogin: Number
    }]
}



//2.  Radio on the Internet App
// radio stations - name / genre / popularity 
// playlist - name / genre / songs / times played
// user - id / password / most played

let user = {
    userId: "string",
    password: "string",
    mostPlayed: playlist
}
let playlist = {
    name: "string",
    genre: 'string',
    songs: ['strings', 'in', 'array'],
    timesPlayed: Number
}
let radioStation = {
    name: Number, 
    genre: "string",
    popularity: timesPlayed
}

// Relationship - Above on times played, most played, popularity, I believe the info is pretty interchangeable. 
    // Not sure if you could do relationships that way.

//3.  Rock Concert App
// User - id / password / last login / favorite bands
// band - tour date / tour city / date of last stop in nearby city 
// tickets - date / time / price / seat no

let user = {
    userId: 'string', 
    password: 'string', 
    lastLogin: Number, 
    favBands: ['strings']
}
let band = {
    tourDate: Number,
    city: 'string',
    dateOfLastStopThere: Number
}
let tickets = {
    date: Number, 
    time: Number, 
    price: Number,
    seatNo: "string" + Number
}
// Relationship
let band = {
    tourDate: Number,
    city: 'string',
    dateOfLastStopThere: Number
        tickets: true/false,
        date: Number, 
        time: Number, 
        price: Number,
        seatNo: "string" + Number
}
// 4. Coffee to Go App
// coffee shops - name / location 
// menu - coffee / tea / pastries
// cart - number of itens / price / tax

let coffeeShop = {
    name: 'string', 
    location: 'string',
}
let menu = {
    coffee: ['string'], 
    tea: ['string'],
    pastries: ['string']
}
let cart = {
    itemNo: Number,
    price: Number,
    tax: Number
}


//5. Team Tracker App
// User - name / last login / location
// team - players / sport / wins/loss ratio / stats
// player - team / stats / height / weight / previous team


//Final Thoughts:  I just tried to make it really short bc I kept finding ways to expand certain things and get more info.