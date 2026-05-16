// =====================================================
// 7軸の定義
// =====================================================
const AXES = [
  { id: 0, name: "専門追求",  opposite: "幅広探求" },
  { id: 1, name: "対人重視",  opposite: "業務重視" },
  { id: 2, name: "変化志向",  opposite: "安定志向" },
  { id: 3, name: "自律型",    opposite: "協調型"   },
  { id: 4, name: "内発動機",  opposite: "外発動機" },
  { id: 5, name: "リード型",  opposite: "サポート型"},
  { id: 6, name: "計画型",    opposite: "即興型"   },
];

// =====================================================
// 質問（各軸13問 × 7軸 = 91問）
// =====================================================
const QUESTIONS_BY_AXIS = [
  // 軸0: 専門追求(A) ↔ 幅広探求(B)
  [
    { a:"一つの分野を極めることにやりがいを感じる", b:"様々な分野を広く経験することにやりがいを感じる" },
    { a:"「この薬については誰よりも詳しくなりたい」という気持ちが強い", b:"一つに絞るより幅広く知識を持っていたい" },
    { a:"専門性を深めることが、自分のキャリアの核だと感じる", b:"複数のスキルを組み合わせることが強みだと感じる" },
    { a:"勉強するなら、一つのテーマを深く掘り下げたい", b:"幅広いテーマを浅く広く学びたい" },
    { a:"同じ職場で長く経験を積んで深い信頼を得たい", b:"様々な職場を経験して適応力を高めたい" },
    { a:"一つの得意領域を持ち、そこで勝負したい", b:"状況に応じて様々な役割をこなせる存在になりたい" },
    { a:"深い専門知識で医師や患者さんに貢献できる薬剤師になりたい", b:"どんな状況にも対応できるオールラウンドな薬剤師になりたい" },
    { a:"専門性が高い仕事を任される時にやりがいを感じる", b:"様々な仕事を任される時にやりがいを感じる" },
    { a:"自分の得意分野以外の業務は、得意な人に任せたい", b:"苦手な分野でも積極的に挑戦してスキルの幅を広げたい" },
    { a:"研究や最新情報のキャッチアップを継続的に行っている", b:"実務経験を通じて幅広く学ぶことを重視している" },
    { a:"特定の疾患領域や薬の種類に強い関心がある", b:"調剤・在宅・病院など様々な領域を経験したい" },
    { a:"「薬の専門家」として深く貢献することが理想", b:"「医療のコーディネーター」として広く貢献することが理想" },
    { a:"認定薬剤師や専門資格の取得に強い関心がある", b:"特定の資格より幅広い経験を積むことを優先したい" },
  ],
  // 軸1: 対人重視(A) ↔ 業務重視(B)
  [
    { a:"患者さんとのやりとりが、仕事のやりがいの中心だ", b:"薬の調製や処方確認など、専門的な業務そのものにやりがいを感じる" },
    { a:"患者さんの表情や反応を見ることで充実感を得る", b:"正確で質の高い業務を遂行できた時に充実感を得る" },
    { a:"コミュニケーションが得意で、患者さんとの信頼関係を築くことが自然にできる", b:"薬の知識や業務スキルを磨くことが得意で、それが武器だと感じる" },
    { a:"患者さんの不安を和らげることに大きな意義を感じる", b:"適切な薬学的介入で治療に貢献することに意義を感じる" },
    { a:"医師や看護師との連携・コミュニケーションが楽しい", b:"処方確認や疑義照会など、専門的な判断業務に充実感がある" },
    { a:"「人を助ける」ことが仕事の本質だと思う", b:"「専門知識を活かす」ことが仕事の本質だと思う" },
    { a:"患者さんの生活背景を理解することを大切にしている", b:"薬の作用機序や相互作用を正確に把握することを大切にしている" },
    { a:"在宅医療など、患者さんと継続的に関わる仕事に魅力を感じる", b:"高度な医療機関で専門的な薬学業務に携わることに魅力を感じる" },
    { a:"患者さんから感謝される瞬間が仕事の報酬だ", b:"難しい薬学的問題を解決できた時が仕事の報酬だ" },
    { a:"人と話すことでエネルギーが湧いてくる", b:"集中して業務に向き合うことでエネルギーが湧いてくる" },
    { a:"薬剤師として最も大切なのは「患者さんとの関係」だと思う", b:"薬剤師として最も大切なのは「薬学的な専門性」だと思う" },
    { a:"職場スタッフや同僚との関係が、仕事のモチベーションに大きく影響する", b:"業務環境や仕事内容の方が、モチベーションに影響する" },
    { a:"困っている患者さんへのフォローアップを自然に行っている", b:"業務上必要なフォローアップを的確に、効率よく行っている" },
  ],
  // 軸2: 変化志向(A) ↔ 安定志向(B)
  [
    { a:"新しいことや変化のある環境に、前向きに飛び込める", b:"慣れた環境で安定して働き続けることに安心感がある" },
    { a:"転職・独立・新しい役割への挑戦を、比較的前向きに考えられる", b:"今の職場で長く信頼を積み上げていきたい" },
    { a:"変化の多い職場でも、対応できる自信がある", b:"変化より予測可能な環境の方が力を発揮できる" },
    { a:"やったことのない仕事を任された時、不安よりワクワクが強い", b:"やったことのない仕事は丁寧に準備して臨む方が安心だ" },
    { a:"リスクがあっても可能性を追いかけたい気持ちが強い", b:"リスクを最小限にして確実な道を歩みたい気持ちが強い" },
    { a:"薬剤師としてのキャリアは一つの形に縛られたくない", b:"薬剤師としての一つの道を深めていきたい" },
    { a:"転職を経験することでキャリアの幅が広がると思う", b:"一つの職場で実績を積み上げることが信頼につながると思う" },
    { a:"挑戦の機会があれば、まず飛び込んでみる方だ", b:"挑戦の前に、十分な準備と見通しを立てる方だ" },
    { a:"今の薬剤師像に縛られず、新しい役割を模索したい", b:"薬剤師としての本来の役割をしっかり全うすることを大切にしたい" },
    { a:"将来、自分のビジョンで組織やサービスを作りたいと思う", b:"自分の専門性を活かして、組織の中で貢献し続けたいと思う" },
    { a:"新しい職場での「最初の苦労」は成長の糧だと思える", b:"新しい環境に慣れるまでの苦労を考えると慎重になる" },
    { a:"職場の制度や慣習に「もっと良くできる」と感じることが多い", b:"職場のルールやペースに合わせて安定して働くことを大切にしている" },
    { a:"変化に富んだキャリアを積んだ人に憧れを感じる", b:"一つの職場で深く貢献し続けている人を尊敬する" },
  ],
  // 軸3: 自律型(A) ↔ 協調型(B)
  [
    { a:"指示を待つより、自分で判断して動く方が向いている", b:"チームで方針を確認しながら動く方が安心できる" },
    { a:"自分のペースや方法で仕事を進められる環境が最も力を発揮できる", b:"チームで足並みを揃えて進める環境が最も力を発揮できる" },
    { a:"一人で集中して仕事をする時間が充実感をもたらす", b:"チームで協力して仕事をする時間が充実感をもたらす" },
    { a:"自分の裁量で仕事の優先順位を決めることを好む", b:"チームで優先順位を共有して進めることを好む" },
    { a:"独自のアイデアや方法で問題を解決することが好き", b:"チームで知恵を出し合って問題を解決することが好き" },
    { a:"リモートワークや単独行動が比較的苦にならない", b:"職場に出て、同僚と顔を合わせながら働く方が好き" },
    { a:"自分でゴールを決めて、そこに向かって動くスタイルが好き", b:"チームで共通のゴールを設定し、協力して達成するスタイルが好き" },
    { a:"会議が多い環境より、実務に集中できる環境が向いている", b:"コミュニケーションが活発なチーム環境の方がやる気が出る" },
    { a:"仕事の進め方を自分で工夫する余地がある方が好き", b:"手順が明確に決まっている環境で安心して力を発揮できる" },
    { a:"誰かに頼るより、まず自分でやってみる方だ", b:"困ったらすぐに周りに相談して協力して解決する方だ" },
    { a:"上司の指示より自分の判断を優先したい場面がある", b:"組織の方針や上司の判断を尊重して動く方が自分に合っている" },
    { a:"自分だけの得意領域を持ち、独自の価値を発揮したい", b:"チームの中で自分の役割を果たし、全体として成果を出したい" },
    { a:"細かく管理される環境より、成果で評価される環境が向いている", b:"定期的なフィードバックや確認がある環境の方が安心して働ける" },
  ],
  // 軸4: 内発動機(A) ↔ 外発動機(B)
  [
    { a:"仕事のやりがいや意義が、働くモチベーションの中心だ", b:"給与・待遇・評価が、働くモチベーションの中心だ" },
    { a:"給与が多少低くても、意義を感じる仕事をしたい", b:"仕事の意義より、適切な報酬をもらえることを優先したい" },
    { a:"「社会や患者さんの役に立てているか」が職場選びの重要な基準だ", b:"「給与・勤務条件・環境」が職場選びの重要な基準だ" },
    { a:"仕事を通じた成長や学びが続けるエネルギーになっている", b:"安定した収入と良い職場環境が続けるエネルギーになっている" },
    { a:"使命感を感じられない仕事は続けることが難しい", b:"使命感より条件や環境が整っていれば続けられる" },
    { a:"評価されなくても、意義を感じる仕事ならやりがいを持てる", b:"自分の頑張りが正当に評価・報酬化されることが重要だ" },
    { a:"薬剤師として社会的使命を果たすことに誇りを感じる", b:"薬剤師として安定したキャリアと収入を得ることを重視している" },
    { a:"仕事の内容そのものが、職場選びの最大の基準だ", b:"勤務時間・残業・立地など働く条件が、職場選びの大きな基準だ" },
    { a:"患者さんや社会への貢献実感が、仕事の報酬の一つだ", b:"明確な評価制度や給与への反映が、仕事の報酬として重要だ" },
    { a:"学びや成長機会がある職場なら、多少条件が悪くても働ける", b:"成長機会より、安定した待遇の方が長期的に重要だと思う" },
    { a:"キャリアの充実感が、将来の選択の軸になっている", b:"経済的な安定と見通しが、将来の選択の軸になっている" },
    { a:"自分の価値観や信念に合う職場であることを重視する", b:"職場の方針より待遇や条件が自分の基準に合うかを重視する" },
    { a:"仕事に没頭できる瞬間があることが、理想の働き方だ", b:"オンとオフがしっかり分かれた、メリハリのある働き方が理想だ" },
  ],
  // 軸5: リード型(A) ↔ サポート型(B)
  [
    { a:"チームや職場を引っ張るリーダー的な役割に自然と向かう", b:"リーダーを支え、縁の下の力持ちとして貢献する役割が向いている" },
    { a:"将来的には管理薬剤師・薬局長・マネージャーを目指したい", b:"現場のスペシャリストとして深く貢献し続けたい" },
    { a:"組織や仕組みを改善することに積極的に関わりたい", b:"与えられた役割を丁寧にこなすことに誇りを持っている" },
    { a:"後輩や部下を育てることにやりがいを感じる", b:"自分自身のスキルを磨くことに集中したい" },
    { a:"会議やミーティングで意見を積極的に発言する方だ", b:"必要な時だけ発言し、じっくり考えてから動く方だ" },
    { a:"チームの方向性を決める役割を担いたい", b:"決まった方向に向かって確実に実行する役割が好きだ" },
    { a:"周りを巻き込んで物事を進めることが得意だ", b:"自分の担当領域をしっかりやり遂げることが得意だ" },
    { a:"新しい取り組みを提案・実行するエネルギーが強い", b:"提案より、提案を丁寧に実行することにエネルギーを注ぐ" },
    { a:"将来、自分の薬局や事業を持ちたいという気持ちがある", b:"組織の中で安定した立場で貢献し続けることが理想だ" },
    { a:"チームが機能していない時、改善しようと動く方だ", b:"チームの課題があっても、自分の役割に集中する方だ" },
    { a:"影響力を持つことを、重要なキャリアの目標の一つとしている", b:"着実に成果を出し続けることを、キャリアの主軸としている" },
    { a:"人の上に立つことへの抵抗が少ない", b:"人の上より、専門家として対等な立場での貢献を好む" },
    { a:"大きなビジョンを描いてチームを動かすことに喜びを感じる", b:"ビジョンを実現するために黙々と貢献することに喜びを感じる" },
  ],
  // 軸6: 計画型(A) ↔ 即興型(B)
  [
    { a:"仕事を始める前に、段取りや手順をしっかり確認したい", b:"まず動いてみて、状況に応じて軌道修正する方が向いている" },
    { a:"予定通りに物事が進む時に、最もパフォーマンスが上がる", b:"予定外のことが起きても、臨機応変に対応できる" },
    { a:"スケジュール管理やToDoリストを活用することが多い", b:"その日の流れを見ながら、優先度を決めて動く方が多い" },
    { a:"準備が十分にできていない状態で動くことに不安を感じる", b:"準備より、実際に動きながら学ぶ方が効率的だと感じる" },
    { a:"リスクを事前に洗い出して対策を立てることを大切にしている", b:"リスクへは発生した時に対処すれば良いと思う方だ" },
    { a:"仕事の手順やマニュアルを整備することに意義を感じる", b:"マニュアルより、状況に応じた柔軟な判断を大切にしている" },
    { a:"締め切りや期日の管理を徹底する方だ", b:"締め切りは意識しつつ、流れに合わせて進める方だ" },
    { a:"データや根拠をもとに判断することを重視する", b:"直感や経験をもとにした判断も大切にしている" },
    { a:"長期的な計画を立てて、逆算して行動することが多い", b:"短期的に状況を見ながら、最適な行動を選ぶことが多い" },
    { a:"突発的な仕事が入ると、計画が崩れてストレスを感じる", b:"突発的な仕事にも比較的柔軟に対応できる" },
    { a:"情報を十分に集めてから決断する方だ", b:"ある程度の情報で素早く決断する方だ" },
    { a:"会議は事前にアジェンダを決めて進めたい", b:"会議はその場の流れを大切にしながら進める方が好きだ" },
    { a:"仕事の品質を保つにはプロセスの管理が重要だと思う", b:"仕事の品質を保つには状況への適応力が重要だと思う" },
  ],
];

