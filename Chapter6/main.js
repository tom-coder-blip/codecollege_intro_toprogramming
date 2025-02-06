var myName = "Tom Vuma";
var family = ["Meka", "Conny", "Hoshane", "Mogale"];
var teamName = "Manchester United";
var commonNames = ["Tracey", "King", "Peter", "Gareth"];
var numberofCars = 20;

if (myName.length > 5) {
    console.log("Hello " + myName)

}else if (myName.length === 2){
    console.log(myName + " can not be that short.")
}else {
    console.log("Eish")

};

var sheepCounted = 0;
 while (sheepCounted < 10) {
 console.log("I have counted " + sheepCounted + " sheep!");
 sheepCounted++;
}
console.log("Zzzzzzzzzzz")

var footballPlayersCounted = 0;
while(footballPlayersCounted < 50) {
    console.log("We have counted " + footballPlayersCounted + "footballers ");
footballPlayersCounted++; 
}

var myamountofSneakers = 20;
if(myamountofSneakers < 8) {
    console.log("I have many sneakers.")
}else{
    console.log("I dont have a lot of sneakers.");
};

for (var goatscounted = 0; goatscounted < 3; goatscounted++) {
    console.log("I have counted " + goatscounted + "goats!");

}

for (var i = 0; i < family.length; i++){
    console.log("These are my family members " + family[i]);
}

if (teamName.length > 5) {
    console.log("Hello " + teamName)

}else if (teamName.length === 2){
    console.log(teamName + " can not be that short.")
}else {
    console.log("That is not a team name")

};

for (var i = 0; i < commonNames.length; i++){
    console.log("These are some common names" + commonNames[i]);
}


for (var i = 0; i <= 30; i++) {
    console.log("numberofCars: " + i);
}
