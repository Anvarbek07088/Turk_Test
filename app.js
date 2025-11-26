/* ========== DATA ========== */
const units = [
  { id: 1, name: "1 — Merhaba" },
  { id: 2, name: "2 — Nerede?" },
  { id: 3, name: "3 — Ne yapıyorsun?" },
  { id: 4, name: "4 — Benim Dünyam" },
  { id: 5, name: "5 — Zaman Zaman" },
  { id: 6, name: "6 — Çevremiz" },
];

/* ---------- Unit 1: user-provided 20 tasks ---------- */
const tasks = {
  1: [
    {
      id: "1.1",
      type: "choice",
      question: "A: …… B: Hoş bulduk.",
      options: ["Günaydın", "Hoş geldin", "Merhaba"],
      answer: 1,
    },
    {
      id: "1.2",
      type: "choice",
      question: "“Senin adın ne?” savoliga mos javobni tanlang.",
      options: ["İyiyim.", "Benim adım Ali.", "Türküm."],
      answer: 1,
    },
    {
      id: "1.3",
      type: "choice",
      question: "“Bu ne?” → rasmda kitap. To‘g‘ri javobni tanlang.",
      options: ["Bu kitap.", "Bu kapı.", "Bu masa."],
      answer: 0,
    },
    {
      id: "1.4",
      type: "choice",
      question: "“O kim?” – rasmda öqituvchi.",
      options: ["O öğrenci.", "O öğretmen.", "O kadın."],
      answer: 1,
    },
    {
      id: "1.5",
      type: "choice",
      question: "To‘g‘ri ko‘plik shaklini tanlang. Kalem → ?",
      options: ["Kalemlar", "Kalemler", "Kalemle"],
      answer: 1,
    },
    {
      id: "1.6",
      type: "choice",
      question: "Qaysi biri xayrlashuv?",
      options: ["Merhaba", "Hoşça kal", "Günaydın"],
      answer: 1,
    },
    {
      id: "1.7",
      type: "choice",
      question: "“Nasılsın?” savoliga mos javobni tanlang.",
      options: ["Teşekkür ederim, iyiyim.", "Almanyalıyım.", "Kitap."],
      answer: 0,
    },
    {
      id: "1.8",
      type: "choice",
      question: "“Nerelisin?” – eng to‘g‘ri javobni tanlang.",
      options: ["Doktorum.", "İyiyim.", "Özbekistanlıyım."],
      answer: 2,
    },

    {
      id: "1.10",
      type: "choice",
      question: "Dialogni to‘ldiring. A: Memnun oldum. B: …",
      options: ["Ben de memnun oldum.", "Hoş geldin.", "Rica ederim."],
      answer: 0,
    },
    {
      id: "1.11",
      type: "choice",
      question: "“Bu-Şu-O” dan mosini tanlang. Rasm uzoqda bino.",
      options: ["Bu bina", "Şu bina", "O bina"],
      answer: 2,
    },
    {
      id: "1.12",
      type: "choice",
      question: "“Kim?” savoliga mos javob.",
      options: ["Masa", "Ali", "Kitap"],
      answer: 1,
    },
    {
      id: "1.13",
      type: "choice",
      question: "“Ne?” savoliga mos javob.",
      options: ["Öğretmen", "Ali", "Kalem"],
      answer: 2,
    },
    {
      id: "1.14",
      type: "choice",
      question: "“Teşekkür ederim.” uchun mos javob.",
      options: ["Görüşürüz", "Rica ederim", "İyiyim"],
      answer: 1,
    },
    {
      id: "1.15",
      type: "choice",
      question: "To‘g‘ri savol shaklini tanlang (soru eki mI).",
      options: [
        "Sen öğrencisin mi?",
        "Sen misin öğrenci?",
        "Sen öğrenci misin?",
      ],
      answer: 2,
    },
    {
      id: "1.16",
      type: "choice",
      question: "Qaysi biri “meslek”?",
      options: ["Masa", "Doktor", "Ev"],
      answer: 1,
    },
    {
      id: "1.17",
      type: "choice",
      question: "To‘g‘ri iborani tanlang.",
      options: ["Hoş bulduk", "Hoş geldinim", "Hoş geldinizsiz"],
      answer: 0,
    },
    {
      id: "1.18",
      type: "choice",
      question: "“Ben … Ali.” bo‘sh joyni to‘ldiring.",
      options: ["adın", "iyiyim", "adım"],
      answer: 2,
    },
    {
      id: "1.19",
      type: "choice",
      question: "Qaysi biri “Tilak” ifodasi?",
      options: ["İyi günler", "Kitap nerede?", "Masa var"],
      answer: 0,
    },

    {
      id: "img.1",
      type: "choice",
      question: "To‘ldiring: “Nasılsın?”",
      options: ["Görüşürüz.", "İyiyim.", "Ankara’lıyım."],
      answer: 1,
    },

    {
      id: "img.2",
      type: "choice",
      question: "To‘ldiring: “Nerelisin?”",
      options: ["Görüşürüz.", "Ankara’lıyım.", "İyiyim."],
      answer: 1,
    },

    {
      id: "img.3",
      type: "choice",
      question: "To‘g‘ri variantni tanlang. “Merhaba!”",
      options: ["Hoşça kal.", "Merhaba!", "Görüşürüz."],
      answer: 1,
    },

    {
      id: "img.4",
      type: "choice",
      question: "“Masa” so‘zining ko‘plik shaklini tanlang.",
      options: ["masalar", "masalarım", "masayı"],
      answer: 0,
    },

    {
      id: "img.5",
      type: "choice",
      question: "“Vazo” so‘zining ko‘plik shaklini tanlang.",
      options: ["vazolar", "vazoyu", "vazon"],
      answer: 0,
    },

    {
      id: "img.6",
      type: "choice",
      question: "Qaysi gapda “de/da” noto‘g‘ri yozilgan?",
      options: ["Burda değil.", "Bunlar masada.", "Saatler duvarda."],
      answer: 0,
    },

    {
      id: "img.7",
      type: "choice",
      question: "Mamlakatni to‘g‘ri yozilgan variantni tanlang.",
      options: ["İtalay", "İtalya", "İtala"],
      answer: 1,
    },

    {
      id: "img.8",
      type: "choice",
      question: "Qaysi biri “Rusya”ning to‘g‘ri yozilishi?",
      options: ["Rusya", "Rusiya", "Rusyya"],
      answer: 0,
    },

    {
      id: "img.9",
      type: "choice",
      question: "To‘g‘ri javobni tanlang (Doğum Günü).",
      options: ["Mutlu yıllar!", "Afiyet olsun!", "Geçmiş olsun!"],
      answer: 0,
    },

    {
      id: "img.10",
      type: "choice",
      question: "“Hastane”da aytiladigan to‘g‘ri ibora qaysi?",
      options: ["Geçmiş olsun!", "Tebrikler!", "Afiyet olsun!"],
      answer: 0,
    },
  ],

  2: [
    {
      id: "2.1",
      type: "choice",
      question: "“Burası neresi?” – rasm: maktab",
      options: ["Oda", "Okul", "Bahçe"],
      answer: 1,
    },

    {
      id: "2.2",
      type: "choice",
      question: "To‘g‘ri gapni tanlang.",
      options: [
        "Masada kalem var.",
        "Masada kitaplik yok.",
        "Masada okul var.",
      ],
      answer: 0,
    },

    {
      id: "2.3",
      type: "choice",
      question:
        "“Var mı?” savoliga mos javobni tanlang. — Sınıfta öğretmen var mı?",
      options: ["Evet, var.", "Hayır, masa.", "Öğrenci."],
      answer: 0,
    },

    {
      id: "2.4",
      type: "choice",
      question: "“Yok” bilan to‘g‘ri gapni tanlang.",
      options: [
        "Ofisten bilgisayar yok.",
        "Ofiste bilgisayar yok.",
        "Bilgisayarda ofis yok .",
      ],
      answer: 1,
    },

    {
      id: "2.5",
      type: "choice",
      question: "“-DA” qo‘shimchasi bilan to‘g‘ri gapni tanlang.",
      options: ["Kalem masata.", "Kalem masada.", "Kalem masade."],
      answer: 1,
    },

    {
      id: "2.6",
      type: "choice",
      question: "Qaysi savol to‘g‘ri?",
      options: ["Kitap nerede?", "Kitap ne?", "Kitap kim?"],
      answer: 0,
    },

    {
      id: "2.7",
      type: "choice",
      question: "“Kimde?” savoliga mos javobni tanlang. — Kalem kimde?",
      options: ["Kalemde Ahmet.", "Ahmet’te.", "Ahmet kalem."],
      answer: 1,
    },

    {
      id: "2.8",
      type: "choice",
      question: "Rasmda bahçe. Qaysi gap to‘g‘ri?",
      options: [
        "Bahçede ağaçlar var.",
        "Bahçede öğretmen yok.",
        "Ikkalasi ham to‘g‘ri.",
      ],
      answer: 2,
    },

    {
      id: "2.9",
      type: "choice",
      question:
        "“Kaçıncı?” uchun to‘g‘ri javobni tanlang. — Bugün ayın kaçıncı günü?",
      options: ["Ay", "12.", "Saat"],
      answer: 1,
    },

    {
      id: "2.10",
      type: "choice",
      question: "To‘g‘ri joylashuvni tanlang.",
      options: ["Lamba duvarda.", "Lamba tavanda.", "Lamba masada."],
      answer: 1,
    },

    {
      id: "2.11",
      type: "choice",
      question: "“Ofiste neler var?” savoliga mos javob.",
      options: [
        "Kalem Ahmet’te.",
        "Ofiste masa ve bilgisayar var.",
        "Oda büyük.",
      ],
      answer: 1,
    },

    {
      id: "2.12",
      type: "choice",
      question: "Qaysi biri “yer” nomi?",
      options: ["Öğrenci", "Kantin", "Pencere"],
      answer: 1,
    },

    {
      id: "2.13",
      type: "choice",
      question: "To‘g‘ri sifatli gapni tanlang.",
      options: ["Büyük  var.", "Sınıf büyük.", "Büyük var sınıf."],
      answer: 1,
    },

    {
      id: "2.14",
      type: "choice",
      question: "“Oda”ga mos predmetni tanlang.",
      options: ["Yatak", "Otobüs", "Garson"],
      answer: 0,
    },

    {
      id: "2.15",
      type: "choice",
      question: "“Okulda … var.” bo‘sh joyni to‘ldiring.",
      options: ["otobüs", "sınıflar", "kuş"],
      answer: 1,
    },

    {
      id: "2.16",
      type: "choice",
      question: "To‘g‘ri inkor gapni tanlang.",
      options: [
        "Bahçede çocuklar var değil.",
        "Bahçede çocuk yok.",
        "Bahçede yok çocuk var.",
      ],
      answer: 1,
    },

    {
      id: "2.17",
      type: "choice",
      question: "Qaysi joyda bo‘lish mumkin?",
      options: ["Öğretmen ofiste.", "Öğretmen masada.", "Öğretmen kitap."],
      answer: 0,
    },

    {
      id: "2.18",
      type: "choice",
      question: "“Benim odam … katta.” bo‘sh joyni to‘ldiring.",
      options: ["üçüncü", "masa", "büyük"],
      answer: 0,
    },

    {
      id: "2.19",
      type: "choice",
      question: "To‘g‘ri ta’rifni tanlang.",
      options: [
        "Kütüphane bir öğrenci.",
        "Kütüphanede kitaplar var.",
        "Kütüphane masada.",
      ],
      answer: 1,
    },

    {
      id: "2.20",
      type: "choice",
      question: "“Resimde neler var?” (stol, stulm , kitop)",
      options: ["Öğretmen var.", "Sandalye var.", "Otobüs var."],
      answer: 1,
    },
    {
      id: "img2.1",
      type: "choice",
      question: "Xatoni toping va to‘g‘risini tanlang. “Ben 24 yaşındası.”",
      options: ["Ben 24 yaşındayım.", "Ben 24 yaşındasın.", "Ben yaş 24."],
      answer: 0,
    },

    {
      id: "img2.2",
      type: "choice",
      question: "Qaysi gap to‘g‘ri?",
      options: [
        "Sınıfta hiç öğrenci var.",
        "Sınıfta hiç öğrenci yok.",
        "Sınıf öğrenci hiç var.",
      ],
      answer: 1,
    },

    {
      id: "img2.3",
      type: "choice",
      question: "To‘ldiring: “Bir yılda 365 gün ……“",
      options: ["var", "yok", "değilsin"],
      answer: 0,
    },

    {
      id: "img2.4",
      type: "choice",
      question: "Savolga mos javobni tanlang. “Kaç yaşındasın?”",
      options: ["Ankara’dayım.", "45 yaşındayım.", "Evet, iyiyim."],
      answer: 1,
    },

    {
      id: "img2.5",
      type: "choice",
      question: "“Hayır, yumurta değil.” – bu javobga mos savol:",
      options: ["Bu ne?", "Bu yumurta mı?", "Bu nerede?"],
      answer: 1,
    },

    {
      id: "img2.6",
      type: "choice",
      question: "Qaysi savolga “Evet, bugün eve gidiyorum.” javobi mos?",
      options: ["Eve gidiyor musun?", "Ne içiyorsun?", "Nerelisin?"],
      answer: 0,
    },

    {
      id: "img2.7",
      type: "choice",
      question: "“Sen genç misin?” savoliga mos javobni tanlang.",
      options: ["Evet, restoran.", "Evet, gencim.", "Evet, evdeyim."],
      answer: 1,
    },

    {
      id: "img2.8",
      type: "choice",
      question: "“Kantinde çay kaç lira?” – eng to‘g‘ri javob.",
      options: ["Çay içiyorum.", "5 lira.", "Kantin var."],
      answer: 1,
    },

    {
      id: "img2.9",
      type: "choice",
      question: "“Sen kaçıncı sınıftasın?” – mos javobni tanlang.",
      options: ["10 yaşındayım.", "Sınıfta 15 öğrenci var.", "8. sınıftayım."],
      answer: 2,
    },

    {
      id: "img2.10",
      type: "choice",
      question: "“Aşağıdakini moslashtiring: eczane → ?”",
      options: ["fırın", "postane", "ilaç"],
      answer: 2,
    },
  ],
  3: [
    {
      id: "3.1",
      type: "choice",
      question: "“Ben kitap ……”",
      options: ["oku", "okuyorum", "okuyor"],
      answer: 1,
    },
    {
      id: "3.2",
      type: "choice",
      question: "To‘g‘ri savolni tanlang.",
      options: ["Ne yapıyorsun?", "Ne yapıyorsun mu?", "Yapıyorsun ne?"],
      answer: 0,
    },
    {
      id: "3.3",
      type: "choice",
      question: "“O çalışıyor.” – Qaysi harakatga mos?",
      options: [
        "Yotgan odam",
        "Kompyuterda ishlayotgan odam",
        "Ovqat yeyotgan odam",
      ],
      answer: 1,
    },
    {
      id: "3.4",
      type: "choice",
      question: "“Ben televizyon ……”",
      options: ["izliyorum", "izliyor", "izleme"],
      answer: 0,
    },
    {
      id: "3.5",
      type: "choice",
      question: "Inkor shaklini tanlang: Ali gel…",
      options: ["miyor", "miyorsun", "mıyorsun"],
      answer: 0,
    },
    {
      id: "3.6",
      type: "choice",
      question: "Qaysi vaqt zarfi şimdiki zamonga mos?",
      options: ["dün", "yarın", "şimdi"],
      answer: 2,
    },
    {
      id: "3.7",
      type: "choice",
      question: "“Saat 8’de ne yapıyorsun?” – mos javobni tanlang.",
      options: ["Kitap okuyorum.", "Yarın gidiyorum.", "Bugün uyudum."],
      answer: 0,
    },
    {
      id: "3.8",
      type: "choice",
      question: "Şimdiki zamondagi to‘g‘ri gapni tanlang.",
      options: [
        "Ben sabah kahvaltı yapıyorum.",
        "Ben yarın kahvaltı yapıyorum.",
        "Ben dün kahvaltı yapıyorum.",
      ],
      answer: 0,
    },
    {
      id: "3.9",
      type: "choice",
      question: "Fe’lni tanlang.",
      options: ["masa", "yazmak", "öğrenci"],
      answer: 1,
    },
    {
      id: "3.10",
      type: "choice",
      question: "“Onlar … futbol oynuyor.”",
      options: ["mı", "musun", ""],
      answer: 2,
    },
    {
      id: "3.11",
      type: "choice",
      question: "“Dinlemiyorum.” bu qanday gap?",
      options: ["Olumlu", "Olumsuz", "Soru"],
      answer: 1,
    },
    {
      id: "3.12",
      type: "choice",
      question: "“Sen ne yapıyorsun?” – mos javob.",
      options: ["Film izliyorum.", "Film izledim.", "Film izleyeceğim."],
      answer: 0,
    },
    {
      id: "3.13",
      type: "choice",
      question: "Qaysi biri şimdiki zaman emas?",
      options: ["Yürüyorum", "Konuşuyorum", "Konuştum"],
      answer: 2,
    },
    {
      id: "3.14",
      type: "choice",
      question: "“Müzik dinliyor musun?” — mos javobni tanlang.",
      options: ["Evet, dinliyorum.", "Hayır, geliyorum.", "Evet, yazıyorum."],
      answer: 0,
    },
    {
      id: "3.15",
      type: "choice",
      question: "“Ben … yazıyorum.”",
      options: ["kalem", "kitap", "mektup"],
      answer: 2,
    },
    {
      id: "3.16",
      type: "choice",
      question: "Qaysi rasm “uyumak” fe’liga mos?",
      options: [
        "O‘qiyotgan odam",
        "Yotib uxlayotgan odam",
        "Ovqatlanayotgan odam",
      ],
      answer: 1,
    },
    {
      id: "3.17",
      type: "choice",
      question: "To‘g‘ri tartibni tanlang.",
      options: [
        "Yemek yapıyorum ben.",
        "Ben yemek yapıyorum.",
        "Yapıyorum yemek ben.",
      ],
      answer: 1,
    },
    {
      id: "3.18",
      type: "choice",
      question: "“O spor …….” bo‘sh joyni to‘ldiring.",
      options: ["yapıyor", "gidiyor", "geliyor"],
      answer: 0,
    },
    {
      id: "3.19",
      type: "choice",
      question: "Qaysi biri faoliyat (aktivite)?",
      options: ["masa", "uyumak", "pencere"],
      answer: 1,
    },
    {
      id: "3.20",
      type: "choice",
      question: "To‘g‘ri savol shaklini tanlang.",
      options: [
        "Kitap okuyorsun mu?",
        "Kitap mı okuyorsun?",
        "Mu okuyorsun kitap?",
      ],
      answer: 1,
    },
  ],
  4: [
    {
      id: "1",
      type: "choice",
      question: "“Bu kaç lira?” savoliga mos javobni tanlang.",
      options: ["20 lira.", "Kitap var.", "Mavi."],
      answer: 0,
    },
    {
      id: "2",
      type: "choice",
      question: "“Ne kadar?” savoliga mos javobni tanlang.",
      options: ["2 kilo.", "Mavi.", "Kitap."],
      answer: 0,
    },
    {
      id: "3",
      type: "choice",
      question: "“Bu elma … lira.” bo‘sh joyni to‘ldiring.",
      options: ["kaç", "nerede", "kim"],
      answer: 0,
    },
    {
      id: "4",
      type: "choice",
      question: "“Markette … süt var.” bo‘sh joyni to‘ldiring.",
      options: ["bir", "iki", "her ikisi to‘g‘ri"],
      answer: 2,
    },
    {
      id: "5",
      type: "choice",
      question: "“Buzdolabında … yoğurt var.”",
      options: ["bir tane", "dün", "mavi"],
      answer: 0,
    },
    {
      id: "6",
      type: "choice",
      question: "To‘g‘ri sifat + ism juftligini tanlang.",
      options: ["büyük süt", "taze ekmek", "sarı su"],
      answer: 1,
    },
    {
      id: "7",
      type: "choice",
      question: "Qaysi biri “renk”?",
      options: ["fiyat", "kırmızı", "defter"],
      answer: 1,
    },
    {
      id: "8",
      type: "choice",
      question: "Qaysi biri “eşya”?",
      options: ["defter", "koşmak", "yarın"],
      answer: 0,
    },
    {
      id: "9",
      type: "choice",
      question: "To‘g‘ri moslikni tanlang.",
      options: ["Sarı – renk", "5 lira – eşya", "Kalem – miktar"],
      answer: 0,
    },
    {
      id: "10",
      type: "choice",
      question: "“Mavi kalem …” — rasmga qarab.",
      options: ["var", "mi", "yok"],
      answer: 0,
    },
    {
      id: "11",
      type: "choice",
      question: "To‘g‘ri gapni tanlang.",
      options: [
        "Sepette elma var.",
        "Sepette elma yok değil.",
        "Sepet elma var.",
      ],
      answer: 0,
    },
    {
      id: "12",
      type: "choice",
      question: "To‘g‘ri inkor gapni tanlang.",
      options: [
        "Çantada para yok.",
        "Çantada para yok değil.",
        "Çanta para yok.",
      ],
      answer: 0,
    },
    {
      id: "13",
      type: "choice",
      question: "To‘g‘ri savol shakli.",
      options: ["Bu kaç kilo?", "Bu kilo mu?", "Kilo kaç bu?"],
      answer: 0,
    },
    {
      id: "14",
      type: "choice",
      question: "Market listesinde ne yok?",
      options: ["süt", "yumurta", "peynir"],
      answer: 2,
    },
    {
      id: "15",
      type: "choice",
      question: "“Sebzeler” bo‘limiga qaysi biri mos?",
      options: ["domates", "defter", "kalem"],
      answer: 0,
    },
    {
      id: "16",
      type: "choice",
      question: "“Markette peynir var mı?” savoliga mos javob.",
      options: ["Evet, var.", "Bugün değil.", "3 kilo."],
      answer: 0,
    },
    {
      id: "17",
      type: "choice",
      question: "“Poşette neler var?” — rasm: su, ekmek.",
      options: ["Su ve ekmek var.", "Su yok.", "Sadece meyve var."],
      answer: 0,
    },
    {
      id: "18",
      type: "choice",
      question: "Qaysi mahsulot “meyve”?",
      options: ["kalem", "elma", "su"],
      answer: 1,
    },
    {
      id: "19",
      type: "choice",
      question: "Isim tamlamasini tanlang.",
      options: ["okul kapısı", "okul kapı", "kapı okul"],
      answer: 0,
    },
    {
      id: "20",
      type: "choice",
      question: "“Ben kitap ……”",
      options: ["oku", "okuyorum", "okuyor"],
      answer: 1,
    },
    {
      id: "21",
      type: "choice",
      question: "“Sen … yapıyorsun?” savoliga mos javob.",
      options: ["çalışıyor", "çalışıyorsun", "çalışıyorum"],
      answer: 1,
    },
    {
      id: "22",
      type: "choice",
      question: "“O … mi geliyor?” bo‘sh joyni to‘ldiring.",
      options: ["gel", "geliyor", "gelmez"],
      answer: 1,
    },
    {
      id: "23",
      type: "choice",
      question: "Qaysi biri fe’l + “-mAk” istemi bilan tuzilgan?",
      options: ["yazmak", "yazıyor", "yazar"],
      answer: 0,
    },
    {
      id: "24",
      type: "choice",
      question: "Qaysi gap to‘g‘ri?",
      options: ["Kitap 10 lira.", "Kitap lira 10.", "Lira kitap 10."],
      answer: 0,
    },
    {
      id: "25",
      type: "choice",
      question: "Qaysi gap fe’l + zamon eki bilan tuzilgan?",
      options: ["Ben gidiyorum", "Ben gitmek", "Git"],
      answer: 0,
    },
    {
      id: "26",
      type: "choice",
      question: "Qaysi biri o‘zlik (kendi) + iyelik eki bilan tuzilgan?",
      options: ["kitabım", "kitap", "kitaplar"],
      answer: 0,
    },
    {
      id: "27",
      type: "choice",
      question: "“Ülke – milliyet – dil” bo‘yicha moslikni tanlang.",
      options: [
        "Türkiye – Türk – Türkçe",
        "Almanya – Almanya – Almanca",
        "Fransa – Fransız – Fransızca",
      ],
      answer: 0,
    },
    {
      id: "28",
      type: "choice",
      question: "Qaysi biri millatni bildiradi?",
      options: ["Türk", "Türkiye", "Türkçe"],
      answer: 0,
    },
    {
      id: "29",
      type: "choice",
      question: "Qaysi biri tilni bildiradi?",
      options: ["Türk", "Türkçe", "Türkiye"],
      answer: 1,
    },
    {
      id: "30",
      type: "choice",
      question: "“Benim dilim …” bo‘sh joyni to‘ldiring.",
      options: ["Türkçe", "Türkiye", "Türk"],
      answer: 0,
    },
  ],

  5: [
    {
      id: "5.1",
      type: "choice",
      question: "Her sabah saat 7’de … kalkıyorum.",
      options: ["ben", "geç", "-"],
      answer: 2,
    },
    {
      id: "5.2",
      type: "choice",
      question: "To‘g‘ri gapni tanlang.",
      options: [
        "Ben pazartesi okul gidiyorum.",
        "Ben pazartesi okula gidiyorum.",
        "Ben pazartesi gidiyor okul.",
      ],
      answer: 1,
    },
    {
      id: "5.3",
      type: "choice",
      question: "Qaysi biri “hobi”?",
      options: ["kitap okumak", "masa", "öğretmen"],
      answer: 0,
    },
    {
      id: "5.4",
      type: "choice",
      question: "Bugün günlerden ne?",
      options: ["Sabah", "Salı", "Şimdi"],
      answer: 1,
    },
    {
      id: "5.5",
      type: "choice",
      question: "To‘g‘ri savolni tanlang.",
      options: ["Saat kaç?", "Kaç saat?", "Ne saat?"],
      answer: 0,
    },
    {
      id: "5.6",
      type: "choice",
      question: "Ben her akşam TV …",
      options: ["izliyorum", "izlemek", "izliyor"],
      answer: 0,
    },
    {
      id: "5.7",
      type: "choice",
      question: "Qaysi biri olumsuz?",
      options: ["Geliyorum", "Gelmiyorum", "Geldim"],
      answer: 1,
    },
    {
      id: "5.8",
      type: "choice",
      question: "Hafta sonu … sinemaya gidiyoruz.",
      options: ["dün", "bazen", "asla"],
      answer: 1,
    },
    {
      id: "5.9",
      type: "choice",
      question: "To‘g‘ri moslikni tanlang.",
      options: ["Cuma – gün", "Kitap – gün", "Sabah – hafta"],
      answer: 0,
    },
    {
      id: "5.10",
      type: "choice",
      question: "Ben spor yap…",
      options: ["mıyım", "mıyorum", "yorum"],
      answer: 2,
    },
    {
      id: "5.11",
      type: "choice",
      question: "Qaysi biri kundalik ish?",
      options: ["yüz yıkamak", "uçmak", "gezegen"],
      answer: 0,
    },
    {
      id: "5.12",
      type: "choice",
      question: "Saat 10’da ne yapıyorsun?",
      options: ["Ders çalışıyorum.", "Dün geldim.", "Yarın gideceğim."],
      answer: 0,
    },
    {
      id: "5.13",
      type: "choice",
      question: "Qaysi biri zaman zarfı?",
      options: ["hızlı", "bazen", "masa"],
      answer: 1,
    },
    {
      id: "5.14",
      type: "choice",
      question: "Ben sabah kahvaltı …",
      options: ["yapıyorum", "yapıyor", "yaptım"],
      answer: 0,
    },
    {
      id: "5.15",
      type: "choice",
      question: "To‘g‘ri tartibni tanlang.",
      options: [
        "Akşam eve geliyorum.",
        "Eve akşam geliyorum.",
        "Geliyorum akşam eve.",
      ],
      answer: 0,
    },
    {
      id: "5.16",
      type: "choice",
      question: "Çarşamba günü kurs ……",
      options: ["var", "yok", "ikkalasi mumkin"],
      answer: 2,
    },
    {
      id: "5.17",
      type: "choice",
      question: "Qaysi biri sport turi?",
      options: ["yüzmek", "fırın", "bardak"],
      answer: 0,
    },
    {
      id: "5.18",
      type: "choice",
      question: "Her gün 6’da uyanıyor musun?",
      options: ["Evet, uyanıyorum.", "Dün uyanmadım.", "Sabah kahvaltı."],
      answer: 0,
    },
    {
      id: "5.19",
      type: "choice",
      question: "To‘g‘ri jumlani tanlang.",
      options: [
        "Ben müzik dinlemiyorum.",
        "Ben müzik dinlemiyor.",
        "Ben değil müzik dinliyorum.",
      ],
      answer: 0,
    },
    {
      id: "5.20",
      type: "choice",
      question: "Boş zamanlarında ne yapıyorsun?",
      options: ["Ders çalışıyorum.", "Bilgisayarım.", "Saat 5."],
      answer: 0,
    },
    // Yangi 10 ta savol (vaqt ifodalari va -DAn beri, -DI ishlari)
    {
      id: "5.21",
      type: "choice",
      question: "Saat 3 … ders var.",
      options: ["geç", "kala", "var"],
      answer: 2,
    },
    {
      id: "5.22",
      type: "choice",
      question: "Saat + (y)A dakika var iborasi to‘g‘ri?",
      options: [
        "Saat üçe on dakika var",
        "Saat üç geç on dakika var",
        "Saat üç kala on dakika var",
      ],
      answer: 0,
    },
    {
      id: "5.23",
      type: "choice",
      question: "Saat + (y)I dakika geçiyor iborasi to‘g‘ri?",
      options: [
        "Saat üçten on geçiyor",
        "Saat üçe on geçiyor",
        "Saat üç kala on geçiyor",
      ],
      answer: 0,
    },
    {
      id: "5.24",
      type: "choice",
      question: "Saat + (y)A dakika kala iborasi to‘g‘ri?",
      options: [
        "Saat üçe on kala",
        "Saat üçten on kala",
        "Saat üç geç on kala",
      ],
      answer: 0,
    },
    {
      id: "5.25",
      type: "choice",
      question: "İsim + DAn …",
      options: ["evden okula", "okul evden", "ev okul"],
      answer: 0,
    },
    {
      id: "5.26",
      type: "choice",
      question: "İsim + (y)A kadar …",
      options: ["okula kadar bekledim", "okul bekledim", "okula gelmek"],
      answer: 0,
    },
    {
      id: "5.27",
      type: "choice",
      question: "mAdAn önce ishlatilgan jumla to‘g‘ri?",
      options: [
        "Yemekten önce dişlerimi fırçaladım",
        "Yemekten sonra dişlerimi fırçaladım",
        "Dişlerimi fırçaladım",
      ],
      answer: 0,
    },
    {
      id: "5.28",
      type: "choice",
      question: "DIktAn sonra ishlatilgan jumla?",
      options: [
        "Ders bittikten sonra dışarı çıktım",
        "Ders bitmeden dışarı çıktım",
        "Ders bitti",
      ],
      answer: 0,
    },
    {
      id: "5.29",
      type: "choice",
      question: "-DAn beri ishlatilgan jumla?",
      options: [
        "Sabah 7’den beri çalışıyorum",
        "Sabah 7’de çalışıyorum",
        "Çalışıyorum",
      ],
      answer: 0,
    },
    {
      id: "5.30",
      type: "choice",
      question: "DI ishlatilgan fe’l bilan to‘g‘ri jumla?",
      options: [
        "Dün sinemaya gittim",
        "Dün sinemaya gidiyorum",
        "Dün sinemaya gidiyor",
      ],
      answer: 0,
    },
  ],

  6: [
    {
      id: "6.1",
      type: "choice",
      question: "Hangi besin sağlıklıdır?",
      options: ["hamburger", "sebze", "cips"],
      answer: 1,
    },
    {
      id: "6.2",
      type: "choice",
      question: "Her gün … içmelisin.",
      options: ["su", "kola", "kek"],
      answer: 0,
    },
    {
      id: "6.3",
      type: "choice",
      question: "Sen spor yap…?",
      options: ["malısın", "mısın", "mı"],
      answer: 0,
    },
    {
      id: "6.4",
      type: "choice",
      question: "Doğru cümleyi seçin.",
      options: [
        "Ben meyve yememeliyim.",
        "Ben su içmeliyim.",
        "Ben hiç yürümüyorum.",
      ],
      answer: 1,
    },
    {
      id: "6.5",
      type: "choice",
      question: "“Sağlıksız” kelimesine uygun seçenek?",
      options: ["sebze", "meyve", "pizza"],
      answer: 2,
    },
    {
      id: "6.6",
      type: "choice",
      question: "Ben her sabah yürüyüş …",
      options: ["yapıyorum", "yaptım", "yapacak"],
      answer: 0,
    },
    {
      id: "6.7",
      type: "choice",
      question: "Hangi biri içecek?",
      options: ["çay", "çorba", "elma"],
      answer: 0,
    },
    {
      id: "6.8",
      type: "choice",
      question: "Boşluğu doldurun: “Günde 2 litre su ….”",
      options: ["koşuyorum", "içiyorum", "izliyorum"],
      answer: 1,
    },
    {
      id: "6.9",
      type: "choice",
      question: "Hangi biri sağlıklı alışkanlık?",
      options: ["geç yatmak", "çok şeker yemek", "düzenli spor yapmak"],
      answer: 2,
    },
    {
      id: "6.10",
      type: "choice",
      question: "Sen daha az … yemelisin.",
      options: ["sebze", "şeker", "meyve"],
      answer: 1,
    },
    {
      id: "6.11",
      type: "choice",
      question: "Doğru soru cümlesini seçin.",
      options: [
        "Ne kadar su içiyorsun?",
        "Su içiyor musun kaç?",
        "İçiyorsun su mu?",
      ],
      answer: 0,
    },
    {
      id: "6.12",
      type: "choice",
      question: "Ben kahvaltıda … yiyorum.",
      options: ["yumurta", "koşu", "araba"],
      answer: 0,
    },
    {
      id: "6.13",
      type: "choice",
      question: "Hangi biri sağlıklı değil?",
      options: ["soda içmek", "sabah koşmak", "fast food yemek"],
      answer: 2,
    },
    {
      id: "6.14",
      type: "choice",
      question: "Öğle yemeğinde ne yiyorsun?",
      options: ["Yarın yiyorum.", "Çorba içiyorum.", "Araba sürüyorum."],
      answer: 1,
    },
    {
      id: "6.15",
      type: "choice",
      question: "Daha çok … uyumalısın.",
      options: ["erken", "ekmek", "hızlı"],
      answer: 0,
    },
    {
      id: "6.16",
      type: "choice",
      question: "Hangi sıfat doğru?",
      options: ["sağlıklı yaşam", "yaşam sağlıksız", "yiyecek hızlı"],
      answer: 0,
    },
    {
      id: "6.17",
      type: "choice",
      question: "Doğru cümleyi seçin.",
      options: [
        "Ben meyve sevmiyorum.",
        "Ben meyve sevme değil.",
        "Ben değil meyve seviyorum.",
      ],
      answer: 0,
    },
    {
      id: "6.18",
      type: "choice",
      question: "Kahve içiyor musun?",
      options: ["Evet, içiyorum.", "Saat 4.", "Dün içtim."],
      answer: 0,
    },
    {
      id: "6.19",
      type: "choice",
      question: "Her gün 30 dakika … yapmalısın.",
      options: ["spor", "kitap", "araba"],
      answer: 0,
    },
    {
      id: "6.20",
      type: "choice",
      question: "Hangi cevap öneri ifade eder?",
      options: ["Çok yoruldum.", "Doktora gitmelisin.", "Ben iyiyim."],
      answer: 1,
    },
    // Yeni 10 sorular: İsim tamlamaları ve karşılaştırmalar
    {
      id: "6.21",
      type: "choice",
      question: "Belirtimli isim tamlaması örneği hangisi?",
      options: ["Ahmet’in kitabı", "kitaplarım", "Ev"],
      answer: 0,
    },
    {
      id: "6.22",
      type: "choice",
      question: "Belirtisiz isim tamlaması örneği?",
      options: ["Ev kapısı", "Ahmet’in evi", "Kitaplarım"],
      answer: 0,
    },
    {
      id: "6.23",
      type: "choice",
      question: "Belirtme durumu (y)I örneği hangisi?",
      options: ["Kitabı aldım", "Kitap aldım", "Kitaplar okundu"],
      answer: 0,
    },
    {
      id: "6.24",
      type: "choice",
      question: "Karşılaştırma (DAn daha) cümlesi hangisi?",
      options: [
        "Bu araba ondan daha hızlı",
        "Bu araba hızlı",
        "Bu araba hızlı mı",
      ],
      answer: 0,
    },
    {
      id: "6.25",
      type: "choice",
      question: "Tamlayanın iyelik eki (-In) ile tamlanan (-I) örnek?",
      options: ["Ayşe’nin çantası", "Çanta Ayşe", "Çantam"],
      answer: 0,
    },
    {
      id: "6.26",
      type: "choice",
      question: "Tamlayanı yalın halde, tamlanan 3. kişi iyelik eki (-I) ile?",
      options: ["Ev kapısı", "Evin kapısı", "Kapı ev"],
      answer: 0,
    },
    {
      id: "6.27",
      type: "choice",
      question: "Belirli nesneye sorulacak soru hangisi?",
      options: ["Kitabı okudun mu?", "Kitap okudun mu?", "Kitap mı okudun?"],
      answer: 0,
    },
    {
      id: "6.28",
      type: "choice",
      question: "Hangi cümle karşılaştırma içerir?",
      options: ["Ali, Mehmet’ten daha uzun", "Ali uzun", "Mehmet kısa"],
      answer: 0,
    },
    {
      id: "6.29",
      type: "choice",
      question: "Belirtme durumunda nesneye hangi soru sorulur?",
      options: ["Kimi? Neyi?", "Kim? Ne?", "Nereye? Ne zaman?"],
      answer: 0,
    },
    {
      id: "6.30",
      type: "choice",
      question: "Doğru karşılaştırma cümlesi?",
      options: ["Bu elma ondan daha tatlı", "Bu elma tatlı", "Elma daha tatlı"],
      answer: 0,
    },
  ],
};

