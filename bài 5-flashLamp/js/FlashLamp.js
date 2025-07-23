class FlashLamp {
    _status;
    constructor(status) {
        this._status = false;
    }
    turnOn(){
        if(!this._status){
            console.log("Turn On lamp")
            this._status = true;
            return this._status=true;
        }
    }
    turnOff(){
        if(this._status){
            console.log("Turn off lamp");
            this._status = false;
            return this._status = false
        }
    }
    light (){
        if(this._status){
            console.log("lighting")
            this.battery.decreaseEnergy();
            return
        }else {
            console.log("Not Lighting")
            return;
        }
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBatteryInfo(){
        if(this.battery) {
            return this.battery.getStatusPower();
        }
        return "chưa lắp pin."
    }
    getLampStatus(){
        return this._status? "Bật" : "Tắt";
    }

}