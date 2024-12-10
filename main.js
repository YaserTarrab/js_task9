
// 1) Task

let isimler = ["Ali","ali","sara", "Sara","noor", "Noor","ahmed", "Ahmed","laila", "Laila"];


let isim = prompt("Bir isim girin:");


if (isimler.includes(isim)) {
    console.log("İsim mevcut.");
} else {
    console.log("İsim mevcut değil.");
}


// 2) Task

i
let sayilar = [45, 22, 60, 10, 80];

// 50'den büyük olanları sayilar
let toplam_Sayilar = sayilar.filter(sayi => sayi >= 50);


console.log(toplam_Sayilar);



// 3) Task


let isimler_2 = ["Ali", "Sara", "Noor", "Ali"];


let tekrarlar = isimler_2.filter((isim, index) => isimler_2.indexOf(isim) !== index);


if (tekrarlar.length > 0) {
    console.log("Tekrarlanan isimler:", tekrarlar);
} else {
    console.log("Dizide tekrar eden isim yok.");
}

