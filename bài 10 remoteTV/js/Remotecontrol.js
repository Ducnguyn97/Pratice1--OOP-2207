class RemoteControlTV {
    _code;
    _tiVi;
    _status
    constructor(code, TiVi, status) {
        this._code = code;
        this._tiVi = TiVi;
        this._status = status;
    }
    getCode() {
        return this._code;
    }
    ChangeChanel(chanel){
        if(this._status){
           this._tiVi.ChangeChanel(chanel);
        }else {
            console.log(`${chanel} chanel not found`);
        }

    }
    PressVolumeUp(){
        if(this._status){
            this._tiVi.volumeUp();
        }else{
            console.log("Not connect to TV");
        }
    }
    PressVolumeDown(){
        if(this._status){
            this._tiVi.volumeDown();
        }else{
            console.log("Not connect to TV");
        }
    }
    PressTurnOn(){
        if(!this._status){
          this._status = true;
          this._tiVi.TurnOn();
          return true;
        }
        return true;
    }
    PressTurnOff(){
       if(this._status){
           this._status = false;
           this._tiVi.TurnOff();
           return true;
       }
       return false;
    }
}