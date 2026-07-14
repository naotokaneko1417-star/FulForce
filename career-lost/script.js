const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "仕事内容ミスマッチ型",
    tagline: "「これじゃない感」が積み重なっているタイプ",
    lead: "調剤や服薬指導といった日々の業務と、本当にやりたいこととの間にズレを感じているタイプです。「悪い仕事ではないけれど、自分がやりたかったことはこれじゃない」という感覚が、モヤモヤの根っこにあります。",
    coaching: "「本当はどんな仕事の形をやってみたいのか」を一緒に言語化しましょう。ミスマッチの正体がわかれば、動き方が見えてきます。",
    color: "#2a5ab8",
  },
  B: {
    name: "人間関係疲弊型",
    tagline: "気配りで消耗しすぎているタイプ",
    lead: "職場の人間関係に気を遣いすぎて、本来の力が発揮できていないタイプです。仕事内容そのものよりも、周囲との関係性のストレスが、日々の疲労感の大きな原因になっています。",
    coaching: "「今の職場の何がしんどいのか」を整理した上で、環境の見極め方を一緒に考えましょう。",
    color: "#c83a5a",
  },
  C: {
    name: "成長停滞型",
    tagline: "向上心があるのに、環境が追いついていないタイプ",
    lead: "もっと成長したい、スキルを伸ばしたいという意欲があるのに、今の環境がそれに応えてくれていないタイプです。向上心があるからこそ、停滞している状態にモヤモヤを感じています。",
    coaching: "「どんなスキルをどう伸ばしていきたいか」から逆算して、環境選びやキャリアパスを一緒に整理しましょう。",
    color: "#9b87c4",
  },
  D: {
    name: "価値観のズレ型",
    tagline: "信念が強い分、違和感も大きくなりやすいタイプ",
    lead: "会社や薬局の方針・判断に納得できないことが多いタイプです。自分なりの信念や仕事観がしっかりある分、組織の意思決定とのズレに強い違和感を覚えやすい傾向があります。",
    coaching: "「譲れない価値観は何か」を明確にした上で、それを活かせる環境やキャリアの選択肢を一緒に考えましょう。",
    color: "#f5a623",
  },
  E: {
    name: "環境・条件不満型",
    tagline: "正当な対価・評価を求めているタイプ",
    lead: "給与・シフト・勤務条件など、頑張りに見合った待遇が得られていないと感じているタイプです。仕事内容や人間関係に大きな不満はなくても、条件面の不公平感がモヤモヤとして蓄積しています。",
    coaching: "「今の条件は本当に適正か」「どんなキャリアで改善できるか」を一緒に整理しましょう。",
    color: "#3aaa58",
  },
};

const questionsRaw = [
  { type: "A", text: "調剤や服薬指導以外にも、本当はやってみたい仕事の形がある気がする" },
  { type: "B", text: "職場の人間関係に気を遣いすぎて、仕事終わりにどっと疲れることが多い" },
  { type: "C", text: "今の職場では、これ以上スキルや専門性が伸びている実感がない" },
  { type: "D", text: "会社や薬局の方針・判断に、納得できないことが少なくない" },
  { type: "E", text: "給与・シフト・勤務条件が、自分の頑張りに見合っていないと感じる" },
  { type: "A", text: "今の仕事では、自分の強みや得意なことを十分に活かせていないと感じる" },
  { type: "B", text: "自分の意見や希望を伝えるより、周囲に合わせることを優先してしまう" },
  { type: "C", text: "この先どんな専門性や役割を伸ばせるのか、今の職場では道筋が見えない" },
  { type: "D", text: "患者さんや仕事に対して大切にしたい考えを、今の環境では実践しにくい" },
  { type: "E", text: "今の働き方を続けると、体力・時間・生活との両立が難しいと感じる" },
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
const interviewFormLink = document.querySelector("#interviewFormLink");

const DIRECT_FORM_URL = "https://liff.line.me/2009987787-j5vYDRkV?form=ff-mendan-form-001";
const FORM_HANDOFF_URL = "https://line-harness.ful-force.workers.dev/r/career-lost-diagnosis?form=ff-mendan-form-001";

function configureInterviewFormLink() {
  if (!interviewFormLink) return;
  const isLineBrowser = /\bLine\//i.test(navigator.userAgent);
  interviewFormLink.href = isLineBrowser ? DIRECT_FORM_URL : FORM_HANDOFF_URL;
}

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
  const maxScore = Math.max(...TYPE_KEYS.map((key) => scores[key]));
  const topTypes = TYPE_KEYS.filter((key) => scores[key] === maxScore);
  const primaryType = topTypes[0];
  const primaryData = typeData[primaryType];

  if (topTypes.length === 1) {
    resultTitle.textContent = `あなたのモヤモヤの正体は「${primaryData.name}」です`;
    resultTagline.textContent = primaryData.tagline;
    resultLead.textContent = primaryData.lead;
    if (resultCoaching) resultCoaching.textContent = primaryData.coaching;
  } else {
    const names = topTypes.map((key) => `「${typeData[key].name}」`).join("と");
    resultTitle.textContent = `あなたは${names}の複合タイプです`;
    resultTagline.textContent = "2つ以上のモヤモヤが同じ強さで表れています";
    resultLead.textContent = `${topTypes.map((key) => typeData[key].lead).join(" ")} どちらか一方に決めつけず、今もっとも負担に感じていることから整理するのがおすすめです。`;
    if (resultCoaching) resultCoaching.textContent = "複数のモヤモヤが重なると、何から手をつけるか迷いやすくなります。優先順位を一緒に整理しましょう。";
  }

  scoreList.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    const score = scores[key];
    const possible = 10;
    const pct = Math.round(((score - 2) / 8) * 100);
    const isTop = topTypes.includes(key);
    return `
      <div class="score-row${isTop ? " top-type" : ""}">
        <span class="score-label">${d.name}</span>
        <div class="score-track">
          <div class="score-fill" style="width:${pct}%; background:${isTop ? "linear-gradient(90deg, var(--teal), var(--gold))" : d.color}"></div>
        </div>
        <span class="score-num">${score} / ${possible}</span>
      </div>`;
  }).join("");

  if (ctaTypeName) ctaTypeName.textContent = topTypes.map((key) => typeData[key].name).join("・");
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
configureInterviewFormLink();
updateProgress();
form.addEventListener("change", updateProgress);
document.querySelector("#showResultButton").addEventListener("click", showResult);
document.querySelector("#resetButton").addEventListener("click", resetQuiz);
