const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "収入・待遇重視",
    tagline: "正当な対価と安定した待遇を大切にする薬剤師",
    lead: "給与・福利厚生・評価制度など、経済的な安心感と正当な対価を重視するタイプです。「頑張りに見合った報酬を得たい」という感覚は至って健全で、キャリア設計において給与軸を明確に持つことは大切な判断基準です。",
    short: "給与・待遇・評価制度を重視し、経済的な安心感を大切にするタイプ。",
    coaching: "「今の給与は本当に適正か」「どんなキャリアで収入を上げられるか」——一緒に整理しましょう。収入目標から逆算したキャリア設計が得意です。",
    color: "#2a5ab8",
  },
  B: {
    name: "やりがい・意義重視",
    tagline: "使命感と専門性の発揮に充実感を感じる薬剤師",
    lead: "患者貢献・専門スキルの発揮・仕事の社会的意義を大切にするタイプです。「給与よりも、この仕事が誰かの役に立っているかどうか」が判断軸になりやすく、自分の能力が活かせる環境を強く求めています。",
    short: "患者貢献・専門性の発揮・仕事の意義を最も重視するタイプ。",
    coaching: "「やりがいを感じながらも、経済的に安心できるキャリア」を一緒に設計しましょう。やりがいと収入を両立させる方法は必ずあります。",
    color: "#c83a5a",
  },
  C: {
    name: "人間関係・職場環境重視",
    tagline: "職場の雰囲気とチームの質を大切にする薬剤師",
    lead: "上司・同僚・職場の雰囲気など、人間関係と環境の質を最も重視するタイプです。「どんなに条件が良くても、職場の人間関係が悪いと続けられない」という感覚が強く、信頼できるチームの中で力を発揮できます。",
    short: "職場の雰囲気・チーム・人間関係の質を最も重視するタイプ。",
    coaching: "「自分に合った職場環境の見極め方」と「今の職場で改善できることの整理」を一緒にしましょう。環境選びの目を育てることが大切です。",
    color: "#9b87c4",
  },
  D: {
    name: "働き方・条件重視",
    tagline: "時間・場所・ライフスタイルとの両立を大切にする薬剤師",
    lead: "労働時間・通勤距離・勤務形態・残業の有無など、働き方の条件を重視するタイプです。仕事だけでなく、プライベートや家族との時間も大切にしたいという価値観は、長期的なキャリア継続にとって重要な軸です。",
    short: "勤務時間・通勤・勤務形態など、働く条件とライフスタイルを重視するタイプ。",
    coaching: "「理想の働き方を実現できるキャリア」を一緒に設計しましょう。条件面と仕事の充実感を両立する方法を整理します。",
    color: "#f5a623",
  },
  E: {
    name: "成長・キャリア重視",
    tagline: "スキルアップと将来性を最優先に考える薬剤師",
    lead: "資格取得・スキルアップ・昇進・将来のキャリアの広がりを最も重視するタイプです。「今の仕事が5年後・10年後の自分にどう繋がるか」という視点で判断することが多く、長期的な成長にフォーカスしています。",
    short: "スキルアップ・昇進・将来性など、長期的なキャリアの成長を重視するタイプ。",
    coaching: "「5年後・10年後のキャリアを逆算して今何をすべきか」を一緒に整理しましょう。長期視点のキャリア設計が、Ful Forceの最も得意とするところです。",
    color: "#3aaa58",
  },
};

const questionsRaw = [
  { type: "A", text: "給与や年収が、職場を選ぶ上で最も重要な条件の一つだ" },
  { type: "B", text: "患者さんの役に立てているかどうかが、仕事への意欲に直結している" },
  { type: "C", text: "職場の雰囲気や人間関係が悪いと、どんなに条件が良くても続けられない" },
  { type: "D", text: "通勤時間や勤務時間は、職場選びにおいて譲れない条件だ" },
  { type: "E", text: "今の仕事が将来のキャリアにつながるかどうかを、常に意識している" },
  { type: "A", text: "福利厚生や待遇が充実している職場に魅力を感じる" },
  { type: "B", text: "自分の専門スキルが十分に発揮できる職場でないと、物足りなさを感じる" },
  { type: "C", text: "信頼できる上司や同僚がいるかどうかが、職場選びの大きな決め手になる" },
  { type: "D", text: "残業が少なく、プライベートの時間を確保できる職場が理想だ" },
  { type: "E", text: "資格取得や研修など、スキルアップを支援してくれる職場を選びたい" },
  { type: "A", text: "頑張りが給与や評価に正当に反映される環境が、モチベーションになる" },
  { type: "B", text: "仕事の社会的な意義や使命感が、長く働き続けるエネルギーになっている" },
  { type: "C", text: "チームの雰囲気が良いと、仕事のパフォーマンスが上がると感じる" },
  { type: "D", text: "育児・家族・趣味など、仕事以外の時間も大切にしたい" },
  { type: "E", text: "5年後・10年後の自分のキャリアを見据えて、今の職場を選びたい" },
  { type: "A", text: "現在の給与が自分の貢献に見合っていないと感じることがある" },
  { type: "B", text: "仕事の意義を感じられなくなると、強いモヤモヤを感じる" },
  { type: "C", text: "職場の人間関係の良し悪しが、自分の仕事への満足度に大きく影響する" },
  { type: "D", text: "フレックスや在宅勤務など、柔軟な働き方ができる環境に魅力を感じる" },
  { type: "E", text: "今の職場での経験が、将来の選択肢を広げてくれるかどうかを重視する" },
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

  resultTitle.textContent = `あなたが最も大切にしているのは「${data.name}」です`;
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
          <div class="score-fill" style="width:${pct}%; background:${isTop ? "linear-gradient(90deg, var(--teal), var(--gold))" : d.color}"></div>
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
