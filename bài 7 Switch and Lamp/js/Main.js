let Lamp1 = new ElectricLamp();
let switch1 = new switchButton(false);
switch1.connectToLamp(Lamp1);
Lamp1.checkOn();
switch1.switchOn();
Lamp1.checkOn()
switch1.switchOff();