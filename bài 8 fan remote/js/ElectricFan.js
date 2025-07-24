class ElectricFan {
    _status;
    _speed;
    constructor(status, speed) {
        this._status = false;
        this._speed = speed;
    }
    getStatus() {
        return this._status;
    }
    setStatus(status) {
        this._status = status;
    }
    getSpeed() {
        console.log(`${this._speed} speed`);
        return this._speed;
    }
    setSpeed(speed) {
        this._speed = speed;
    }
    turnOn(){
        if(!this._status){
            this._status = true;
            console.log("Electric Fan is on");
            return true;
        }
        return true;
    }
    turnOff(){
        if(this._status){
            this._status = false;
            console.log("Electric Fan is off");
            return false;
        }
        return false;
    }
    SpeedUp() {
        if(this._status){
            if(this._speed < 3){
                this._speed ++;
                console.log(`Tăng tốc độ lên ${this._speed}`);
                return true;
            }else {
                console.log("Đã đạt tốc độ tối đa")
                return false;
            }
        }else {
            console.log("Quạt đang tắt không điều chỉnh được tốc độ")
            return false;
        }
    }
    SpeedDown() {
        if(this._status){
            if(this._speed < 1){
                this._speed --;
                console.log(`Giảm tốc độ xuống ${this._speed}`);
                return true;
            }else {
                console.log("Đã đạt tốc độ tối thiểu")
                return false;
            }
        }else {
            console.log("Quạt đang tắt không điều chỉnh được tốc độ")
            return false;
        }
    }
    checkStatus(){
        if(this._status){
            console.log("Electric Fan is on");
        }else {
            console.log("Electric Fan is off");
        }
    }
}