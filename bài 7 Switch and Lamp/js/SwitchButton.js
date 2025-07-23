class switchButton {
    _status;
    _lamp;
    constructor(status, ElectricLamp) {
        this._status = false;
        this._lamp = ElectricLamp;
    }
    connectToLamp(electricLamp) {
        this._lamp = electricLamp;
    }
    switchOff(){
       if(this._status){
           this._status = false;
           console.log(`${this._lamp.turnOff()}`);
           return this._status = false;
       }else{
           console.log("The switch button is off");
       }
    }
    switchOn(){
        if(!this._status){
            this._status = true;
            console.log(`${this._lamp.turnOn()}`);
            return this._status = true;
        }else{
            console.log("The switch button is on");
        }
    }

}