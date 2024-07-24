// // for masuk (perulangan/looping)
// for (nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal ++){
//     console.log("siswa ke - " + nilaiAwal + " masuk");
// }
// // for alfa
// for (nilaiAwal = 11; nilaiAwal <= 20; nilaiAwal ++){
//     console.log("siswa ke - " + nilaiAwal + " alfa");
// }

// 2 kondisi
// for (nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
//     if(nilaiAwal == 4 || nilaiAwal == 6 ){
//         console.log("siswa ke - " + nilaiAwal + " sakit");
//         nilaiAwal++;
//     }
//     console.log("siswa ke - " + nilaiAwal + " masuk");
// }

// 3 kondisi
let gaMasuk = 6
for (nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
    if(nilaiAwal <= gaMasuk){
        console.log("siswa ke - " + nilaiAwal + " masuk");
    }else if (nilaiAwal === 8){
        console.log("siswa ke - " + nilaiAwal + " sakit");
    }else{
        console.log("siswa ke - " + nilaiAwal + " alpa")
    }
    
}