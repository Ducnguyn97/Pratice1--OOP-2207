let rat = new Rat("Jerry", 2, 20,true)
let cat = new Cat("Tom", 10, 10);
rat.aliveRat();
console.log("chuột kêu",rat.soundRat());
cat.catchesRat(rat);
cat.setSpeed(30);
cat.catchesRat(rat);
cat.aetRat(rat);
console.log("Weight cat: ", cat.getWeight());
console.log("Weight rat:",rat.getWeightRat())