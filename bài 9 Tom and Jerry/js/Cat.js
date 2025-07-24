class Cat{
    _name;
    _weight;
    _speed;
    //_rat;
    constructor(name, weight, speed, rat){
        this._name = name;
        this._speed = speed;
        //this._rat = rat;
        this._weight = weight;
    }
    getWeight(){
        return this._weight;
    }
    getName(){
        return this._name;
    }
    getSpeed(){
        return this._speed;
    }
    setSpeed(speed){
        this._speed = speed;
    }
    setName(name){
        this._name = name;
    }
    setWeight(weight){
        this._weight = weight;
    }
    soundCat(){
        return "Mèo méo";
    }
    catchesRat(rat){
        if(!rat._status){
            console.log("Không được bắt chuột vì chuột đã chết ")
        }else {
            if(this._speed > rat.getSpeedRat()){
                console.log("Chuột đã bị mèo bắt")
            }else {
                console.log("Mèo không đuổi được chuột ")
            }
        }
        return;
    }
    aetRat(rat){
        if(!rat._status){
            console.log("Chuột đã chết hoặc bị mèo xơi rồi")
        }else{
            if (this._speed > rat.getSpeedRat()){
                this._weight += rat.getWeightRat();
                rat._weightRat =0;
                console.log(" Mèo đã ăn thịt chuột")
                rat._status = false;
            }
        }
    }
}