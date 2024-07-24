let penumpang = []; //array blm terisi
let tambah = function(namaPenumpang, penumpang){ //function yang berisikan parameter yang akan digunkan 
  if (penumpang.length == 0) {// menghitung panjangnya data lalu ke step else
    penumpang.push(namaPenumpang); //nama penumpang dimasukkan kedalam array penumpang
    return penumpang; // balikkan nilai ke variabel penumpang
  } else {
    for (i=0; i<penumpang.length; i++) { // perulangan yang digunakan untuk mencari panjang arrayyg sudah di isi
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;}
      else if (namaPenumpang == penumpang[i]) { //untuk mencari data yang sama pada array
        console.log('Penumpang tersebut sudah ada di dalam angkot.'); //pesan peringatan
        return penumpang; //membalikan array
      } else if (i == penumpang.length - 1) { //karena i = 0, maka penumpang.length mempunyai nilai 1
        // fungsinya 1 untuk menyamakan nilai i dan penumpang.length 
        penumpang.push(namaPenumpang);// menambah nama penumpang
        console.log(penumpang.length);// memeriksa isi penumpang.length
        return penumpang;// membalikkan nilai array 
      }
    }
  }
}

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0 ) {
    console.log("angkot kosong");
    return penumpang
  }
  else{
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang
      }
      else if (i == penumpang.length - 1) {
        console.log('maaf, nama tidak sesuai'); //pesan peringatan
        return penumpang; 
      } 
      
    }
  }
}

