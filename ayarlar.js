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
    { ad: "Purna Categories", kelimeler: [
      "Amateur", "Milf", "Stepmom", "Stepsister", "Blonde", "Brunette", "Redhead", "Asian", "Latina",
      "Ebony", "Euro", "Russian", "Japanese", "French", "Italian", "Brazilian", "Indian", "Lesbian",
      "Threesome", "Group", "Orgy", "Swingers", "Cougar", "Mature", "BBW", "Petite", "Curvy", "Busty",
      "Natural", "Tattooed", "Pierced", "Goth", "Cosplay", "Hentai", "Anime", "VR", "POV", "Massage",
      "Secretary", "Nurse", "Maid", "Teacher", "Cheerleader", "Police", "Fitness", "Yoga", "Gym",
      "lingerie", "Stockings", "High heels", "Latex", "Leather", "Fetish", "BDSM", "Bondage", "Femdom",
      "Roleplay", "Public", "Outdoor", "Beach", "Pool", "Shower", "Casting", "Hidden cam", "Webcam",
      "Solo", "Compilation", "Romantic", "Hardcore", "Softcore", "Vintage", "Classic", "Parody", "ASMR",
      "Anal", "Oral", "Interracial", "Bisexual", "Transgender", "Cuckold", "Voyeur", "Exhibitionist",
      "Striptease", "Oiled", "Squirt", "Creampie", "Gangbang", "Double penetration", "Foot fetish"
    ] },
  ],

  // Skorların ve kullanılan kelimelerin bu bilgisayarda saklandığı ad. Her yayıncının kopyasında farklı olmalı.
  skorAnahtari: "soner.kelimeAvi.skor.v1",
};