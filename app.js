const vocabulary = [
    { turkish: "ad (isim)", translation: "ism, ot, nom" },
    { turkish: "ağaç", translation: "daraxt" },
    { turkish: "alkol", translation: "alkagol" },
    { turkish: "Almanya", translation: "Germanya" },
    { turkish: "anneler günü", translation: "onalar kuni" },
    { turkish: "araba", translation: "mashina (avtomobil)" },
    { turkish: "arkadaş", translation: "örtoq, döst (oshna)" },
    { turkish: "avukat", translation: "advokat" },
    { turkish: "Avusturya", translation: "Avstriya" },
    { turkish: "Az", translation: "oz, kam" },
    { turkish: "Baba", translation: "ota" },
    { turkish: "Bahçe", translation: "boğ" },
    { turkish: "Balık", translation: "baliq" },
    { turkish: "Banka", translation: "bank" },
    { turkish: "Bardak", translation: "stakan" },
    { turkish: "Bay", translation: "janob" },
    { turkish: "Bayan", translation: "xonim" },
    { turkish: "Bayram", translation: "bayram" },
    { turkish: "Bebek", translation: "chaqaloq" },
    { turkish: "Bey", translation: "yigit" },
    { turkish: "Bilet", translation: "bilet, chipta" },
    { turkish: "Bilgisayar", translation: "kompyuter" },
    { turkish: "Bulaşık", translation: "yuvilmagan idish tovoq" },
    { turkish: "Büro", translation: "ofis, buyro" },
    { turkish: "Büyük", translation: "katta" },
    { turkish: "Cami", translation: "masjid" },
    { turkish: "Cetvel", translation: "chizğich" },
    { turkish: "Ceviz", translation: "yonğoq" },
    { turkish: "Çamaşır", translation: "yuvilgan, yuvilishi kerak bo'lgan kiyimlar (kir)" },
    { turkish: "Çanta", translation: "sumka" },
    { turkish: "Çarşı", translation: "mahalla markazi, guzargoh" },
    { turkish: "Çay", translation: "choy" },
    { turkish: "Çiçek", translation: "gül" },
    { turkish: "Çin", translation: "Xitoy" },
    { turkish: "Çocuk", translation: "bola" },
    { turkish: "Çok", translation: "köp" },
    { turkish: "Defter", translation: "daftar" },
    { turkish: "Deniz", translation: "dengiz" },
    { turkish: "Ders", translation: "dars" },
    { turkish: "doğum günü", translation: "tuğilgan kun" },
    { turkish: "doktor", translation: "shifokor" },
    { turkish: "dolap", translation: "shkaf" },
    { turkish: "düğün", translation: "töy" },
    { turkish: "eczane", translation: "dorixona" },
    { turkish: "ekmek", translation: "non" },
    { turkish: "elbise", translation: "köylak (ayyollar köylagi)" },
    { turkish: "elma", translation: "olma" },
    { turkish: "erkek", translation: "erkak (öğil bola)" },
    { turkish: "ev", translation: "uy" },
    { turkish: "fare", translation: "sichqon" },
    { turkish: "fındık", translation: "findiq yonğoği" },
    { turkish: "fırça", translation: "chötka" },
    { turkish: "film", translation: "film" },
    { turkish: "Fransa", translation: "Fransiya" },
    { turkish: "Futbolcu", translation: "fudbolchi" },
    { turkish: "Garson", translation: "ofitsant" },
    { turkish: "Göz", translation: "köz" },
    { turkish: "Gül", translation: "atir gul" },
    { turkish: "Güzel", translation: "chiroyli" },
    { turkish: "Hâl", translation: "hol-ahvol (ulgurji meva, savzavot, kökatlar sotiladigan bozor)" },
    { turkish: "Halı", translation: "gilam" },
    { turkish: "Hanım", translation: "xonim (ayolim)" },
    { turkish: "Hastalık", translation: "kasallik" },
    { turkish: "Havuç", translation: "sabzi" },
    { turkish: "Hayal", translation: "hayol, röyo" },
    { turkish: "Hemşire", translation: "hamshira (erkaklarga nisbatan ham ishlatiladi)" },
    { turkish: "Hiç", translation: "hech, umuman yöqlik ma'nosida" },
    { turkish: "Ispanak", translation: "ismaloq" },
    { turkish: "Izgara", translation: "qör" },
    { turkish: "İdeal", translation: "ideal, mukammal ma'nosida" },
    { turkish: "İnek", translation: "sigir" },
    { turkish: "İngiltere", translation: "Angliya" },
    { turkish: "İnsan", translation: "inson" },
    { turkish: "İspanya", translation: "Ispanya" },
    { turkish: "İş", translation: "ish, yumush" },
    { turkish: "İtalya", translation: "Italya" },
    { turkish: "Japonya", translation: "Yaponya" },
    { turkish: "Jeton", translation: "jeton" },
    { turkish: "Jilet", translation: "britva" },
    { turkish: "Kadın", translation: "ayol, xotin" },
    { turkish: "Kafe", translation: "kafe" },
    { turkish: "Kahve", translation: "qahva" },
    { turkish: "Kalabalık", translation: "gavjum, tiqilinch" },
    { turkish: "Kalem", translation: "ruchka" },
    { turkish: "Kurşun kalem", translation: "qalam" },
    { turkish: "Kalp", translation: "yurak, qalb" },
    { turkish: "Kapı", translation: "eshik" },
    { turkish: "Kedi", translation: "mushuk" },
    { turkish: "Kız", translation: "qiz" },
    { turkish: "Kira", translation: "ijara" },
    { turkish: "Kişi", translation: "kishi" },
    { turkish: "Kitap", translation: "kitob" },
    { turkish: "Koltuk", translation: "orom kursi, (skameka)" },
    { turkish: "Kore", translation: "Koreya" },
    { turkish: "Köpek", translation: "it" },
    { turkish: "Köy", translation: "qishloq" },
    { turkish: "Kuş", translation: "qush" },
    { turkish: "Kutu", translation: "quttiq" },
    { turkish: "Kütüphane", translation: "kutubxona" },
    { turkish: "Lale", translation: "lola" },
    { turkish: "Limon", translation: "limon" },
    { turkish: "Lokanta", translation: "oshxona (kichik ovqatlanish joyi)" },
    { turkish: "Lütfen", translation: "iltimos" },
    { turkish: "Mağaza", translation: "butik (dikon)" },
    { turkish: "Makas", translation: "qaychi" },
    { turkish: "Masa", translation: "stol" },
    { turkish: "Merdiven", translation: "zina" },
    { turkish: "Meşgul", translation: "band" },
    { turkish: "Metro", translation: "metro" },
    { turkish: "Millet", translation: "millat" },
    { turkish: "Misal", translation: "misol, örnak" },
    { turkish: "Mühendis", translation: "muhandis (injiner)" },
    { turkish: "Nar", translation: "anor" },
    { turkish: "Nijerya", translation: "Nigerya" },
    { turkish: "Numara", translation: "raqam" },
    { turkish: "Oda", translation: "xona" },
    { turkish: "Orman", translation: "ormon" },
    { turkish: "Otel", translation: "mehmonxona" },
    { turkish: "Otobüs", translation: "avtobus" },
    { turkish: "Öğrenci", translation: "talaba, öquvchi" },
    { turkish: "Öğretmen", translation: "öqituvchi" },
    { turkish: "Ördek", translation: "örnak, misol (masalan)" },
    { turkish: "Paket", translation: "paket" },
    { turkish: "Para", translation: "pul" },
    { turkish: "Pardösü", translation: "palto" },
    { turkish: "Park", translation: "park" },
    { turkish: "Patates", translation: "kartoshka" },
    { turkish: "Pencere", translation: "deraza" },
    { turkish: "Petrol", translation: "benzín" },
    { turkish: "Piyano", translation: "fortepiano" },
    { turkish: "Polis", translation: "palitsiya" },
    { turkish: "Portakal", translation: "apelsin" },
    { turkish: "Postacı", translation: "pochtachi" },
    { turkish: "Radyo", translation: "radio" },
    { turkish: "Resim", translation: "rasm" },
    { turkish: "Rol", translation: "röl (aktiyorlar uchun ishlatiladi)" },
    { turkish: "Roman", translation: "Rimlik" },
    { turkish: "Rusya", translation: "Rossiya" },
    { turkish: "Saat", translation: "soat" },
    { turkish: "Saç", translation: "soch" },
    { turkish: "Salon", translation: "zal, salon" },
    { turkish: "Sandalye", translation: "stul" },
    { turkish: "Sembol", translation: "ramz, belgi" },
    { turkish: "Seyahat", translation: "sayohat" },
    { turkish: "Sıra", translation: "navbat, parta qatorlari" },
    { turkish: "Silgi", translation: "öchirğich" },
    { turkish: "Sokak", translation: "köcha" },
    { turkish: "Soru", translation: "savol" },
    { turkish: "Sorun", translation: "mammo" },
    { turkish: "Sözlük", translation: "luğat" },
    { turkish: "Suriye", translation: "Surya" },
    { turkish: "Şarkıcı", translation: "qöshiqchi" },
    { turkish: "Şemsiye", translation: "soyabon (zontik)" },
    { turkish: "Şişe", translation: "shisha, (baklashkaga nisbatan ham ishlatiladi)" },
    { turkish: "Tahta", translation: "doska, taxta" },
    { turkish: "Tavuk", translation: "tovuq" },
    { turkish: "Telefon", translation: "telefon" },
    { turkish: "Temiz", translation: "toza" },
    { turkish: "Top", translation: "koptok (top mingtalik…)" },
    { turkish: "Turist", translation: "turist" },
    { turkish: "Türkiye", translation: "Turkiya" },
    { turkish: "Uçak", translation: "samaliyot" },
    { turkish: "Uçurtma", translation: "varrak" },
    { turkish: "Üzüm", translation: "uzum" },
    { turkish: "Vagon", translation: "vagon" },
    { turkish: "Vazo", translation: "vaza" },
    { turkish: "Yabancı", translation: "begona, chet-ellik" },
    { turkish: "Yemek", translation: "yemak, ovqat" },
    { turkish: "yeni yıl", translation: "yangi yil" },
    { turkish: "yıldız", translation: "yuldiz" },
    { turkish: "yüzük", translation: "uzuk" },
    { turkish: "zeytin", translation: "zaytun" },
    { turkish: "zürafa", translation: "jirafa" }
];

