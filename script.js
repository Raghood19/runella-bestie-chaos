const questions = {
  en: [
    ["WHO'S MOST LIKELY?", "Who is most likely to get back with their ex?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to get married first?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to cause chaos and somehow get away with it?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to disappear for three days and come back like nothing happened?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to fall in love after one conversation?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to spend all their money in one day?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to become famous?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to laugh at the worst possible moment?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to start an argument over something tiny?"],
    ["WHO'S MOST LIKELY?", "Who is least likely to survive a day without their phone?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to book a random trip tomorrow?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to become very rich?"],
    ["WHO'S MOST LIKELY?", "Who has the biggest red flag? 🚩"],
    ["WHO'S MOST LIKELY?", "Who is most likely to leave a message on read on purpose?"],
    ["WHO'S MOST LIKELY?", "Who is most likely to do something completely unhinged just to win a challenge?"]
  ],
  ar: [
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يرجع للإكس بتاعه؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يتجوز الأول؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يعمل مصيبة ومحدش يعرف؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يختفي 3 أيام ويرجع كأن مفيش حاجة حصلت؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يقع في الحب من أول كلام؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يصرف كل فلوسه في يوم واحد؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يبقى مشهور؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يضحك في وقت مينفعش فيه الضحك؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يتخانق بسبب حاجة تافهة؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد مش هيعرف يعيش يوم من غير موبايله؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يحجز سفرة فجأة بكرة؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يبقى غني جدًا؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد عنده أكبر Red Flag؟ 🚩"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يسيب الرسالة Seen عمدًا؟"],
    ["مين أكتر واحد؟", "مين أكتر واحد ممكن يعمل حاجة مجنونة عشان يكسب الـChallenge؟"]
  ]
};

const punishments = {
  en: [
    ["💃", "DANCE CHALLENGE 1", "Imitate this dance move exactly!", "videos/video1.mp4"],
    ["💃", "DANCE CHALLENGE 2", "Do this dance challenge for 15 seconds!", "videos/video2.mp4"],
    ["💃", "DANCE CHALLENGE 3", "Recreate this video move with full energy!", "videos/video3.mp4"],
    ["🎬", "ACT IT", "Act out a dramatic movie scene for 30 seconds. Everyone has to guess it.", null],
    ["🎤", "SING IT", "Sing any song like you are performing at a huge concert.", null],
    ["😂", "IMPERSONATE", "Imitate someone in the group until they guess who you are.", null],
    ["🎭", "DRAMA", "Pretend you are crying because someone ate the last slice of pizza.", null],
    ["🗣️", "ACCENT", "Speak in a different accent for one full minute.", null],
    ["📱", "PHONE CHALLENGE", "Show the group your last saved photo — if you're comfortable.", null],
    ["💌", "LOVE LETTER", "Make up a dramatic love confession using a random word chosen by the group.", null]
  ],
  ar: [
    ["💃", "تحدي رقص 1", "قلدي الحركة اللي في الفيديو ده بالضبط!", "videos/video1.mp4"],
    ["💃", "تحدي رقص 2", "قلدي تحدي الرقص ده لمدة 15 ثانية!", "videos/video2.mp4"],
    ["💃", "تحدي رقص 3", "قلدي الحركة دي بكل طاقة وانفعال!", "videos/video3.mp4"],
    ["🎬", "مثّليها", "قلدي مشهد درامي من فيلم أو مسلسل لمدة 30 ثانية والباقي يخمنوا المشهد.", null],
    ["🎤", "غنّيها", "غني أي أغنية كأنك بتغني في حفلة قدام آلاف الناس.", null],
    ["😂", "قلّدي حد", "قلدي واحدة من الشلة لحد ما يعرفوا إنك بتقلدي مين.", null],
    ["🎭", "دراما", "مثلي إنك بتعيطي عشان حد أكل آخر قطعة بيتزا.", null],
    ["🗣️", "لهجة مختلفة", "اتكلمي بلهجة مختلفة لمدة دقيقة كاملة.", null],
    ["📱", "Challenge الموبايل", "وري الشلة آخر صورة محفوظة عندك — لو إنتِ مرتاحة لكده.", null],
    ["💌", "رسالة حب", "اعملي اعتراف حب درامي باستخدام كلمة تختارها الشلة.", null]
  ]
};

let lang = "en";
let index = 0;
let revealed = false;