const Vocob = [
  {
    name: "1-Ünit A1 — İSİMLER-ismlar",
    vocab: [
      { tr: "ad (isim)", uz: "ism, ot, nom" },
      { tr: "ağaç", uz: "daraxt" },
      { tr: "alkol", uz: "alkagol" },
      { tr: "Almanya", uz: "Germaniya" },
      { tr: "anneler günü", uz: "onalar kuni" },
      { tr: "araba", uz: "mashina (avtomobil)" },
      { tr: "arkadaş", uz: "o‘rtoq, do‘st (oshna)" },
      { tr: "avukat", uz: "advokat" },
      { tr: "Avusturya", uz: "Avstriya" },
      { tr: "Az", uz: "oz, kam" },
      { tr: "Baba", uz: "ota" },
      { tr: "Bahçe", uz: "bog‘" },
      { tr: "Balık", uz: "baliq" },
      { tr: "Banka", uz: "bank" },
      { tr: "Bardak", uz: "stakan" },
      { tr: "Bay", uz: "janob" },
      { tr: "Bayan", uz: "xonim" },
      { tr: "Bayram", uz: "bayram" },
      { tr: "Bebek", uz: "chaqaloq" },
      { tr: "Bey", uz: "yigit" },
      { tr: "Bilet", uz: "bilet, chipta" },
      { tr: "Bilgisayar", uz: "kompyuter" },
      { tr: "Bulaşık", uz: "yuvilmagan idish tovoq" },
      { tr: "Büro", uz: "ofis, byuro" },
      { tr: "Büyük", uz: "katta" },
      { tr: "Cami", uz: "masjid" },
      { tr: "Cetvel", uz: "chizg‘ich" },
      { tr: "Ceviz", uz: "yong‘oq" },
      { tr: "Çamaşır", uz: "yuviladigan kiyimlar (kir)" },
      { tr: "Çanta", uz: "sumka" },
      { tr: "Çarşı", uz: "mahalla markazi, guzargoh" },
      { tr: "Çay", uz: "choy" },
      { tr: "Çiçek", uz: "gul" },
      { tr: "Çin", uz: "Xitoy" },
      { tr: "Çocuk", uz: "bola" },
      { tr: "Çok", uz: "ko‘p" },
      { tr: "Defter", uz: "daftar" },
      { tr: "Deniz", uz: "dengiz" },
      { tr: "Ders", uz: "dars" },
      { tr: "doğum günü", uz: "tug‘ilgan kun" },
      { tr: "doktor", uz: "shifokor" },
      { tr: "dolap", uz: "shkaf" },
      { tr: "düğün", uz: "to‘y" },
      { tr: "eczane", uz: "dorixona" },
      { tr: "ekmek", uz: "non" },
      { tr: "elbise", uz: "ko‘ylak (ayollar uchun)" },
      { tr: "elma", uz: "olma" },
      { tr: "erkek", uz: "erkak (o‘g‘il bola)" },
      { tr: "ev", uz: "uy" },
      { tr: "fare", uz: "sichqon" },
      { tr: "fındık", uz: "findiq, yong‘oq" },
      { tr: "fırça", uz: "cho‘tka" },
      { tr: "film", uz: "film" },
      { tr: "Fransa", uz: "Fransiya" },
      { tr: "Futbolcu", uz: "futbolchi" },
      { tr: "Garson", uz: "ofitsiant" },
      { tr: "Göz", uz: "ko‘z" },
      { tr: "Gül", uz: "atirgul" },
      { tr: "Güzel", uz: "chiroyli" },
      { tr: "Hâl", uz: "hol, ahvol (bozor ma’nosida ham)" },
      { tr: "Halı", uz: "gilam" },
      { tr: "Hanım", uz: "xonim (ayolim)" },
      { tr: "Hastalık", uz: "kasallik" },
      { tr: "Havuç", uz: "sabzi" },
      { tr: "Hayal", uz: "xayol, orzu, rüyo" },
      { tr: "Hemşire", uz: "hamshira (erkaklarga ham ishlatiladi)" },
      { tr: "Hiç", uz: "hech, umuman yo‘qlik ma’nosida" },
      { tr: "Ispanak", uz: "ismaloq" },
      { tr: "Izgara", uz: "qovurilgan (gril) taom" },
      { tr: "İdeal", uz: "ideal, mukammal" },
      { tr: "İnek", uz: "sigir" },
      { tr: "İngiltere", uz: "Angliya" },
      { tr: "İnsan", uz: "inson" },
      { tr: "İspanya", uz: "Ispaniya" },
      { tr: "İş", uz: "ish, yumush" },
      { tr: "İtalya", uz: "Italiya" },
      { tr: "Japonya", uz: "Yaponiya" },
      { tr: "Jeton", uz: "jeton" },
      { tr: "Jilet", uz: "britva" },
      { tr: "Kadın", uz: "ayol, xotin" },
      { tr: "Kafe", uz: "kafe" },
      { tr: "Kahve", uz: "qahva" },
      { tr: "Kalabalık", uz: "gavjum, tiqilinch" },
      { tr: "Kalem", uz: "ruchka" },
      { tr: "Kurşun kalem", uz: "qalam" },
      { tr: "Kalp", uz: "yurak, qalb" },
      { tr: "Kapı", uz: "eshik" },
      { tr: "Kedi", uz: "mushuk" },
      { tr: "Kız", uz: "qiz" },
      { tr: "Kira", uz: "ijara" },
      { tr: "Kişi", uz: "kishi" },
      { tr: "Kitap", uz: "kitob" },
      { tr: "Koltuk", uz: "orom kursi, skameyka" },
      { tr: "Kore", uz: "Koreya" },
      { tr: "Köpek", uz: "it" },
      { tr: "Köy", uz: "qishloq" },
      { tr: "Kuş", uz: "qush" },
      { tr: "Kutu", uz: "quti" },
      { tr: "Kütüphane", uz: "kutubxona" },
      { tr: "Lale", uz: "lola" },
      { tr: "Limon", uz: "limon" },
      { tr: "Lokanta", uz: "oshxona (kichik ovqatlanish joyi)" },
      { tr: "Lütfen", uz: "iltimos" },
      { tr: "Mağaza", uz: "do‘kon (butik)" },
      { tr: "Makas", uz: "qaychi" },
      { tr: "Masa", uz: "stol" },
      { tr: "Merdiven", uz: "zina" },
      { tr: "Meşgul", uz: "band" },
      { tr: "Metro", uz: "metro" },
      { tr: "Millet", uz: "millat" },
      { tr: "Misal", uz: "misol, o‘rnak" },
      { tr: "Mühendis", uz: "muhandis (injener)" },
      { tr: "Nar", uz: "anor" },
      { tr: "Nijerya", uz: "Nigerya" },
      { tr: "Numara", uz: "raqam" },
      { tr: "Oda", uz: "xona" },
      { tr: "Orman", uz: "o‘rmon" },
      { tr: "Otel", uz: "mehmonxona" },
      { tr: "Otobüs", uz: "avtobus" },
      { tr: "Öğrenci", uz: "talaba, o‘quvchi" },
      { tr: "Öğretmen", uz: "o‘qituvchi" },
      { tr: "Ördek", uz: "o‘rdak" },
      { tr: "Paket", uz: "paket" },
      { tr: "Para", uz: "pul" },
      { tr: "Pardösü", uz: "palto" },
      { tr: "Park", uz: "park" },
      { tr: "Patates", uz: "kartoshka" },
      { tr: "Pencere", uz: "deraza" },
      { tr: "Petrol", uz: "benzin" },
      { tr: "Piyano", uz: "fortepiano" },
      { tr: "Polis", uz: "politsiya" },
      { tr: "Portakal", uz: "apelsin" },
      { tr: "Postacı", uz: "pochtachi" },
      { tr: "Radyo", uz: "radio" },
      { tr: "Resim", uz: "rasm" },
      { tr: "Rol", uz: "rol (aktyorlar uchun)" },
      { tr: "Roman", uz: "rimlik" },
      { tr: "Rusya", uz: "Rossiya" },
      { tr: "Saat", uz: "soat" },
      { tr: "Saç", uz: "soch" },
      { tr: "Salon", uz: "zal, salon" },
      { tr: "Sandalye", uz: "stul" },
      { tr: "Sembol", uz: "ramz, belgi" },
      { tr: "Seyahat", uz: "sayohat" },
      { tr: "Sıra", uz: "navbat, parta qatori" },
      { tr: "Silgi", uz: "o‘chirg‘ich" },
      { tr: "Sokak", uz: "ko‘cha" },
      { tr: "Soru", uz: "savol" },
      { tr: "Sorun", uz: "muammo" },
      { tr: "Sözlük", uz: "lug‘at" },
      { tr: "Suriye", uz: "Suriya" },
      { tr: "Şarkıcı", uz: "qo‘shiqchi" },
      { tr: "Şemsiye", uz: "soyabon (zontik)" },
      { tr: "Şişe", uz: "shisha (idish)" },
      { tr: "Tahta", uz: "doska, taxta" },
      { tr: "Tavuk", uz: "tovuq" },
      { tr: "Telefon", uz: "telefon" },
      { tr: "Temiz", uz: "toza" },
      { tr: "Top", uz: "koptok" },
      { tr: "Turist", uz: "turist" },
      { tr: "Türkiye", uz: "Turkiya" },
      { tr: "Uçak", uz: "samolyot" },
      { tr: "Uçurtma", uz: "varrak" },
      { tr: "Üzüm", uz: "uzum" },
      { tr: "Vagon", uz: "vagon" },
      { tr: "Vazo", uz: "vaza" },
      { tr: "Yabancı", uz: "begona, chet ellik" },
      { tr: "Yemek", uz: "ovqat" },
      { tr: "yeni yıl", uz: "yangi yil" },
      { tr: "yıldız", uz: "yulduz" },
      { tr: "yüzük", uz: "uzuk" },
      { tr: "zeytin", uz: "zaytun" },
      { tr: "zürafa", uz: "jirafa" },
      // iboralar
      { tr: "Affedersiniz", uz: "kechirasiz" },
      { tr: "Afiyet olsun", uz: "yoqimli ishtaha, osh bo‘lsin" },
      { tr: "Bol şanslar", uz: "omad yor bo‘lsin" },
      { tr: "Çok yaşa", uz: "ko‘p yashang" },
      { tr: "Geçmiş olsun", uz: "o‘tganing rostdan bo‘lsin" },
      { tr: "Görüşürüz", uz: "ko‘rishguncha" },
      { tr: "Güle güle", uz: "xayr" },
      { tr: "Günaydın", uz: "xayrli tong" },
      { tr: "Hoş bulduk", uz: "xush ko‘rdik" },
      { tr: "Hoş geldin", uz: "xush kelibsiz" },
      { tr: "Hoşça kal", uz: "yaxshi qol" },
      { tr: "Lütfen", uz: "iltimos" },
      { tr: "Merhaba", uz: "salom" },
      { tr: "Özür dilerim", uz: "kechiring, uzr so‘rayman" },
      { tr: "Rica ederim", uz: "arzimaydi" },
      { tr: "Tamam", uz: "bo‘ldi, xo‘p, tamom" },
      { tr: "Tebrikler", uz: "tabriklayman, qutlayman" },
      { tr: "Üzgünüm", uz: "xafaman" },
    ],
  },
  {
    name: "2-Ünit A1",
    vocab: [
      { tr: "Aç", uz: "ochmoq, (och=qornim och (sifat))" },
      { tr: "Açık", uz: "ochiq" },
      { tr: "Adres", uz: "manzil" },
      { tr: "Akşam", uz: "oqshom" },
      { tr: "Alışveriş", uz: "bozor qilish, xarid qilmoq" },
      { tr: "alışveriş merkezi", uz: "savdo markazi" },
      { tr: "alt", uz: "tag, ost" },
      { tr: "anahtar", uz: "kalit" },
      { tr: "artı", uz: "qo‘shuv ishorati (+)" },
      { tr: "ay", uz: "oy" },
      { tr: "banka", uz: "bank" },
      { tr: "başarılı", uz: "muvaffaqiyatli" },
      { tr: "bekâr", uz: "bo‘ydoq, turmush qurmagan" },
      { tr: "bina", uz: "bino" },
      { tr: "birçok", uz: "birqancha" },
      { tr: "boş", uz: "bo‘sh" },
      { tr: "bölü", uz: "bo‘lish ishorati (:)" },
      { tr: "bugün", uz: "bugun" },
      { tr: "burada", uz: "bu yerda" },
      { tr: "bütün", uz: "butun" },
      { tr: "cesur", uz: "jasur" },
      { tr: "ciddi", uz: "jiddiy" },
      { tr: "çalışkan", uz: "mehnatkash" },
      { tr: "çarpı", uz: "ko‘paytirish ishorati (X)" },
      { tr: "çirkin", uz: "xunuk" },
      { tr: "çöp kutusu", uz: "axlat idishi" },
      { tr: "çünkü", uz: "chunki" },
      { tr: "dağınık", uz: "tartibsiz" },
      { tr: "Dar", uz: "tor" },
      { tr: "Dergi", uz: "jurnal" },
      { tr: "Dikkatli", uz: "diqqatli" },
      { tr: "Dikkatsiz", uz: "diqqatsiz, beparvo" },
      { tr: "doğum tarihi", uz: "tug‘ilgan sanasi" },
      { tr: "dolu", uz: "to‘la" },
      { tr: "domates", uz: "pomidor" },
      { tr: "dosya", uz: "hujjat, fayl" },
      { tr: "durak", uz: "bekat" },
      { tr: "duvar", uz: "devor" },
      { tr: "düzenli", uz: "tartibli" },
      { tr: "eczacı", uz: "dorixonachi" },
      { tr: "eğlenceli", uz: "qiziqarli" },
      { tr: "eksi", uz: "ayiruv ishorati (-)" },
      { tr: "evli", uz: "turmush qurgan, oilali" },
      { tr: "fakir", uz: "faqir, kambag‘al" },
      { tr: "fark", uz: "farq" },
      { tr: "fırın", uz: "qandolat va non pishirish pechi" },
      { tr: "gazete", uz: "gazeta" },
      { tr: "genç", uz: "yosh (yosh qiz-genç kız)" },
      { tr: "genellikle", uz: "odatda, asosan" },
      { tr: "geniş", uz: "kenge" },
      { tr: "güçlü", uz: "kuchli" },
      { tr: "güçsüz", uz: "kuchsiz" },
      { tr: "gün", uz: "kun (gap ma’nosida ham)" },
      { tr: "gündüz", uz: "kunduz" },
      { tr: "hafta sonu", uz: "dam olish kunlari (shanba-yakshanba)" },
      { tr: "hasta", uz: "kasal" },
      { tr: "hastane", uz: "kasalxona" },
      { tr: "her", uz: "har" },
      { tr: "her zaman", uz: "har vaqt" },
      { tr: "hızlı", uz: "tez" },
      { tr: "içecek", uz: "ichiladigan narsalar (suv, choy, ayran…)" },
      { tr: "istasyon", uz: "bekat, stansiya (poezd bekati)" },
      { tr: "iyi", uz: "yaxshi" },
      { tr: "kaç", uz: "nechi, qancha" },
      { tr: "kaçıncı", uz: "nechinchi" },
      { tr: "kantin", uz: "kantin (universitet, maktab oshxonasi)" },
      { tr: "kapalı", uz: "yopiq (kapalı kız - o‘rangan qiz)" },
      { tr: "kasap", uz: "qassob" },
      { tr: "kasiyer", uz: "kasiyer" },
      { tr: "kat", uz: "qavat" },
      { tr: "kırmızı", uz: "qizil" },
      { tr: "kıskanç", uz: "qizg‘anchiq, rashkchi" },
      { tr: "kibar", uz: "xushmuomala, jentelmen" },
      { tr: "kilo", uz: "kilo" },
      { tr: "kitaplık", uz: "kitob taxlanadigan javon" },
      { tr: "kolay", uz: "qulay, oson" },
      { tr: "komik", uz: "komik, kulgili" },
      { tr: "konuşkan", uz: "ko‘p gapiradigan" },
      { tr: "koridor", uz: "zal, qator" },
      { tr: "kötü", uz: "yomon" },
      { tr: "kuaför", uz: "sartarosh" },
      { tr: "kuyumcu", uz: "zargar" },
      { tr: "lamba", uz: "lampa, chiroq" },
      { tr: "mahalle", uz: "mahalla" },
      { tr: "manav", uz: "meva-sabzavot do‘koni" },
      { tr: "market", uz: "market" },
      { tr: "mutfak", uz: "oshxona (uyimizda yozgi va qishki)" },
      { tr: "mutlu", uz: "xursand, baxtli" },
      { tr: "mutsuz", uz: "xafa, baxtsiz" },
      { tr: "nerede", uz: "qayerda" },
      { tr: "nesne", uz: "jonsiz narsa" },
      { tr: "niçin", uz: "nima uchun" },
      { tr: "ocak", uz: "gaz plitasi (yanvar oy ma’nosida ham)" },
      { tr: "ofis", uz: "ofis" },
      { tr: "orada", uz: "u yerda" },
      { tr: "öğleden sonra", uz: "tushdan keyin" },
      { tr: "önemli", uz: "muhim, ahamiyati" },
      { tr: "önemsiz", uz: "ahamiyatsiz" },
      { tr: "pahalı", uz: "qimmat" },
      { tr: "pastane", uz: "qandolat, tort va shirinlik do‘koni" },
      { tr: "pembe", uz: "pushti" },
      { tr: "postane", uz: "pochtaxona" },
      { tr: "projektör", uz: "projektor (kuchli yoritgich)" },
      { tr: "psikolog", uz: "psixolog" },
      { tr: "resepsiyonist", uz: "mehmonxonalarda resepsiyonist" },
      { tr: "sabah", uz: "tong, saboh" },
      { tr: "sakin", uz: "sokin" },
      { tr: "sayı", uz: "raqam, sanoq" },
      { tr: "sehpa", uz: "qahva stol" },
      { tr: "sekreter", uz: "kotiba" },
      { tr: "semt", uz: "turar joy dahasi, guzargoh" },
      { tr: "sessiz", uz: "ovozsiz, tinch" },
      { tr: "sıcak", uz: "issiq" },
      { tr: "sıfat", uz: "sifat" },
      { tr: "sinirli", uz: "asabiy" },
      { tr: "sosyal", uz: "ijtimoiy (sotsial)" },
      { tr: "soyadı", uz: "familya" },
      { tr: "şehir", uz: "shahar" },
      { tr: "şimdi", uz: "hozir" },
      { tr: "şişman", uz: "semiz, maqaloq" },
      { tr: "tabak", uz: "tarelka (osh tovoq, lagan)" },
      { tr: "tarih", uz: "tarix, sana" },
      { tr: "tatil", uz: "dam olish" },
      { tr: "tehlikeli", uz: "tahlikali, xavfli" },
      { tr: "tembel", uz: "ishyoqmas, tanbal" },
      { tr: "tezgâhtar", uz: "savdo sotuvchisi" },
      { tr: "tuzlu", uz: "tuzli" },
      { tr: "ucuz", uz: "arzon" },
      { tr: "uzak", uz: "uzo‘q" },
      { tr: "üst", uz: "ust" },
      { tr: "var", uz: "bor" },
      { tr: "yakın", uz: "yaqin" },
      { tr: "yastık", uz: "yostiq" },
      { tr: "yaş", uz: "yosh" },
      { tr: "yaşlı", uz: "qari" },
      { tr: "yavaş", uz: "sekin, asta" },
      { tr: "yazı tahtası", uz: "doska" },
      { tr: "yer", uz: "yer" },
      { tr: "yıl", uz: "yil" },
      { tr: "yiyecek", uz: "yegulik" },
      { tr: "yoğun", uz: "jadal, band" },
      { tr: "yok", uz: "yo‘q" },
      { tr: "yorgun", uz: "charchoq" },
      { tr: "zamir", uz: "asosi, olmosh" },
      { tr: "zayıf", uz: "ozgin, oriq" },
      { tr: "zengin", uz: "boy" },
      { tr: "aramak", uz: "qidirmoq, telefon qilmoq" },
    ],
  },
  {
    name: "3.Ünit A1 — Sözlük (Lugat)",
    vocab: [
      { tr: "açık büfe", uz: "ochiq bufet" },
      { tr: "anne", uz: "ona" },
      { tr: "aynı", uz: "ayni, bir xil" },
      { tr: "bale", uz: "balet" },
      { tr: "bavul", uz: "chamadon" },
      { tr: "beraber", uz: "birga" },
      { tr: "biletçi", uz: "chiptachi" },
      { tr: "bilgisayar oyunu", uz: "kompyuter o‘yini" },
      { tr: "borç", uz: "qarz" },
      { tr: "boş zaman", uz: "bo‘sh vaqt" },
      { tr: "büfe", uz: "bufet" },
      { tr: "cevap", uz: "javob" },
      { tr: "dans", uz: "raqs" },
      { tr: "değişik", uz: "o‘ziga xos, g‘alati" },
      { tr: "dışarı", uz: "tashqari" },
      { tr: "dizi", uz: "serial" },
      { tr: "ekonomi", uz: "iqtisodiyot" },
      { tr: "erken", uz: "erta" },
      { tr: "eski", uz: "eski" },
      { tr: "eş", uz: "turmush o‘rtoq" },
      { tr: "ev hanımı", uz: "uy bekasi" },
      { tr: "fabrika", uz: "fabrika" },
      { tr: "farklı", uz: "farqli" },
      { tr: "fikir", uz: "fikr" },
      { tr: "film", uz: "film" },
      { tr: "futbol", uz: "futbol" },
      { tr: "futbol maçı", uz: "futbol o‘yini" },
      { tr: "geç", uz: "kech" },
      { tr: "gezi", uz: "sayr, sayohat" },
      { tr: "gitar", uz: "gitara" },
      { tr: "gösteri", uz: "tomosha" },
      { tr: "hafta içi", uz: "hafta ichi (dushanba–juma)" },
      { tr: "hava", uz: "havo" },
      { tr: "hayat", uz: "hayot" },
      { tr: "hazır", uz: "tayyor" },
      { tr: "hediye", uz: "sovg‘a" },
      { tr: "heyecanlı", uz: "hayajonli" },
      { tr: "hiçbir zaman", uz: "hech qachon" },
      { tr: "hukuk", uz: "huquq" },
      { tr: "içeri", uz: "ichkari" },
      { tr: "iş yeri", uz: "ish joyi" },
      { tr: "işadamı", uz: "tadbirkor, biznesmen" },
      { tr: "işçi", uz: "ishchi" },
      { tr: "kampus", uz: "kampus, talabalar shaharchasi" },
      { tr: "kanepe", uz: "divan" },
      { tr: "kebap", uz: "kabob" },
      { tr: "kızgın", uz: "jahldor, badjahl" },
      { tr: "konser", uz: "konsert" },
      { tr: "kulüp", uz: "klub" },
      { tr: "litre", uz: "litr" },
      { tr: "maç", uz: "o‘yin (futbol o‘yini)" },
      { tr: "memur", uz: "xizmatchi, ofitser" },
      { tr: "mp3 çalar", uz: "pleyer" },
      { tr: "müsait", uz: "bo‘sh, mavjud" },
      { tr: "müşteri", uz: "mijoz" },
      { tr: "nefes", uz: "nafas" },
      { tr: "normal", uz: "oddiy, normal" },
      { tr: "opera", uz: "opera" },
      { tr: "öğlen", uz: "tush vaqti (abet)" },
      { tr: "öğrenci işleri", uz: "talabalar ishlari bo‘limi" },
      { tr: "pijama", uz: "pijamalar" },
      { tr: "restoran", uz: "restorant" },
      { tr: "sabahları", uz: "ertalablari" },
      { tr: "sağlıklı", uz: "sog‘lom" },
      { tr: "sefer", uz: "safar" },
      { tr: "sergi", uz: "ko‘rgazma" },
      { tr: "site", uz: "sayt" },
      { tr: "şarkı", uz: "qo‘shiq" },
      { tr: "şiir", uz: "she’r" },
      { tr: "terlik", uz: "shippak" },
      { tr: "tiyatro", uz: "teatr" },
      { tr: "tur", uz: "sayohat, ekskursiya" },
      { tr: "tür", uz: "xil, nav" },
      { tr: "uygun", uz: "mos, muvofiq" },
      { tr: "vapur", uz: "kema (yo‘lovchi tashuvchi)" },
      { tr: "yalan", uz: "yolg‘on" },
      { tr: "yanlış", uz: "xato, noto‘g‘ri" },
      { tr: "yemekhane", uz: "oshxona" },
      { tr: "yeni", uz: "yangi" },
      { tr: "yolcu", uz: "yo‘lovchi" },
      { tr: "yorum", uz: "sharh, izoh" },
      { tr: "yurt", uz: "talabalar turar joyi" },
      { tr: "zaman", uz: "vaqt" },
      { tr: "bol bol", uz: "ko‘p-ko‘p, mo‘l-mo‘l" },
      { tr: "inşallah", uz: "xudo xohlasa" },
      // fe'llar
      { tr: "açmak", uz: "ochmoq" },
      { tr: "anlamak", uz: "tushunmoq, anglamoq" },
      { tr: "bakmak", uz: "qaramoq" },
      { tr: "banyo yapmak", uz: "dush qabul qilmoq" },
      { tr: "başlamak", uz: "boshlamoq" },
      { tr: "bayılmak", uz: "hushidan ketmoq; juda yoqtirmoq" },
      { tr: "beslenmek", uz: "oziqlanmoq" },
      { tr: "bilmek", uz: "bilmoq" },
      { tr: "binmek", uz: "minmoq" },
      { tr: "biriktirmek", uz: "biriktirmoq, yig‘moq" },
      { tr: "bitmek", uz: "tugamoq" },
      { tr: "buluşmak", uz: "uchrashmoq" },
      { tr: "çalışmak", uz: "ishlamoq" },
      { tr: "çıkmak", uz: "chiqmoq" },
      { tr: "demek", uz: "demoq" },
      { tr: "dinlemek", uz: "tinglamoq" },
      { tr: "dinlenmek", uz: "dam olmoq" },
      { tr: "dolaşmak", uz: "aylanib yurmoq" },
      { tr: "dönmek", uz: "qaytmoq" },
      { tr: "durmak", uz: "turmoq" },
      { tr: "duş almak", uz: "dush olmoq" },
      { tr: "fotoğraf çekmek", uz: "rasm tushirmoq" },
      { tr: "geçmek", uz: "o‘tmoq" },
      { tr: "gezmek", uz: "sayr qilmoq, kezmoq" },
      { tr: "girmek", uz: "kirmoq" },
      { tr: "gitmek", uz: "ketmoq" },
      { tr: "hazırlamak", uz: "tayyorlamoq" },
      { tr: "hazırlanmak", uz: "tayyorlanmoq" },
      { tr: "hoşlanmak", uz: "yoqtirmoq, zavqlanmoq" },
      { tr: "internete girmek", uz: "internetga kirmoq" },
      { tr: "izlemek", uz: "ko‘rmoq (film, serial)" },
      { tr: "kahvaltı etmek", uz: "nonushta qilmoq" },
      { tr: "kalkmak", uz: "turmoq" },
      { tr: "kalmak", uz: "qolmoq" },
      { tr: "kapatmak", uz: "yopmoq" },
      { tr: "kontrol etmek", uz: "tekshirmoq, nazorat qilmoq" },
      { tr: "konuşmak", uz: "gaplashmoq" },
      { tr: "korkmak", uz: "qo‘rqmoq" },
      { tr: "koşmak", uz: "yugurmoq" },
      { tr: "koymak", uz: "qo‘ymoq" },
      { tr: "kullanmak", uz: "ishlatmoq, foydalanmoq" },
      { tr: "nefret etmek", uz: "nafratlanmoq" },
      { tr: "okumak", uz: "o‘qimoq" },
      { tr: "oturmak", uz: "o‘tirmoq" },
      { tr: "oynamak", uz: "o‘ynamoq" },
      { tr: "öğrenmek", uz: "o‘rganmoq" },
      { tr: "özlemek", uz: "so‘qmoq, sog‘inmoq" },
      { tr: "para çekmek", uz: "pul yechmoq" },
      { tr: "pişirmek", uz: "pishirmoq" },
      { tr: "sanmak", uz: "taxmin qilmoq" },
      { tr: "sevmek", uz: "sevmoq" },
      { tr: "sıkılmak", uz: "zerikmoq, siqilmoq" },
      { tr: "sohbet etmek", uz: "suhbatlashmoq" },
      { tr: "sormak", uz: "so‘ramoq" },
      { tr: "söylemek", uz: "aytmoq" },
      { tr: "spor yapmak", uz: "sport bilan shug‘ullanmoq" },
      { tr: "stres atmak", uz: "stressni yo‘qotmoq" },
      { tr: "tanımak", uz: "taniymoqlik" },
      { tr: "tanışmak", uz: "tanishmoq" },
      { tr: "tekrar etmek", uz: "takrorlamoq" },
      { tr: "temizlemek", uz: "tozalamoq" },
      { tr: "tırmanmak", uz: "tirmashmoq" },
      { tr: "uyumak", uz: "uxlamoq" },
      { tr: "uzanmak", uz: "oyoq uzatib yotmoq" },
      { tr: "varmak", uz: "bormoq" },
      { tr: "vermek", uz: "bermoq" },
      { tr: "yapmak", uz: "qilmoq" },
      { tr: "yardım etmek", uz: "yordam bermoq" },
      { tr: "yardım istemek", uz: "yordam so‘ramoq" },
      { tr: "yaşamak", uz: "yashamoq" },
      { tr: "yatmak", uz: "yotmoq" },
      { tr: "yazmak", uz: "yozmoq" },
      { tr: "yemek", uz: "yemoq" },
      { tr: "yorulmak", uz: "charchamoq" },
      { tr: "yürümek", uz: "yurmoq, sayr qilmoq" },
      { tr: "yüzmek", uz: "suzmoq" },
    ],
  },
  {
    name: "4-Ünit",
    vocab: [
      { tr: "Abla", uz: "opa" },
      { tr: "Ağabey", uz: "aka" },
      { tr: "Ağız", uz: "og‘iz" },
      { tr: "Aile", uz: "oila" },
      { tr: "Amca", uz: "amaki" },
      { tr: "Anadil", uz: "ona tili" },
      { tr: "Anahtar", uz: "kalit" },
      { tr: "Anaokulu", uz: "bolalar bog‘chasi (maktabgacha ta’lim)" },
      { tr: "Anneanne", uz: "buvi, momo (ona tomonidan)" },
      { tr: "Babaanne", uz: "buvi, momo (ota tomonidan)" },
      { tr: "Boyun", uz: "bo‘yin" },
      { tr: "Burun", uz: "burun" },
      { tr: "Dayı", uz: "to‘g‘a" },
      { tr: "Dede", uz: "bobo" },
      {
        tr: "Diş",
        uz: "tish (tashqi ma’nosida ham: Diş işleri – tashqi ishlar)",
      },
      { tr: "Erkek kardeş", uz: "uka" },
      { tr: "Hala", uz: "amma" },
      { tr: "Havuz", uz: "hovuz, basseyn" },
      { tr: "İlkokul", uz: "boshlang‘ich ta’lim" },
      { tr: "Karı", uz: "xotin" },
      { tr: "Kız kardeş", uz: "singil" },
      { tr: "Koca", uz: "er" },
      { tr: "Kol", uz: "qo‘l" },
      { tr: "Lise", uz: "litsey" },
      { tr: "Manto", uz: "palto" },
      { tr: "Mektup", uz: "xat, maktub" },
      { tr: "Omuz", uz: "yelkа" },
      { tr: "Ortaokul", uz: "o‘rta-maxsus ta’lim" },
      { tr: "Satranç", uz: "shaxmat" },
      { tr: "Şirket", uz: "shirkat, kompaniya" },
      { tr: "Teneffüs", uz: "tanaffus" },
      { tr: "Teyze", uz: "xola" },
      { tr: "Üniversite", uz: "universitet" },
      { tr: "Ütü", uz: "dazmol" },
      { tr: "Yabancı dil", uz: "chet tili, begona til" },
      { tr: "Yaramaz", uz: "bezori, shayton (ishga yaramas ma’nosida ham)" },
      { tr: "Zevkli", uz: "zavqli, maroqli" },
      { tr: "Almak", uz: "olmoq" },
      { tr: "Dans etmek", uz: "raqsga tushmoq" },
      { tr: "Çalmak", uz: "chalmoq, jiringlamoq (o‘g‘irlamoq ma’nosida ham)" },
      { tr: "Hissetmek", uz: "his qilmoq" },
      { tr: "Yazmak", uz: "yozmoq" },
      { tr: "Göndermek", uz: "jo‘natmoq, yubormoq" },
      { tr: "Oynamak", uz: "o‘ynamoq" },
      { tr: "Öğretmek", uz: "o‘rgatmoq" },
      { tr: "Telefon etmek", uz: "telefon qilmoq" },
    ],
  },
  {
    name: "5-Ünit",
    vocab: [
      { tr: "Ağustos", uz: "avgust" },
      { tr: "Ajanda", uz: "agentlik" },
      { tr: "Akıl", uz: "aql" },
      { tr: "Anma", uz: "eslamoq, xotirlamoq" },
      { tr: "Aralık", uz: "dekabr" },
      { tr: "Ateş", uz: "olov, otash" },
      { tr: "Balayı", uz: "asal oyi" },
      { tr: "Biricik", uz: "birdonagina" },
      { tr: "Birlikte", uz: "birgalikda" },
      { tr: "Birliktelik", uz: "barobarlik, birlik" },
      { tr: "Boya", uz: "bo‘yoq" },
      { tr: "Buçuk", uz: "yarim" },
      { tr: "Cimri", uz: "ziqna" },
      { tr: "Cuma", uz: "juma" },
      { tr: "Cumartesi", uz: "shanba" },
      { tr: "Çarşamba", uz: "chorshanba" },
      { tr: "Çeşitli", uz: "turli xil" },
      { tr: "Çeyrek", uz: "chorak" },
      { tr: "Çorba", uz: "sho‘rva" },
      { tr: "Coşku", uz: "jo‘shqinlik" },
      { tr: "Dakika", uz: "daqiqа" },
      { tr: "Dilek", uz: "tilak" },
      { tr: "Dini", uz: "diniy" },
      { tr: "Dişçi", uz: "tishchi, stomatolog" },
      { tr: "Dolunay", uz: "to‘lin oy" },
      { tr: "Düğüm", uz: "tugun" },
      { tr: "Egemenlik", uz: "hukmronlik" },
      { tr: "Ekim", uz: "oktabr" },
      { tr: "Evlilik", uz: "turmush, oilalik" },
      { tr: "Eylül", uz: "sentabr" },
      { tr: "Galeri", uz: "galereya" },
      { tr: "Gelecek", uz: "kelajak" },
      { tr: "Gençlik", uz: "yoshlik" },
      { tr: "Geveze", uz: "ko‘p gapiradigan, sergap" },
      { tr: "Harf", uz: "harf" },
      { tr: "Hazırlık", uz: "tayyorgarlik" },
      { tr: "Haziran", uz: "iyun" },
      { tr: "Hece", uz: "bo‘g‘in" },
      { tr: "Heyecan", uz: "hayajon" },
      { tr: "İlkbahar", uz: "bahor" },
      { tr: "Kasım", uz: "noyabr" },
      { tr: "Kaza", uz: "falokat, avariya" },
      { tr: "Kış", uz: "qish" },
      { tr: "Kurum", uz: "tashkilot" },
      { tr: "Kutlama", uz: "nishonlash" },
      { tr: "Kültür", uz: "madaniyat" },
      { tr: "Marş", uz: "madhiya" },
      { tr: "Mart", uz: "mart" },
      { tr: "Mavi", uz: "moviy rang" },
      { tr: "Mayıs", uz: "may" },
      { tr: "Mevsim", uz: "fasl, mavsum" },
      { tr: "Mezuniyet", uz: "bitiruv" },
      { tr: "Milli", uz: "milliy" },
      { tr: "Mola", uz: "tanaffus" },
      { tr: "Mor", uz: "binafsha rang" },
      { tr: "Nice", uz: "necha / yaxshi" },
      { tr: "Nikah", uz: "nikoh" },
      { tr: "Nisan", uz: "aprel" },
      { tr: "Odun", uz: "o‘tin" },
      { tr: "Ömür", uz: "umr" },
      { tr: "Palto", uz: "palto" },
      { tr: "Pazar", uz: "yakshanba" },
      { tr: "Pazartesi", uz: "dushanba" },
      { tr: "Perşembe", uz: "payshanba" },
      { tr: "Program", uz: "dastur" },
      { tr: "Randevu", uz: "uchrashuv (belgilangan)" },
      { tr: "Resmi", uz: "rasmiy" },
      { tr: "Rezervasyon", uz: "band qilish, bron qilish" },
      { tr: "Salı", uz: "seshanba" },
      { tr: "Saniye", uz: "soniya" },
      { tr: "Sarı", uz: "sariq" },
      { tr: "Saygıdeğer", uz: "muhtaram, hurmatli" },
      { tr: "Sevgili", uz: "sevgili, suygan inson" },
      { tr: "Sonbahar", uz: "kuz" },
      { tr: "Sürpriz", uz: "kutilmagan sovg‘a/holat" },
      { tr: "Şubat", uz: "fevral" },
      { tr: "Temmuz", uz: "iyul" },
      { tr: "Toplantı", uz: "yig‘ilish, majlis" },
      { tr: "Ulusal", uz: "milliy" },
      { tr: "Vakit", uz: "vaqt" },
      { tr: "Yaz", uz: "yoz" },
      { tr: "Yeşil", uz: "yashil" },
      { tr: "Yılbaşı", uz: "yangi yil" },
      { tr: "Yıldönümü", uz: "yil oxiri" },
      { tr: "Zafer", uz: "g‘alaba" },
      { tr: "Zorluk", uz: "qiyinchilik" },

      // Fe'llar
      { tr: "Yaşlanmak", uz: "qarimoq" },
      { tr: "Yenmek", uz: "yengmoq" },
      { tr: "Yıkamak", uz: "yuvmoq" },
      { tr: "Ziyaret etmek", uz: "ziyorat qilmoq" },
      { tr: "Asmak", uz: "osmoq" },
      { tr: "Atlamak", uz: "tashlab ketmoq, sakramoq" },
      { tr: "Atmak", uz: "otmoq" },
      { tr: "Beklemek", uz: "kutmoq" },
      { tr: "Benzemek", uz: "o‘xshamoq" },
      { tr: "Devam etmek", uz: "davom etmoq" },
      { tr: "Dilemek", uz: "tilamoq" },
      { tr: "Doğmak", uz: "tug‘ilmoq" },
      { tr: "Evlenmek", uz: "turmush qurmoq" },
      { tr: "Gecikmek", uz: "kechikmoq" },
      { tr: "Heyecanlanmak", uz: "hayajonlanmoq" },
      { tr: "Kapanmak", uz: "yopilmoq" },
      { tr: "Karşılamak", uz: "qarshilamoq, kutib olmoq" },
      { tr: "Katılmak", uz: "qo‘shilmoq" },
      { tr: "Korumak", uz: "qo‘riqlamoq" },
      { tr: "Kutlamak", uz: "nishonlamoq, tabriklamoq" },
      { tr: "Kutlu olmak", uz: "baxtli bo‘lmoq" },
      { tr: "Öpmek", uz: "o‘pmоq" },
      { tr: "Satın almak", uz: "sotib olmoq" },
      { tr: "Sürmek", uz: "haydamoq (mashina)" },
      { tr: "Toplamak", uz: "to‘plamoq, yig‘moq" },
      { tr: "Vedalaşmak", uz: "xayrlashmoq" },
      { tr: "Yakmak", uz: "yoqmoq, o‘t qo‘ymoq" },
    ],
  },

  {
    name: "6-Ünit",
    vocab: [
      { tr: "Akıllı", uz: "aqlli" },
      { tr: "Akraba", uz: "qarindosh" },
      { tr: "Alan", uz: "soha" },
      { tr: "Alt", uz: "ost, tag" },
      { tr: "Arka", uz: "orqa" },
      { tr: "Aşağı", uz: "past, pastki joy" },
      { tr: "Boyun", uz: "bo‘yin" },
      { tr: "Cadde", uz: "asosiy yo‘l, trassa" },
      { tr: "Cesur", uz: "jasur" },
      { tr: "Çene", uz: "jag‘, iyak" },
      { tr: "Çevre", uz: "atrof" },
      { tr: "Çiftçi", uz: "dehqon" },
      { tr: "Dış", uz: "tashqi, tashqari" },
      { tr: "Düğün", uz: "to‘y" },
      { tr: "Emekli", uz: "nafaqaxo‘r" },
      { tr: "Enişte", uz: "pochcha (jizza)" },
      { tr: "Göl", uz: "ko‘l" },
      { tr: "Grip", uz: "gripp" },
      { tr: "Güler yüzlü", uz: "ochiq chehrali, kulib turadigan" },
      { tr: "Halsiz", uz: "holsiz" },
      { tr: "İç", uz: "ich" },
      { tr: "İskele", uz: "kema to‘xtash joyi, bandargoh" },
      { tr: "Kalabalık", uz: "gavjum" },
      { tr: "Karşı", uz: "qarshi" },
      { tr: "Kibar", uz: "odobli, jentelmen" },
      { tr: "Köprü", uz: "ko‘prik" },
      { tr: "Köşe", uz: "burchak" },
      { tr: "Kulak", uz: "quloq" },
      { tr: "Kuzen", uz: "amakivachcha, tog‘avachcha" },
      { tr: "Kütüphane", uz: "kutubxona" },
      { tr: "Lezzetli", uz: "lazzatli" },
      { tr: "Mahalle", uz: "mahalla" },
      { tr: "Manzara", uz: "manzara, ko‘rinish" },
      { tr: "Marka", uz: "marka, brend" },
      { tr: "Mercimek çorbası", uz: "mash (marjumak) sho‘rvasi" },
      { tr: "Meydan", uz: "maydon" },
      { tr: "Nehir", uz: "daryo" },
      { tr: "Orta", uz: "o‘rta" },
      { tr: "Ön", uz: "old, old tomon" },
      { tr: "Parmak", uz: "barmoq" },
      { tr: "Patlıcan", uz: "baqlajon" },
      { tr: "Plan", uz: "reja, plan" },
      { tr: "Rapor", uz: "hisobot" },
      { tr: "Reçete", uz: "retsept (shifokor yozgan)" },
      { tr: "Renk", uz: "rang" },
      { tr: "Sağ", uz: "so‘l, sog‘lom" },
      { tr: "Salıncak", uz: "arg‘imchoq" },
      { tr: "Sol", uz: "chap" },
      { tr: "Sözlük", uz: "lug‘at" },
      { tr: "Şeker", uz: "shakar" },
      { tr: "Şikâyet", uz: "arz, shikoyat" },
      { tr: "Tahmin", uz: "tahmin" },
      { tr: "Tarihi", uz: "tarixiy" },
      { tr: "Ten", uz: "tana, teri" },
      { tr: "Terzi", uz: "tikuvchi" },
      { tr: "Teyze", uz: "xola" },
      { tr: "Üst", uz: "ust, yuqori qism" },
      { tr: "Vücut", uz: "vujud, tana" },
      { tr: "Yaramaz", uz: "tobolanchi" },
      { tr: "Yenge", uz: "yanga" },
      { tr: "Yukarı", uz: "yuqori" },

      // Fe'llar
      { tr: "Ağrımak", uz: "og‘rimoq, kasal bo‘lib qolmoq" },
      { tr: "Anlaşmak", uz: "kelishmoq, anglashmoq" },
      { tr: "Bayılmak", uz: "hushidan ketmoq" },
      { tr: "Beğenmek", uz: "yoqtirmoq" },
      { tr: "Danışmak", uz: "maslahat qilmoq, fikr almashmoq" },
      { tr: "Değiştirmek", uz: "o‘zgartirmoq" },
      { tr: "Dinlemek", uz: "tinglamoq" },
      { tr: "Gezmek", uz: "sayr qilmoq, kezmoq" },
      { tr: "Görüşmek", uz: "ko‘rishmoq" },
      { tr: "Hissetmek", uz: "his qilmoq" },
      { tr: "İlgilenmek", uz: "qiziqmoq, e’tibor qaratmoq" },
      { tr: "Kalkmak", uz: "turmoq" },
      { tr: "Kaşınmak", uz: "qashimoq" },
      { tr: "Katılmak", uz: "qo‘shilmoq" },
      { tr: "Kızarmak", uz: "qizarib ketmoq" },
      { tr: "Sallanmak", uz: "tebranmoq" },
      { tr: "Tansiyon ölçtürmek", uz: "qon bosimini o‘lchatmoq" },
      { tr: "Tartılmak", uz: "tortilmoq, vazn o‘lchamoq" },
      { tr: "Tedavi olmak", uz: "davolanmoq" },
      { tr: "Öksürmek", uz: "yo‘talmoq" },
      { tr: "Ziyarete gelmek", uz: "ziyoratga kelmoq, yo‘qlamoq" },
    ],
  },
];