// 軸ごとの資質プロフィール（高スコア側・低スコア側）
const AXIS_PROFILE = [
  { // 軸0
    high: {
      label: "専門追求型",
      title: "深掘り力・専門的信頼性",
      desc: "一つの領域を徹底的に掘り下げ、「この分野ならこの人」という専門的信頼を積み上げるのが自然なタイプです。知識の深さが仕事の武器になり、周囲から頼られる存在になっていきます。",
      daily: "興味ある分野の最新情報を自然にキャッチアップし、疑問が生じると徹底的に調べます。勉強会・認定資格取得にも積極的に取り組みます。",
      caution: "専門外の対応が苦手になりやすく、「幅の広さ」が求められる場面で窮屈さを感じることがあります。"
    },
    low: {
      label: "幅広探求型",
      title: "適応力・横断的視野",
      desc: "多様な知識と経験を組み合わせ、状況に応じて対応できるタイプです。「何でも相談できる人」という安心感を周りに与える存在として価値を発揮します。",
      daily: "さまざまな業務・環境に柔軟に対応でき、新しい役割にも早く馴染みます。特定領域に縛られない視野の広さが強みです。",
      caution: "「誰にも負けない専門領域」を作りにくく、キャリアの差別化に時間がかかることがあります。"
    }
  },
  { // 軸1
    high: {
      label: "対人重視型",
      title: "共感力・関係構築力",
      desc: "患者さんや同僚の気持ちを察して寄り添う力が高いタイプです。信頼関係を積み上げることが自然にでき、「この薬剤師に相談したい」と思ってもらえる存在になります。",
      daily: "患者さんとの会話に時間をかけ、生活背景まで把握しようとします。スタッフとの関係づくりにも自然とエネルギーを注ぎます。",
      caution: "人間関係に消耗しやすく、気を遣いすぎて自分のエネルギーが枯渇することがあります。"
    },
    low: {
      label: "業務重視型",
      title: "専門的判断力・業務精度",
      desc: "薬学的な判断や業務遂行の精度が高いタイプです。論理的かつ正確に仕事を進める力は、ミスが許されない医療現場で大きな信頼につながります。",
      daily: "処方の確認・疑義照会・調製精度など、専門的な判断業務に集中します。感情より事実と根拠を重視した判断を行います。",
      caution: "患者さんの感情的なニーズへの対応が後回しになりやすく、「冷たい」という印象を与えることがあります。"
    }
  },
  { // 軸2
    high: {
      label: "変化志向型",
      title: "挑戦力・開拓精神",
      desc: "新しい環境・役割・挑戦に積極的に飛び込めるタイプです。変化をリスクより機会として捉え、行動力で自分のキャリアを切り開いていきます。",
      daily: "転職・異動・新しい業務への挑戦を前向きに検討し、現状に「もっと良くできる」という問題意識を持ち続けます。",
      caution: "落ち着いて一つの場所で実績を積むことが苦手になりやすく、「腰が落ち着かない」という評価を受けることがあります。"
    },
    low: {
      label: "安定志向型",
      title: "継続力・深化する信頼",
      desc: "一つの環境で長く積み上げることで深い信頼と実績を築くタイプです。組織の安定を支え、急な変化にも地に足をつけて対応できる存在です。",
      daily: "慣れた環境でコツコツと実力を磨き、長期的な人間関係の中で信頼を積み重ねます。変化よりも深化を選ぶ傾向があります。",
      caution: "変化が必要な場面でも動き出しが遅くなりやすく、機会を逃すことがあります。"
    }
  },
  { // 軸3
    high: {
      label: "自律型",
      title: "独立的判断力・自己主導",
      desc: "自分の判断で動き、自分のペースで仕事を進める時に最もパフォーマンスが高まるタイプです。独立心が強く、自分の裁量で結果を出すことにやりがいを感じます。",
      daily: "指示を待たず自ら考えて行動します。リモートワークや単独業務でも集中力を保ちやすく、自己管理能力が高いです。",
      caution: "チームの調和を犠牲にして個人のやり方を押し通す場面が生まれやすく、協働場面で摩擦が起きることがあります。"
    },
    low: {
      label: "協調型",
      title: "チームワーク・関係的実行力",
      desc: "チームで協力して物事を進める時に最も力が発揮されるタイプです。周囲との関係を大切にし、組織全体の成果を優先して行動します。",
      daily: "チームメンバーとこまめに確認・共有しながら仕事を進めます。一人で抱え込まず、助けを求めることが自然にできます。",
      caution: "一人での業務や強い意思決定が求められる場面で、主体性を発揮しにくくなることがあります。"
    }
  },
  { // 軸4
    high: {
      label: "内発動機型",
      title: "使命感・自律的モチベーション",
      desc: "やりがいや社会的意義から働くエネルギーを得るタイプです。お金や評価より「この仕事が好きだから」「患者さんの役に立てるから」が行動の根底にあります。",
      daily: "意義を感じられない業務にはモチベーションが下がります。逆に、使命感を感じる場面では時間を忘れて没頭します。",
      caution: "使命感だけで突き進み、収入・待遇・労働条件の改善交渉を後回しにしがちです。経済的な自己管理が課題になることがあります。"
    },
    low: {
      label: "外発動機型",
      title: "現実的報酬志向・条件設計力",
      desc: "給与・待遇・労働条件などの外的条件を現実的かつ重要な判断軸として持つタイプです。自分の働きに見合った対価を求める感覚は、長期的なキャリア継続に不可欠です。",
      daily: "職場選びや交渉の際に、給与・休暇・通勤距離などの条件を明確に優先順位をつけて評価します。",
      caution: "やりがいや使命感が後回しになりやすく、条件は良いのに仕事の満足度が上がらないという状況に陥ることがあります。"
    }
  },
  { // 軸5
    high: {
      label: "リード型",
      title: "主導力・組織推進力",
      desc: "チームを引っ張り、組織を動かすことで最も力が発揮されるタイプです。方向を決めて人を巻き込み、停滞を突破する推進力が強みです。",
      daily: "会議での積極的な発言、後輩への指導、業務改善の提案など、組織を動かす役割を自然に担います。",
      caution: "一人で走りすぎてチームが追いついてこない場面や、細かい実務の精度が下がることがあります。"
    },
    low: {
      label: "サポート型",
      title: "支援力・実行的貢献",
      desc: "誰かの力になり、縁の下から支えることに深い充実感を感じるタイプです。黙々と質の高い仕事を積み重ね、信頼される実行者として組織に貢献します。",
      daily: "担当業務を丁寧にやり遂げ、困っている同僚を自然にサポートします。目立たなくても、いなくなると困る存在になります。",
      caution: "自分のキャリアの主導権を他者に委ねやすく、望まない役割を引き受け続けることがあります。"
    }
  },
  { // 軸6
    high: {
      label: "計画型",
      title: "段取り力・戦略的実行",
      desc: "事前の計画と準備を整えてから動くことで、高い精度と安心感を持って仕事を進めるタイプです。抜け漏れのない実行力が信頼の根拠になります。",
      daily: "ToDoリスト・スケジュール管理・事前リサーチを徹底します。会議前にアジェンダを準備し、報告書や資料も計画的に作成します。",
      caution: "準備が整わないと不安になりやすく、スピードが求められる変化の多い環境で動き出しが遅くなることがあります。"
    },
    low: {
      label: "即興型",
      title: "適応力・臨機応変な判断",
      desc: "状況の変化を読みながら柔軟に対応できるタイプです。突発的な出来事にも慌てず、その場での最善策を素早く判断して行動します。",
      daily: "計画を厳密に守るより、その日の状況に合わせて優先順位を柔軟に変えます。想定外の対応が多い業務でも安定して動けます。",
      caution: "準備不足や見通しの甘さが問題になる場面があり、複雑なプロジェクト管理では抜け漏れが生じることがあります。"
    }
  },
];

