class TiVi {
    _chanel;
    _volume;
    _status;
    _name;
    constructor(name, chanel, volume, status) {
        this._name = name;
        this._chanel = chanel;
        this._volume = volume;
        this._status = false;
    }
    getChanel() {
        return this._chanel;
    }
    getVolume() {
        return this._volume;
    }getName(){
        return this._name;
    }setName(name) {
        this._name = name;
    }
    setVolume(volume) {
        this._volume = volume;
    }
    setChanel(chanel) {
        this._chanel = chanel;
    }
    TurnOn(){
        if(!this._status){
            this._status = true;
            console.log(`Tivi ${this._name} is on`)
            return true;
        }
        return true;
    }
    TurnOff(){
        if(this._status){
            this._status = false;
            console.log(`Tivi ${this._name} is off`);
            return false;
        }
        return true;
    }
    CheckStatus(){
        if(this._status){
            console.log(`Tivi ${this._name} is on`);
        }else{
            console.log(`Tivi ${this._name} is off`);
        }
    }
    volumeUp(){
        if(this._status){
            if(this._volume < 20){
                this._volume= this._volume +2;
                console.log(`${this._name} volume up ${this._volume}`);
                return true;
            }else {
                console.log(`${this._name} volume up max`);
                return false;
            }

        }
    }
    volumeDown(){
        if(this._status){
            if(this._volume > 1 ){
                this._volume= this._volume -2;
                console.log(`${this._name} volume down ${this._volume}`);
                return true;
            }else{
                console.log(`${this._name} volume down min ${this._volume}`)
                return false;
            }
        }
    }
    ChangeChanel(chanel){
        if(this._status){
            switch (chanel){
                case 0:
                    console.log(`${this._name}: switch to ${chanel}`);
                    break;
                case 1:
                    console.log(`${this._name}: switch to ${chanel}: football`);
                    break;
                case 2:
                    console.log(`${this._name}: switch to ${chanel}: series film`);
                    break;
                case 3:
                    console.log(`${this._name}: switch to ${chanel}: Music`);
                    break;
                case 4:
                    console.log(`${this._name}: switch to ${chanel}: News`);
                    break;
                case 5:
                    console.log(`${this._name}: switch to ${chanel}: Game Show`);
                    break;
                case 6:
                    console.log(`${this._name}: switch to ${chanel}: sport`);
                    break;
                case 7:
                    console.log(`${this._name}: switch to ${chanel}: technology`);
                    break;
            }
        }
    }
}