// O'zgaruvchilar
let currentUnitId = 1;
let currentTaskIndex = 0;
let currentTestIndex = 0;
let userAnswers = [];
let testAnswers = [];
let currentSection = "units";

// DOM elementlari
const unitsSection = document.getElementById("units-section");
const tasksSection = document.getElementById("tasks-section");
const testSection = document.getElementById("test-section");
const resultsSection = document.getElementById("results-section");
const unitsGrid = document.querySelector(".units-grid");
const currentUnitTitle = document.getElementById("current-unit-title");
const currentUnitTestTitle = document.getElementById("current-unit-test-title");
const taskQuestionText = document.getElementById("task-question-text");
const testQuestionText = document.getElementById("test-question-text");
const taskOptions = document.querySelector(".task-options");
const testOptions = document.querySelector(".test-options");
const taskCounter = document.getElementById("task-counter");
const testCounter = document.getElementById("test-counter");
const taskFeedback = document.querySelector(".task-feedback");
const testFeedback = document.querySelector(".test-feedback");
const checkAnswerBtn = document.getElementById("check-answer");
const prevTaskBtn = document.getElementById("prev-task");
const nextTaskBtn = document.getElementById("next-task");
const prevTestBtn = document.getElementById("prev-test");
const nextTestBtn = document.getElementById("next-test");
const finishTasksBtn = document.getElementById("finish-tasks");
const finishTestBtn = document.getElementById("finish-test");
const backToUnitsBtn = document.getElementById("back-to-units");
const backToUnitsFromTestBtn = document.getElementById(
  "back-to-units-from-test"
);
const backToUnitsFromResultsBtn = document.getElementById(
  "back-to-units-from-results"
);
const correctAnswersEl = document.getElementById("correct-answers");
const wrongAnswersEl = document.getElementById("wrong-answers");
const percentageEl = document.getElementById("percentage");
const gradeEl = document.getElementById("grade");
const resultsList = document.getElementById("results-list");
const resultsTitle = document.getElementById("results-title");

