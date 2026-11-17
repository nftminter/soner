// Kelime Avı — ayarlar. Not Defteri ile düzenleyebilirsin.

window.OYUN_AYAR = {
  kanal: "soner",
  chatroomId: "7633982",

  // Kaç saniyede bir yeni harf açılsın
  ipucuAraligi: 7,

  // Kelime bilinince yeni kelimeye kaç saniye sonra geçilsin
  sonrakiTur: 6,

  // En fazla kaç puan (hiç harf açılmadan bilen alır). Her açılan harf 1 puan düşürür, en az 2.
  enYuksekPuan: 10,

  // Bu puana ilk ulaşan ŞAMPİYON olur, skorlar sıfırlanır ve yeni oyun başlar.
  hedefPuan: 50,

  // Şampiyon ekranı kaç saniye kalsın
  sampiyonSuresi: 15,

  // Chat'e "!sifirla" yazınca skorları kim sıfırlayabilir:
  // kanal sahibi her zaman; modlar da (Kick'teki mod rozetine bakılır). Modlar yapmasın istersen false yap.
  modlarSifirlayabilir: true,

  // Mod olmayan ama sıfırlayabilsin istediğin kişiler (Kick adları). Örnek: ["arkadasim_ali"]
  yetkililer: [],

  // Kelimeler. İstediğin kategoriyi ekle/sil. Türkçe karakter şart değil;
  // chat "kokorec" yazsa da "KOKOREÇ" sayılır.
  kategoriler: [
    { ad: "Yemek", kelimeler: ["Lahmacun", "Kokoreç", "Menemen", "Mantı", "Baklava", "İskender", "Kumpir",
      "Künefe", "Tantuni", "Gözleme", "Midye dolma", "Çiğ köfte", "Kuru fasulye", "Kazandibi", "Börek"] },
    { ad: "İstanbul", kelimeler: ["Kadıköy", "Beşiktaş", "Üsküdar", "Karaköy", "Eminönü", "Galata", "Balat",
      "Ortaköy", "Kız Kulesi", "Kapalıçarşı", "Bebek", "Sultanahmet", "Moda", "Cihangir"] },
    { ad: "Şehir", kelimeler: ["Trabzon", "Eskişehir", "Gaziantep", "Antalya", "Erzurum", "Mardin", "Bursa",
      "İzmir", "Kastamonu", "Diyarbakır", "Çanakkale", "Hatay"] },
    { ad: "Hayvan", kelimeler: ["Martı", "Sincap", "Kirpi", "Flamingo", "Penguen", "Zürafa", "Timsah",
      "Kaplumbağa", "Ahtapot", "Yunus", "Baykuş"] },
    { ad: "Meslek", kelimeler: ["Taksici", "Berber", "Kasap", "Simitçi", "İtfaiyeci", "Astronot", "Kuaför",
      "Garson", "Kurye", "Dalgıç"] },
    { ad: "Yayın", kelimeler: ["Takipçi", "Moderatör", "Powerbank", "Kamera", "Bağış", "Abone", "Mikrofon",
      "Selfie çubuğu", "Bağlantı"] },
    { ad: "Teknoloji", kelimeler: ["Bilgisayar", "Klavye", "Kulaklık", "Hoparlör", "Tablet", "Akıllı saat", "Robot",
      "Drone", "Yapay zeka", "İşlemci", "Ekran kartı", "Anakart", "Modem", "Bluetooth", "Uygulama", "Yazılım",
      "Şifre", "Oyun konsolu", "Joystick", "Projeksiyon", "Elektrikli araba", "Sanal gerçeklik", "Bulut", "Emoji",
      "Hashtag", "Algoritma", "Siber güvenlik", "Şarj kablosu", "Monitör", "Web sitesi"] },
  ],

  // Skorların ve kullanılan kelimelerin bu bilgisayarda saklandığı ad. Her yayıncının kopyasında farklı olmalı.
  skorAnahtari: "soner.kelimeAvi.skor.v1",
};
