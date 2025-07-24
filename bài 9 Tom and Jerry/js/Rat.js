class Rat{
    _name;
    _weightRat;
    _speed;
    _status;
    constructor(name, weight, speed, status) {
        this._name = name;
        this._weightRat = weight;
        this._speed = speed;
        this._status = true;
    }
    getNameRat(){
        return this._name;
    }
    getWeightRat(){
        return this._weightRat;
    }
    getSpeedRat(){
        return this._speed;
    }
    setName(name){
        this._name = name;
    }
    setWeight(weight){
        this._weightRat = weight;
    }
    setSpeed(speed){
        this._speed = speed;
    }
    getStatusRat(){
        return this._status;
    }
    soundRat(){
        return "Chít chit";
    }
    dieRat(){
        if(!this._status){
            console.log("Chuột đã chết")
            return this._status = false;
        }
    }
    aliveRat(){
        if(this._status){
            console.log("Chuột còn sống")
            return this._status = true;
        }
    }
}