// Unitlarni yuklash
function loadUnits() {
  unitsGrid.innerHTML = "";

  units.forEach((unit) => {
    const unitCard = document.createElement("div");
    unitCard.className = "unit-card";
    unitCard.innerHTML = `
            <h3>${unit.name}</h3>
            <div class="unit-actions">
                <button class="btn btn-primary start-tasks" data-unit="${unit.id}">Vazifalar</button>
                <button class="btn btn-secondary start-test" data-unit="${unit.id}">Test</button>
            </div>
        `;
    unitsGrid.appendChild(unitCard);
  });

  // Unit tugmalariga hodisa qo'shish
  document.querySelectorAll(".start-tasks").forEach((btn) => {
    btn.addEventListener("click", function () {
      const unitId = parseInt(this.getAttribute("data-unit"));
      startTasks(unitId);
    });
  });

  document.querySelectorAll(".start-test").forEach((btn) => {
    btn.addEventListener("click", function () {
      const unitId = parseInt(this.getAttribute("data-unit"));
      startTest(unitId);
    });
  });
}

// Vazifalarni boshlash
function startTasks(unitId) {
  currentUnitId = unitId;
  currentTaskIndex = 0;
  userAnswers = [];

  // Sarlavhani yangilash
  currentUnitTitle.textContent = units.find((u) => u.id === unitId).name;

  // Bo'limlarni almashtirish
  showSection("tasks");

  // Birinchi vazifani yuklash
  loadTask(currentTaskIndex);
}

