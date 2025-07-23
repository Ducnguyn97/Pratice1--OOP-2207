function Person(first, last, age, gender, interests){
    this.name = {
      first, last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        alert(`${this.name.first} ${this.name.last} is ${this.age} year old.He likes + ${this.interests[0]} and ${this.interests[1]}`)
    };
    this.greeting = function (){
        alert(`Hi Im ${this.name.first}.`)
    }
}

let person = new Person("Nguyễn","Minh", 28, "Nam", ["football", "Music"]);
person.bio();
person.greeting();