// document.method()
// console.log(document.head);
// console.log(document.body);

// macam macam element yang fungsinya dapat digunakan:
getElementById();
getElementByClass();
getElemenByClassName();
getElemenByTagName();
getElemenByTagNameNS();
querySelector();
querySelectorAll();

let Varnama =  document.getElementById('nama');
Varnama.innerHTML = 'nisa';
document.write(Varnama);
Varnama.style.backgroundColor = 'Aqua';
Varnama.style.color = 'Red';
Varnama.style.fontSize = '50px';
Varnama.style.textAlign = 'center';

const upperCase = () =>{
    Varnama.style.textTransform = 'uppercase';
}

const lowerCase = () =>{
    Varnama.style.textTransform = 'lowercase';
}

const upperLowerCase = () =>{
    Varnama.style.textTransform = 'capitalize';
}
let nama = prompt("input nama anda");
if (nama) {
    Varnama.innerHTML = nama;
}
let input = prompt("masukkan warna font dlm bahasa inggris");
if (input) {
    Varnama.style.color= input;
}
let huruf = parseInt(prompt("berapa font yg anda mau?"));
if (huruf) {
    Varnama.style.fontSize = `${huruf}px`;
}
let warna = prompt("input warna background yang anda mau dlm bahasa inggris");
if (warna) {
    Varnama.style.backgroundColor = warna;
}