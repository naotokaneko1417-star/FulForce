const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "専門探求型",
    tagline: "深く知ることに喜びを感じる薬剤師",
    lead: "薬の知識や専門スキルを深めることに強いやりがいを感じるタイプです。「この分野なら誰にも負けない」という領域を作ることへの欲求が強く、学び続けることが仕事のエネルギーになっています。",
    short: "専門性を極めることに喜びを感じ、深い知識で価値を発揮するタイプ。",
    coaching: "専門性をキャリアの軸にどう設計するか、一緒に整理しましょう。病院・研究職・専門薬剤師など、あなたの探求心が最大限活きる道を見つけます。",
    color: "#c83a5a",
  },
  B: {
    name: "関係構築型",
    tagline: "患者・スタッフとのつながりが仕事の核心の薬剤師",
    lead: "患者さんや職場のスタッフとの関係性こそが仕事の醍醐味だと感じるタイプです。相手の状況を察して寄り添う力が高く、信頼関係を積み上げることに大きな充実感を覚えます。",
    short: "人との関係を大切にし、信頼と絆を築くことが仕事の中心にあるタイプ。",
    coaching: "関係構築力をどんなキャリアで活かすか、一緒に考えましょう。調剤・在宅・管理職など、あなたの強みが輝ける環境を整理します。",
    color: "#e85d42",
  },
  C: {
    name: "組織推進型",
    tagline: "チームや職場を動かして成果を作りたい薬剤師",
    lead: "自分だけでなく、チームや組織全体を動かして大きな成果を出したいという欲求が強いタイプです。リーダーシップを発揮し、人を巻き込みながら物事を前に進めることにやりがいを感じます。",
    short: "チームや職場をリードして、組織として成果を生み出すのが得意なタイプ。",
    coaching: "管理薬剤師・薬局長・独立など、リーダーシップを活かすキャリアパスを一緒に描きましょう。",
    color: "#9b87c4",
  },
  D: {
    name: "安定堅実型",
    tagline: "安心できる環境でコツコツ積み上げる薬剤師",
    lead: "変化より安定を重視し、信頼できる環境の中でじっくりと実力を積み上げるタイプです。丁寧な仕事ぶりと継続力が強みで、長期的に見て深い信頼を得やすい傾向があります。",
    short: "安定した環境で着実に実力を積み上げ、長期的な信頼を築くのが得意なタイプ。",
    coaching: "「安定」と「やりがい」を両立させるキャリア設計を一緒に考えましょう。今の環境を活かす方法も、より合った環境を探す方法も、整理できます。",
    color: "#f5a623",
  },
  E: {
    name: "変化挑戦型",
    tagline: "新しい環境・役割に飛び込みたい薬剤師",
    lead: "現状維持よりも変化と挑戦を好み、新しい環境や役割に積極的に飛び込めるタイプです。未知の領域に踏み出すエネルギーが高く、転職・独立・新しい分野への挑戦が力の源になります。",
    short: "変化や挑戦を前向きに捉え、新しい環境で力を発揮するのが得意なタイプ。",
    coaching: "「次にどこへ向かうか」を一緒に設計しましょう。転職・フリーランス・独立など、あなたの挑戦欲求に合ったキャリアの選択肢を整理します。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "薬の知識や専門スキルをもっと深めたいという欲求が強い" },
  { type: "B", text: "患者さんとの会話や関わりに、仕事のやりがいを感じる" },
  { type: "C", text: "自分がチームや職場を引っ張る役割に、やりがいを感じる" },
  { type: "D", text: "慣れた環境でコツコツ仕事を積み上げることに安心感がある" },
  { type: "E", text: "新しい職場・役割・分野に挑戦することにワクワクする" },
  { type: "A", text: "「この分野なら誰にも負けない」という専門領域を持ちたい" },
  { type: "B", text: "職場のスタッフや同僚との関係が、仕事のモチベーションに直結している" },
  { type: "C", text: "人を巻き込んで物事を前に進めることが得意だ" },
  { type: "D", text: "急な変化や不確実な状況よりも、見通しが立つ環境が向いている" },
  { type: "E", text: "今の環境に慣れすぎると、物足りなさや停滞感を感じやすい" },
  { type: "A", text: "最新の薬学情報や医療トレンドをキャッチアップするのが好きだ" },
  { type: "B", text: "患者さんから「ありがとう」と言われた時に、最も充実感を感じる" },
  { type: "C", text: "組織や仕組みを改善したいという気持ちが強い" },
  { type: "D", text: "長く同じ職場で働き、深い信頼関係を築くことに価値を感じる" },
  { type: "E", text: "キャリアの幅を広げるために、リスクを取ることも厭わない" },
  { type: "A", text: "勉強会・研修・認定資格など、学びの機会に積極的に参加している" },
  { type: "B", text: "スタッフや患者さんの様子を自然と気にかけていることが多い" },
  { type: "C", text: "将来的には管理職・薬局長・独立など、裁量の大きな立場を目指したい" },
  { type: "D", text: "一つの職場でじっくり経験を積む方が、自分には向いていると感じる" },
  { type: "E", text: "転職・フリーランス・独立など、新しい働き方にも興味がある" },
];

