class Rectangle{
    constructor(length,width) {
        this.width = width;
        this.length = length;
    }
     areaRectangle(){
        return this.length*this.width;
    }
    perimeterRectangle(){
        return (this.length + this.width)*2
    }
    createRectangle(x,y,color = "blue", fill=true){
     var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext("2d");
    if(fill){
        ctx.fillStyle = color;
        ctx.fillRect(x,y,this.width,this.length)
    }else{
        ctx.strokeStyle = color// đặt màu viền
        ctx.lineWidth = 2;
        ctx.strokeRect(x,y,this.width,this.length)
    }
    ctx.closePath();
    }
}
let rect = new Rectangle(50,20);
rect.areaRectangle();
rect.createRectangle();
rect.perimeterRectangle()
console.log("Diện tích hình chữ nhật: "+rect.areaRectangle())
console.log("Chu vi hình chữ nhật: "+rect.perimeterRectangle())
rect.createRectangle(10,10,"blue", false);
rect.createRectangle(20,20,"green", false);
let rect1 = new Rectangle(30,70);
rect1.createRectangle(200,20,"red", false);