// 各軸の行動提案（高スコア側・低スコア側）
const AXIS_TIPS = [
  [ // 軸0
    "「自分の専門領域」を1つ決め、3〜5年かけて深める具体的なロードマップを作りましょう",
    "専門外の質問には「詳しい専門家を紹介します」と言える人脈を意識的に構築しましょう",
    "認定薬剤師・専門資格の取得を短期目標として設定し、学習の習慣化を図りましょう",
  ],
  [ // 軸1
    "患者さんとの会話で「生活背景・不安・疑問」を引き出す問いかけを意識してみましょう",
    "職場の同僚・スタッフへの声かけを増やし、「この人がいると雰囲気が変わる」という存在を目指しましょう",
    "患者さんへのフォローアップ連絡を仕組み化し、関係の深さをキャリアの武器にしましょう",
  ],
  [ // 軸2
    "「1年以内に変えたい状況」を具体的に書き出し、変化への第一歩を計画しましょう",
    "転職・異動・新しい役割への挑戦を「選択肢の一つ」として常にオープンに持ちましょう",
    "現在の職場での「変えたいこと」を3つリストアップして、提案する機会を作りましょう",
  ],
  [ // 軸3
    "自分の裁量で判断できる業務範囲を、上司と相談しながら段階的に広げましょう",
    "「自分はこうやりたい」という方法論を言語化して、職場に提案する習慣をつけましょう",
    "独立・フリーランス薬剤師の働き方を調べ、現実的な選択肢として検討してみましょう",
  ],
  [ // 軸4
    "今の仕事で「意義を感じた瞬間」を週1回振り返り、モチベーションの源泉を言語化しましょう",
    "給与・待遇の交渉を「使命感と両立できるもの」として捉え、正当な対価を求める練習をしましょう",
    "やりがいの有無を職場選びの最上位基準として明確に持ち、面接でも確認するようにしましょう",
  ],
  [ // 軸5
    "後輩・新人薬剤師の指導役を自ら引き受け、育成リーダーとしての経験を積みましょう",
    "チームの業務課題を見つけて改善提案を行い、「変革を起こす人」というポジションを確立しましょう",
    "将来の管理薬剤師・薬局長のロールモデルを見つけ、定期的に話を聞く機会を作りましょう",
  ],
  [ // 軸6
    "3〜5年のキャリア計画を紙に書き出し、逆算して今月の行動目標を設定しましょう",
    "週次の振り返りを習慣化し、計画と実績のギャップを定期的に確認・修正しましょう",
    "転職・資格取得などの重要な決断は、情報収集と計画を十分に行った上で実行しましょう",
  ],
];