const LIKERT = [
  { value: 1, label: "全く\nあてはまらない" },
  { value: 2, label: "あまり\nあてはまらない" },
  { value: 3, label: "どちらとも\nいえない" },
  { value: 4, label: "ややあてはまる" },
  { value: 5, label: "非常に\nあてはまる" },
];

const form = document.querySelector("#quizForm");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const errorMessage = document.querySelector("#errorMessage");
const resultSection = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultTagline = document.querySelector("#resultTagline");
const resultLead = document.querySelector("#resultLead");
const resultCoaching = document.querySelector("#resultCoaching");
const scoreList = document.querySelector("#scoreList");
const ctaSection = document.querySelector("#ctaSection");
const ctaTypeName = document.querySelector("#ctaTypeName");
const typeGrid = document.querySelector("#typeGrid");

function renderQuiz() {
  form.innerHTML = questionsRaw.map((q, i) => {
    const name = `q${i + 1}`;
    const options = LIKERT.map(({ value, label }) => {
      const id = `${name}-v${value}`;
      return `
        <label class="likert-option" for="${id}">
          <input id="${id}" type="radio" name="${name}" value="${value}" />
          <span>${label}</span>
        </label>`;
    }).join("");
    return `
      <fieldset class="question-card">
        <legend class="question-title">Q${i + 1}. ${q.text}</legend>
        <div class="likert-wrap">
          <div class="likert-labels"><span>あてはまらない</span><span>あてはまる</span></div>
          <div class="likert-options">${options}</div>
        </div>
      </fieldset>`;
  }).join("");
}

function renderTypes() {
  typeGrid.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    return `
      <article class="type-card">
        <div class="type-dot" style="background:${d.color}"></div>
        <h3>${d.name}</h3>
        <p>${d.tagline}</p>
      </article>`;
  }).join("");
}

function getAnswers() {
  return questionsRaw.map((_, i) => {
    const checked = form.querySelector(`input[name="q${i + 1}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
}

function calcScores(answers) {
  const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  answers.forEach((val, i) => { if (val !== null) scores[questionsRaw[i].type] += val; });
  return scores;
}

function updateProgress() {
  const answered = getAnswers().filter((v) => v !== null).length;
  const pct = Math.round((answered / questionsRaw.length) * 100);
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${answered} / ${questionsRaw.length} 回答済み`;
  if (answered === questionsRaw.length) errorMessage.textContent = "";
}

function showResult() {
  const answers = getAnswers();
  const unanswered = answers.filter((v) => v === null).length;
  if (unanswered > 0) {
    errorMessage.textContent = `未回答の質問があります。あと ${unanswered} 問に答えてください。`;
    return;
  }
  errorMessage.textContent = "";

  const scores = calcScores(answers);
  const topType = TYPE_KEYS.reduce((best, k) => (scores[k] > scores[best] ? k : best), TYPE_KEYS[0]);
  const data = typeData[topType];

  resultTitle.textContent = `あなたは「${data.name}」の薬剤師です`;
  resultTagline.textContent = data.tagline;
  resultLead.textContent = data.lead;
  if (resultCoaching) resultCoaching.textContent = data.coaching;

  scoreList.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    const score = scores[key];
    const possible = questionsRaw.filter((q) => q.type === key).length * 5;
    const pct = Math.round((score / possible) * 100);
    const isTop = key === topType;
    return `
      <div class="score-row${isTop ? " top-type" : ""}">
        <span class="score-label">${d.name}</span>
        <div class="score-track">
          <div class="score-fill" style="width:${pct}%; background:${isTop ? "linear-gradient(90deg, var(--teal), var(--coral))" : d.color}"></div>
        </div>
        <span class="score-num">${score} / ${possible}</span>
      </div>`;
  }).join("");

  if (ctaTypeName) ctaTypeName.textContent = data.name;
  if (ctaSection) ctaSection.hidden = false;
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  form.reset();
  resultSection.hidden = true;
  if (ctaSection) ctaSection.hidden = true;
  errorMessage.textContent = "";
  updateProgress();
  document.querySelector("#diagnosis").scrollIntoView({ behavior: "smooth", block: "start" });
}

renderQuiz();
renderTypes();
updateProgress();
form.addEventListener("change", updateProgress);
document.querySelector("#showResultButton").addEventListener("click", showResult);
document.querySelector("#resetButton").addEventListener("click", resetQuiz);
