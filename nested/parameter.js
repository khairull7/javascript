// //function
// function tambah(a,b){
//     //parameter
//     return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1: "));
// var b = parseInt(prompt("masukan nilai 2: "));
// var hasil = tambah(a,b); //argument
// console.log(hasil);

// var hasilnya = kali(tambah(5, 5), tambah(3,2));
// console.log(hasil);

// function tambah() {
//     var hasil = 0;
//     for (i = 0; i<arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// let coba = tambah(3, 5, 10, 5, 80);
// console.log(coba);

//tugas github

 let jari; 
const pi = 22/7;
let total;

function jumlahLuasLingkaran(a, b) {
    jari = a **2;
    total = jari + pi;
    return total;
}

alert(jumlahLuasLingkaran(8,3));