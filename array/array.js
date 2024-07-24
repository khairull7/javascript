const user = [{
    InputMobil : "honda",
    tahun : 2000, 
    warna : "putih",
}, {
    InputMobil : "tesla",
    tahun : 2007, 
    warna : "putih"  
}, {
    InputMobil : "toyota",
    tahun : 2000,
    warna : "putih"
    
}, {
    InputMobil : "pajero", 
    tahun : 2000,
    warna : "putih" 
}];

let Mobil = prompt("masukkan nama mobil");
const userMobil = user.filter((user) => user.InputMobil === Mobil);
console.log(userMobil);
