let operator = prompt("masukkan Operator Arimatika");
let angka1 = parseInt(prompt("masukkan angka"));
let angka2 = parseInt(prompt("masukkan angka"));

    if (operator == "+") {
        let tambah = angka1 + angka2;
        console.log(tambah);
    } else if (operator == "-") {
        let kurang = angka1 - angka2;
        console.log(kurang);
    } else if (operator == "*") {
        let kali = angka1 * angka2;
        console.log(kali);
    } else if (operator == "/"){
        let bagi = angka1 / angka2;
        console.log(bagi);
    }
