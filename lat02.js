// document.querySelector("#paragraf").innerHTML = "saya belajar javascript";

// document.querySelector("#content").innerHTML = "<h1> Ganti Isi </h1>";

let tanggal = 9;
let bulan = 2;
let hasil = "salah";
if (tanggal > 0 && tanggal < 32 && bulan >0 && bulan <13){
    hasil = "zodiak belum dibuat";

    if (bulan == 1) {
        hasil = "capricorn";
        if (tanggal > 20 && tanggal <32) {
            hasil = "aquarius";
        } 

    }
    if (bulan == 2) {
        hasil = "aquarius"
        if (tanggal > 20 && tanggal <32) {
            hasil = "pisces";
        }

    }
    if (bulan == 3) {
        hasil = "pisces"
        if (tanggal > 20 && tanggal <32) {
            hasil = "aries";
        }

    }
    if (bulan == 4) {
        hasil = "aries"
        if (tanggal > 20 && tanggal <32) {
            hasil = "taurus";
        }

    }
    if (bulan == 5) {
        hasil = "taurus"
        if (tanggal > 20 && tanggal <32) {
            hasil = "gemini";
        }

    }
    if (bulan == 6) {
        hasil = "gemini"
        if (tanggal > 20 && tanggal <32) {
            hasil = "cancer";
        }

    }
    if (bulan == 7) {
        hasil = "cancer"
        if (tanggal > 20 && tanggal <32) {
            hasil = "leo";
        }
        
    }
    }
    if (bulan == 8) {
        hasil = "leo"
        if (tanggal > 20 && tanggal <32) {
            hasil = "virgo";
        }
        
    }
    
    if (bulan == 9) {
        hasil = "virgo"
        if (tanggal > 20 && tanggal <32) {
            hasil = "libra";
        }
        
    }
    
    if (bulan == 10) {
        hasil = "virgo"
        if (tanggal > 20 && tanggal <32) {
            hasil = "scorpio";
        }
        
    }
    
    if (bulan == 11) {
        hasil = "scorpio"
        if (tanggal > 20 && tanggal <32) {
            hasil = "sagitarius";
        }
        
    }
    
    if (bulan == 12) {
        hasil = "sagitarius"
        if (tanggal > 20 && tanggal <32) {
            hasil = "capricorn";
        }
        
    }

// console.log(hasil);
// document.querySelector("#content").innerHTML= '<h1> ${hasil} </h1>';
// document.querySelector("#content").innerHTML = "<h1>" +hasil+ "</h1>";