let currentQuestion = 0;
let score = 0;
let startTime;
let answerTimes = [];
let timerInterval;
let timeLeft = 30;
let userAnswers = new Array(vocabulary.length).fill(null);
let answeredQuestions = new Set();

// Dasturni ishga tushirish
document.addEventListener("DOMContentLoaded", function () {
  updateGlobalProgress();
});

// Global progress yangilash
function updateGlobalProgress() {
  const progress = (currentQuestion / vocabulary.length) * 100;
  document.getElementById("global-progress").style.width = progress + "%";
}

// O'yinni boshlash
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answerTimes = [];
  timeLeft = 30;
  userAnswers.fill(null);
  answeredQuestions.clear();

  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("quiz-screen").classList.add("active");

  updateStats();
  showQuestion();
  updateNavigationButtons();
}

// Savolni ko'rsatish
function showQuestion() {
  if (currentQuestion >= vocabulary.length) {
    endQuiz();
    return;
  }

  const question = vocabulary[currentQuestion];
  document.getElementById("question-number").textContent = currentQuestion + 1;
  document.getElementById(
    "question"
  ).textContent = `"${question.turkish}" so'zi nimani anglatadi?`;

  // Variantlarni tayyorlash
  const options = generateOptions(question);
  const optionCards = document.querySelectorAll(".option-card");

  optionCards.forEach((card, index) => {
    document.getElementById(`option-${index}`).textContent = options[index];
    card.className = "option-card";

    // Agar oldin javob berilgan bo'lsa
    if (userAnswers[currentQuestion] !== null) {
      const correctIndex = options.indexOf(question.translation);
      if (index === correctIndex) {
        card.classList.add("correct");
      } else if (index === userAnswers[currentQuestion]) {
        card.classList.add("incorrect");
      }
      card.style.pointerEvents = "none";
    } else {
      card.style.pointerEvents = "auto";
    }
  });

  // Timer ni boshlash
  startTimer();
  updateStats();
  updateGlobalProgress();
  updateNavigationButtons();
}

