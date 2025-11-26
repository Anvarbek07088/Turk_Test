// data.js — 1-unit uchun to'ldirilgan kontent (Unit 1)
// UNITS massivini yangiladim: Unit 1 ga mashqlar (exercises) va keng lug'at (vocab) qo'shildi.
// Sahifadagi mantiq script.js da avvalgi struktura bilan ishlaydi.

const UNITS = [
  {
    id: 1,
    title: "Unit 1 — Merhaba (Alifbo, Tanishtirish)",
    exercises: [
      // Fill-in: yozma javoblarni tekshiradi
      {
        id: "u1-e-fill-1",
        type: "fill",
        question: "Turkcha: 'Salom' so'zi nima? (kiriting)",
        answer: "Merhaba"
      },
      {
        id: "u1-e-fill-2",
        type: "fill",
        question: "Turkcha: 'Kitob' so'zi nima? (kiriting)",
        answer: "Kitap"
      },
      {
        id: "u1-e-fill-3",
        type: "fill",
        question: "Turkcha: 'Do'st' so'zi nima? (kiriting)",
        answer: "Arkadaş"
      },
      {
        id: "u1-e-fill-4",
        type: "fill",
        question: "Turkcha: 'Qalam' so'zi nima? (kiriting)",
        answer: "Kalem"
      },

      // Multiple choice — o'zbekcha so'z beriladi, 4 ta turkcha variantdan to'g'ri javobni tanlash kerak
      {
        id: "u1-e-mcq-1",
        type: "mcq",
        question: "1) 'salom' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Teşekkürler", "Merhaba", "Hoşça kal", "Evet"],
        answer: 1
      },
      {
        id: "u1-e-mcq-2",
        type: "mcq",
        question: "2) 'rahmat' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Hoşça kal", "Teşekkürler", "Merhaba", "Hayır"],
        answer: 1
      },
      {
        id: "u1-e-mcq-3",
        type: "mcq",
        question: "3) 'kitob' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Kalem", "Kitap", "Masa", "Ev"],
        answer: 1
      },
      {
        id: "u1-e-mcq-4",
        type: "mcq",
        question: "4) 'qalam' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Kitap", "Kalem", "Çanta", "Bilgisayar"],
        answer: 1
      },
      {
        id: "u1-e-mcq-5",
        type: "mcq",
        question: "5) 'olma' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Elma", "Armut", "Limon", "Lale"],
        answer: 0
      },
      {
        id: "u1-e-mcq-6",
        type: "mcq",
        question: "6) 'do'st' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Öğretmen", "Öğrenci", "Arkadaş", "Kapı"],
        answer: 2
      },
      {
        id: "u1-e-mcq-7",
        type: "mcq",
        question: "7) 'o'qituvchi' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Öğrenci", "Öğretmen", "Arkadaş", "Soru"],
        answer: 1
      },
      {
        id: "u1-e-mcq-8",
        type: "mcq",
        question: "8) 'talaba' ning to'g'ri turkcha ekvivalenti qaysi?",
        options: ["Öğretmen", "Öğrenci", "Defter", "Saat"],
        answer: 1
      }
    ],
    vocab: [
      { uz: "ism", tr: "Ad" },
      { uz: "salom", tr: "Merhaba" },
      { uz: "rahmat", tr: "Teşekkürler" },
      { uz: "xayr", tr: "Hoşça kal" },
      { uz: "men", tr: "Ben" },
      { uz: "sen", tr: "Sen" },
      { uz: "u", tr: "O" },
      { uz: "kitob", tr: "Kitap" },
      { uz: "qalam", tr: "Kalem" },
      { uz: "sumka", tr: "Çanta" },
      { uz: "olma", tr: "Elma" },
      { uz: "daftar", tr: "Defter" },
      { uz: "kompyuter", tr: "Bilgisayar" },
      { uz: "cetvel", tr: "Cetvel" },
      { uz: "chotka", tr: "Fırça" },
      { uz: "stol", tr: "Masa" },
      { uz: "suv", tr: "Su" },
      { uz: "uy", tr: "Ev" },
      { uz: "do'st", tr: "Arkadaş" },
      { uz: "o'qituvchi", tr: "Öğretmen" },
      { uz: "talaba", tr: "Öğrenci" },
      { uz: "savol", tr: "Soru" },
      { uz: "soat", tr: "Saat" },
      { uz: "eshik", tr: "Kapı" },
      { uz: "deraza", tr: "Pencere" },
      { uz: "mashina", tr: "Araba" },
      { uz: "raqam", tr: "Numara" },
      { uz: "lola", tr: "Lale" },
      { uz: "uchurtma", tr: "Uçurtma" },
      { uz: "vaza", tr: "Vazo" },
      { uz: "taom", tr: "Yemek" }
    ]
  },

  // Unit 2..6 — avvalgi holat (to'ldirish uchun joy qoldirildi)
  {
    id: 2,
    title: "Unit 2 — (joylashtirish kerak)",
    exercises: [],
    vocab: []
  },
  {
    id: 3,
    title: "Unit 3 — (joylashtirish kerak)",
    exercises: [],
    vocab: []
  },
  {
    id: 4,
    title: "Unit 4 — (joylashtirish kerak)",
    exercises: [],
    vocab: []
  },
  {
    id: 5,
    title: "Unit 5 — (joylashtirish kerak)",
    exercises: [],
    vocab: []
  },
  {
    id: 6,
    title: "Unit 6 — (joylashtirish kerak)",
    exercises: [],
    vocab: []
  }
];