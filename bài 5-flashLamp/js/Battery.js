class Battery {
    _energy;
    constructor(energy) {
        this._energy = energy;
    }
    getStatusPower() {
        return this._energy;
    }
    setStatusPower(energy) {
        this._energy = energy;
    }
    decreaseEnergy(){
        if (this._energy >0);
        {
            this._energy--;
        }
    }
}