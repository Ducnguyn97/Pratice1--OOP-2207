class RemoteControl{
    _fan;
    _status;
    _speed;
    constructor(status, speed, ElectricFan) {
        this._status = status;
        this._fan = ElectricFan;
        this._speed = speed;
    }
    getStatus() {
        return this._status;
    }
    getSpeed() {
        return this._speed;
    }
    ConnectToFan(ElectricFan) {
        this._fan = ElectricFan;
    }
    setStatus(status) {
        this._status = status;
    }
    setSpeed(speed) {
        this._speed = speed;
    }
    RemoteTurnOn(){
        if(!this._status){
            this._status = true;
            console.log(`${this._fan.turnOn()}`);
            return true;
        }
        return true;
    }
    RemoteTurnOff(){
        if(this._status){
            this._status = false;
            console.log(`${this._fan.turnOff()}`);
            return false;
        }
        return false;
    }
    pressSpeedUp(){
        if(this._fan){
            this._fan.SpeedUp();
        }else {
            console.log("Chưa kết nối quạt nào")
        }
    }
    pressSpeedDown(){
        if(this._fan){
            this._fan.SpeedDown();
        }else {
            console.log("Chưa kết nối quạt nào")
        }
    }
}