const $ = id => document.getElementById(id);
const screens = ["home","game","punishment","end"];

function show(id) {
  screens.forEach(s => {
    const el = $(s);
    if (el) el.classList.toggle("active", s === id);
  });
}

function renderQuestion() {
  const q = questions[lang][index % questions[lang].length];
  $("category").textContent = q[0];
  $("question").textContent = q[1];
  $("instruction").textContent = lang === "en"
    ? "Everyone points at someone. Count to 3!"
    : "كل واحدة تشير لشخص. عدّوا لـ 3!";
  $("roundLabel").textContent = lang === "en" ? `ROUND ${index + 1}` : `الجولة ${index + 1}`;
  $("progress").textContent = `${index + 1} / 40`;
  $("revealBox").classList.add("hidden");
  $("nextBtn").classList.add("hidden");
  $("revealBtn").classList.remove("hidden");
  revealed = false;
}

function reveal() {
  if (revealed) return;
  revealed = true;
  $("revealBox").classList.remove("hidden");
  $("revealTitle").textContent = lang === "en" ? "THE GROUP HAS SPOKEN 😂" : "الشلة قالت كلمتها 😂";
  $("revealText").textContent = lang === "en"
    ? "The person with the most votes gets a punishment!"
    : "الشخص اللي أخد أكبر عدد من الأصوات عليه عقاب!";
  $("revealBtn").classList.add("hidden");
  $("nextBtn").classList.remove("hidden");
}

function getPunishment() {
  const pList = punishments[lang];
  const p = pList[Math.floor(Math.random() * pList.length)];
  
  $("punishmentEmoji").textContent = p[0];
  $("punishmentType").textContent = p[1];
  $("punishmentTitle").textContent = lang === "en" ? "Your punishment!" : "عقابك إيه؟ 😈";
  $("punishmentText").textContent = p[2];

  const videoUrl = p[3];
  const videoContainer = $("videoContainer");
  const videoPlayer = $("punishmentVideo");

  if (videoUrl) {
    videoPlayer.src = videoUrl;
    videoContainer.classList.remove("hidden");
  } else {
    videoPlayer.src = "";
    videoContainer.classList.add("hidden");
  }

  show("punishment");
}

function nextRound() {
  const videoPlayer = $("punishmentVideo");
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.src = "";
  }
  index++;
  if (index >= 40) {
    $("endTitle").textContent = lang === "en" ? "BESTIE CHAOS COMPLETE!" : "خلصتوا فوضى الصحاب! 🎀";
    $("endText").textContent = lang === "en"
      ? "That group chat is never going to recover 😂"
      : "الشلة دي مش هتنسى اللي حصل النهارده 😂";
    show("end");
  } else {
    renderQuestion();
    show("game");
  }
}

function toggleLanguage() {
  lang = lang === "en" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("langBtn").textContent = lang === "en" ? "عربي" : "English";
  $("startBtn").textContent = lang === "en" ? "START GAME" : "ابدأوا اللعب";
  $("tagline").textContent = lang === "en"
    ? "The game that exposes your whole friend group 😂"
    : "اللعبة اللي هتكشف الشلة كلها 😂";
  $("meta").textContent = lang === "en"
    ? "2–10 players • Offline Ready • Play on your phone"
    : "٢–١٠ لاعبين • شغال بدون نت • العبوا من الموبايل";
  $("revealBtn").textContent = lang === "en" ? "REVEAL" : "اكشفوا النتيجة";
  $("nextBtn").textContent = lang === "en" ? "NEXT ROUND →" : "الجولة الجاية ←";
  $("punishmentBtn").textContent = lang === "en" ? "SEE PUNISHMENT 🎡" : "شوفوا العقاب 🎡";
  $("doneBtn").textContent = lang === "en" ? "DONE — NEXT ROUND" : "خلصنا — الجولة الجاية";
  $("restartBtn").textContent = lang === "en" ? "PLAY AGAIN" : "العبوا تاني";
  if ($("game").classList.contains("active")) renderQuestion();
}

$("startBtn").onclick = () => { index = 0; renderQuestion(); show("game"); };
$("revealBtn").onclick = reveal;
$("punishmentBtn").onclick = getPunishment;
$("nextBtn").onclick = getPunishment;
$("doneBtn").onclick = nextRound;
$("restartBtn").onclick = () => { index = 0; renderQuestion(); show("game"); };
$("langBtn").onclick = toggleLanguage;