// 推奨キャリアパス
const CAREER_PATHS = [
  [ // 軸0 専門追求
    { name: "病院薬剤師（専門分野特化）", desc: "がん化学療法・感染症・腎臓病など専門領域に特化した薬剤師。専門薬剤師資格の取得で差別化できます。" },
    { name: "地域密着型専門薬局", desc: "特定疾患（小児・漢方・がん等）に特化した薬局。深い専門知識が直接差別化と信頼につながります。" },
    { name: "学術・教育職", desc: "薬科大学・医薬品企業での研究・教育職。専門性を極める環境と高い評価が得られます。" },
  ],
  [ // 軸1 対人重視
    { name: "在宅医療専門薬剤師", desc: "患者さんの自宅を訪問し、継続的な関係を築きながらケアを提供。人との深い関わりが充実感の源になります。" },
    { name: "かかりつけ薬剤師（地域密着型）", desc: "地域の患者さんと長期的な信頼関係を築く役割。関係の深さが評価と収入に直結します。" },
    { name: "患者相談・薬局カウンセリング", desc: "患者さんの悩みや不安を聞き、薬学的知識と共感力で支える役割。対人スキルが最大の武器になります。" },
  ],
  [ // 軸2 変化志向
    { name: "フリーランス薬剤師", desc: "複数の職場・役割を掛け持ちしながら自分のペースで多様なキャリアを積む働き方。変化が日常になります。" },
    { name: "スタートアップ・新規事業参加", desc: "薬局チェーン新規部門・医療系スタートアップなど。変化と挑戦が日常にある環境でキャリアを磨きます。" },
    { name: "異業種・新領域への挑戦", desc: "MR・CRA・企業内薬剤師・ヘルスケアIT等。薬剤師資格を活かした新しいフィールドへの転身です。" },
  ],
  [ // 軸3 自律型
    { name: "フリーランス・独立開業", desc: "時間・場所・仕事内容を自分でコントロールできる働き方の最高形態。自律性が完全に発揮できます。" },
    { name: "管理薬剤師（少数精鋭の薬局）", desc: "小規模薬局の管理薬剤師として、実質的な意思決定権を持ちながら運営に関わります。" },
    { name: "裁量大・専門職ポジション", desc: "細かな管理なく自律的に判断・行動できるポジション。成果で評価される環境を選ぶことが鍵です。" },
  ],
  [ // 軸4 内発動機
    { name: "地域医療・在宅ケア中心の薬局", desc: "患者さんの生活と健康を根本から支えることを使命とする環境。使命感と仕事が直結します。" },
    { name: "薬局経営（理念型）", desc: "自分のビジョンと価値観を反映した薬局を経営。使命感と仕事を一致させた環境を自分で作れます。" },
    { name: "社会貢献型・非営利活動参画", desc: "途上国医療支援・地域医療活動など。社会的使命感を直接仕事に結びつけられます。" },
  ],
  [ // 軸5 リード型
    { name: "管理薬剤師・薬局長", desc: "スタッフをまとめ、薬局全体の品質とパフォーマンスを引き上げるリーダー職。影響力を発揮できます。" },
    { name: "薬局法人の幹部・経営参画", desc: "複数店舗を持つ薬局法人の本部機能・経営企画への参画。組織全体への大きな影響力を発揮できます。" },
    { name: "薬局独立開業", desc: "自分のビジョンでゼロから薬局を作るオーナー薬剤師。最大の裁量と影響力を持てる究極の形です。" },
  ],
  [ // 軸6 計画型
    { name: "病院薬局（業務改善・品質管理）", desc: "プロトコール整備・業務フロー改善など、計画的・体系的なアプローチが高く評価される環境です。" },
    { name: "薬局チェーンSV・教育担当", desc: "複数薬局の品質管理・教育・督導業務。計画立案と仕組み化が強みを最大限発揮できます。" },
    { name: "CRA・開発職", desc: "医薬品開発・治験業務。厳格なプロトコールと計画的な進行管理が求められ、計画型の強みが活きます。" },
  ],
];

