let human = new Human("Adam", "Male", 5);
let human1 = new Human("Eva", "Female", 5);
let apple = new Apple(10);
human.checkApple(apple)
human.say("Hello Eva");
human1.say("hello Adam")
human.say("Do you want eat an Apple?");
human1.say("Yes.of course")
human1.eat(apple);
human.checkApple(apple);
human1.say("you eat with me")
human.eat(apple);
human.checkApple(apple);
for(let i=0 ; i < 4; i++) {
    human.eat(apple);
    human1.eat(apple);
}
human.checkApple(apple);
console.log("Cân nặng hiện tại: ", human.getWeight());
console.log("Cân nặng hiện tại: ", human1.getWeight());