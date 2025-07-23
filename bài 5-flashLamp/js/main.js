let bettery = new Battery(10)
let flashLamp = new FlashLamp();
console.log("Trạng thái ban đầu: ", flashLamp.getLampStatus());
console.log("Năng lượng pin ban đầu: ", flashLamp.getBatteryInfo());
flashLamp.setBattery(bettery);
console.log("Năng lượng pin hiện tại ",flashLamp.getBatteryInfo());
flashLamp.turnOn();
console.log("trạng thái hiện tại: ", flashLamp.getLampStatus())
flashLamp.light();
flashLamp.turnOff();
flashLamp.turnOn();
flashLamp.light();
flashLamp.light();
console.log("Năng lượng pin hiện tại ",flashLamp.getBatteryInfo());