// =====================================================
// 表示用の質問配列（7軸を1問ずつ交互に）
// =====================================================
const questionsFlat = [];
for (let round = 0; round < 13; round++) {
  for (let axis = 0; axis < 7; axis++) {
    questionsFlat.push({ axis, ...QUESTIONS_BY_AXIS[axis][round] });
  }
}

// =====================================================
// DOM refs
// =====================================================
const form = document.querySelector("#quizForm");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const progressPct = document.querySelector("#progressPct");
const errorMessage = document.querySelector("#errorMessage");
const resultSection = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultProfile = document.querySelector("#resultProfile");
const resultBody = document.querySelector("#resultBody");
const ctaSection = document.querySelector("#ctaSection");
const toast = document.querySelector("#toast");

let lastMilestone = 0;

function showToast(msg) {
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(() => { toast.style.display = "none"; }, 2500);
}

// =====================================================
// レンダリング
// =====================================================
const SCALE_LABELS = ["A", "やや\nA", "どちら\nとも", "やや\nB", "B"];

function renderQuiz() {
  form.innerHTML = questionsFlat.map((q, i) => {
    const num = i + 1;
    const name = `q${num}`;
    const opts = [1,2,3,4,5].map((v, vi) => {
      const id = `${name}-v${v}`;
      return `
        <label class="scale-opt" for="${id}">
          <input id="${id}" type="radio" name="${name}" value="${v}" />
          <span>${SCALE_LABELS[vi]}</span>
        </label>`;
    }).join("");

    return `
      <fieldset class="q-card" id="card-${num}">
        <div class="q-header">
          <span class="q-badge">Q.${String(num).padStart(3,"0")}</span>
        </div>
        <div class="ab-horizontal">
          <div class="ab-texts">
            <div class="ab-text-a"><span class="ab-tag a">A</span>${q.a}</div>
            <div class="ab-text-b">${q.b}<span class="ab-tag b">B</span></div>
          </div>
          <div class="scale-wrap">
            <span class="scale-edge a">← A側</span>
            <div class="scale-options">${opts}</div>
            <span class="scale-edge b">B側 →</span>
          </div>
        </div>
      </fieldset>`;
  }).join("");

  form.addEventListener("change", (e) => {
    if (!e.target.matches('input[type="radio"]')) return;
    const num = parseInt(e.target.name.replace("q", ""));
    const card = document.getElementById(`card-${num}`);
    if (card) card.classList.add("answered");
    const next = document.getElementById(`card-${num + 1}`);
    if (next) setTimeout(() => next.scrollIntoView({ behavior: "smooth", block: "center" }), 180);
  });
}

