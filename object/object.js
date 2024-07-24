// OOP = object orientataion programming
// object sebenarnya adalah sebuah variable yang menyimpan nilai (properti) dan fungsi(method)

// var mobil = "lamborgini aventador";
// console.log(mobil);

//contoh
// let contoh = {
//     key:value,
// }
let komputer = {
    prosesor : "intel i9 gen 9",
    warna : "putih abu abu + rgb",
    ram : 128,
    vga : "rtx 4080 super"
}
// properti = ciri khas dari sebuah object(variabel)
// method = perilaku dari sebuah object

var mobil = {
    //properti
    type : "civic turbo",
    model : "1000 cc",
    warna : " putih",
// method
start: function(){
    console.log("ini method start");
},
brake: function() {
   console.log("ini method brake"); 
},
drive : function () {
    console.log("ini method drive");
},
stop : function () {
    console.log("ini method stop");
},
}
console.log(mobil.type);
mobil.start();

//keyword this
let people = {
    firstName : "dudung",
    lastName : "dadang ",
    showName: function() {
        console.log(`Nama ${this.firstName} ${this.lastName}`);
    } 
}
people.showName();

