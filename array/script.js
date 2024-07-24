// array method
//bisa digabungkan dengan tipe data lain
//pemisah array denga method join, join= merubah isi array menjadi string
//method push= menambah data 

let array = ["saya", "dia", "kamu", 10, 1];// array biasa
console.log(array.join(" - "));//join array 
array.push("ia", 12);
console.log(array. join(" - "));

//method splice 
//menyambungkan array dan memotong data. splice(indexAwal, MauDiahpusBrp?, elementBaru)
array.splice(2,2, "sapi");
console.log(array);

//slice method for slicing array
var array2 = arr.slice(0,5);
console.log(array);
console.log(array2);

// array berbasis objek
let a = [1,2,3,4, "a", "b", "c", "d"];
let a2 = a.slice(2, 5); //cara baca index = 2, sampai objek 5
console.log(a);
console.log(a2);

const user = [{
    namaDepan : "toni", 
    umur : 20,
    gender : "male"
}, {
    namaDepan : "dian", 
    umur : 30,
    gender : "female"  
}, {
    namaDepan : "jaeha", 
    umur : 25,
    gender : "male"
}, {
    namaDepan : "rani", 
    umur : 30,
    gender : "female"
}];

const userMale = user.filter((user) => user.gender === 'male');
console.log(userMale);

// filter Method
//method filter untuk menyaring data, sama seprti method ForEach(), yaitu sebuah fungsi callback
const angka = [1, 2,3, 4, 5, 6, 7, 8, 9];
const filterArr = angka.filter((item) => {
    return item % 2 === 0 
    //return item % 2 != 0 (bilangan ganjil)
});
console.log(filterArr);

//includes Method
//berfungsi untuk mencetak apakah sebuah data tada di dalam array atau tidak. validasi data
let tanaman = ["padi", "ganja", "jagung", "toge"];
let IsThereANuts = tanaman.includes("kacang");
console.log(IsThereANuts);

//sort Method
//berfungsi untuk mengurutkan data pd array
let sortAlfabet = ['a', 'c', 'd', 'e', 'g', 'f']
let sortAngka = [3,2,4,5,1,6,7,8,9]

console.log(sortAlfabet.sort());
console.log(sortAngka.sort());

//find method
let angka2 = [1, 2, 6, 4, 7, 10, 20, 30, 12, 8, 3, 5];

