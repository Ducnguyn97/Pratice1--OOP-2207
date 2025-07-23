class Human{
    _name;
    _weight;
    _gender;
    constructor(name, gender, weight){
        this._name = name;
        this._weight = weight;
        this._gender = gender;
    }
    setName(name){
        this._name = name;
    }
    setGender(gender){
        this._gender = gender;
    }
    setWeight(weight){
        this._weight = weight;
    }getName(){
        return this._name;
    }getWeight(){
        return this._weight;
    }
    say(saying){
        console.log(`${this._name} : ${saying}`);
    }
    isMale(){
        return this._gender === "Male";
    }
    eat(Apple){
        if(Apple.getWeight() <= 0){
            return;
        }else {
            this._weight++;
            Apple.decreaseWeight();
        }
    }
    checkApple(Apple){
        console.log(`Current apple weight: ${Apple.getWeight()}`);
        return Apple.getWeight();
    }
}