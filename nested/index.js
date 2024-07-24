// let hadiah = prompt("silakan pilih hadiah dari 1 - 5");
// let hasilHadiah = "";

// switch(hadiah){
// 	case "1":
// 	hasilHadiah = "ipon 14 pro max";
// 	break;
// 	case "2":
// 	hasilHadiah = "kapal api";
// 	break;
// 	case "3":
// 	hasilHadiah = "ROG ZYPRUS";
// 	break;
// 	case "4":
// 	hasilHadiah = "CBR 250 PR";
// 	break;
// 	case "5":
// 	hasilHadiah = "TOKO MIXUE";
// 	break;
// 	default:
// 	hasilHadiah = "tidak ada";
// 	document.write(`<h3> Oops! pilihan anda ${hasilHadiah}<h3>`);
// }

// if(hasilHadiah === ""){
// 	document.write("Kamu gagal mendapatkan hadiah");
// }else{
// 	document.write(`selamat mendapatkan hadiah ${hasilHadiah}`);
// }
// let input = prompt("masukan nilai =", 0);
// let inputUser = "";

// switch(true){
// 	case nilai >= 100 && nilai <= 91;
// 		inputUser = "A";
// 		break;
// 	case nilai <= 90 && nilai >= 81;
// 		inputUser = "B";
// 		break;
// 	case nilai <= 71 && nilai >= 80;
// 		inputUser = "C";
// 		break;
// 	case nilai <= 61 && nilai >= 70;
// 		inputUser = "D";
// 		break;
// 	case nilai <= 0 && nilai >= 60;
// 		inputUser = "F";
// 		break;
// 	default:
// 		document.write("ga ada tsay");
// }

// document.write(inputUser);
// let input = prompt("masukan nilai =", 0);
// let inputUser = "";

// switch(true){
// 	case input <= 100 && input >= 91:
// 		inputUser = "A";
// 		break;
// 	case input <= 90 && input >= 81:
// 		inputUser = "B";
// 		break;
// 	case input <= 71 && input >= 80:
// 		inputUser = "C";
// 		break;
// 	case input <= 61 && input >= 70:
// 		inputUser = "D";
// 		break;
// 	case input <= 0 && input >= 60:
// 		inputUser = "F";
// 		break;
// 	default:
// 		document.write("ga ada tsay");
// }

// document.writeln(inputUser);   

let user = prompt("username:", "");
let pass = prompt("password:", "");

if(user === "soohyun" || "Haru" ){
	if(pass === "km siapa"){
		document.write(`<h1>Selamat datang ${user} </h1>`);
	}else{
		document.write("<p>password salah, silakan coba lagi");
    }
}