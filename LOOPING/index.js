//foreach looping
//digunakan untuk mencetak item array, termasuk dalam perulangan counted loop,
// 2 cara : menggunakan for dng operator in, dan menggunakan method forEach()

//looping menggunkan tanpa operator in
// let bahasa = ["javascript", "java", "objective-c", "python"];
// for(let i = 0; i< bahasa; i++){
//     document.write(`${i + 1}.${bahasa[i]}<br/>`);
// }

//looping menggunakan operator in
// let bahasa = ["javascript", "java", "objective-c", "python"];
// for(let i in bahasa){
//     document.write(`${i}.${bahasa[i]}<br/>`);
// }

//foreach looping
// let hari = ["senin","selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
// hari.forEach(function(hari){
//     document.write(`<h1>${hari}</h1>`);
// })

//tanpa function
// hari.forEach((hari) => {
//     document.write(`<h1>${hari}</h1>`);
// });

// looping dengan method repeat()
//perulangan dengan menggunkan method/ fungsi, digunakan untuk string 
// for (let i = 0; i<10; i ++){
//     document.write(`ulangi kalimat ini`);
// }

//tanpa for
//document.write(`ulangi kalimat ini!`.repeat(10));

//nested looping(perulangan didalam perulangan)
for(let i = 0; i<10; i++){
    for(let j  = 0; j<10; j++){
        document.write(`<p> perulangan ke- ${i}, ${j} </p>`);
    }
}