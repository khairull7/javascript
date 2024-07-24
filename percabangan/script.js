// percabangan
// istilah percabangan sebenarnya u/ digunakan untuk menggambarkan alur program yang bercabang
//pada flowchart diatas, logika "jika, maka" digambarkan dalam suatu cabang
//selain percabangan, struktur ini juga disebut: control flow, decision, struktur if, struktur statement, dll.

// percabangan if, else, if else, if else if, switch case, operator tenary, operator nessted(besarang)
// percabangan if hanya memiliki satu blok pada kondisi true

// let nilai = prompt("masukan nilai", 0);
// if (nilai > 90){
//     document.write("<h2>selamat anda lolos</h2>" );
// }
// document.write("<p>terima kasih telah mengikuti ujian</p>");

//percabangan if else
//merupakan percabangan yg memiliki 2 nilai
//pilihan pertama untuk kondisi bernilai benar dan kedua kondisi salah (else)

// let nilai = prompt("masukan nilai", 0);
// if(nilai >= 90){
//     document.write("<h2>selamat anda lolos</h2>");
//     document.write("<br>");
// }else{
//     document.write("<h2>jangan menyerah</h2>");
// }
// document.write("terima kasih telah berjuang");
// cara menjadikan commennt blok kodenya dari bawah terus pencet ctrl + /

let saya = prompt("pergi ga?", "");
let pacarSayaKabur = "";
if(pacarSayaKabur == "pergi" && "pergi"){
    pacarSayaKabur = ("oke kita putus");
    document.write("oke, kita putus");
}else{
    pacarSayaKabur = ("jangan dong sayang");
    document.write("jangan dong honey");
}
document.write(`<h1>${pacarSayaKabur$}</h1>`)