function luasLingkaran(input) {
    const phi = 3.14;
    L = phi * (input*input);
    return L
}

//let input = 1
let input = prompt("Masukan nilai ruas lingkaran yang bukan kelipatan 7", "1");
let LuasLingkaran = luasLingkaran(input);
document.write("Luas lingkrannya adalah: " + LuasLingkaran);

// let jariJari = prompt("Masukkan jari-jari lingkaran:");
// function hitungLuasLingkaran() {
    // Minta input dari user menggunakan prompt
    // let jariJari = prompt("Masukkan jari-jari lingkaran:");
  
    // Konversi input ke tipe data number
    // jariJari = Number(jariJari);
  
    // Hitung luas lingkaran
    // let luas = PI * jariJari * jariJari;
  
    // Tampilkan hasil menggunakan alert
  //   alert("Luas lingkaran dengan jari-jari " + jariJari + " adalah " + luas.toFixed(2));
  // }
  
  // // Panggil function hitungLuasLingkaran saat tombol di klik
  // document.getElementById("tombolHitung").addEventListener("click", hitungLuasLingkaran);
  