// Variantlarni yaratish (oldingi kabi)
function generateOptions(correctQuestion) {
  const options = [correctQuestion.translation];

  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    const randomWord = vocabulary[randomIndex];

    if (
      !options.includes(randomWord.translation) &&
      randomWord.turkish !== correctQuestion.turkish
    ) {
      options.push(randomWord.translation);
    }
  }

  return shuffleArray(options);
}

// Massivni aralashtirish
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Javobni tekshirish
function checkAnswer(selectedIndex) {
  if (answeredQuestions.has(currentQuestion)) return;

  clearInterval(timerInterval);
  answeredQuestions.add(currentQuestion);
  userAnswers[currentQuestion] = selectedIndex;

  const question = vocabulary[currentQuestion];
  const optionCards = document.querySelectorAll(".option-card");
  const options = Array.from(optionCards).map(
    (card, index) => document.getElementById(`option-${index}`).textContent
  );
  const correctIndex = options.indexOf(question.translation);

  // Vaqtni hisoblash
  const endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000;
  answerTimes.push(timeTaken);

  // Javoblarni rang bilan ko'rsatish
  optionCards.forEach((card, index) => {
    card.style.pointerEvents = "none";
    if (index === correctIndex) {
      card.classList.add("correct");
      if (index === selectedIndex) {
        // To'g'ri javob animatsiyasi
        showCelebration();
      }
    } else if (index === selectedIndex && index !== correctIndex) {
      card.classList.add("incorrect");
    }
  });

  // Ballarni hisoblash
  if (selectedIndex === correctIndex) {
    score++;
    updateStats();
  }

  updateNavigationButtons();
}

