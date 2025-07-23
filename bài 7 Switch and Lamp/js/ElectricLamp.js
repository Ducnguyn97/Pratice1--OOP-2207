class ElectricLamp{
    _status;
    constructor(status) {
        this._status = false;
    }
    turnOff(){
        if(this._status){
            this._status = false;
            console.log("Lamp is off");
            return this._status = false;
        }
    }
    turnOn(){
        if(!this._status){
            this._status = true;
            console.log("Lamp is on");
            return this._status = true;
        }
    }
    checkOn(){
        if(this._status){
            console.log("The switch button is on");
            return "On";
        }else{
            console.log("The switch button is off");
            return "Off";
        }
    }
}