// Testni boshlash
function startTest(unitId) {
  currentUnitId = unitId;
  currentTestIndex = 0;
  testAnswers = [];

  // Sarlavhani yangilash
  currentUnitTestTitle.textContent = `${
    units.find((u) => u.id === unitId).name
  } - Test`;

  // Bo'limlarni almashtirish
  showSection("test");

  // Birinchi testni yuklash
  loadTest(currentTestIndex);
}

// Vazifani yuklash
function loadTask(index) {
  const unitTasks = tasks[currentUnitId];
  if (!unitTasks || index >= unitTasks.length) return;

  const task = unitTasks[index];

  // Savolni yangilash
  taskQuestionText.textContent = task.question;

  // Variantlarni yangilash
  taskOptions.innerHTML = "";
  task.options.forEach((option, i) => {
    const optionEl = document.createElement("div");
    optionEl.className = "option";
    optionEl.textContent = option;
    optionEl.setAttribute("data-index", i);
    optionEl.addEventListener("click", function () {
      selectTaskOption(this);
    });
    taskOptions.appendChild(optionEl);
  });

  // Hisoblagichni yangilash
  taskCounter.textContent = `${index + 1}/${unitTasks.length}`;

  // Tugmalarni yangilash
  prevTaskBtn.disabled = index === 0;
  nextTaskBtn.disabled = index === unitTasks.length - 1;

  // Feedbackni yashirish
  taskFeedback.style.display = "none";

  // Oldingi javobni ko'rsatish
  const userAnswer = userAnswers[index];
  if (userAnswer !== undefined) {
    const options = taskOptions.querySelectorAll(".option");
    if (typeof userAnswer === "object" && userAnswer.answer !== undefined) {
      options[userAnswer.answer].classList.add("selected");
    } else {
      options[userAnswer].classList.add("selected");
    }

    // Agar javob tekshirilgan bo'lsa
    if (userAnswer.checked !== undefined && userAnswer.checked) {
      showTaskFeedback(index, userAnswer.answer, userAnswer.correct);
    }
  }
}