// Animatsiyani ko'rsatish
function showCelebration() {
  const celebration = document.getElementById("celebration");
  celebration.style.display = "block";

  setTimeout(() => {
    celebration.style.display = "none";
  }, 2000);
}

// Keyingi savol
function nextQuestion() {
  if (currentQuestion < vocabulary.length - 1) {
    currentQuestion++;
    timeLeft = 30;
    showQuestion();
  } else {
    endQuiz();
  }
}

// Oldingi savol
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    timeLeft = 30;
    showQuestion();
  }
}

// Testni yakunlash
function finishQuiz() {
  if (confirm("Testni yakunlamoqchimisiz?")) {
    endQuiz();
  }
}

// Timer ni boshlash
function startTimer() {
  startTime = new Date();
  timeLeft = 30;
  const timerBar = document.getElementById("timer-bar");
  const timeText = document.getElementById("time-text");

  timerBar.style.width = "100%";
  timerBar.style.background =
    "linear-gradient(90deg, var(--success), var(--warning), var(--danger))";

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const percentage = (timeLeft / 30) * 100;

    timerBar.style.width = percentage + "%";
    timeText.textContent = `${timeLeft} soniya`;

    // Timer rangini o'zgartirish
    if (timeLeft > 15) {
      timerBar.style.background =
        "linear-gradient(90deg, var(--success), var(--warning))";
    } else if (timeLeft > 5) {
      timerBar.style.background = "var(--warning)";
    } else {
      timerBar.style.background = "var(--danger)";
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Vaqt tugaganda keyingi savol
      if (!answeredQuestions.has(currentQuestion)) {
        userAnswers[currentQuestion] = -1; // Javob berilmagan
      }
      nextQuestion();
    }
  }, 1000);
}

// Navigation tugmalarini yangilash
function updateNavigationButtons() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const finishBtn = document.getElementById("finish-btn");

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = currentQuestion === vocabulary.length - 1;

  if (currentQuestion === vocabulary.length - 1) {
    nextBtn.textContent = "Yakunlash";
  } else {
    nextBtn.innerHTML = 'Keyingisi <span class="btn-icon">➡️</span>';
  }
}

// Statistikalarni yangilash
function updateStats() {
  document.getElementById("score").textContent = score;
  document.getElementById("progress").textContent = `${currentQuestion + 1}/${
    vocabulary.length
  }`;
  document.getElementById("timer-display").textContent = `${timeLeft}s`;
}

// Testni tugatish
function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quiz-screen").classList.remove("active");
  document.getElementById("result-screen").classList.add("active");

  const answeredCount = answeredQuestions.size;
  const percentage = Math.round((score / answeredCount) * 100) || 0;
  const averageTime =
    answerTimes.length > 0
      ? (answerTimes.reduce((a, b) => a + b, 0) / answerTimes.length).toFixed(1)
      : 0;

  document.getElementById("correct-count").textContent = score;
  document.getElementById("percentage").textContent = `${percentage}%`;
  document.getElementById("average-time").textContent = `${averageTime}s`;
}

// Qayta boshlash
function restartQuiz() {
  document.getElementById("result-screen").classList.remove("active");
  document.getElementById("quiz-screen").classList.add("active");
  startQuiz();
}

// Bosh menyuga qaytish
function showStartScreen() {
  document.getElementById("result-screen").classList.remove("active");
  document.getElementById("start-screen").classList.add("active");
}
