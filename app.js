const UNITS = [
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

const unitSelectDiv = document.getElementById("unit-select");
const quizSection = document.getElementById("quiz-section");
const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const endBtn = document.getElementById("endBtn");
const resultDiv = document.getElementById("result");
const progressDiv = document.getElementById("progress");
const finishSection = document.getElementById("finish-section");
const finalScoreDiv = document.getElementById("final-score");
const retryBtn = document.getElementById("retryBtn");
const chooseUnitBtn = document.getElementById("chooseUnitBtn");
const reviewListDiv = document.getElementById("review-list");

let currentUnit, questions, order, currentQuestionIdx, score, answers;

function renderUnitSelect() {
  unitSelectDiv.innerHTML = `<h2>Unit(bo'lim)ni tanlang:</h2>`;
  UNITS.forEach((unit, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `${unit.name} (${unit.vocab.length} savol)`;
    btn.className = "unit-btn";
    btn.onclick = () => startQuiz(idx);
    unitSelectDiv.appendChild(btn);
  });
  quizSection.style.display = "none";
  finishSection.style.display = "none";
  unitSelectDiv.style.display = "flex";
}

function startQuiz(unitIdx) {
  currentUnit = UNITS[unitIdx];
  questions = shuffle([...currentUnit.vocab]);
  order = Array.from(Array(questions.length).keys());
  currentQuestionIdx = 0;
  score = 0;
  answers = Array(questions.length).fill(null);
  unitSelectDiv.style.display = "none";
  quizSection.style.display = "block";
  finishSection.style.display = "none";
  showQuestion();
  resultDiv.textContent = "";
}

function showQuestion() {
  quizSection.classList.add("quiz-anim");
  setTimeout(() => quizSection.classList.remove("quiz-anim"), 540);
  progressDiv.textContent = `Savol: ${currentQuestionIdx + 1} / ${
    questions.length
  }`;
  resultDiv.textContent = "";
  prevBtn.style.display = currentQuestionIdx > 0 ? "" : "none";
  nextBtn.style.display = answers[currentQuestionIdx] !== null ? "" : "none";
  endBtn.style.display = "";
  const question = questions[currentQuestionIdx];
  questionDiv.innerHTML = `<span>O'zbekcha: <b>${question.uz}</b></span>
   <br><span style="font-size:0.97em;color:#666">Turkchasini tanlang:</span>`;
  const options = generateOptions(question.tr, currentUnit.vocab);
  optionsDiv.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.disabled = answers[currentQuestionIdx] !== null;
    if (answers[currentQuestionIdx] !== null) {
      let answer = answers[currentQuestionIdx];
      if (opt === answer.selected)
        btn.classList.add(
          answer.selected === answer.correct ? "active" : "wrong"
        );
      if (opt === answer.correct) btn.classList.add("active");
    }
    btn.onclick = () => answerQuestion(btn, opt, question.tr);
    optionsDiv.appendChild(btn);
  });
  if (answers[currentQuestionIdx] !== null) {
    let answer = answers[currentQuestionIdx];
    resultDiv.innerHTML =
      answer.selected === answer.correct
        ? "Toʻgʻri!"
        : `<span>Xato! <span style="color:#43d197;">To'g'ri javob: <b>${answer.correct}</b></span></span>`;
  }
}

function answerQuestion(btn, selected, correct) {
  Array.from(optionsDiv.children).forEach((optionBtn) => {
    optionBtn.disabled = true;
    if (optionBtn.textContent === correct) optionBtn.classList.add("active");
    if (optionBtn.textContent === selected && selected !== correct)
      optionBtn.classList.add("wrong");
  });
  answers[currentQuestionIdx] = {
    selected,
    correct,
    uz: questions[currentQuestionIdx].uz,
    tr: questions[currentQuestionIdx].tr,
  };
  nextBtn.style.display = "";
  resultDiv.innerHTML =
    selected === correct
      ? "Toʻgʻri!"
      : `<span>Xato! <span style="color:#43d197;">To'g'ri javob: <b>${correct}</b></span></span>`;
}

nextBtn.onclick = () => {
  if (currentQuestionIdx < questions.length - 1) {
    currentQuestionIdx++;
    showQuestion();
  } else {
    showResult();
  }
};
prevBtn.onclick = () => {
  if (currentQuestionIdx > 0) {
    currentQuestionIdx--;
    showQuestion();
  }
};
endBtn.onclick = showResult;

