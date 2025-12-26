export interface Mentor {
  id: number | string;
  name: string;
  title: { en: string; zh: string };
  bio: { en: string; zh: string };
  expertise?: { en: string[]; zh: string[] };
  image: string;
  category: "project" | "lecturer";
  isInviteCard?: boolean;
  // New detailed fields
  details?: { en: string; zh: string };
  quote?: { en: string; zh: string };
}

// ==========================================
// HOME PAGE MENTORS (Keep exactly as before)
// ==========================================

export const homeMentors: Mentor[] = [
  {
    id: 1,
    name: "Pin Z",
    title: {
      en: "Entrepreneur & AI Product Builder",
      zh: "创业导师 / AI 产品实战派",
    },
    bio: {
      en: "Serial founder with 8 years of applied AI experience across product, operations, e-commerce and supply chain.",
      zh: "连续创业者，Beebee AI & 趣玩网创始人，8 年 AI 实战经验，跨产品、运营、电商与供应链。",
    },
    expertise: {
      en: [
        "Product",
        "AI Applications",
        "E-commerce",
        "Operations",
        "Supply Chain",
      ],
      zh: ["产品", "AI 应用", "电商", "运营", "供应链"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_pin.png",
    category: "project",
  },
  {
    id: 4,
    name: "Vito L",
    title: {
      en: "RAG Engineer & AI Full-Stack Developer",
      zh: "RAG 系统工程师 / AI 全栈开发",
    },
    bio: {
      en: "McGill CS + Math graduate, core engineer for enterprise-grade RAG and knowledge systems.",
      zh: "麦吉尔 CS+数学双学位，主导多套企业级 RAG 与知识管理系统开发。",
    },
    expertise: {
      en: [
        "RAG",
        "LLM Apps",
        "Full-stack",
        "Knowledge Systems",
        "Python",
      ],
      zh: ["RAG", "LLM 应用", "全栈", "知识管理", "Python"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Vito.png",
    category: "project",
  },
  {
    id: 9,
    name: "Fangzhong L",
    title: {
      en: "Senior Data Scientist",
      zh: "资深数据科学家",
    },
    bio: {
      en: "UChicago Financial Math graduate specializing in XGBoost/uplift modeling, MMM, RAG analytics and growth systems.",
      zh: "芝加哥大学金融数学硕士，负责 XGBoost/uplift 建模、MMM、RAG Analytics Assistant 与增长决策系统。",
    },
    expertise: {
      en: [
        "Data Science",
        "Marketing Models",
        "Risk",
        "RAG",
        "Experiments",
      ],
      zh: ["数据科学", "营销建模", "风险", "RAG", "A/B 测试"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_fangzhong.png",
    category: "project",
  },
  {
    id: 10,
    name: "Mingxi C",
    title: {
      en: "Full-Stack Engineer & AI Application Developer",
      zh: "全栈工程师 / AI 应用开发者",
    },
    bio: {
      en: "Builds end-to-end AI systems including RAG, vLLM, OCR and automation workflows; strong full-stack delivery.",
      zh: '专长 RAG、vLLM、OCR、自动化流程、React/Node 全链路；多次完成"想法→上线产品"全流程交付。',
    },
    expertise: {
      en: [
        "Full-stack",
        "RAG",
        "vLLM",
        "OCR",
        "Automation",
        "React/Node",
      ],
      zh: [
        "全栈",
        "RAG",
        "vLLM",
        "OCR",
        "自动化",
        "React/Node",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Mingxi.png",
    category: "project",
  },
  {
    id: 11,
    name: "Shu H",
    title: {
      en: "NYC Financial Systems Engineer",
      zh: "纽约金融系统工程师",
    },
    bio: {
      en: "Columbia OR alumnus with 9+ years building trading, settlement and risk systems in NYC finance.",
      zh: "哥大运筹学硕士，9+ 年纽约金融机构后端与资金结算/交易/风险系统经验。",
    },
    expertise: {
      en: [
        "Backend",
        "Trading",
        "FinTech",
        "Pipelines",
        "Risk",
      ],
      zh: [
        "后端",
        "交易系统",
        "金融工程",
        "数据管线",
        "风险系统",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_shuhong.png",
    category: "project",
  },
  {
    id: 12,
    name: "Heyang L",
    title: {
      en: "Machine Learning Engineer, Google",
      zh: "Google 机器学习工程师",
    },
    bio: {
      en: "OSU Physics PhD (Presidential Fellow), ML engineer at Google with experience across RAG, agents and full-stack pipelines.",
      zh: "OSU 物理博士（总统奖学金），深度学习 + 工程并行经验，熟悉 RAG、Agent、全栈与 ML 系统。",
    },
    expertise: {
      en: ["ML", "DL", "RAG", "Agent", "Engineering"],
      zh: ["机器学习", "深度学习", "RAG", "Agent", "工程系统"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_heyang.png",
    category: "project",
  },
  {
    id: 15,
    name: "Bobby W",
    title: {
      en: "Senior Frontend Engineer",
      zh: "资深前端工程师",
    },
    bio: {
      en: "8 years multi-platform experience across Uniapp, Vue, and enterprise-scale frontend architecture.",
      zh: "8 年多端实战，精通 Uniapp、Vue、前端架构与复杂商业项目交付。",
    },
    expertise: {
      en: [
        "Frontend",
        "Vue",
        "Uniapp",
        "Components",
        "Engineering",
      ],
      zh: ["前端", "Vue", "Uniapp", "组件设计", "工程化"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_bobby.png",
    category: "project",
  },
  {
    id: 998,
    name: "",
    title: { en: "", zh: "" },
    bio: { en: "", zh: "" },
    expertise: { en: [], zh: [] },
    image:
      "https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "project",
    isInviteCard: true,
  },
];

export const homeExperts: Mentor[] = [
  {
    id: 22,
    name: "Yu G",
    title: {
      en: "Chief-level UX & Product Design Expert",
      zh: "设计与体验总监级专家",
    },
    bio: {
      en: "Former Chief Designer at Baidu and UX designer at Netscape/eBay/PayPal; educated at SJTU, IIT Institute of Design and Columbia Business School; built one of China's earliest professional UX teams.",
      zh: "前百度首席设计���,曾任硅谷 Netscape / eBay / PayPal 设计师，就读上交大、IIT 设计学院、哥大商学院，中国最早一批专业 UX 团队创建者。",
    },
    expertise: {
      en: [
        "UX Design",
        "Interaction Design",
        "Product Innovation",
      ],
      zh: ["交互设计", "用户体验", "产品创新"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_guoyu.png",
    category: "lecturer",
  },
  {
    id: 16,
    name: "Jennifer L",
    title: {
      en: "Senior AI Product GTM Expert / Serial Entrepreneur",
      zh: "资深 AI 产品 GTM 专家 / 连续创业者",
    },
    bio: {
      en: "NYU Economics & KCL International Management graduate, currently pursuing MBA at Cheung Kong. Former Lu Qi team member, co-founded AI company with Li Ziran, focusing on AI Growth Agent and product commercialization.",
      zh: "NYU 经济学士、KCL 国际管理硕士，长江商学院 MBA 在读。曾在陆奇团队工作，与李自然共创 AI 公司，聚焦 AI Growth Agent 与产品商业化。",
    },
    expertise: {
      en: [
        "AI Product GTM",
        "Growth Strategy",
        "Cold Start",
        "0-to-1 Product",
        "Commercialization",
      ],
      zh: [
        "AI 产品 GTM",
        "增长策略",
        "冷启动",
        "0-1 产品",
        "商业化",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jennifer.png",
    category: "project",
  },
  {
    id: 13,
    name: "Jerry Y",
    title: {
      en: "AI Infrastructure & Cloud Architecture Expert",
      zh: "AI 基础设施与云架构专家",
    },
    bio: {
      en: "16-year veteran, early DevOps adopter; expert in Kubernetes, cloud-native engineering and vLLM deployments.",
      zh: "16 年大厂经验，国内最早 DevOps 实践者之一；精通 Kubernetes、MLOps、云原生、vLLM 推理部署。",
    },
    expertise: {
      en: [
        "Cloud-native",
        "DevOps",
        "MLOps",
        "Kubernetes",
        "vLLM",
        "Infra",
      ],
      zh: [
        "云原生",
        "DevOps",
        "MLOps",
        "Kubernetes",
        "vLLM",
        "Infra",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jerry.png",
    category: "project",
  },
  {
    id: 6,
    name: "Ashlynn L",
    title: {
      en: "Data Scientist & AI Data Engineer",
      zh: "数据科学 / AI 数据工程师",
    },
    bio: {
      en: "ICL Distinction MSc and Edinburgh First Class; strong in statistical modeling, async crawlers and LLM data systems.",
      zh: "帝国理工硕士（卓越），爱丁堡一等荣誉；擅长统计建模、异步爬虫、LLM 数据处理与检索系统。",
    },
    expertise: {
      en: [
        "Data Science",
        "Statistical Modeling",
        "Async Crawling",
        "LLM Data",
        "ElasticSearch",
      ],
      zh: [
        "数据科学",
        "统计建模",
        "异步爬虫",
        "LLM 数据",
        "ElasticSearch",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_ashlynn.png",
    category: "project",
  },
  {
    id: 999,
    name: "",
    title: { en: "", zh: "" },
    bio: { en: "", zh: "" },
    expertise: { en: [], zh: [] },
    image:
      "https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "lecturer",
    isInviteCard: true,
  },
];

// ==========================================
// DETAILED MENTORS (Updated with full HTML details)
// ==========================================

export const detailedMentors: Mentor[] = [
  {
    id: "mentor-pin",
    name: "Pin Z",
    title: {
      en: "Founder & CEO of Beebee AI & Quwan.com",
      zh: "Beebee AI、趣玩网 创始人兼 CEO",
    },
    bio: {
      en: "One of the earliest entrepreneurs globally to enter the GPT era, with 8 years of hands-on AI experience. Led mobile app + AI initiatives, founded Quwan.com and scaled the business from original design to supply chain production. Oversaw search ecosystem, client product and alliance growth at Baidu. Earlier roles at Topsoft and Haojie Super Player, spanning product, operations, e-commerce, supply chain, and AI education.",
      zh: "全球最早一批投入 GPT 创业实践的行动派，8 年深度 AI 经验。主导移动 App + AI 业务、创立趣玩网并推动从原创设计到供应链规模化。在百度负责搜索生态、客户端与联盟增长。早期在托普软件、豪杰超级解霸负责 toB/toC 产品管理，具备产品、运营、电商、供应链与 AI 教育的跨领域经验。",
    },
    details: {
      en: `
<p>Pin Zhou, Founder & CEO of Beebee AI and Quwan.com, is both an entrepreneur and an AI practitioner. From mobile internet to generative AI, he has long worked at the front line of product innovation, tightly combining business execution with technological shifts.</p>

<h4>Cross-domain Product & Business Experience</h4>
<ul>
  <li>Led mobile app + AI initiatives at Cheetah Mobile, driving intelligent product deployment</li>
  <li>Founded Quwan.com, positioned as an “online IKEA,” building the entire chain from original design to scaled supply chain</li>
  <li>Oversaw search ecosystem, client products and alliance growth at Baidu</li>
  <li>Early roles at Topsoft and Haojie Super Player, managing both toB and toC product lines</li>
</ul>

<h4>AI-era Entrepreneurship & Methodology</h4>
<ul>
  <li>Among the earliest entrepreneurs worldwide to build businesses around GPT technologies</li>
  <li>Expert at breaking down “AI + business” into clear, actionable steps</li>
  <li>Strong sensitivity to new technologies, fast content updates, and ability to translate complexity into practical strategy</li>
</ul>

<h4>Teaching Style & Philosophy</h4>
<ul>
  <li>Practical, execution-oriented teaching; focuses on methods and actions instead of abstract ideas</li>
  <li>Steady pace, clear logic, strong judgment in pinpointing core issues</li>
  <li>Both an entrepreneur and a parent deeply involved in AI education, giving him a grounded view of learning frameworks</li>
</ul>
`,
      zh: `
<p>Pin Zhou，Beebee AI 与趣玩网创始人，兼具连续创业者与 AI 实践者身份。从移动互联网到生成式 AI，他始终站在产品创新的一线，把商业结构与技术突破结合得很紧密。</p>

<h4>跨领域的产品与商业实践</h4>
<ul>
  <li>在猎豹移动主导移动 App + AI 业务，推动智能化产品体系落地</li>
  <li>创立定位“网上宜家”的趣玩网，带队完成从原创设计到供应链规模化的全链路建设</li>
  <li>在百度负责搜索生态、客户端与联盟业务扩张，熟悉大规模分发与商业链路</li>
  <li>早年在托普软件、豪杰超级解霸管理 toB、toC 产品，积累扎实的用户产品思维</li>
</ul>

<h4>AI 时代的创业与方法论</h4>
<ul>
  <li>全球最早进入 GPT 创业的一批实践者，拥有系统性的 8 年 AI 实战经验</li>
  <li>擅长将「AI + 商业」拆成具体动作和执行路径，帮助学习者快速找到方向</li>
  <li>对新技术保持高敏感度，内容更新速度快，能把复杂技术翻译成可操作的策略</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>实战型讲法，不讲空概念，重具体方法论与可落地动作</li>
  <li>判断力强，节奏稳，能迅速抓住问题的关键</li>
  <li>不仅是创业者，也是深度参与 AI 教育的一位父亲，对学习体系有更务实的理解</li>
</ul>
`,
    },
    quote: {
      en: "Great products don’t come from planning—they emerge from a series of sharp decisions.",
      zh: "好的产品不是规划出来的，而是一次次决策后的必然结果。",
    },
    expertise: {
      en: [
        "AI + Business",
        "Product Management",
        "Operations",
        "Supply Chain",
        "Strategy",
      ],
      zh: ["AI + 商业", "产品管理", "运营", "供应链", "战略"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_pin.png",
    category: "project",
  },
  {
    id: "mentor-vito",
    name: "Vito L",
    title: {
      en: "Senior AI Engineer",
      zh: "高级AI工程师",
    },
    bio: {
      en: "McGill University Computer Science and Mathematics double degree, Beebee AI core development engineer, focusing on RAG systems and LLM application development. Vito has two years of AI product development experience.",
      zh: "麦吉尔大学计算机科学与数学双学位，Beebee AI核心开发工程师，专注RAG系统和LLM应用开发。Vito拥有两年AI产品开发经验，主导构建多个企业级知识管理系统。",
    },
    details: {
      en: `<p>Graduated from McGill University, one of Canada's top universities, with a double degree in Computer Science and Mathematics. As a core technical backbone of Beebee AI, Vito has rich practical experience in RAG system development and LLM applications.</p>

<h4>Technical Expertise</h4>
<ul>
<li>Focuses on large language model-driven RAG (Retrieval-Augmented Generation) SaaS application development</li>
<li>Led the construction of multiple enterprise-level knowledge management systems</li>
</ul>

<h4>Full-Stack Development Capabilities</h4>
<ul>
<li>Proficient in modern technology stacks such as Python, JavaScript, and React</li>
<li>Skilled at building efficient APIs using Flask</li>
</ul>

<h4>Core Technical Achievements</h4>
<ul>
<li><strong>Multimodal RAG System:</strong> Designed and implemented intelligent retrieval system supporting multiple data formats</li>
<li><strong>Intent Engine Architect:</strong> Built intelligent intent understanding system</li>
<li><strong>Document Processing Expert:</strong> Implemented semantic embedding and chunked retrieval using ElasticSearch</li>
</ul>

<h4>Business Insight</h4>
<ul>
<li>Can clearly articulate how AI solutions improve operational efficiency and drive digital transformation</li>
</ul>

<h4>Well-Rounded Engineer</h4>
<ul>
<li>Former McGill University competitive swimming team member</li>
<li>Now passionate about powerlifting and Brazilian Jiu-Jitsu</li>
</ul>`,
      zh: `<p>毕业于加拿大顶尖学府麦吉尔大学，获计算机科学与数学双学位。作为Beebee AI的核心技术骨干，Vito在RAG系统开发和LLM应用领域拥有丰富的实战经验。</p>

<h4>技术专长与项目经验</h4>
<ul>
<li>专注于大语言模型驱动的RAG（检索增强生成）SaaS应用开发</li>
<li>主导构建了多个企业级知识管理系统</li>
</ul>

<h4>全栈开发能力</h4>
<ul>
<li>精通Python、JavaScript、React等现代技术栈</li>
<li>擅长使用Flask构建高效API</li>
</ul>

<h4>核心技术成就</h4>
<ul>
<li><strong>多模态RAG系统：</strong>设计并实现了支持文本、图像等多种数据格式的智能检索系统</li>
<li><strong>意图引擎架构师：</strong>构建智能意图理解系统</li>
<li><strong>文档处理专家：</strong>利用ElasticSearch实现语义嵌入和分块检索</li>
</ul>

<h4>商业洞察力</h4>
<ul>
<li>能够清晰阐述AI解决方案在提升运营效率、降低成本、推动数字化转型方面的作用</li>
</ul>

<h4>全面发展的工程师</h4>
<ul>
<li>曾是麦吉尔大学竞技游泳队成员</li>
<li>现在热衷于力量举和巴西柔术</li>
</ul>`,
    },
    quote: {
      en: "Code is like powerlifting, every line must be precise; AI is like Jiu-Jitsu, winning with skill.",
      zh: "代码如力量举，每一行都要精准到位；AI如柔术，以巧制胜方能四两拨千斤。",
    },
    expertise: {
      en: [
        "RAG",
        "LLM Apps",
        "Full-stack",
        "Knowledge Systems",
        "Python",
      ],
      zh: ["RAG", "LLM 应用", "全栈", "知识管理", "Python"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Vito.png",
    category: "project",
  },
  {
    id: "mentor-ashlynn",
    name: "Ashlynn L",
    title: {
      en: "AI Data Engineer",
      zh: "AI 数据工程师",
    },
    bio: {
      en: "Holds a First-Class Honours degree in Mathematics & Statistics from the University of Edinburgh and a Distinction MSc in Data Science from Imperial College London. Currently an AI-focused backend engineer at BEEBEEAI, building productivity tools powered by large language models. Known for combining rigorous statistical thinking with practical engineering execution.",
      zh: "毕业于爱丁堡大学数学与统计学（一等荣誉），帝国理工学院统计系数据科学硕士（卓越级）。现为 BEEBEEAI 后端软件工程师，专注于基于大语言模型的生产力工具研发。具备扎实的数学推理能力与工程实现能力，在统计建模、LLM 数据处理与高性能系统设计方面经验丰富。",
    },
    details: {
      en: `
<p>Ashlynn Lu is an AI Data Engineer with strong foundations in mathematics, statistics, and engineering execution. She is experienced in applying statistical frameworks to AI workflows and building scalable systems for LLM-driven applications.</p>

<h4>Academic Background & Awards</h4>
<ul>
  <li>MSc in Data Science (Distinction), Imperial College London</li>
  <li>BSc in Mathematics & Statistics (First-Class Honours), University of Edinburgh</li>
  <li>Recipient of the Lawley Prize for outstanding performance in joint honours statistics</li>
  <li>Winner of the School Vacation Scholarship</li>
</ul>

<h4>Technical Expertise</h4>
<ul>
  <li>Design and implementation of large-scale asynchronous crawling systems</li>
  <li>LLM-based semantic keyword extraction and data optimization</li>
  <li>Integration of MySQL and Elasticsearch multi-storage systems</li>
  <li>Bayesian optimization and high-dimensional constrained problem solving</li>
  <li>Python/R data analysis and statistical modeling</li>
</ul>

<h4>Teaching Philosophy</h4>
<ul>
  <li>Interprets AI algorithms through rigorous statistical thinking</li>
  <li>Balances mathematical foundations with practical engineering execution</li>
  <li>Known for clear explanations that break down complex models and probabilistic logic</li>
</ul>
`,
      zh: `
<p>Ashlynn Lu，AI 数据工程师与后端软件开发者，兼具强数学基础与扎实工程能力。她擅长将统计学方法引入 AI 工作流，通过严谨的分析与系统化实现提升模型与数据的效率。</p>

<h4>学术经历与奖项</h4>
<ul>
  <li>帝国理工学院统计系数据科学硕士（卓越级）</li>
  <li>爱丁堡大学数学与统计学士（一等荣誉学位）</li>
  <li>爱丁堡大学 Lawley 奖（统计联合荣誉学位最杰出表现）</li>
  <li>学院假期奖学金获得者</li>
</ul>

<h4>技术能力与工程实践</h4>
<ul>
  <li>设计与实现大规模异步爬虫系统，支持高并发与高扩展数据任务</li>
  <li>构建基于 LLM 的语义关键词提取系统，提升数据清洗与标注效率</li>
  <li>完成 MySQL 与 Elasticsearch 的多存储集成与查询优化</li>
  <li>擅长贝叶斯优化与高维约束问题求解</li>
  <li>熟练使用 Python / R 进行数据分析与统计建模</li>
</ul>

<h4>教学侧重点与理念</h4>
<ul>
  <li>用统计思维解读 AI 算法本质，帮助学生建立底层理解</li>
  <li>强调数学基础与工程实践的平衡，将抽象概念转化为可操作技巧</li>
  <li>善于用清晰示例拆解复杂模型与概率推理步骤</li>
</ul>
`,
    },
    quote: {
      en: "Statistics makes AI clearer, engineering makes it real.",
      zh: "用统计让 AI 更透明，用工程让模型真正落地。",
    },
    expertise: {
      en: [
        "Data Science",
        "Statistical Modeling",
        "Async Crawling",
        "LLM Data",
        "ElasticSearch",
      ],
      zh: [
        "数据科学",
        "统计建模",
        "异步爬虫",
        "LLM 数据",
        "ElasticSearch",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_ashlynn.png",
    category: "project",
  },
  {
    id: "mentor-charlie",
    name: "Charlie C",
    title: {
      en: "AI Algorithm Engineer",
      zh: "AI 算法工程师",
    },
    bio: {
      en: "Focused on NLP algorithms and AI productization, with two years of hands-on experience. Contributed to the development of exam and writing agents for the Second Brain project and integrated them into platforms such as WeChat and Feishu. Experienced in Transformer optimization, prompt engineering, RAG pipelines and full-stack Python development.",
      zh: "专注 NLP 算法与 AI 产品化，有两年算法研发经验。深度参与第二大脑的考试与写作智能体研发，负责微信、飞书等主流平台的接入与功能落地。对 Transformer 优化、提示词工程、RAG 系统与全栈工程有实践积累。",
    },
    details: {
      en: `
<p>Charlie Chen is an AI algorithm engineer focused on NLP development and AI product delivery. He works across both modeling and backend engineering, giving him a full-stack perspective on building AI systems.</p>

<h4>Technical Expertise</h4>
<ul>
  <li>Transformer optimization and NLP model construction</li>
  <li>Prompt engineering and large-model fine-tuning</li>
  <li>Multimodal RAG pipelines and Elasticsearch vector search</li>
  <li>Python full-stack development (Flask / FastAPI / WebSocket)</li>
  <li>Docker-based deployment and service architecture design</li>
</ul>

<h4>Project Achievements</h4>
<ul>
  <li>Led development of exam/writing agents and integrated them into WeChat, Feishu and other major platforms</li>
  <li>Strong practical experience in API integration and third-party service connectivity</li>
  <li>Bridges model capabilities with real product requirements</li>
</ul>

<h4>Teaching Philosophy</h4>
<ul>
  <li>Balances theory with hands-on practice; simplifies complex ideas into clear steps</li>
  <li>Provides personalized technical guidance</li>
  <li>Creates a relaxed and intuitive learning environment</li>
</ul>
`,
      zh: `
<p>Charlie Chen，AI 算法工程师，长期在 NLP 方向深耕，尤其关注"算法到产品"的落地流程。他既写模型，也写后端，对工程化有完整理解。</p>

<h4>技术专长</h4>
<ul>
  <li>Transformer 架构优化与 NLP 模型构建</li>
  <li>提示词工程与大型模型调优策略</li>
  <li>多模态 RAG 系统设计及 Elasticsearch 向量检索</li>
  <li>Python 全栈开发（Flask / FastAPI / WebSocket）</li>
  <li>Docker 容器化部署与服务架构设计</li>
</ul>

<h4>项目经验</h4>
<ul>
  <li>主导开发考试/写作智能体，引入微信、飞书等多平台使用场景</li>
  <li>在 API 集成、跨平台通信和第三方服务对接方面经验扎实</li>
  <li>推动模型能力与实际业务需求的真实闭环</li>
</ul>

<h4>教学方式与理念</h4>
<ul>
  <li>理论与实践并重，擅长把复杂流程拆成可执行步骤</li>
  <li>强调个性化指导，能快速定位学习者的卡点</li>
  <li>风格轻松直接，帮助学生用最快路径吃透 NLP 核心技能</li>
</ul>
`,
    },
    quote: {
      en: "Transformer's self-attention taught me: true intelligence isn't remembering everything—it's knowing what to focus on at the right moment.",
      zh: "Transformer的自注意力机制教会我:真正的智能不是记住所有信息,而是知道在什么时候关注什么。",
    },
    expertise: {
      en: [
        "Transformer Optimization",
        "Prompt Engineering",
        "Multi-modal RAG",
        "Vector Search",
        "Full Stack (Flask/FastAPI)",
      ],
      zh: [
        "Transformer优化",
        "提示词工程",
        "多模态RAG",
        "向量检索",
        "全栈开发",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_charlie.png",
    category: "project",
  },
  {
    id: "mentor-bobby",
    name: "Bobby W",
    title: {
      en: "Senior Frontend Engineer",
      zh: "资深前端工程师",
    },
    bio: {
      en: "Senior frontend engineer with 8 years of experience, skilled in multi-platform development across WeChat Mini Programs, H5, PC, and mobile apps. Strong in frontend architecture, component design, and modern JavaScript frameworks.",
      zh: "拥有 8 年前端开发经验，精通多端研发与现代前端技术栈。具备从微信小程序、H5、PC 到 App 的全平台项目经验，熟悉前端架构、组件封装与高质量工程实践。",
    },
    details: {
      en: `
<p>Bobby Wang is a senior frontend engineer with deep experience in multi-platform development and modern frontend architecture. He focuses on building reliable, scalable frontends across different ecosystems.</p>

<h4>Technical Expertise</h4>
<ul>
  <li>Uniapp cross-platform development: write once, run on multiple clients</li>
  <li>Vue ecosystem (Vue2 / Vue3 / Nuxt SSR)</li>
  <li>Strong understanding of JavaScript internals and reactive development</li>
  <li>WebSocket-based real-time communication</li>
  <li>Frontend architecture, component design, and engineering best practices</li>
</ul>

<h4>Project Experience</h4>
<ul>
  <li>Worked on e-commerce platforms, admin systems, SaaS tools, data dashboards and more</li>
  <li>Experienced in full-cycle development: planning, architecture, implementation, deployment</li>
  <li>Seasoned in multi-platform adaptation and complex UI/UX interactions</li>
</ul>

<h4>Teaching Philosophy</h4>
<ul>
  <li>Focuses on practical application and clean code, built on real commercial experience</li>
  <li>Uses real-world examples to explain core frontend concepts and best practices</li>
  <li>Helps students build strong engineering intuition through clear and structured teaching</li>
</ul>
`,
      zh: `
<p>Bobby Wang，资深前端工程师，长期从事多端研发与前端架构设计工作。对多平台生态、性能优化和工程规范有成熟经验，能将前端技术有效落地到稳定的商业产品中。</p>

<h4>技术专长</h4>
<ul>
  <li>Uniapp 跨平台开发：一套代码多端运行的完整实践</li>
  <li>Vue 全家桶（Vue2 / Vue3 / Nuxt SSR）</li>
  <li>深入理解 JavaScript 核心机制与响应式开发模式</li>
  <li>WebSocket 实时通信与数据交互</li>
  <li>前端架构设计、组件封装与工程化规范</li>
</ul>

<h4>项目经验</h4>
<ul>
  <li>负责在线商城、后台管理系统、SaaS 工具、数据大屏等多个商业级项目</li>
  <li>完整参与从需求、架构、开发到上线的全流程</li>
  <li>对多端适配与复杂交互开发有丰富实战积累</li>
</ul>

<h4>教学方式与理念</h4>
<ul>
  <li>基于丰富的商业项目经验，强调实战能力与代码质量培养</li>
  <li>善用真实案例说明前端关键概念与最佳实践</li>
  <li>以清晰直观的方式带学生构建扎实的前端工程思维</li>
</ul>
`,
    },
    quote: {
      en: "Frontend is not about stacking code, but building solid engineering and great experiences.",
      zh: "前端不是堆代码，而是把体验和工程做到位。",
    },
    expertise: {
      en: [
        "Frontend",
        "Vue",
        "Uniapp",
        "Components",
        "Engineering",
      ],
      zh: ["前端", "Vue", "Uniapp", "组件设计", "工程化"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_bobby.png",
    category: "project",
  },
  {
    id: "mentor-fangzhong",
    name: "Fangzhong L",
    title: {
      en: "Senior Data Scientist, Teladoc Health",
      zh: "资深数据科学家（Teladoc Health）",
    },
    bio: {
      en: "Holds a Master’s in Financial Mathematics from the University of Chicago and dual bachelor’s degrees in Finance and Mathematics from Indiana University. Senior Data Scientist at Teladoc Health, leading marketing analytics, modeling infrastructure and RAG-based internal tools. Former Quantitative Risk Lead at AIG, responsible for large-scale credit risk and asset modeling. Recently built personal AI projects including YumTranslate, an OCR + LLM multilingual assistant.",
      zh: "芝加哥大学金融数学硕士，印第安纳大学金融与数学双学士。现任 Teladoc Health 资深数据科学家，负责市场分析与模型体系建设，主导季度策略项目与内部 RAG Analytics Assistant 的研发。曾在 AIG 负责量化风险建模，涉及信用风险、资产组合建模与大规模模拟系统。近期开展多项个人 AI 项目，包括 OCR + LLM 多语言菜单助手 YumTranslate。",
    },
    details: {
      en: `
<p>Fangzhong Liu is a senior data scientist with a strong background in financial mathematics and applied machine learning. He specializes in marketing analytics, ML modeling, RAG systems, and end-to-end AI productization.</p>

<h4>Professional Experience</h4>
<ul>
  <li>Built XGBoost, uplift, and propensity models driving ~50% registration lift and significant revenue impact</li>
  <li>Implemented Google Meridian MMM for multi-channel ROI evaluation</li>
  <li>Led A/B testing and growth experiment frameworks for business validation</li>
  <li>Designed 40+ KPI real-time marketing monitoring system reducing DS support by 40%</li>
  <li>Automated 80% of reporting via Python + CI/CD pipelines</li>
  <li>At AIG, led credit risk modeling, Monte Carlo simulations, and default prediction (85% accuracy)</li>
  <li>Built early warning systems preventing ~$80M losses during COVID</li>
</ul>

<h4>AI & System Applications</h4>
<ul>
  <li>Designed Teladoc’s internal RAG Analytics Assistant to enhance marketing insights</li>
  <li>Built YumTranslate, an OCR + LLM multilingual menu assistant</li>
  <li>Experienced in connecting data, modeling and deployment into one coherent workflow</li>
</ul>

<h4>Technical Strengths</h4>
<ul>
  <li>Python, SQL, PySpark, TensorFlow, Scikit-learn, MLflow, Databricks</li>
  <li>LLMs (GPT / vLLM), RAG systems with Elastic Vector DB</li>
  <li>MMM, MTA, A/B testing, growth analytics</li>
  <li>MLOps with AWS, Docker, CI/CD</li>
  <li>Strong communication, cross-team alignment, and mentoring ability</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Explains “model + business impact” in a clear, structured way</li>
  <li>Focuses on practical cases, reusable templates, and code frameworks</li>
  <li>Helps students understand how to validate, ship and maintain real models</li>
  <li>Direct, adaptive communication style; adjusts depth based on student background</li>
</ul>
`,
      zh: `
<p>Fangzhong Liu 是兼具金融数学背景与数据科学经验的资深算法负责人。他在机器学习、应用 AI、营销策略建模与 RAG 系统方面有深入实践，擅长把"模型如何影响业务"讲清楚，用严谨方法支持真正的业务增长。</p>

<h4>核心专业经验</h4>
<ul>
  <li>构建 XGBoost、uplift、propensity 全流程模型，推动注册增长近 50%</li>
  <li>搭建 Google Meridian MMM 模型，用于跨渠道 ROI 测算与预算优化</li>
  <li>主导 A/B 测试与增长实验体系设计，支持业务决策与验证过程</li>
  <li>设计实时营销监控系统（40+ 指标），减少 DS 支撑需求 40%</li>
  <li>推动 80% 报表自动化：开发 Python + CI/CD 数据管线</li>
  <li>AIG 时期负责信用风险模型、Monte Carlo 模拟、违约预测（85% 准确度）</li>
  <li>开发早期预警系统，在 COVID 时期避免约 8,000 万潜在损失</li>
</ul>

<h4>AI 与系统应用</h4>
<ul>
  <li>设计内部 RAG Analytics Assistant，提高营销团队洞察效率</li>
  <li>主导 OCR + LLM 项目 YumTranslate，支持多语言 menu 翻译与识别</li>
  <li>在机器学习与 AI 应用之间建立完整闭环，从数据到部署</li>
</ul>

<h4>技术栈与能力优势</h4>
<ul>
  <li>Python、SQL、PySpark、TensorFlow、Scikit-learn、MLflow、Databricks</li>
  <li>LLMs（GPT / vLLM）与 RAG 系统构建（Elastic Vector DB）</li>
  <li>MMM、MTA、A/B 测试、增长分析全链路</li>
  <li>MLOps：AWS、Docker、CI/CD</li>
  <li>沟通能力强、跨团队协作经验丰富，具备成熟的新人培养能力</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>擅长把“模型 + 业务逻辑”讲得直白，让学生真正理解模型如何改变业务</li>
  <li>课程注重实战：案例 + 可复用模板 + 标准代码框架</li>
  <li>强调业务验证：怎么评估模型、怎么上线、怎么跑得稳</li>
  <li>沟通直接、有判断力，会根据学员背景调整讲解深度与内容密度</li>
</ul>
`,
    },
    quote: {
      en: "A model’s value isn’t in its metrics—it’s in its real business impact.",
      zh: "模型的价值不在分数，而在能否真正推动业务前进。",
    },
    expertise: {
      en: [
        "Data Science",
        "Marketing Models",
        "Risk",
        "RAG",
        "Experiments",
      ],
      zh: ["数据科学", "营销建模", "风险", "RAG", "A/B 测试"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_fangzhong.png",
    category: "project",
  },
  {
    id: "mentor-mingxi",
    name: "Mingxi C",
    title: {
      en: "Full-Stack Engineer & AI Application Developer",
      zh: "全栈工程师 / AI 应用开发者",
    },
    bio: {
      en: "CS graduate from Stony Brook University. Focused on full-stack development and AI application engineering. Experienced with React, Node, MongoDB, Firebase, vLLM, RAG, OCR, automation workflows and multi-service orchestration. Delivered multiple end-to-end projects across healthcare, crypto and e-commerce, taking products from concept to MVP to production.",
      zh: "毕业于纽约州立大学石溪分校计算机科学专业，专注全栈开发与 AI 应用落地。熟悉 React / Node / Mongo / Firebase 等完整工程链路，能将大模型、RAG、OCR、自动化流程等技术与前后端系统结合。拥有医疗、加密货币、电商等行业的项目经验，多次主导从“想法 → MVP → 可上线产品”的完整交付。",
    },
    details: {
      en: `
<p>Mingxi is a full-stack engineer and AI application builder who bridges LLM technologies with real system engineering. He has strong hands-on ability across frontend, backend, automation and AI system design.</p>

<h4>Project & Engineering Experience</h4>
<ul>
  <li>Delivered engineering projects in healthcare, crypto and e-commerce</li>
  <li>Led multiple end-to-end cycles: idea → MVP → production-ready</li>
  <li>Frontend–backend–database–LLM pipeline experience</li>
  <li>Hands-on NLP experiments: OpenAI API, CoT, GPT fine-tuning techniques</li>
</ul>

<h4>AI / System Building Skills</h4>
<ul>
  <li>vLLM inference deployment & optimization</li>
  <li>Cloudflare Tunnel for secure public access</li>
  <li>OCR (PaddleOCR) for document and image extraction</li>
  <li>ElasticSearch-based RAG with multimodal PDF parsing</li>
  <li>MCP multi-service orchestration</li>
  <li>Playwright automation pipelines</li>
  <li>API reverse engineering (e.g., Instagram login flow)</li>
</ul>

<h4>Full-Stack Development</h4>
<ul>
  <li>React / Node / MongoDB / Firebase</li>
  <li>API architecture and backend service design</li>
  <li>Frontend component structure, backend logic, data modeling</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Explains the full connection between LLMs and engineering workflows</li>
  <li>Helps beginners build projects that actually run end-to-end</li>
  <li>Uses demos, diagrams and visualizations to make concepts intuitive</li>
  <li>Fast-paced, practical and result-oriented teaching</li>
  <li>Strong engineering versatility: reverse engineering, automation, RAG, full-stack</li>
</ul>
`,
      zh: `
<p>Mingxi Chen 是一名全栈工程师与 AI 应用开发者，具备扎实的工程底层能力，能把大模型技术与真实业务系统快速结合。他擅长从零搭建可用产品，在同龄工程师中兼具逆向、爬虫、RAG、全栈和自动化能力。</p>

<h4>项目与工程经验</h4>
<ul>
  <li>负责多行业工程项目：医疗、加密货币、电商等场景</li>
  <li>多次主导从“想法 → MVP → 可上线产品”的完整流程</li>
  <li>具备前端、后端、数据库到模型服务的完整交付能力</li>
  <li>参与 NLP 与 LLM 相关实验：OpenAI API、CoT、GPT 微调技巧</li>
</ul>

<h4>AI / 系统构建能力</h4>
<ul>
  <li>vLLM 推理服务部署与性能优化</li>
  <li>Cloudflare Tunnel 公网访问与服务暴露</li>
  <li>OCR（PaddleOCR）在图像与文档识别的落地实践</li>
  <li>ElasticSearch RAG 系统（含多模态 PDF 解析）</li>
  <li>MCP 多服务调度流程与系统交互设计</li>
  <li>Playwright 自动化抓取与任务流水线</li>
  <li>接口逆向工程：如 Instagram 登录流程逆向与自动化实现</li>
</ul>

<h4>全栈开发技能</h4>
<ul>
  <li>React / Node / MongoDB / Firebase 完整工程体系</li>
  <li>前后端 API 架构设计与权限体系搭建</li>
  <li>前端组件结构、后端服务封装、数据库建模</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>擅长把“LLM + 工程”打通：部署、RAG、自动化、前后端接入</li>
  <li>重视实际可运行的效果，帮助初学者做出真正“能跑”的项目</li>
  <li>喜欢用流程图、可视化 Demo、RAG 面板等方式讲解复杂流程</li>
  <li>做事风格务实、节奏快，落地能力强</li>
  <li>在同龄人中工程能力突出：逆向、全栈、爬虫与 AI 应用都能做</li>
</ul>
`,
    },
    quote: {
      en: "Good projects don’t come from ideas—they come from building them.",
      zh: "好项目不是想出来的，是一步步跑出来的。",
    },
    expertise: {
      en: [
        "Full-stack",
        "RAG",
        "vLLM",
        "OCR",
        "Automation",
        "React/Node",
      ],
      zh: [
        "全栈",
        "RAG",
        "vLLM",
        "OCR",
        "自动化",
        "React/Node",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Mingxi.png",
    category: "project",
  },
  {
    id: "mentor-hongshu",
    name: "Hong S",
    title: {
      en: "Core Systems Engineer in NY Financial Institutions",
      zh: "纽约金融机构核心系统工程师",
    },
    bio: {
      en: "MS in Operations Research from Columbia University, MS in Electrical Engineering from NYU, and BS from Sun Yat-sen University. Over 9 years of backend and data engineering experience across NYC financial institutions, specializing in core trading, risk, and settlement systems. Skilled in Python, Java, Spring, SQL, C#, plus frontend prototyping.",
      zh: "哥伦比亚大学运筹学硕士，纽约大学电气工程硕士，中山大学电子与通信本科。拥有 9 年以上纽约金融机构核心系统经验，覆盖后端开发、数据工程、交易与风险系统。精通 Python/Java/Spring/SQL/C#，并具备前端原型能力。在 BEE Beta 指导学生构建可落地、可维护、可扩展的生产级系统。",
    },
    details: {
      en: `
<p>Hong Shu has extensive experience building mission-critical systems across major NYC financial institutions, working on trading engines, asset management workflows, and fund settlement pipelines.</p>

<h4>Education</h4>
<ul>
  <li>MS in Operations Research, Columbia University</li>
  <li>MS in Electrical Engineering, New York University</li>
  <li>BS in Electronics & Communications, Sun Yat-sen University</li>
  <li>Passed CFA Level 1</li>
</ul>

<h4>Professional Experience</h4>
<ul>
  <li>9+ years in backend engineering and data systems within NYC finance</li>
  <li>Deep familiarity with asset management, trading systems, risk platforms, and reconciliation flows</li>
  <li>Built core backend APIs and fund settlement systems for large asset management firms</li>
  <li>Designed Python data pipelines, transaction & balance computation engines, and reporting systems</li>
  <li>Led a 20M USD system integration and technical delivery initiative</li>
  <li>Developed pricing engines, risk calculators, and reconciliation tools for hedge funds and AM firms</li>
</ul>

<h4>AI / Engineering Stack</h4>
<ul>
  <li>Python, Java, Spring, SQL, C#</li>
  <li>Vue.js / Angular frontend prototyping</li>
  <li>Distributed services, data pipelines, reporting & automation</li>
  <li>Service integration, API architecture, system quality & maintainability</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Practical and grounded in real engineering workflows</li>
  <li>Breaks complex system problems into clear, actionable steps</li>
  <li>Stable pacing, structured explanations, and emphasis on maintainability</li>
  <li>Ideal for students who want to build reliable, production-grade systems</li>
</ul>
`,
      zh: `
<p>Hong Shu 深耕纽约金融科技行业多年，负责资产管理、交易系统与核心资金结算平台的工程落地，长期在高要求、高可靠的场景里搭建生产系统。</p>

<h4>教育背景</h4>
<ul>
  <li>哥伦比亚大学 · 运筹学硕士（MS OR）</li>
  <li>纽约大学 NYU · 电气工程硕士</li>
  <li>中山大学 · 电子与通信学士</li>
  <li>通过 CFA Level 1（强化金融与风险理解）</li>
</ul>

<h4>专业经验</h4>
<ul>
  <li>9 年以上纽约金融机构后端开发、数据工程与核心系统构建经验</li>
  <li>熟悉资产管理、交易系统、风险系统、客户资金结算与对账流程</li>
  <li>负责大型资产管理公司的核心后端 API、数据处理与资金系统集成</li>
  <li>自主开发数据管线、交易与余额计算、报表生成与交付系统</li>
  <li>主导价值 2000 万美元的系统集成交付与技术售卖</li>
  <li>在对冲基金与资管机构构建定价系统、风险引擎与对账平台</li>
</ul>

<h4>AI / 工程技术栈（在 BEE Beta 掌握）</h4>
<ul>
  <li>Python / Java / Spring / SQL / C#</li>
  <li>Vue.js / Angular 前端原型开发能力</li>
  <li>分布式服务构建、数据流水线、计算与报表系统</li>
  <li>API 设计、服务集成、自动化与系统可维护性建设</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>实战导向：强调“系统如何真正落地”</li>
  <li>擅长把复杂系统拆成清晰、可执行的步骤</li>
  <li>讲解节奏稳，逻辑清楚，注重工程质量与可维护性</li>
  <li>适合希望提升工程系统设计思维、掌握严谨实现方法的学员</li>
</ul>
`,
    },
    quote: {
      en: "Complex systems become simple when broken into clear steps.",
      zh: "复杂系统不神秘，把路径拆清楚，一步步就能落地。",
    },
    expertise: {
      en: [
        "Backend",
        "Trading",
        "FinTech",
        "Pipelines",
        "Risk",
      ],
      zh: [
        "后端",
        "交易系统",
        "金融工程",
        "数据管线",
        "风险系统",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_shuhong.png",
    category: "project",
  },
  {
    id: "mentor-heyang",
    name: "Heyang L",
    title: {
      en: "Machine Learning Engineer, Google",
      zh: "Google 机器学习工程师",
    },
    bio: {
      en: "PhD in Physics from Ohio State University (Presidential Fellowship) and BS in Physics from Nanjing University. Former ML Scientist Intern at Object Tech and Research Assistant at OSU with 11 publications. Currently a Machine Learning Engineer at Google, experienced across full-stack AI engineering including RAG, agents, crawling, API design, and CI/CD pipelines.",
      zh: "俄亥俄州立大学物理博士（总统奖学金），南京大学物理本科。曾任 Object Tech 机器学习科学家实习生、OSU 研究助理（共发表 11 篇论文）。现为 Google 机器学习工程师。在 BEE Beta 掌握从工程到 AI 的完整技术链路，包括 RAG、Agent、前后端、爬虫、CI/CD 等实战能力。",
    },
    details: {
      en: `
<p>Heyang Long combines backgrounds in physics, machine learning research, and production-grade engineering. He brings rigor from academic research and applies it to practical AI system building.</p>

<h4>Education & Research</h4>
<ul>
  <li>PhD in Physics, Ohio State University — Presidential Fellowship</li>
  <li>BS in Physics, Nanjing University</li>
  <li>Research Assistant at OSU with 11 publications</li>
  <li>ML Scientist Intern at Object Tech working on multi-model systems</li>
</ul>

<h4>Industry & Engineering Experience</h4>
<ul>
  <li>Machine Learning Engineer at Google</li>
  <li>Strengths in modeling, data workflows, and stable production ML systems</li>
  <li>Experience with large-scale training, inference and system optimization</li>
</ul>

<h4>AI / Engineering Stack</h4>
<ul>
  <li>Cursor, MCP, API design</li>
  <li>RAG architecture and agent pipelines</li>
  <li>Frontend–backend engineering and Firebase integration</li>
  <li>Crawling and automation</li>
  <li>CI/CD and deployment workflows</li>
</ul>

<h4>ML & System Skills</h4>
<ul>
  <li>Python, SQL, C</li>
  <li>PyTorch, TensorFlow</li>
  <li>Transformers, vision-language models</li>
  <li>RAG / LangChain ecosystem</li>
  <li>AWS, Snowflake</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Breaks complex concepts into clear, structured steps</li>
  <li>Strong balance between theory and applied engineering</li>
  <li>Explains algorithms with research logic and implements them with engineering rigor</li>
  <li>Ideal for students who want to go from using AI → to building real AI systems</li>
</ul>
`,
      zh: `
<p>Heyang Long 在理论物理、深度学习与工程系统之间有完整交叉背景。从科研到工业落地都长期实践，擅长用严谨逻辑和工程思维构建高可靠 AI 系统。</p>

<h4>教育背景与科研经历</h4>
<ul>
  <li>俄亥俄州立大学（Ohio State University）物理学博士 —— 总统奖学金获得者</li>
  <li>南京大学物理学本科</li>
  <li>OSU 研究助理：深度学习、计算建模相关 11 篇论文</li>
  <li>Object Tech 机器学习科学家实习：参与多模型系统与算法验证</li>
</ul>

<h4>工业经验与工程能力</h4>
<ul>
  <li>Google 机器学习工程师：参与模型工程、分析 pipeline、生产级 ML 系统</li>
  <li>具备从算法、模型到业务体系的完整链路经验</li>
  <li>熟悉大规模数据、分布式训练与高效推理优化</li>
</ul>

<h4>AI / 工程技术栈（在 BEE Beta 掌握）</h4>
<ul>
  <li>Cursor / MCP / API 设计与调用体系</li>
  <li>RAG、Agent 架构设计</li>
  <li>前后端工程：服务封装、前端实现、Firebase 集成</li>
  <li>爬虫与数据抓取工程</li>
  <li>CI/CD、工程规范与部署流程</li>
</ul>

<h4>机器学习与系统能力</h4>
<ul>
  <li>Python / SQL / C</li>
  <li>PyTorch / TensorFlow</li>
  <li>Transformer、视觉语言模型（VLM）</li>
  <li>RAG / LangChain 生态构建</li>
  <li>AWS / Snowflake 数据与云端部署能力</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>能把复杂算法拆成结构化步骤，让学生理解“为什么这样做”</li>
  <li>重实践，强调模型、工程、数据三个环节的协同</li>
  <li>用科研逻辑解释模型，用工程方法让系统真正跑起来</li>
  <li>讲解清晰、思路严谨，适合希望从“会用 AI”进阶到“能构建系统”的学生</li>
</ul>
`,
    },
    quote: {
      en: "Principles reveal depth; engineering brings distance.",
      zh: "理解原理让你看得更深，工程实践让系统跑得更远。",
    },
    expertise: {
      en: ["ML", "DL", "RAG", "Agent", "Engineering"],
      zh: ["机器学习", "深度学习", "RAG", "Agent", "工程系统"],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_heyang.png",
    category: "project",
  },
  {
    id: "mentor-jerry",
    name: "Jerry",
    title: {
      en: "AI Infrastructure & Cloud Architecture Expert",
      zh: "AI 基础设施与云架构专家",
    },
    bio: {
      en: "Mini MBA Certificate Program (OMMBA) at SUNY Buffalo and BS from UESTC. Over 16 years in top tech companies and one of the earliest DevOps practitioners in China. Specialized in AIOps, MLOps, cloud architecture (AWS/Azure/GCP), Kubernetes, and AI infrastructure including RAG pipelines and vLLM deployments.",
      zh: "纽约州立大学布法罗分校管理学院 Mini MBA 项目，电子科技大学本科。拥有16年顶尖科技公司经验，是国内最早一批践行 DevOps 的工程师之一，深耕 AIOps/MLOps、云原生架构与 AI 系统基础设施构建。在 BEE Beta 掌握从底层 Infra 到 AI 落地的完整体系，包括云平台、Kubernetes、RAG、vLLM 推理服务部署等核心能力。",
    },
    details: {
      en: `
<p>Jerry brings 16 years of hands-on experience across cloud architecture, DevOps, MLOps, and AI infrastructure. As one of the earliest DevOps adopters in China, he has led large-scale automation and intelligent ops systems across multiple cloud platforms.</p>

<h4>Education</h4>
<ul>
  <li>Mini MBA Certificate Program (OMMBA), SUNY Buffalo School of Management</li>
  <li>BS, University of Electronic Science and Technology of China</li>
</ul>

<h4>Professional Experience</h4>
<ul>
  <li>16 years in top-tier technology companies</li>
  <li>Early DevOps practitioner since 2008</li>
  <li>Expert in AIOps, MLOps, automated pipelines and monitoring systems</li>
  <li>Architect for AWS / Azure / GCP cloud infrastructure</li>
  <li>CNCF Certified Kubernetes Administrator</li>
  <li>NVIDIA Certified AI Infrastructure & Operations Engineer</li>
  <li>Holds 10+ internationally recognized industry certifications</li>
</ul>

<h4>AI / Engineering Stack</h4>
<ul>
  <li>Cloudflare, Firebase integration</li>
  <li>RAG / LangChain pipelines</li>
  <li>vLLM + KubeRay inference deployment</li>
  <li>Cloud-native architecture and container orchestration</li>
  <li>Kubernetes, Terraform, CI/CD automation</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Explains complex systems with clear and approachable language</li>
  <li>Strong engineering pragmatism with focus on reliability and scalability</li>
  <li>Easy to communicate with and ideal for students leveling up toward AI infrastructure engineering</li>
</ul>
`,
      zh: `
<p>Jerry 在云架构、AI 系统基础设施、DevOps/MLOps 等方向具备极深一线经验，是国内最早推动 DevOps 实践的工程师之一，长期负责复杂系统的稳定性、自动化与智能化。</p>

<h4>教育背景</h4>
<ul>
  <li>纽约州立大学布法罗分校管理学院 Mini MBA Certificate Program (OMMBA)</li>
  <li>电子科技大学 本科</li>
</ul>

<h4>专业经验</h4>
<ul>
  <li>16 年顶尖科技公司工程经验，覆盖开发、运维、架构到 AI 系统落地</li>
  <li>2008 年起践行 DevOps，是国内最早的探索者之一</li>
  <li>AIOps / MLOps 实践者，负责模型上线流程、自动化测试与监控体系</li>
  <li>AWS / Azure / GCP 全栈云基础设施管理与架构设计</li>
  <li>CNCF Certified Kubernetes Administrator（CKA）</li>
  <li>NVIDIA Certified AI Infrastructure & Operations Engineer</li>
  <li>拥有 10+ 国际权威技术认证</li>
</ul>

<h4>AI / 工程技术栈（在 BEE Beta 掌握）</h4>
<ul>
  <li>CloudFlare、Firebase 全链路服务集成</li>
  <li>RAG / LangChain 系统构建</li>
  <li>vLLM + KubeRay 推理服务部署与优化</li>
  <li>云原生系统设计、容器化、自动化部署、可观测性体系</li>
  <li>Kubernetes、Terraform、CI/CD Pipeline 构建</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>用简单易懂的语言拆解复杂概念，让学生快速理解系统本质</li>
  <li>强调工程实践，注重系统稳定性与可维护性</li>
  <li>沟通顺畅，课堂氛围轻松，适合从工程基础向 AI Infra 进阶的学生</li>
</ul>
`,
    },
    quote: {
      en: "Break complexity into clarity — that’s how control begins.",
      zh: "复杂系统要敢拆，拆清楚了就能掌控。",
    },
    expertise: {
      en: [
        "Cloud-native",
        "DevOps",
        "MLOps",
        "Kubernetes",
        "vLLM",
        "Infra",
      ],
      zh: [
        "云原生",
        "DevOps",
        "MLOps",
        "Kubernetes",
        "vLLM",
        "Infra",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jerry.png",
    category: "project",
  },
  {
    id: "mentor-jennifer-liu",
    name: "Jennifer L",
    title: {
      en: "Senior AI Product GTM Expert / Serial Entrepreneur",
      zh: "资深 AI 产品 GTM 专家 / 连续创业者",
    },
    bio: {
      en: "Jennifer Liu holds a Bachelor's in Economics from NYU and a Master's in International Management from KCL, currently pursuing an MBA at Cheung Kong Graduate School of Business. She has deep experience in product validation, growth, and survival strategies for early-stage entrepreneurs, having worked with the Lu Qi team. She co-founded an AI company with YouTube tech influencer Li Ziran, leading multiple AI product launches and growth strategies. Her focus is on AI Growth Agent, AI product commercialization, and cold start methodologies.",
      zh: "拥有 NYU 经济学学士与 KCL国际管理硕士学位，现于长江商学院攻读 MBA。曾在陆奇团队工作期间深度参与早期创业者从 0 到 1 的产品验证、增长与生存策略。与 YouTube 科技博主李自然合伙创立 AI 公司，主导多款 AI 产品上线与增长，长期聚焦 AI Growth Agent、AI 产品商业化与冷启动方法论。",
    },
    details: {
      en: `
    <p>Jennifer Liu holds an academic background in Economics and International Management, with rich practical experience in AI product GTM (Go-to-Market) strategies. She co-founded an AI company with renowned tech influencer Li Ziran, leading AI product launches and growth strategies, with a deep focus on early product market entry and cold start methodologies.</p>

<h4>Cross-domain Professional Experience</h4>
<ul>
  <li>Worked with Lu Qi's team on product validation and survival strategies for early-stage entrepreneurs</li>
  <li>Co-founded an AI company with Li Ziran, leading product positioning, growth, and commercialization</li>
  <li>Focused on market entry and commercialization paths for AI products, deeply understanding cold start methodologies</li>
  <li>Provided GTM strategy support for over 100 AI startups</li>
</ul>

<h4>Teaching Style & Philosophy</h4>
<ul>
  <li>Practical, execution-oriented approach, emphasizing key decisions and actionable steps from 0 to 1</li>
  <li>Uses real-life entrepreneurial case studies, focusing on validation thinking, growth paths, and commercialization feasibility</li>
  <li>Direct and pragmatic style, addressing cold start issues and true user needs</li>
</ul>
`,
      zh: `
    <p>Jennifer Liu 拥有经济学与国际管理的深厚学术背景，且在 AI 产品 GTM（Go-to-Market）方面具有丰富的实战经验。她与知名科技博主李自然共同创办 AI 公司，推动多款 AI 产品的快速增长，深谙早期产品的市场切入与冷启动策略。</p>

<h4>跨领域的专业经验</h4>
<ul>
  <li>曾在陆奇团队参与早期创业者从 0 到 1 的产品验证与生存策略</li>
  <li>与李自然共同创立 AI 公司，主导 AI 产品的定位、增长与商业化</li>
  <li>专注于 AI 产品的市场切入与商业化路径，深入了解产品冷启动方法论</li>
  <li>为 100 多家 AI 初创公司提供 GTM 策略支持</li>
</ul>

<h4>教学理念与风格</h4>
<ul>
  <li>实战导向，强调从 0 到 1 的关键判断与可执行步骤</li>
  <li>结合真实创业案例，注重验证思路、增长路径与商业化可行性</li>
  <li>风格直接务实，专注解决“冷启动问题”和“用户需求”</li>
</ul>
`,
    },
    quote: {
      en: "From 0 to 1, it's not created, it's validated.",
      zh: "从 0 到 1，不是做出来的，而是验证出来的。",
    },
    expertise: {
      en: [
        "AI Product GTM",
        "Growth Strategy",
        "Cold Start",
        "0-to-1 Product",
        "Commercialization",
      ],
      zh: [
        "AI 产品 GTM",
        "增长策略",
        "冷启动",
        "0-1 产品",
        "商业化",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jennifer.png",
    category: "project",
  },
  {
    id: 998,
    name: "",
    title: { en: "", zh: "" },
    bio: { en: "", zh: "" },
    expertise: { en: [], zh: [] },
    image:
      "https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "project",
    isInviteCard: true,
  },
];

export const detailedExperts: Mentor[] = [
  {
    id: "expert-guoyu",
    name: "Yu G",
    title: {
      en: "Former Chief Designer at Baidu, Senior Product & UX Designer from Silicon Valley",
      zh: "前百度首席设计师，硅谷资深产品与体验设计专家",
    },
    bio: {
      en: "Graduate of Shanghai Jiao Tong University, IIT Institute of Design, and Columbia Business School. Former designer at Netscape, eBay and PayPal in Silicon Valley. Served as Chief Designer at Baidu, where he built one of China's earliest professional UX teams. Specializes in user experience, interaction design and innovation education, advising companies like Samsung, Haier, Tencent and Huawei.",
      zh: "毕业于上海交通大学、美国伊利诺伊理工设计学院、哥伦比亚大学商学院。曾任硅谷 Netscape、eBay、PayPal 设计师，回国后担任百度首席设计师，创建并带领中国最早的专业 UX 团队之一。长期深耕用户体验、交互设计与创新教育，为多家头部企业提供设计咨询。",
    },
    details: {
      en: `
<h4>Expert in UX, Product Design and Innovation Education</h4>
<p>Yu Guo combines global design education with top-tier Silicon Valley experience. He has played key roles in UX system building, innovation methodology and enterprise-level design capability development across major tech companies.</p>

<h4>International Education Background</h4>
<ul>
  <li>Bachelor's degree from Shanghai Jiao Tong University</li>
  <li>Institute of Design at Illinois Institute of Technology (IIT)</li>
  <li>Columbia Business School</li>
  <li>Long-term lecturer of innovation & entrepreneurship at major Chinese universities</li>
</ul>

<h4>Silicon Valley & China Tech Experience</h4>
<ul>
  <li><strong>Netscape / eBay / PayPal:</strong> UX & product designer in Silicon Valley</li>
  <li><strong>Chief Designer at Baidu:</strong> Built one of China's earliest professional UX teams</li>
  <li><strong>IXDA Member:</strong> Contributor to global UX discourse</li>
  <li><strong>Microsoft Accelerator Mentor:</strong> Guiding startups on product & design</li>
</ul>

<h4>UX System Building Expertise</h4>
<ul>
  <li>Built Baidu's UX system from scratch</li>
  <li>Led UX team expansion and cross-team integration</li>
  <li>Designed processes, standards and experience frameworks adopted across the company</li>
</ul>

<h4>Enterprise Design Consulting</h4>
<ul>
  <li>Advised Samsung, Haier, Tencent, Huawei and others</li>
  <li>Helps enterprises build design strategies and innovation-driven product processes</li>
  <li>Transforms design methodology into actionable business practice</li>
</ul>

<h4>Teaching Style</h4>
<ul>
  <li>Turns abstract design theories into practical, step-by-step frameworks</li>
  <li>Focuses on design as a driver of product and business impact</li>
  <li>Uses real-world case studies to teach research, UX standards and cross-functional collaboration</li>
</ul>
`,
      zh: `
<h4>跨设计、产品与创新教育的全能型专家</h4>
<p>郭宇拥有扎实的设计教育背景与丰富的硅谷产品经验，长期致力于用户体验体系构建、创新方法论落地与企业设计能力提升。从硅谷互联网巨头到国内一线科技公司，他始终站在行业前沿推动设计的发展。</p>

<h4>国际化教育与跨界学习背景</h4>
<ul>
  <li>上海交通大学本科</li>
  <li>美国伊利诺伊理工大学设计学院（IIT Institute of Design）</li>
  <li>哥伦比亚大学商学院</li>
  <li>在上交、北工大、北航等高校长期教授创新创业课程</li>
</ul>

<h4>硅谷与中国科技公司的核心经历</h4>
<ul>
  <li><strong>Netscape / eBay / PayPal：</strong>担任产品与用户体验设计师，深度参与硅谷互联网产品体系建设</li>
  <li><strong>百度首席设计师：</strong>回国后创建并带领中国最早的专业 UX 团队之一</li>
  <li><strong>国际体验设计协会委员：</strong>推动体验设计的行业标准与发展</li>
  <li><strong>微软创投加速器导师：</strong>辅导创新团队提升产品与设计能力</li>
</ul>

<h4>用户体验体系建设的行业先行者</h4>
<ul>
  <li>在百度负责用户体验体系从 0 到 1 的搭建</li>
  <li>推动 UX 团队扩张并形成业内标杆级实践</li>
  <li>深度参与跨部门协作、流程重构与体验标准制定</li>
</ul>

<h4>企业级设计咨询经验丰富</h4>
<ul>
  <li>为三星、海尔、腾讯、华为等国内外企业提供长期 UX 咨询</li>
  <li>帮助大型企业构建体验策略、产品方法论与设计文化</li>
  <li>擅长将方法论转化为可直接落地的产品与流程</li>
</ul>

<h4>教学风格与方法论特点</h4>
<ul>
  <li>擅长把抽象的设计理念转换为可执行的实践流程</li>
  <li>强调"设计驱动业务"的思维，让体验建设真正服务增长与产品成功</li>
  <li>结合真实案例，让学生理解跨团队协作、用户研究、体验标准等核心能力</li>
</ul>
`,
    },
    quote: {
      en: "Design is not decoration — it is the core force that makes a product understood, used and loved.",
      zh: "设计不是装饰，而是让产品真正被理解、被使用、被喜爱的核心力量。",
    },
    expertise: {
      en: [
        "UX Design",
        "Interaction Design",
        "Product Innovation",
        "Design Strategy",
        "Innovation Education",
      ],
      zh: [
        "交互设计",
        "用户体验",
        "产品创新",
        "设计策略",
        "创新教育",
      ],
    },
    image:
      "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_guoyu.png",
    category: "lecturer",
  },
  {
    id: 999,
    name: "",
    title: { en: "", zh: "" },
    bio: { en: "", zh: "" },
    expertise: { en: [], zh: [] },
    image:
      "https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "lecturer",
    isInviteCard: true,
  },
];