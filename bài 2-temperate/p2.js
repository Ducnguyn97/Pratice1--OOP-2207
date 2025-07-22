class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    convertCToF() {
        return (this.celsius*1.8)+32;
    }
    convertCToK(){
        return this.celsius +273.15;
    }
}
let temperature = new Temperature(25);
document.write("Nhiệt độ K: "+ temperature.convertCToK() + "<br>");
document.write("Nhiệt độ F: " + temperature.convertCToF() + "<br>");