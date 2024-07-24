const me = 20;
const you= 30;

let benar = me > you; //true
let salah = me < you; // false
// logic and statement wajib true
var hasil = benar && !salah;
console.log(hasil);
document.write("<br>"+hasil);
// logic or 
var hasil = benar || salah;
console.log(hasil);
document.write("<br>"+hasil);
//operator bitwise
// operator bitwise merupakan operator yang digunakan u/ operasi berdasarkan bit (biner)
//1. and
//2. xor
//3. or
//4. negasi/ kebalikan
//operator berlaku u/ tipe data long, short, int, char, dan byte.
//operator ini akan menghitung dari bit ke bit.

let pertanyaan = confirm("apakah anda umur anda diatas 19 tahun ?");
var hasil = pertanyaan ? "kamu sudah cukup umur" : "kamu belum cukup umur";
document.write("<br>"+hasil);

