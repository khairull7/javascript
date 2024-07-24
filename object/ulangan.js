//ulangan
//no 1
function CetakFunction(name) {
    return `Hello Nama ` + name
}
console.log(CetakFunction("arul"));

//no 2
function myFunction(angka1, angka2) {
    return angka1 + angka2
}
let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);
console.log(output);

// no 3
let Hello = () =>{
    return "Hello"
}
let out = Hello();
console.log(out);

// no 4
const obj = {
    nama : "john",
    umur : 22, 
    bahasa : "indonesia"
}
console.log(obj.bahasa);

//no 5
let array = ["John Doe", "laki laki", "baca buku", 1992];
let objectArray = {
    nama : array [0],
    jenisKelamin : array [1],
    hobi : array [2],
    tahunKelahiran : array [3],
}
console.log(objectArray);

//no 6
let buah = [{
    nama : "Nanas",
    warna : "kuning",
    adaBiji : "tidak",
    harga : 9000
},
{
    nama: "jeruk",
    warna : "oranye",
    adaBiji : "ada",
    harga : 8000 
}, {
    nama: "semangka",
    warna : "hijau & merah",
    adaBiji : "ada",
    harga : 10000
}, {
    nama: "pisang",
    warna : "kuning",
    adaBiji : "tidak",
    harga : 10000
}];

let berbiji = buah.filter((buah) => buah.adaBiji != 'ada');
console.log(berbiji);
let nama = ["nanas","jeruk","semangka","pisang"];
console.log(nama.sort());