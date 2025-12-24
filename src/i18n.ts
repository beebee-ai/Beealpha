import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        outcome: "Values",
        course: "Course",
        works: "Showcase",
        teachers: "Mentors",
        faq: "FAQ",
        aboutUs: "About Us",
        cta: "Contact Us"
      },
      hero: {
        badge: "Empower teens to master the future way of working",
        title_start: "Frictionless for kids to",
        title_highlight: "Build Real Apps with AI",
        description: "No coding background needed, no rote memorization. From the first lesson, let AI help complete real tasks, evolving from 'using AI' to 'creating products'.",
        cta_primary: "Join Now",
        cta_secondary: "Learn More"
      },
      outcome: {
        badge: "The Result",
        title: "What Will Your Child Get?",
        items: [
          {
            title: "Transferable Productivity",
            desc: "Master task decomposition, use AI to solve 80% of repetitive work."
          },
          {
            title: "Real MVP Portfolio",
            desc: "Own a running, demonstrable AI application that solves real problems."
          },
          {
            title: "Master Future Work",
            desc: "Not just an AI user, but an AI tamer and developer."
          },
          {
            title: "Future Confidence",
            desc: "Stand at the forefront of technology and build a sense of control."
          }
        ]
      },
      courseMode: {
        badge: "Course Mode",
        title: "Course Mode",
        items: [
          { number: "6 Weeks", desc: "Full Bootcamp" },
          { number: "12 Students", desc: "Small Class" },
          { number: "1 on 1", desc: "Private Coaching" }
        ]
      },
      coursePaths: {
        badge: "Learning Paths",
        title: "Two Paths, Real Results",
        subtitle: "Designed for students with different foundations to create real products in 6 weeks",
        path1: {
          title: "Zero-Base Path",
          subtitle: "For students with no coding background",
          duration: "6 Weeks · ~30 Hours",
          description: "Most kids start with no concept of Prompting. That's okay. BEEBEE AI-Alpha is designed for rapid output from zero.",
          courses: [
            { name: "Alpha Product Course", details: "12 Sessions · 18 Hours · System Learning", desc: "Core product course, from idea to MVP" },
            { name: "Orbiter Coaching", details: "10 Sessions · 10 Hours · 1-on-1", desc: "Exclusive coach guidance to ensure delivery" }
          ],
          outcomes: [
            "Decompose ideas into executable steps",
            "Select AI models and build workflows",
            "Let AI run autonomously",
            "Polish into a showcase MVP"
          ],
          highlight: "No painful coding wall, no frustration. This is frictionless learning."
        },
        path2: {
          title: "Accelerated Path",
          subtitle: "For students with Coding/STEAM background",
          duration: "6 Weeks · 18 Hours",
          description: "For them, BEEBEE AI is a 'Full Accelerator'. They don't need coaching or slow adaptation.",
          courses: [
            { name: "Alpha Product Course", details: "12 Sessions · 18 Hours · Deep Practice", desc: "Dive straight into project making" }
          ],
          outcomes: [
            "Build complex AI tools and apps",
            "Iterate and optimize models autonomously",
            "Advanced workflow design",
            "Breakthrough in real-world challenges"
          ],
          highlight: "These kids often perform amazingly on Demo Day because the course gives them 'real-world challenges' schools can't offer."
        }
      },
      whyWhat: {
        badge: "Why Choose Us",
        title: "Why Choose Us",
        subtitle: "Don't let kids be passive or fearful in the AI era, give them control.",
        items: [
          { title: "Real Product Oriented", desc: "Build a running AI app in 6 weeks. No empty theory, just real products." },
          { title: "Small Class Personalized", desc: "12 students + 1-on-1 coaching. Mentors track every child's work." },
          { title: "Global Online", desc: "Breaking geographic limits. Online-first, accessible anywhere." },
          { title: "Real Toolchain", desc: "Learn on real toolchains, not outdated software or textbook theory." },
          { title: "AI Era Essential", desc: "Schools lag behind AI changes. Kids need systematic AI capability training." },
          { title: "Control Mindset", desc: "Treat AI as a tool, not a threat. Cultivate the ability to tame AI." }
        ]
      },
      coreValues: {
        badge: "Core Values",
        title: "Our Core Values",
        subtitle: "BEEBEE AI-Alpha's Teaching Philosophy",
        items: [
          { title: "Demystify AI", subtitle: "Demystify AI", desc: "Not magic, not hype. Use real models to let kids understand AI logic.", example: "Kids can explain why AI wrote a sentence wrong, not just say 'AI is like that'." },
          { title: "Hands-on First", subtitle: "Hands-on First", desc: "We care about what kids make, not how many points they memorized.", example: "Kids finish with an AI project they trained, not a PPT." },
          { title: "AI Thinking", subtitle: "AI Thinking", desc: "We teach thinking patterns—how to decompose a problem and let AI handle the repetitive parts.", example: "Kids delegate research and drafting to AI, focusing on judgment and creativity." },
          { title: "Confidence Building", subtitle: "Confidence Building", desc: "When kids realize they control AI, they build strong 'future confidence'.", example: "Kids present AI projects in class, knowing they stand at the tech forefront." },
          { title: "Small Cohort + 1-on-1", subtitle: "Small Cohort with 1-on-1", desc: "12 students max. Mentors track every work. Quality over scale.", example: "High-density coaching helps kids build control over AI." },
          { title: "Practical & Future-Oriented", subtitle: "Practical & Future-Oriented", desc: "Curriculum revolves around real applications, no useless theory.", example: "Projects can be used in family or school life, not 'toy projects'." }
        ],
        footer: "These values are not slogans, but real reflections in every lesson, project, and feedback."
      },
      studentWorks: {
        badge: "Showcase",
        title: "Student Work Showcase",
        subtitle: "From 0 to 1, they created real value with AI",
        footer: "These are real projects from real students. Every child presents their work on Demo Day, building strong confidence.",
        works: [
          { title: "Word Snack", role: "Student T, 0 Engineering Exp", desc: "ZERO Genesis Camp Cohort 3" },
          { title: "Vegan Selection", role: "Student Z, 0 Engineering Exp", desc: "ZERO Genesis Camp Cohort 3" },
          { title: "Relab SEO", role: "Student K, No Engineering Exp", desc: "ZERO Genesis Camp Cohort 2" },
          { title: "PropertyAI NZ", role: "Student H, 0 Engineering Exp", desc: "ZERO Genesis Camp Cohort 1" },
          { title: "PROJECT;echo", role: "Student J, 13, Grade 9", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "RowingPro", role: "Student V, 16", desc: "Alpha Odyssey — US CAMP C" },
          { title: "Healthy Eating Assistant", role: "Student Y, 17", desc: "Alpha Odyssey — TN CAMP C" },
          { title: "Life Calendar & Knowledge Box", role: "Student Y, 15, Zero Coding Base", desc: "Alpha Odyssey — TN CAMP C" },
          { title: "AI Golf Performance Analysis", role: "Student P, 14, Grade 9", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "Overflow", role: "Student P, 14, Grade 9", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "Music Learner's Personal Website", role: "Student Y, 17, Grade 12", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "AI Gift Recommendation", role: "Student I, 14, Grade 9", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "Egg Prices NZ", role: "Student T, 13, Grade 9", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "AI College Planning Assistant", role: "Student J, 12, Grade 8", desc: "Alpha Odyssey — NZ CAMP C" }
        ]
      },
      teachers: {
        title: "导师团队",
        subtitle: "我们不是'老师'，而是孩子的 AI 驯化教练和未来能力合伙人",
        tabs: {
          mentors: "项目导师",
          experts: "专业讲师"
        },
        mentors: [
          { name: "Pin Zhou", role: "创业导师 / AI 产品总经理", desc: "连续创业者，BeeBee AI & 超加速学院人，AI 实战经验丰富，跨学科、跨产业、跨年龄……" },
          { name: "Iris Hu", role: "NLP 科学家 / 高效能教练", desc: "北师大教授，国家项目负责人，NLP 领域深耕 40+，三次中科转科学家……" },
          { name: "Vito Liu", role: "RAG 系统工程师 / AI 全栈", desc: "资深 CS+ 教学双学位，主导多个企业级 RAG 与知识库系统开发。" }
        ],
        experts: [
          { name: "Ashlynn Lu", role: "数据科学 / AI 数据工程师", desc: "数据驱动型专家，数据可视化及用户体验优化专家，擅长机器学习建模实战……" },
          { name: "Jennifer Liu", role: "资深 AI 产品 GTM 专家 / 增长", desc: "NYU 毕业，长期深耕产品市场增长管理层职，长江商学院 MBA，具有国际化视野……" },
          { name: "Fangzhong Liu", role: "资深数据科学家", desc: "美国顶尖大学数据科学硕士，优秀 XGBoost/uplift 建模、MMM、RAG……" }
        ]
      },
      faq: {
        title: "FAQ",
        subtitle: "Answers to parents' most concerned questions",
        more: "More questions?",
        contact: "Contact Us",
        items: [
          { q: "Can my child learn without coding basics?", a: "Yes! Designed for zero basis. 'Frictionless learning'. Zero-Base Path available. Finish a real AI app in ~30 hours." },
          { q: "Is it online or offline?", a: "Mainly online interactive. Breaks geographic limits. 12-student small class + 1-on-1 coaching." },
          { q: "What can they achieve in 6 weeks?", a: "1) Independent AI app; 2) AI workflow design; 3) Model selection; 4) Problem solving with AI; 5) Demo Day presentation." },
          { q: "Difference from other coding/AI courses?", a: "Focus on 'Making' not just 'Learning'. Start projects from day 1. Real tools, real problems. AI Thinking over tool operation." },
          { q: "How much is the tuition?", a: "1) Zero-Base Path: 6,000 NZD (12 product sessions + 10 coaching sessions); 2) Accelerated Path: 4,200 NZD (12 product sessions)." },
          { q: "What age is suitable?", a: "Upper primary to high school. We value motivation and interest over age. Curiosity and desire to create matter most." },
          { q: "How is the schedule arranged?", a: "6 weeks, twice a week. 1.5h product class, 1h coaching. Arranged based on time zones and availability." },
          { q: "What if my child misses a class?", a: "Recordings available. Coaching sessions can be rescheduled. We aim for completion and good experience." },
          { q: "What do they get after camp?", a: "1) AI App Portfolio; 2) Internship Certificate & Reference Letter; 3) Demo Day opportunity; 4) Confidence and Control over AI." }
        ]
      },
      cta: {
        title: "Start Your Child's AI Journey",
        subtitle: "Limited spots, 12 students per cohort. Enroll now.",
        form: {
          title: "Inquire Now",
          name: "Parent Name",
          email: "Email",
          phone: "Phone",
          message: "Message (Optional)",
          submit: "Submit Inquiry"
        },
        contact: {
          title: "Other Ways to Contact",
          project: "Program Inquiry",
          direct: "Direct Contact"
        }
      },
      footer: {
        brand: "Bee Alpha",
        tagline: "Empowering the next generation to build real apps with AI frictionlessly.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        location: "New Zealand & Global Online",
        rights: "All rights reserved.",
        empower: "Empowering the next generation with AI"
      }
    }
  },
  zh: {
    translation: {
      navbar: {
        outcome: "课程价值",
        course: "课程介绍",
        works: "学员作品",
        teachers: "导师团队",
        faq: "常见问题",
        aboutUs: "关于我们",
        cta: "立即咨询"
      },
      hero: {
        badge: "让青少年掌握未来的工作方式",
        title_start: "让孩子无摩擦地",
        title_highlight: "用 AI 做出真实应用",
        description: "不用编程基础，不靠死记硬背。从第一节课开始就能让 AI 帮他完成现实任务，从\"会用 AI\"进化成\"能做出作品\"。",
        cta_primary: "立即报名",
        cta_secondary: "了解更多"
      },
      outcome: {
        badge: "The Result",
        title: "孩子能得到什么？",
        items: [
          {
            title: "可迁移的生产力",
            desc: "掌握任务拆解，用 AI 解决 80% 的重复性工作。"
          },
          {
            title: "真实的 MVP 作品",
            desc: "拥有一个可运行、可展示、能解决实际问题的 AI 应用。"
          },
          {
            title: "掌握未来工作方式",
            desc: "不再是 AI 的使用者，而是 AI 的驯化者与开发者。"
          },
          {
            title: "极强的未来自信",
            desc: "站在科技最前沿，建立对新技术的掌控感。"
          }
        ]
      },
      courseMode: {
        badge: "Course Mode",
        title: "课程模式",
        items: [
          { number: "6 周", desc: "完整训练营" },
          { number: "12 人", desc: "小班教学" },
          { number: "1 对 1", desc: "专属陪练" }
        ]
      },
      coursePaths: {
        badge: "Learning Paths",
        title: "两条路径，都能产出真实作品",
        subtitle: "我们专门设计了两条路径，让不同基础的孩子都能在 6 周内做出能拿得出手的产品",
        path1: {
          title: "零基础路径",
          subtitle: "适合没有编程基础的学生",
          duration: "6 周 · 约 30 小时",
          description: "多数孩子刚来时连 Prompt 都没概念，这没关系。BEEBEE AI-Alpha 的课程就是为了让\"零基础\"也能快速产出。",
          courses: [
            { name: "Alpha 远航产品课", details: "12 次课 · 18 小时 · 系统学习", desc: "核心产品课程，从想法到 MVP" },
            { name: "Orbiter 陪练课", details: "10 次课 · 10 小时 · 1对1 辅导", desc: "专属教练实时指导，确保落地" }
          ],
          outcomes: [
            "把一个想法拆成可执行步骤",
            "选择合适 AI 模型并搭建工作流",
            "让 AI 自己跑起来",
            "打磨成可展示的 MVP（最小可用产品）"
          ],
          highlight: "没有痛苦的编程墙，没有挫败感，这就是 frictionless learning（无摩擦学习）。"
        },
        path2: {
          title: "加速路径",
          subtitle: "适合有编程/STEAM基础的学生",
          duration: "6 周 · 18 小时",
          description: "对他们来说，BEEBEE AI 是\"全力加速器\"。他们不需要陪练课，也不需要慢慢适应。",
          courses: [
            { name: "Alpha 远航产品课", details: "12 次课 · 18 小时 · 深度实践", desc: "上来就能进入项目制作" }
          ],
          outcomes: [
            "做出更复杂的 AI 工具和应用",
            "自主迭代、优化模型和流程",
            "高级工作流设计",
            "在真实世界挑战中突破"
          ],
          highlight: "这些孩子往往在 Demo Day 上表现惊人，因为课程给了他们在学校无法获得的\"真实世界挑战\"。"
        }
      },
      whyWhat: {
        badge: "Why Choose Us",
        title: "为什么选择我们",
        subtitle: "让孩子在 AI 时代不被动、不恐惧，而是有控制权",
        items: [
          { title: "真实产品导向", desc: "6 周做出一个真实、可运行的 AI 应用，不教空理论，只做实战产品" },
          { title: "小班制个性化", desc: "12 人小班 + 1对1 陪练，导师能直接盯每个孩子的作品，确保都被看见" },
          { title: "全球化在线教学", desc: "打破地域限制，面向全球华人家庭，在线为主，随时随地学习" },
          { title: "真实工具链", desc: "在真实工具链上学习，而不是过时的软件环境和课本理论" },
          { title: "AI 时代刚需", desc: "学校教育跟不上 AI 变革，孩子需要系统化的 AI 实战能力培养" },
          { title: "掌控权思维", desc: "让孩子把 AI 当工具而非威胁，培养驯化 AI 的能力和思维模式" }
        ]
      },
      coreValues: {
        badge: "Core Values",
        title: "我们的核心价值",
        subtitle: "BEEBEE AI-Alpha 的教学理念与方法论",
        items: [
          { title: "反神秘化", subtitle: "Demystify AI", desc: "不把 AI 当玄学，不吹。用真实模型让孩子理解 AI 的逻辑。", example: "孩子能解释 AI 为什么写错一句话，而不是只是说\"AI 就是这样\"。" },
          { title: "用得出来", subtitle: "Hands-on First", desc: "我们更关心孩子做出来什么，而不是学了多少知识点。", example: "课程结束孩子能做一个自己训练的 AI 项目，而不是一份 PPT。" },
          { title: "AI 思维", subtitle: "AI Thinking", desc: "我们不是教工具，而是教思维模式——如何把一个问题分解，让 AI 接手重复性部分。", example: "孩子懂得把论文查找、数据整理、文本生成交给 AI，而自己专注判断与创意。" },
          { title: "自信心建立", subtitle: "Confidence Building", desc: "当孩子意识到 AI 被他控制，而不是控制他，会形成很强的\"未来自信\"。", example: "孩子能在班级里展示 AI 项目，知道自己站在科技发展的前排。" },
          { title: "小班互动 + 一对一陪练", subtitle: "Small Cohort with 1-on-1", desc: "12 人小班，导师能直接盯每个孩子的作品。这是为了提高产出质量，不追求规模。", example: "这种高密度陪练，让孩子逐渐建立起对 AI 的掌控感。" },
          { title: "面向现实", subtitle: "Practical & Future-Oriented", desc: "课程完全围绕真实应用，不做无用的理论堆砌。", example: "孩子做的项目能在家长或学校生活里直接使用，而不是\"玩具项目\"。" }
        ],
        footer: "这些价值不是口号，而是每节课、每个项目、每次反馈中的真实体现。"
      },
      studentWorks: {
        badge: "Showcase",
        title: "往期学员作品展示",
        subtitle: "从 0 到 1，他们用 AI 创造了真实的价值",
        footer: "这些都是真实学员在训练营中完成的项目。每个孩子在结营 Demo Day 上展示自己的作品，建立起强大的自信心。",
        works: [
          { title: "字在午餐", role: "T同学，0工程经验", desc: "ZERO启航营（Genesis）三期" },
          { title: "纯素甄选", role: "Z同学，0工程经验", desc: "ZERO启航营（Genesis）三期" },
          { title: "内容集群和 AI 工具", role: "K同学，无工程经验", desc: "ZERO启航营（Genesis）二期" },
          { title: "新西兰首个AI驱动房产交易平台", role: "H同学，0工程经验", desc: "ZERO启航营（Genesis）一期" },
          { title: "PROJECT;echo 个人时间管理工具", role: "J同学，13岁，9年级", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "RowingPro", role: "V同学，16岁", desc: "Alpha Odyssey — US CAMP C" },
          { title: "智能健康饮食助手", role: "Y同学，17岁", desc: "Alpha Odyssey — TN CAMP C" },
          { title: "生活日历与知识盒", role: "Y同学，15岁，0代码基础", desc: "Alpha Odyssey — TN CAMP C" },
          { title: "AI高尔夫成绩分析", role: "P同学，14岁，9年级", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "一个帮助年轻人实现梦想的众筹网站", role: "P同学，14岁，9年级", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "音乐生的自我介绍网站", role: "Y同学，17岁，12年级", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "AI自动礼物推荐", role: "I同学，14岁，9年级", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "Egg Prices NZ 鸡蛋比价网站", role: "T同学，13岁，9年级", desc: "Alpha Odyssey — NZ CAMP C" },
          { title: "AI升学规划助手", role: "J同学，12岁，8年级", desc: "Alpha Odyssey — NZ CAMP C" }
        ]
      },
      teachers: {
        title: "导师团队",
        subtitle: "我们不是'老师'，而是孩子的 AI 驯化教练和未来能力合伙人",
        tabs: {
          mentors: "项目导师",
          experts: "专业讲师"
        },
        mentors: [
          { name: "Pin Zhou", role: "创业导师 / AI 产品总经理", desc: "连续创业者，BeeBee AI & 超加速学院人，AI 实战经验丰富，跨学科、跨产业、跨年龄……" },
          { name: "Iris Hu", role: "NLP 科学家 / 高效能教练", desc: "北师大教授，国家项目负责人，NLP 领域深耕 40+，三次中科转科学家……" },
          { name: "Vito Liu", role: "RAG 系统工程师 / AI 全栈", desc: "资深 CS+ 教学双学位，主导多个企业级 RAG 与知识库系统开发。" }
        ],
        experts: [
          { name: "Ashlynn Lu", role: "数据科学 / AI 数据工程师", desc: "数据驱动型专家，数据可视化及用户体验优化专家，擅长机器学习建模实战……" },
          { name: "Jennifer Liu", role: "资深 AI 产品 GTM 专家 / 增长", desc: "NYU 毕业，长期深耕产品市场增长管理层职，长江商学院 MBA，具有国际化视野……" },
          { name: "Fangzhong Liu", role: "资深数据科学家", desc: "美国顶尖大学数据科学硕士，优秀 XGBoost/uplift 建模、MMM、RAG……" }
        ]
      },
      faq: {
        title: "常见问题",
        subtitle: "家长最关心的问题，我们都为您解答",
        more: "还有其他问题？",
        contact: "立即咨询我们",
        items: [
          { q: "孩子没有任何编程基础，能学会吗？", a: "完全可以！我们的课程专门为零基础学生设计。BEEBEE AI-Alpha 采用「无摩擦学习」方法，不需要编程基础。我们提供零基础路径（Alpha 产品课 + Orbiter 陪练课），让孩子从第一节课就能做出成果。约 30 小时的学习后，孩子就能完成一个真实的 AI 应用。" },
          { q: "课程是线上还是线下？", a: "课程以线上为主，采用在线互动教学。这样可以打破地域限制，让全球华人家庭的孩子都能参与。12 人小班制 + 1对1 陪练，保证每个孩子都能得到充分的关注和指导。" },
          { q: "6 周能学到什么程度？", a: "6 周训练营结束后，孩子将能够：1) 独立完成一个真实可运行的 AI 应用；2) 掌握 AI 工作流的设计和搭建；3) 理解如何选择和使用不同的 AI 模型；4) 具备把问题拆解并用 AI 解决的思维能力；5) 在结营 Demo Day 上展示自己的作品。这不是理论学习，而是实实在在的产品开发能力。" },
          { q: "和其他编程/AI 课程有什么不同？", a: "最大的不同是我们专注于\"做出来\"而不是\"学知识点\"。传统编程课往往从语法开始，很多孩子学了半年还做不出能用的东西。BEEBEE AI-Alpha 从第一节课就开始做项目，用真实的 AI 工具和模型，解决真实的问题。我们教的不是工具操作，而是 AI 思维和产品能力。" },
          { q: "课程费用是多少？", a: "我们提供两种路径：1) 零基础路径（Alpha 产品课 + Orbiter 陪练课）：6,000 NZD，包含 12 次产品课（18 小时）+ 10 次陪练课（10 小时），总计约 30 小时；2) 加速路径（仅 Alpha 产品课）：4,200 NZD，包含 12 次产品课（18 小时），适合已有编程或 STEAM 基础的学生。" },
          { q: "什么年龄段的孩子适合参加？", a: "小学高年级到高中阶段的学生都适合。我们更看重的是孩子的学习动力和对 AI/科技的兴趣，而不仅是年龄。如果孩子对技术好奇、喜欢动手创造、想要掌握未来技能，就很适合参加我们的训练营。" },
          { q: "上课时间如何安排？", a: "课程为期 6 周，每周 2 次课。产品课每次 1.5 小时，陪练课每次 1 小时。我们会根据学员的时区和时间安排最合适的上课时间。具体时间在开课前会和家长确认，确保不影响孩子的正常学习。" },
          { q: "如果孩子中途有事缺课怎么办？", a: "我们提供课程录像回放，如果孩子因故缺课可以观看录像补课。对于陪练课，我们会根据情况协调补课时间。我们的目标是确保每个孩子都能完成学习并做出作品，所以会尽力配合家长和学生的实际情况。如果中途有事真的坚持不了，记得和我们沟通。有合理原因会退剩余学费，我们希望每个人都能有好体验！" },
          { q: "结营后孩子能获得什么？", a: "除了一个完整的 AI 应用作品，孩子还将获得：1) BEEBEE AI-Alpha 实习证明、推荐信；2) Demo Day 项目展示机会；3) 优秀项目还有机会拿到投资；4) 最重要的是，建立起对 AI 的掌控感和未来自信心。" }
        ]
      },
      cta: {
        title: "开始孩子的 AI 未来之旅",
        subtitle: "名额有限，每期仅招收 12 人小班。立即报名，让孩子领先一步。",
        form: {
          title: "立即报名咨询",
          name: "家长姓名",
          email: "联系邮箱",
          phone: "联系电话",
          message: "您的问题或需求（选填）",
          submit: "提交咨询"
        },
        contact: {
          title: "其他联系方式",
          project: "项目咨询",
          direct: "直接联系"
        }
      },
      footer: {
        brand: "Bee Alpha",
        tagline: "让青少年无摩擦地用 AI 做出真实应用，掌握未来的工作方式。",
        quickLinks: "快速链接",
        contactUs: "联系我们",
        location: "新西兰及全球在线",
        rights: "All rights reserved.",
        empower: "Empowering the next generation with AI"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    load: 'languageOnly', // 只使用语言代码，忽略地区代码（如 zh-CN -> zh）
    detection: {
      // 检测顺序：localStorage > 浏览器语言
      order: ['localStorage', 'navigator'],
      // localStorage 的 key 名称
      lookupLocalStorage: 'i18nextLng',
      // 缓存用户选择的语言
      caches: ['localStorage'],
      // 排除某些语言检测方式
      excludeCacheFor: ['cimode'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;