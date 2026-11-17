// Bilgi Yarışması — ayarlar. Not Defteri ile düzenleyebilirsin. Sorular sorular.js dosyasında.

window.OYUN_AYAR = {
  kanal: "soner",
  chatroomId: "7633982",

  // Oyun her başladığında ilk sorulacak soru (sorular.js'teki sorunun metni). Boş bırakırsan ("") rastgele başlar.
  ilkSoru: "Gece G olan yayıncı kimdir?",

  // Bir sorunun süresi (saniye)
  soruSuresi: 15,

  // Cevap gösterildikten sonra yeni soruya kaç saniye sonra geçilsin
  sonrakiSoru: 6,

  // Puan: hemen doğru bilen enYuksekPuan alır; her geçen saniyede puanDususu kadar azalır, en az enDusukPuan
  enYuksekPuan: 10,
  puanDususu: 0.5,
  enDusukPuan: 3,
  // İlk doğru cevabı verene ek puan
  ilkBilenBonus: 3,

  // Bu puana ilk ulaşan ŞAMPİYON olur, skorlar sıfırlanır ve yeni oyun başlar
  hedefPuan: 100,
  sampiyonSuresi: 15,

  // Chat'e "!sifirla" yazınca skorları kim sıfırlayabilir: kanal sahibi her zaman, modlar da (false yaparsan yapamaz)
  modlarSifirlayabilir: true,
  yetkililer: [],

  // Skorların ve sorulmuş soruların bu bilgisayarda saklandığı ad
  skorAnahtari: "soner.bilgi.skor.v1",
};
