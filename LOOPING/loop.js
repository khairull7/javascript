let ulang = confirm("apakah anda mau mengulangi?");//menampilkan dan membaca confirm setiap kali kita klik
let counter = 50;//setiap tampil akan selalu 0, dan akan mengulangi
while(ulang == true){
    counter--;//ketika klik oke 0 + beberapa klik (increment)
    let bintang = "*".repeat(counter) + "<br>";//menjumlahkan counter hingga cancel
    document.write(counter  + ": " + bintang);// bintang = variabel, dan akan berlanjut dan bertambah sesuai yang di klik
    ulang = confirm("apakah anda mau mengulangi?");//dan akan melakukan perulangan hingga bertuliskan cancel
}

