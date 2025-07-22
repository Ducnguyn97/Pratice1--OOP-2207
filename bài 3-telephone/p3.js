class Mobile{
    constructor(dungLuongPin,vungNho) {
        this.pin = dungLuongPin;
        this.trangThai = false;
        this.vungNho = {
            tinNhanDangSoanThao: "",
            hopThuDen: [],
            hopThuDi: [],
        };
    }
    kiemTraTrangThai(){
        if(this.trangThai){
            console.log("Điện thoại đã bật")
            return "Bật"

        }else {
            console.log("Điện thoại đã tắt ")
            return "Tắt"
        }
    }
    batDienThoai(){
        if(!this.trangThai){
            this.trangThai = true;
            console.log("Điện thoại đã bật");
            return this.trangThai = true;
        }else {
            console.log("Điện thoại đang hoạt động rồi")
        }

    }
    tatDienThoai(){
        if(this.trangThai){
            this.trangThai = false;
            console.log("Điện thoại đã tắt")
            return this.trangThai = false;
        }else{
            console.log("Điện thoại đã tắt")
        }
    }
    kiemtrapin(){
        console.log(`Lượng ping hiên tại ${this.pin}%`);
        return this.pin;
    }
    sacPin(luongSac) {
        this.pin += luongSac;
        if (this.pin > 100) {
            this.pin = 100;
        }
        console.log(`Đã sạc thêm ${luongSac}%. Pin hiện tại: ${this.pin} `);
    }
    dungPin(luongDung){
        this.pin -= luongDung;
        if (this.pin <0 ){
            this.pin =0;
            if(this.trangThai){
                console.log("Đã hết pin! tự động tắt ")
                this.trangThai = false;
            }
        }
    }
    soanTinNhan(noiDung){
        if(!this.trangThai){
            console.log("Điện thoại đang tắt không soặn được tin nhắn")
            return;
        }
        if(this.pin===0){
            console.log("Điện thoại hết pin không gửi được tín nhắn")
            return;
        }
        this.vungNho.tinNhanDangSoanThao = noiDung;
        console.log(`Đã soạn tin nhắn: "${noiDung}"`);
        this.dungPin(5);
    }
    guiTinNhan(nguoiNhan){
        if(!this.trangThai){
            console.log("Điện thoại đang tắt không soặn được tin nhắn")
            return;
        }
        if(this.pin===0){
            console.log("Điện thoại hết pin không gửi được tín nhắn")
            return;
        }
        if (this.vungNho.tinNhanDangSoanThao){
            const tinNhanMoi = {
              noiDung: this.vungNho.tinNhanDangSoanThao,
              nguoiNhan: nguoiNhan,
            };
            this.vungNho.hopThuDi.push(tinNhanMoi);
            console.log(`Đã gửi tin nhắn đến ${nguoiNhan}: "${tinNhanMoi.noiDung}"` );
            this.vungNho.tinNhanDangSoanThao = "";
            this.dungPin(5);
        }else {
            console.log("Không có tin nhắn nào để gửi");
        }
    }
    nhanTinNhan(noiDungTinNhan, nguoiGui){
        if(!this.trangThai){
            console.log("Điện thoại đang tắt không nhận đươợc tin nhắn")
            return;
        }
        if(this.pin===0){
            console.log("Điện thoại hết pin không nhận được tin nhắn")
            return;
        }
        const tinNhanNhanDuoc = {
            noiDung: noiDungTinNhan,
            nguoiGui: nguoiGui,
        }
        this.vungNho.hopThuDen.push(tinNhanNhanDuoc);
        console.log(`Đã nhận được tin nhắn từ ${nguoiGui}: "${tinNhanNhanDuoc.noiDung}"`);
        this.dungPin(2)
    }
    xemHopThuDen(){
        if(!this.trangThai){
            console.log("Điện thoại đang tắt không xem được hộp thư")
            return;
        }
        console.log("---Hộp thư đến---")
        if(this.vungNho.hopThuDen.length ===0){
            console.log("Hộp thư đến trống.");
        }else {
            this.vungNho.hopThuDen.forEach((tinNhan, index) => {
              console.log(`${index+1}. từ: ${tinNhan.nguoiGui} nội dung: "${tinNhan.noiDung}"`);
            });
        }
        this.dungPin(5);
    }
    xemHopThuDi(){
        if(!this.trangThai){
            console.log("Điện thoại đang tắt không xem được hộp thư")
            return;
        }
        console.log("---Hộp thư đi---")
        if(this.vungNho.hopThuDi.length ===0){
            console.log("Hộp thư đi trống.");
        }else {
            this.vungNho.hopThuDi.forEach((tinNhan, index) => {
                console.log(`${index+1}. đến: ${tinNhan.nguoiNhan} nội dung: "${tinNhan.noiDung}"`);
            });
        }
        this.dungPin(5);
    }
}
let mobile = new Mobile(50,70)
mobile.kiemTraTrangThai();
mobile.batDienThoai();
mobile.kiemtrapin();
mobile.sacPin(70);
mobile.soanTinNhan("Hello Chim");
mobile.guiTinNhan("Chim béo");
mobile.nhanTinNhan("Hello Đức","Chim béo")
mobile.soanTinNhan("Chim non lơn chưa");
mobile.guiTinNhan("Chim béo")
mobile.xemHopThuDi();
mobile.nhanTinNhan("Chim non đang lơn rồi","Chim béo");
mobile.xemHopThuDen();
mobile.kiemtrapin();