// Testni yuklash
function loadTest(index) {
  const unitVocab =
    Vocob.find((v) => v.name.includes(currentUnitId))?.vocab || [];
  if (index >= unitVocab.length) return;

  const vocab = unitVocab[index];

  // Savolni yangilash
  testQuestionText.textContent = vocab.uz;

  // Variantlarni yaratish
  const options = [vocab.tr];

  // Qolgan variantlarni to'ldirish
  while (options.length < 4) {
    const randomVocab = unitVocab[Math.floor(Math.random() * unitVocab.length)];
    if (!options.includes(randomVocab.tr)) {
      options.push(randomVocab.tr);
    }
  }

  // Variantlarni aralashtirish
  options.sort(() => Math.random() - 0.5);

  // Variantlarni yangilash
  testOptions.innerHTML = "";
  options.forEach((option, i) => {
    const optionEl = document.createElement("div");
    optionEl.className = "option";
    optionEl.textContent = option;
    optionEl.setAttribute("data-index", i);
    optionEl.addEventListener("click", function () {
      selectTestOption(this);
    });
    testOptions.appendChild(optionEl);
  });

  // Hisoblagichni yangilash
  testCounter.textContent = `${index + 1}/${unitVocab.length}`;

  // Tugmalarni yangilash
  prevTestBtn.disabled = index === 0;
  nextTestBtn.disabled = index === unitVocab.length - 1;

  // Feedbackni yashirish
  testFeedback.style.display = "none";

  // Oldingi javobni ko'rsatish
  const userAnswer = testAnswers[index];
  if (userAnswer !== undefined) {
    const options = testOptions.querySelectorAll(".option");
    options[userAnswer.selectedIndex].classList.add("selected");

    // Agar javob tekshirilgan bo'lsa
    if (userAnswer.checked) {
      showTestFeedback(index, userAnswer.selectedIndex, userAnswer.correct);
    }
  }
}

