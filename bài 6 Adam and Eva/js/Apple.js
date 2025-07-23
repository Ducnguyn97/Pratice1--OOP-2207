class Apple {
    _weight;
    constructor(weight) {
        this._weight= weight;
    }
    getWeight(){
        return this._weight;
    }
    decreaseWeight(){
        if (this._weight >0){
            this._weight--;
        }
    }
    isEmpty(){
        if(this._weight > 0){
            console.log("Current apple weight", this._weight);
        }else {
            console.log ("Eat all the weight");
        }
    }
}