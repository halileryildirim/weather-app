// module kullanarak başka bir dosyada apiden verileri alıp bu verileri weather objesine özellik olarak ileteceğiz.
// örn şehir.sıcaklık : weatherdata.sıcaklık, şehir.hava-durumu: weather.hava durumu etc
// bu ilettiğimiz veri ile başka bir JS dosyası DOM oluşturacak, default KEÇİÖREN olacak.
// Mevcut sıcaklık, havadaki olay(yağmur, güneş bulut vs), hissedilen sıcaklık, rüzgar, nem gösterecek.
// Mevcut sıcaklığı aynı zamanda fahrenheit olarak alan bir sistem yap(nasıl bilmiyom düşün. mal.)

import weatherApiHandler from "./weatherApiHandler";

const button = document.querySelector("#button");
const city = document.querySelector("#city-name");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(weatherApiHandler.getData(city.value));
});