// Vazifa variantini tanlash
function selectTaskOption(optionEl) {
  // Barcha variantlardan tanlangan klassni olib tashlash
  const options = taskOptions.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));

  // Tanlangan variantga klass qo'shish
  optionEl.classList.add("selected");

  // Javobni saqlash
  userAnswers[currentTaskIndex] = parseInt(optionEl.getAttribute("data-index"));
}

// Test variantini tanlash
function selectTestOption(optionEl) {
  // Barcha variantlardan tanlangan klassni olib tashlash
  const options = testOptions.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));

  // Tanlangan variantga klass qo'shish
  optionEl.classList.add("selected");

  // Javobni saqlash
  const selectedIndex = parseInt(optionEl.getAttribute("data-index"));
  const unitVocab =
    Vocob.find((v) => v.name.includes(currentUnitId))?.vocab || [];
  const correctAnswer = unitVocab[currentTestIndex].tr;
  const selectedAnswer = optionEl.textContent;
  const isCorrect = selectedAnswer === correctAnswer;

  testAnswers[currentTestIndex] = {
    selectedIndex: selectedIndex,
    correct: isCorrect,
    checked: true,
  };

  // Darhol javobni ko'rsatish
  showTestFeedback(currentTestIndex, selectedIndex, isCorrect);
}