// =====================================================
// 進捗
// =====================================================
const TOTAL = questionsFlat.length; // 91

function getAnswers() {
  return questionsFlat.map((_, i) => {
    const checked = form.querySelector(`input[name="q${i+1}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
}

function updateProgress() {
  const answered = getAnswers().filter(Boolean).length;
  const pct = Math.round((answered / TOTAL) * 100);
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${answered} / ${TOTAL} 回答済み`;
  if (progressPct) progressPct.textContent = `${pct}%`;
  if (answered === TOTAL) errorMessage.textContent = "";

  const milestones = [
    { n: Math.round(TOTAL*0.25), msg: "25%クリア！調子いいです", id: "ms25" },
    { n: Math.round(TOTAL*0.5),  msg: "折り返し！あと半分",     id: "ms50" },
    { n: Math.round(TOTAL*0.75), msg: "75%！もう少しです",       id: "ms75" },
    { n: TOTAL,                  msg: "全問完了！結果を見てください", id: "ms105" },
  ];
  for (const m of milestones) {
    if (answered >= m.n && lastMilestone < m.n) {
      lastMilestone = m.n;
      showToast(m.msg);
      const el = document.getElementById(m.id);
      if (el) el.classList.add("done");
      break;
    }
  }
}

// =====================================================
// スコア計算
// =====================================================
function calcScores(answers) {
  const scores = [0, 0, 0, 0, 0, 0, 0];
  answers.forEach((val, i) => {
    if (val === null) return;
    // 1→2pt, 2→1.5pt, 3→1pt, 4→0.5pt, 5→0pt
    scores[questionsFlat[i].axis] += (5 - val) / 2;
  });
  return scores; // max: 13問 × 2pt = 26pt per axis
}

// =====================================================
// 結果コンテンツ生成
// =====================================================
function buildResultContent(scores) {
  const MAX = 13 * 2; // 26
  const ranked = scores
    .map((s, i) => ({ i, axis: AXES[i], score: s, pct: Math.round(s / MAX * 100) }))
    .sort((a, b) => b.score - a.score);

  const top3 = ranked.slice(0, 3);
  const bottom2 = ranked.slice(-2);

  // ---- 上位資質 ----
  const rankLabels = ["最強の資質", "第2の資質", "第3の資質"];
  const rankColors = ["#1a6adb", "#4d90f5", "#7ab0f8"];

  const topHTML = top3.map((r, idx) => {
    const profile = AXIS_PROFILE[r.i];
    const isHigh = r.pct >= 50;
    const dir = isHigh ? profile.high : profile.low;
    return `
      <div class="trait-card">
        <div class="trait-header" style="border-left:4px solid ${rankColors[idx]}">
          <span class="trait-rank" style="color:${rankColors[idx]}">${rankLabels[idx]}</span>
          <span class="trait-axis">${dir.label}（${r.pct}%）</span>
        </div>
        <p class="trait-title">${dir.title}</p>
        <p class="trait-desc">${dir.desc}</p>
        <div class="trait-daily">
          <span class="trait-daily-label">日常での現れ方</span>
          <p>${dir.daily}</p>
        </div>
      </div>`;
  }).join("");

  // ---- 補完的資質 ----
  const bottomHTML = bottom2.map(r => {
    const profile = AXIS_PROFILE[r.i];
    const isHigh = r.pct >= 50;
    const dir = isHigh ? profile.high : profile.low;
    return `
      <div class="complement-row">
        <div class="complement-label">${dir.label}（${r.pct}%）</div>
        <div class="complement-caution">${dir.caution}</div>
      </div>`;
  }).join("");

  // ---- 行動提案（top3軸から各2〜3個）----
  const tips = [];
  top3.forEach(r => {
    AXIS_TIPS[r.i].forEach(t => {
      if (tips.length < 7) tips.push(t);
    });
  });
  const tipsHTML = tips.map((t, i) => `
    <li class="tip-item">
      <span class="tip-num">${i+1}</span>
      <span>${t}</span>
    </li>`).join("");

  // ---- 推奨キャリア（1位軸ベース）----
  const topAxisCareers = CAREER_PATHS[top3[0].i];
  const careersHTML = topAxisCareers.map(c => `
    <div class="career-card">
      <h5 class="career-name">${c.name}</h5>
      <p class="career-desc">${c.desc}</p>
    </div>`).join("");

  return `
    <div class="rs-section-title">強い資質 Top 3</div>
    <div class="traits-grid">${topHTML}</div>

    <div class="rs-section-title" style="margin-top:32px;">補完的な傾向（スコアが低めの軸）</div>
    <div class="complements-list">${bottomHTML}</div>
    <p class="complement-note">スコアが低い軸は「弱点」ではなく「現時点での優先度が低い傾向」です。意識的に補完することでキャリアの幅が広がります。</p>

    <div class="divider"></div>

    <div class="rs-section-title">あなたへの行動提案</div>
    <ul class="tips-list">${tipsHTML}</ul>

    <div class="rs-section-title" style="margin-top:32px;">推奨されるキャリアの方向性</div>
    <div class="careers-grid">${careersHTML}</div>

    <div class="divider"></div>
    <p class="coaching-teaser">これらの提案を実践する中で生まれる疑問や壁を、<strong>無料キャリア面談</strong>で一緒に深掘りしましょう。</p>`;
}

// =====================================================
// 結果表示
// =====================================================
const PROFILES = {
  "専門追求+対人重視": "専門知識を武器に患者さんや医療チームと向き合う「臨床系スペシャリスト」タイプです。",
  "専門追求+変化志向": "専門領域を極めながら新しい挑戦にも飛び込む「進化するスペシャリスト」タイプです。",
  "専門追求+自律型":   "専門性を軸に自分のペースで深く追求する「独立型専門家」タイプです。",
  "専門追求+内発動機": "使命感を持って専門性を深め、学びを糧にし続ける「探求者」タイプです。",
  "専門追求+リード型": "専門知識と影響力を組み合わせてチームを引っ張る「専門リーダー」タイプです。",
  "専門追求+計画型":   "緻密な計画と高い専門性で質を追求する「完成度追求型」タイプです。",
  "対人重視+変化志向": "人との関わりを大切にしながら新しい場所でも関係を築く「フレキシブルケアラー」タイプです。",
  "対人重視+自律型":   "人の役に立ちながらも自分のスタイルで動く「独自の支援者」タイプです。",
  "対人重視+内発動機": "患者さんへの貢献感がモチベーションの核にある「使命感型ケアラー」タイプです。",
  "対人重視+リード型": "人との関わりを活かしてチームを動かす「ヒューマンリーダー」タイプです。",
  "対人重視+計画型":   "丁寧なコミュニケーションと段取りで信頼を積み上げる「堅実なケアラー」タイプです。",
  "変化志向+自律型":   "自分の判断で新しい道に飛び込む「開拓者」タイプです。",
  "変化志向+内発動機": "使命感と挑戦心を原動力にキャリアを切り開く「ビジョン追求型」タイプです。",
  "変化志向+リード型": "変化の中でチームをリードし組織を次のステージへ引っ張る「変革リーダー」タイプです。",
  "変化志向+計画型":   "挑戦しながらも戦略的に動く「計画的チャレンジャー」タイプです。",
  "自律型+内発動機":   "自分の価値観と使命感に従って独立的に行動する「信念型薬剤師」タイプです。",
  "自律型+リード型":   "独立した判断力と影響力で組織をリードする「自立型リーダー」タイプです。",
  "自律型+計画型":     "自分のペースで緻密に計画し着実に成果を出す「職人型」タイプです。",
  "内発動機+リード型": "使命感を持ってチームを引っ張り組織全体を成長させる「情熱的リーダー」タイプです。",
  "内発動機+計画型":   "深い使命感と緻密な計画を組み合わせて着実に価値を生む「戦略的貢献者」タイプです。",
  "リード型+計画型":   "ビジョンを描き計画的にチームを率いる「戦略リーダー」タイプです。",
};

function showResult() {
  const answers = getAnswers();
  const unanswered = answers.filter(v => !v).length;
  if (unanswered > 0) {
    errorMessage.textContent = `未回答の質問があります。あと ${unanswered} 問に答えてください。`;
    return;
  }
  errorMessage.textContent = "";

  const scores = calcScores(answers);
  const MAX = 13 * 2;
  const ranked = scores
    .map((s, i) => ({ i, axis: AXES[i], score: s, pct: Math.round(s / MAX * 100) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const second = ranked[1];
  const topLabel = top.pct >= 50 ? top.axis.name : top.axis.opposite;
  const secondLabel = second.pct >= 50 ? second.axis.name : second.axis.opposite;

  const profileKey1 = `${topLabel}+${secondLabel}`;
  const profileKey2 = `${secondLabel}+${topLabel}`;
  const profileText = PROFILES[profileKey1] || PROFILES[profileKey2] || `${topLabel}の傾向が最も強い薬剤師タイプです。`;

  resultTitle.textContent = `あなたは「${topLabel} × ${secondLabel}」タイプの薬剤師です`;
  if (resultProfile) resultProfile.textContent = profileText;

  // スコアバー
  const barHTML = AXES.map((axis, i) => {
    const pct = Math.round(scores[i] / MAX * 100);
    const isTop = i === top.i;
    return `
      <div class="bar-row${isTop ? " bar-top" : ""}">
        <span class="bar-name">${pct >= 50 ? axis.name : axis.opposite}</span>
        <div class="bar-track">
          <div class="bar-fill" style="width:${pct}%"></div>
        </div>
        <span class="bar-score">${pct}%</span>
      </div>`;
  }).join("");

  resultBody.innerHTML = `
    <div class="radar-wrap">
      <canvas id="radarCanvas" class="radar-canvas"></canvas>
    </div>
    <div class="axis-bars">${barHTML}</div>
    <div class="divider"></div>
    ${buildResultContent(scores)}`;

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

  requestAnimationFrame(() => {
    const canvas = document.querySelector("#radarCanvas");
    if (canvas) drawRadar(canvas, scores);
  });

  if (ctaSection) ctaSection.hidden = false;
}

function resetQuiz() {
  form.reset();
  resultSection.hidden = true;
  if (ctaSection) ctaSection.hidden = true;
  errorMessage.textContent = "";
  lastMilestone = 0;
  updateProgress();
  document.querySelector("#diagnosis").scrollIntoView({ behavior: "smooth", block: "start" });
}

// =====================================================
// レーダーチャート
// =====================================================
function drawRadar(canvas, scores) {
  const MAX = 13 * 2;
  const dpr = window.devicePixelRatio || 1;
  const size = canvas.offsetWidth || 460;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const cx = size / 2, cy = size / 2;
  const maxR = size * 0.34;
  const n = 7;
  const angles = Array.from({ length: n }, (_, i) => -Math.PI / 2 + (2 * Math.PI * i) / n);

  ctx.fillStyle = "#f4f7fb";
  ctx.fillRect(0, 0, size, size);

  [0.25, 0.5, 0.75, 1.0].forEach(ratio => {
    ctx.beginPath();
    angles.forEach((a, i) => {
      const x = cx + maxR * ratio * Math.cos(a);
      const y = cy + maxR * ratio * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = ratio === 1 ? "rgba(26,106,219,0.25)" : "rgba(26,106,219,0.1)";
    ctx.lineWidth = ratio === 1 ? 1.5 : 1;
    ctx.stroke();
  });

  angles.forEach(a => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + maxR * Math.cos(a), cy + maxR * Math.sin(a));
    ctx.strokeStyle = "rgba(26,106,219,0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  ctx.beginPath();
  scores.forEach((s, i) => {
    const ratio = s / MAX;
    const x = cx + maxR * ratio * Math.cos(angles[i]);
    const y = cy + maxR * ratio * Math.sin(angles[i]);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  const grad = ctx.createLinearGradient(cx - maxR, cy - maxR, cx + maxR, cy + maxR);
  grad.addColorStop(0, "rgba(26,106,219,0.28)");
  grad.addColorStop(1, "rgba(232,85,58,0.18)");
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = "#1a6adb";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  scores.forEach((s, i) => {
    const ratio = s / MAX;
    const x = cx + maxR * ratio * Math.cos(angles[i]);
    const y = cy + maxR * ratio * Math.sin(angles[i]);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#1a6adb";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  const labelR = maxR * 1.28;
  ctx.font = `bold ${Math.round(size * 0.028)}px -apple-system, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  AXES.forEach((axis, i) => {
    const x = cx + labelR * Math.cos(angles[i]);
    const y = cy + labelR * Math.sin(angles[i]);
    ctx.fillStyle = "#0d1b2a";
    ctx.fillText(axis.name, x, y);
  });
}

// =====================================================
// 初期化
// =====================================================
renderQuiz();
updateProgress();
form.addEventListener("change", updateProgress);
document.querySelector("#showResultButton").addEventListener("click", showResult);
document.querySelector("#resetButton").addEventListener("click", resetQuiz);