function showResult() {
  quizSection.style.display = "none";
  finishSection.style.display = "block";
  score = answers.filter((a) => a && a.selected === a.correct).length;
  finalScoreDiv.innerHTML = `<span>Natija:</span> <span style="font-size:1.27em;">${score} / ${
    questions.length
  }</span> <br>
    <span>${Math.round((100 * score) / questions.length)}% to'g'ri</span>`;
  reviewListDiv.innerHTML = "";
  answers.forEach((ans, idx) => {
    if (ans) {
      const div = document.createElement("div");
      div.className = `review ${
        ans.selected === ans.correct ? "correct" : "wrong"
      }`;
      div.innerHTML = `<span class="word">${idx + 1}. ${
        ans.uz
      }</span> - <span class="userans">${ans.selected}</span>
        ${
          ans.selected !== ans.correct
            ? '<span class="rightans">→ ' + ans.correct + "</span>"
            : ""
        }`;
      reviewListDiv.appendChild(div);
    }
  });
}
retryBtn.onclick = function () {
  startQuiz(UNITS.findIndex((u) => u === currentUnit));
};
chooseUnitBtn.onclick = renderUnitSelect;

// function generateOptions(correct, vocab) {
//   let variants = [correct];
//   let wrongs = vocab.map((v) => v.tr).filter((tr) => tr !== correct);
//   shuffle(wrongs);
//   for (let i = 0; i < 3 && i < wrongs.length; i++) variants.push(wrongs[i]);
//   return shuffle(variants);
// }
function generateOptions(correct, vocab) {
  // To'g'ri javob
  let options = [correct];
  // Barcha noto'g'ri variantlar ro'yxati
  let wrongs = vocab.map((v) => v.tr).filter((tr) => tr !== correct);

  // Noto'g'ri variantlarni har doim unique qilish va kamaytirish
  let optionSet = new Set(); // unique variantlar uchun
  while (optionSet.size < 3 && wrongs.length > 0) {
    let idx = Math.floor(Math.random() * wrongs.length);
    let val = wrongs[idx];
    if (!optionSet.has(val)) optionSet.add(val);
    wrongs.splice(idx, 1);
  }
  // final variantlar
  options = options.concat(Array.from(optionSet));
  return shuffle(options);
}
function shuffle(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

renderUnitSelect();

function showResult() {
  quizSection.style.display = "none";
  finishSection.style.display = "block";
  score = answers.filter((a) => a && a.selected === a.correct).length;
  let percent = Math.round((100 * score) / questions.length);

  // Maxsus emoji va motivator uchun
  let emoji = "⚡";
  let motivator = "";
  if (percent === 100) {
    emoji = "🏆";
    motivator = "Ajoyib! Barcha savollarga to‘g‘ri javob berdingiz!";
  } else if (percent >= 87) {
    emoji = "🥇";
    motivator = "Zo‘r! Juda yaxshi ishladingiz!";
  } else if (percent >= 60) {
    emoji = "🌟";
    motivator = "Yaxshi! Yana ko‘proq yodlaysangiz a’lo bo‘ladi.";
  } else if (percent >= 30) {
    emoji = "💡";
    motivator =
      "Hali o‘rganish uchun imkoniyat ko‘p! Qaerda xato bo‘lsa, yana yodlang.";
  } else {
    emoji = "🚀";
    motivator =
      "Boshlovchi natija. Harakatdan to'xtamang! Qayta ishlang.";
  }

  // Progress ring (SVG) natija foizi uchun
  let ringVal = (percent * 282.743) / 100; // 2*PI*r, r=45. SVG circle stroke-dasharray
  finalScoreDiv.innerHTML = `
    <div class="result-badge">
      <div class="emoji">${emoji}</div>
      <svg class="result-ring" viewBox="0 0 112 112">
        <circle class="progress-bg" cx="56" cy="56" r="45"></circle>
        <circle class="progress" cx="56" cy="56" r="45" style="stroke-dasharray:${ringVal} 282.743"></circle>
      </svg>
      <div class="score">${score} / ${questions.length}</div>
    </div>
    <div id="final-score-text"><b>${percent}%</b> to'g'ri javoblar</div>
    <div id="motivator">${motivator}</div>
  `;

  // Savollar ro‘yxati belgilar, ranglar & animatsiya bilan
  reviewListDiv.innerHTML = "";
  answers.forEach((ans, idx) => {
    if (ans) {
      let icon = ans.selected === ans.correct ? "✅" : "❌";
      reviewListDiv.innerHTML += `
        <div class="review ${
          ans.selected === ans.correct ? "correct" : "wrong"
        }">
          <span class="review-icon">${icon}</span>
          <span class="word">${idx + 1}. ${ans.uz}</span> 
          <span class="userans">— ${ans.selected}</span>
          ${
            ans.selected !== ans.correct
              ? '<span class="rightans">→ ' + ans.correct + "</span>"
              : ""
          }
        </div>
      `;
    }
  });
}