// Vazifa javobini tekshirish
function checkTaskAnswer() {
  if (userAnswers[currentTaskIndex] === undefined) {
    alert("Iltimos, javob variantini tanlang!");
    return;
  }

  const unitTasks = tasks[currentUnitId];
  const task = unitTasks[currentTaskIndex];
  const userAnswer = userAnswers[currentTaskIndex];
  const isCorrect = userAnswer === task.answer;

  // Javobni saqlash
  userAnswers[currentTaskIndex] = {
    answer: userAnswer,
    correct: isCorrect,
    checked: true,
  };

  // Feedbackni ko'rsatish
  showTaskFeedback(currentTaskIndex, userAnswer, isCorrect);
}

// Vazifa feedbackini ko'rsatish
function showTaskFeedback(index, userAnswer, isCorrect) {
  const unitTasks = tasks[currentUnitId];
  const task = unitTasks[index];

  // Variantlarni rang bilan belgilash
  const options = taskOptions.querySelectorAll(".option");
  options.forEach((opt, i) => {
    opt.classList.remove("correct", "wrong");
    if (i === task.answer) {
      opt.classList.add("correct");
    } else if (i === userAnswer && !isCorrect) {
      opt.classList.add("wrong");
    }
  });

  // Feedback matnini ko'rsatish
  taskFeedback.textContent = isCorrect
    ? "To'g'ri! Ajoyib javob!"
    : `Noto'g'ri. To'g'ri javob: ${task.options[task.answer]}`;

  taskFeedback.className = `task-feedback ${
    isCorrect ? "feedback-correct" : "feedback-wrong"
  }`;
  taskFeedback.style.display = "block";
}

// Test feedbackini ko'rsatish
function showTestFeedback(index, userAnswerIndex, isCorrect) {
  const unitVocab =
    Vocob.find((v) => v.name.includes(currentUnitId))?.vocab || [];
  const vocab = unitVocab[index];

  // Variantlarni rang bilan belgilash
  const options = testOptions.querySelectorAll(".option");
  const correctIndex = Array.from(options).findIndex(
    (opt) => opt.textContent === vocab.tr
  );

  options.forEach((opt, i) => {
    opt.classList.remove("correct", "wrong");
    if (i === correctIndex) {
      opt.classList.add("correct");
    } else if (i === userAnswerIndex && !isCorrect) {
      opt.classList.add("wrong");
    }
  });

  // Feedback matnini ko'rsatish
  testFeedback.textContent = isCorrect
    ? "To'g'ri! Ajoyib javob!"
    : `Noto'g'ri. To'g'ri javob: ${vocab.tr}`;

  testFeedback.className = `test-feedback ${
    isCorrect ? "feedback-correct" : "feedback-wrong"
  }`;
  testFeedback.style.display = "block";
}

// Vazifalarni tugatish
function finishTasks() {
  // Barcha javoblarni tekshirish
  const unitTasks = tasks[currentUnitId];
  let checkedCount = 0;

  for (let i = 0; i < unitTasks.length; i++) {
    if (
      userAnswers[i] !== undefined &&
      typeof userAnswers[i] === "object" &&
      userAnswers[i].checked
    ) {
      checkedCount++;
    } else {
      // Tekshirilmagan javobni tekshirish
      if (userAnswers[i] !== undefined) {
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer === unitTasks[i].answer;
        userAnswers[i] = {
          answer: userAnswer,
          correct: isCorrect,
          checked: true,
        };
        checkedCount++;
      }
    }
  }

  // Agar barcha javoblar tekshirilgan bo'lsa
  if (checkedCount === unitTasks.length) {
    showResults("tasks");
  } else {
    // Tekshirilmagan javoblar borligi haqida ogohlantirish
    const confirmed = confirm(
      `Siz ${
        unitTasks.length - checkedCount
      } ta savolga javob bermagansiz. Shunday bo'lsa ham natijalarni ko'rmoqchimisiz?`
    );
    if (confirmed) {
      // Tekshirilmagan javoblarni noto'g'ri deb hisoblash
      for (let i = 0; i < unitTasks.length; i++) {
        if (userAnswers[i] === undefined) {
          userAnswers[i] = {
            answer: -1,
            correct: false,
            checked: false,
          };
        }
      }
      showResults("tasks");
    }
  }
}

// Testni tugatish
function finishTest() {
  const unitVocab =
    Vocob.find((v) => v.name.includes(currentUnitId))?.vocab || [];
  let answeredCount = 0;

  // Javob berilgan savollar sonini hisoblash
  for (let i = 0; i < unitVocab.length; i++) {
    if (testAnswers[i] !== undefined) {
      answeredCount++;
    }
  }

  // Agar barcha savollarga javob berilgan bo'lsa
  if (answeredCount === unitVocab.length) {
    showResults("test");
  } else {
    // Javob berilmagan savollar borligi haqida ogohlantirish
    const confirmed = confirm(
      `Siz ${
        unitVocab.length - answeredCount
      } ta savolga javob bermagansiz. Shunday bo'lsa ham natijalarni ko'rmoqchimisiz?`
    );
    if (confirmed) {
      // Javob berilmagan savollarni noto'g'ri deb hisoblash
      for (let i = 0; i < unitVocab.length; i++) {
        if (testAnswers[i] === undefined) {
          testAnswers[i] = {
            selectedIndex: -1,
            correct: false,
            checked: false,
          };
        }
      }
      showResults("test");
    }
  }
}

// Natijalarni ko'rsatish
function showResults(type) {
  let correctCount = 0;
  let totalCount = 0;
  let answeredCount = 0;
  let results = [];

  if (type === "tasks") {
    resultsTitle.textContent = `${
      units.find((u) => u.id === currentUnitId).name
    } - Vazifalar natijalari`;
    totalCount = tasks[currentUnitId].length;

    for (let i = 0; i < totalCount; i++) {
      const task = tasks[currentUnitId][i];
      const userAnswer = userAnswers[i];

      if (userAnswer !== undefined) {
        answeredCount++;
        const isCorrect = userAnswer.correct;

        if (isCorrect) correctCount++;

        results.push({
          question: task.question,
          userAnswer:
            userAnswer.answer !== -1
              ? task.options[userAnswer.answer]
              : "Javob berilmagan",
          correctAnswer: task.options[task.answer],
          isCorrect: isCorrect,
          answered: userAnswer.answer !== -1,
        });
      } else {
        results.push({
          question: task.question,
          userAnswer: "Javob berilmagan",
          correctAnswer: task.options[task.answer],
          isCorrect: false,
          answered: false,
        });
      }
    }
  } else {
    resultsTitle.textContent = `${
      units.find((u) => u.id === currentUnitId).name
    } - Test natijalari`;
    const unitVocab =
      Vocob.find((v) => v.name.includes(currentUnitId))?.vocab || [];
    totalCount = unitVocab.length;

    for (let i = 0; i < totalCount; i++) {
      const vocab = unitVocab[i];
      const userAnswer = testAnswers[i];

      if (userAnswer !== undefined) {
        answeredCount++;
        const isCorrect = userAnswer.correct;

        if (isCorrect) correctCount++;

        const options = testOptions.querySelectorAll(".option");
        const selectedOption =
          userAnswer.selectedIndex !== -1
            ? options[userAnswer.selectedIndex]
            : null;

        results.push({
          question: vocab.uz,
          userAnswer: selectedOption
            ? selectedOption.textContent
            : "Javob berilmagan",
          correctAnswer: vocab.tr,
          isCorrect: isCorrect,
          answered: userAnswer.selectedIndex !== -1,
        });
      } else {
        results.push({
          question: vocab.uz,
          userAnswer: "Javob berilmagan",
          correctAnswer: vocab.tr,
          isCorrect: false,
          answered: false,
        });
      }
    }
  }

  // Statistikani hisoblash
  const percentage =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  let grade = "";

  if (answeredCount === 0) {
    grade = "Baholanmadi";
  } else if (percentage >= 90) grade = "A'lo";
  else if (percentage >= 80) grade = "Yaxshi";
  else if (percentage >= 70) grade = "Qoniqarli";
  else if (percentage >= 60) grade = "Qoniqarsiz";
  else grade = "Yomon";

  // Statistikani ko'rsatish
  correctAnswersEl.textContent = correctCount;
  wrongAnswersEl.textContent = answeredCount - correctCount;
  percentageEl.textContent = answeredCount > 0 ? `${percentage}%` : "0%";
  gradeEl.textContent = grade;

  // Javob berilmagan savollar sonini ko'rsatish
  const unansweredCount = totalCount - answeredCount;
  if (unansweredCount > 0) {
    const unansweredStat = document.createElement("div");
    unansweredStat.className = "stat";
    unansweredStat.innerHTML = `
            <span class="stat-label">Javob berilmagan:</span>
            <span class="stat-value" style="color: #e74c3c;">${unansweredCount}</span>
        `;
    document.querySelector(".results-stats").appendChild(unansweredStat);
  }

  // Natijalar ro'yxatini ko'rsatish
  resultsList.innerHTML = "";
  results.forEach((result, index) => {
    const resultItem = document.createElement("div");
    resultItem.className = `result-item ${
      result.isCorrect ? "correct" : "wrong"
    }`;

    let statusIcon = "?";
    let statusText = "";

    if (!result.answered) {
      statusIcon = "?";
      statusText = "Javob berilmagan";
    } else if (result.isCorrect) {
      statusIcon = "✓";
      statusText = "To'g'ri";
    } else {
      statusIcon = "✗";
      statusText = "Noto'g'ri";
    }

    resultItem.innerHTML = `
            <div class="result-question">
                <strong>${index + 1}. ${result.question}</strong><br>
                <span>Sizning javobingiz: ${result.userAnswer}</span>
                ${
                  !result.isCorrect && result.answered
                    ? `<br><span>To'g'ri javob: ${result.correctAnswer}</span>`
                    : ""
                }
                ${
                  !result.answered
                    ? `<br><span style="color: #e74c3c;">To'g'ri javob: ${result.correctAnswer}</span>`
                    : ""
                }
            </div>
            <div class="result-status ${
              result.isCorrect ? "correct" : "wrong"
            }">
                ${statusIcon}<br>
                <small>${statusText}</small>
            </div>
        `;
    resultsList.appendChild(resultItem);
  });

  // Bo'limni ko'rsatish
  showSection("results");
}

// Bo'limni ko'rsatish
function showSection(section) {
  // Barcha bo'limlarni yashirish
  unitsSection.classList.remove("active");
  tasksSection.classList.remove("active");
  testSection.classList.remove("active");
  resultsSection.classList.remove("active");

  // Tanlangan bo'limni ko'rsatish
  if (section === "units") {
    unitsSection.classList.add("active");
    currentSection = "units";
  } else if (section === "tasks") {
    tasksSection.classList.add("active");
    currentSection = "tasks";
  } else if (section === "test") {
    testSection.classList.add("active");
    currentSection = "test";
  } else if (section === "results") {
    resultsSection.classList.add("active");
    currentSection = "results";

    // Animatsiyani qayta ishga tushirish
    const confettiElements = document.querySelectorAll(".confetti");
    confettiElements.forEach((confetti) => {
      confetti.style.animation = "none";
      void confetti.offsetWidth; // Reflow trigger
      confetti.style.animation = null;
    });
  }
}

// Dasturni ishga tushirish
function init() {
  // Unitlarni yuklash
  loadUnits();

  // Hodisa qo'shish
  checkAnswerBtn.addEventListener("click", checkTaskAnswer);

  prevTaskBtn.addEventListener("click", function () {
    if (currentTaskIndex > 0) {
      currentTaskIndex--;
      loadTask(currentTaskIndex);
    }
  });

  nextTaskBtn.addEventListener("click", function () {
    const unitTasks = tasks[currentUnitId];
    if (currentTaskIndex < unitTasks.length - 1) {
      currentTaskIndex++;
      loadTask(currentTaskIndex);
    }
  });

  prevTestBtn.addEventListener("click", function () {
    if (currentTestIndex > 0) {
      currentTestIndex--;
      loadTest(currentTestIndex);
    }
  });

  nextTestBtn.addEventListener("click", function () {
    const unitVocab =
      Vocob.find((v) => v.name.includes(currentUnitId))?.vocab || [];
    if (currentTestIndex < unitVocab.length - 1) {
      currentTestIndex++;
      loadTest(currentTestIndex);
    }
  });

  finishTasksBtn.addEventListener("click", finishTasks);
  finishTestBtn.addEventListener("click", finishTest);

  backToUnitsBtn.addEventListener("click", function () {
    showSection("units");
  });

  backToUnitsFromTestBtn.addEventListener("click", function () {
    showSection("units");
  });

  backToUnitsFromResultsBtn.addEventListener("click", function () {
    showSection("units");
  });
}

// Dasturni ishga tushirish
document.addEventListener("DOMContentLoaded", init);
