import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        outcome: "Course Value",
        course: "Course",
        works: "Showcase",
        teachers: "Mentors",
        faq: "FAQ",
        aboutUs: "About Us",
        cta: "Contact Us",
      },
      hero: {
        badge:
          "Empower teens to master the future way of working",
        title_start: "Frictionless for kids to",
        title_highlight: "Build Real Apps with AI",
        description:
          "No coding background needed, no rote memorization. From the first lesson, let AI help you complete real tasks, evolving from 'using AI' to 'creating products'.",
        cta_primary: "Join Now",
        cta_secondary: "Learn More",
      },
      outcome: {
        badge: "The Result",
        title: "What Will Teens Get?",
        items: [
          {
            title: "Transferable Productivity",
            desc: "Master task decomposition, use AI to solve 80% of repetitive work.",
          },
          {
            title: "Real MVP Portfolio",
            desc: "Own a running, demonstrable AI application that solves real problems.",
          },
          {
            title: "Master Future Work",
            desc: "Not just an AI user, but an AI tamer and developer.",
          },
          {
            title: "Future Confidence",
            desc: "Stand at the forefront of technology and build a sense of control.",
          },
        ],
      },
      courseMode: {
        badge: "Course Mode",
        title: "Course Mode",
        items: [
          { number: "6 Weeks", desc: "Full Bootcamp" },
          { number: "12 Students", desc: "Small Class" },
          { number: "1 on 1", desc: "Private Coaching" },
        ],
      },
      coursePaths: {
        badge: "Learning Paths",
        title: "Two Learning Camps",
        subtitle:
          "Choose the right path based on your foundation and goals",
        labels: {
          targetAudience: "Target Audience:",
          classSize: "Class Size:",
          selection: "Selection:",
        },
        path1: {
          title: "Alpha Genesis Camp",
          subtitle: "AI Core Cognition & Engineering Practice",
          duration: "3 Weeks · ~15 Hours",
          targetAudience:
            "Ages 12-18, interested in technology, aspiring to create independent products (no coding background required)",
          description:
            "Experience the complete journey from AI 'magic' to 'engineering' through hands-on practice. From inspiration validation with Google AI Studio to full-stack development with Cursor. No boring theory, only cool products. Demystify AI for teens, build interest in taming AI to serve them, and gain real engineering confidence.",
          scheduleTitle: "Course Schedule",
          schedule: [
            "Main Classes: 2 sessions/week, 6 sessions total, 1.5h each (includes hands-on practice)",
            "Q&A Sessions: Mid-week session, 3 sessions total, 1h each, ensure smooth setup and bug-free code",
            "Demo Day: Separate from 6 main classes, team-based online product demo, ~2 hours",
          ],
          classSize:
            "12-person premium class, 4-person groups led by camp leader",
          curriculumTitle: "Course Checklist",
          curriculum: [
            "Google AI Studio Discovery",
            "CRAFT Questioning Framework + Vibe Coding Intro",
            "JSK Product Design Model Practice",
            "API Enhancement Plugin Connection",
            "Online Independent Domain Deployment",
            "Product Hunt Launch · Closed-Loop Practice",
            "Demo Day · Results Presentation & Defense",
          ],
        },
        path2: {
          title: "Alpha Odyssey Camp",
          subtitle:
            "Advanced Independent Product Creation Course",
          duration: "6 Weeks · ~27 Hours",
          targetAudience:
            "Ages 12-18, with coding/engineering experience, seeking college portfolio or high-intensity product proof",
          description:
            "Develop your own product with AI and bring it to market, realizing personal interests. Industrial-standard project suitable for college applications, career transition, or startup. Mentors and founders can endorse successful graduates.",
          scheduleTitle: "Course Schedule",
          schedule: [
            "Main Course: 2 sessions/week, 12 sessions total, 1.5h each",
            "Q&A + Homework Review: Mid-week session, 6 sessions total, 2h each, ensure smooth setup and bug-free code",
            "Demo Day: Separate from main classes, team-based online product demo, ~3 hours, chance for CVC/BEEBEE seed investment",
          ],
          classSize: "6-12 person small class",
          selection: "Online face-to-face interview selection",
          curriculumTitle: "Course Checklist",
          curriculum: [
            "Master Cursor AI-assisted full-stack development",
            "CRAFT questioning framework for engineering development",
            "JSK product design model in practice",
            "Apply React/Vue frontend frameworks & responsive design",
            "Learn GitHub+Cloudflare+Firebase full-stack deployment",
            "Stripe global multi-currency API integration for payment loop",
            "RAG architecture & LLM API integration",
            "AI-era web scraping techniques in practice",
            "Product Hunt launch guide",
            "Complete high-intensity team Demo Day, chance for CVC/BEEBEE seed investment",
          ],
          highlight:
            '本期课程以"产品商业闭环"为核心目标，通过四个阶段完成从 MVP（最小可行性产品）到 MSP（最小可销售产品）的跨越',
        },
      },
      whyWhat: {
        badge: "Why Choose Us",
        title: "Why Choose Us",
        subtitle:
          "Don't let teens be passive or fearful in the AI era, give them control.",
        items: [
          {
            title: "Real Product Oriented",
            desc: "Build a running AI app in 6 weeks. No empty theory, just real products.",
          },
          {
            title: "Small Class Personalized",
            desc: "12 students + 1-on-1 coaching. Mentors track everyone's work.",
          },
          {
            title: "Global Online",
            desc: "Breaking geographic limits. Online-first, accessible anywhere.",
          },
          {
            title: "Real Toolchain",
            desc: "Learn on real toolchains, not outdated software or textbook theory.",
          },
          {
            title: "AI Era Essential",
            desc: "Schools lag behind AI changes. Teens need systematic AI capability training.",
          },
          {
            title: "Control Mindset",
            desc: "Treat AI as a tool, not a threat. Cultivate the ability to tame AI.",
          },
        ],
      },
      coreValues: {
        badge: "Core Values",
        title: "Our Core Values",
        subtitle: "BEEBEE AI-Alpha's Teaching Philosophy",
        items: [
          {
            title: "Demystify AI",
            subtitle: "Demystify AI",
            desc: "Not magic. Use real models to let you understand AI logic.",
            example:
              "Can explain why AI wrote a sentence wrong, not just say 'AI is like that'.",
          },
          {
            title: "Hands-on First",
            subtitle: "Hands-on First",
            desc: "We care about what you make, not how many points they memorized.",
            example:
              "Finish with an AI project they trained, not a PPT.",
          },
          {
            title: "AI Thinking",
            subtitle: "AI Thinking",
            desc: "We teach thinking patterns—how to decompose a problem and let AI handle the repetitive parts.",
            example:
              "Delegate research and drafting to AI, focusing on judgment and creativity.",
          },
          {
            title: "Confidence Building",
            subtitle: "Confidence Building",
            desc: "When teens realize they control AI, they build strong 'future confidence'.",
            example:
              "Present AI projects in class, knowing they stand at the tech forefront.",
          },
          {
            title: "Small Cohort + 1-on-1",
            subtitle: "Small Cohort with 1-on-1",
            desc: "12 students max. Mentors track everyone's work. Quality over scale.",
            example:
              "High-density coaching helps teens build control over AI.",
          },
          {
            title: "Practical & Future-Oriented",
            subtitle: "Practical & Future-Oriented",
            desc: "Curriculum revolves around real applications, no useless theory.",
            example:
              "Projects can be used in family or school life, not 'toy projects'.",
          },
        ],
        footer:
          "These values are not slogans, but real reflections in every lesson, project, and feedback.",
      },
      studentWorks: {
        badge: "Showcase",
        title: "Student Work Showcase",
        subtitle:
          "From 0 to 1, Students created real value with AI",
        footer:
          "These are real projects from real students. Every child presents their work on Demo Day, building strong confidence.",
        works: [
          {
            title: "Infinite Challenge Generator",
            role: "Student N, 15, New Zealand, Zero Coding Base",
            desc: "ALPHA Genesis Camp Cohort 1",
          },
          {
            title: "VoiceAI",
            role: "3-Student Team, NZ, Ages 12-22",
            desc: "ALPHA Genesis Camp Cohort 1",
          },
          {
            title: "Lumina Academy",
            role: "Student W (New Zealand, 12, Zero Coding Base)",
            desc: "ALPHA Genesis Camp Cohort 1",
          },
          {
            title: "Word Snack",
            role: "Student T, 0 Engineering Exp",
            desc: "ZERO Camp Cohort 3",
          },
          {
            title: "Vegan Selection",
            role: "Student Z, 0 Engineering Exp",
            desc: "ZERO Camp Cohort 3",
          },
          {
            title: "RowingPro",
            role: "Student V, 16",
            desc: "ALPHA Odyssey — US CAMP C",
          },
          {
            title: "PropertyAI NZ",
            role: "Student H, 0 Engineering Exp",
            desc: "ZERO Camp Cohort 1",
          },
          {
            title: "Life Calendar & Knowledge Box",
            role: "Student Y, 15, Zero Coding Base",
            desc: "ALPHA Odyssey — TN CAMP C",
          },
          {
            title: "AI Golf Performance Analysis",
            role: "Student P, 14, Grade 9",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "Overflow",
            role: "Student P, 14, Grade 9",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "Music Learner's Personal Website",
            role: "Student Y, 17, Grade 12",
            desc: "Alpha Odyssey — NZ CAMP C",
          },
          {
            title: "AI Gift Recommendation",
            role: "Student I, 14, Grade 9",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "Egg Prices NZ",
            role: "Student T, 13, Grade 9",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "AI College Planning Assistant",
            role: "Student J, 12, Grade 8",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "Relab SEO",
            role: "Student K, No Engineering Exp",
            desc: "ZERO Camp Cohort 2",
          },
          {
            title: "PROJECT;echo",
            role: "Student J, 13, Grade 9",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "Healthy Eating Assistant",
            role: "Student Y, 17",
            desc: "ALPHA Odyssey — TN CAMP C",
          },
        ],
      },
      teachers: {
        title: "Mentor Team",
        subtitle:
          "We're not just 'teachers'—we're your AI coaching partners and future capability allies",
        tabs: {
          mentors: "Project Mentors",
          experts: "Expert Instructors",
        },
        mentors: [
          {
            name: "Pin Zhou",
            role: "Entrepreneurship Mentor / AI Product GM",
            desc: "Serial entrepreneur, BeeBee AI & HyperAccelerator. Rich AI practice experience across disciplines, industries, and ages...",
          },
          {
            name: "Iris Hu",
            role: "NLP Scientist / High Performance Coach",
            desc: "Professor at Beijing Normal University, National Project Lead, 40+ years in NLP, 3-time scientist...",
          },
          {
            name: "Vito Liu",
            role: "RAG Systems Engineer / AI Full-Stack",
            desc: "Dual degree in CS & Education, leading multiple enterprise RAG and knowledge base system developments.",
          },
        ],
        experts: [
          {
            name: "Ashlynn Lu",
            role: "Data Science / AI Data Engineer",
            desc: "Data-driven expert, data visualization and UX optimization specialist, skilled in ML modeling...",
          },
          {
            name: "Jennifer Liu",
            role: "Senior AI Product GTM Expert / Growth",
            desc: "NYU graduate, deep product market growth management experience, Cheung Kong MBA, global perspective...",
          },
          {
            name: "Fangzhong Liu",
            role: "Senior Data Scientist",
            desc: "Top US university data science master, excellent XGBoost/uplift modeling, MMM, RAG...",
          },
        ],
      },
      faq: {
        title: "FAQ",
        subtitle:
          "Answers to students' most concerned questions",
        more: "More questions?",
        contact: "Contact Us",
        items: [
          {
            q: "Can I learn without any coding background?",
            a: "Absolutely! Alpha Genesis Camp is designed for zero-foundation students. BEEBEE AI-Alpha uses a 'frictionless learning' method that doesn't require coding background. In Genesis Camp, students can create real outputs from the first lesson. After about 15 hours of learning, students can complete a real AI application. For Odyssey Camp, we recommend some coding or engineering experience.",
          },
          {
            q: "Is the course online or offline?",
            a: "Courses are primarily online with interactive teaching. This breaks geographic barriers and allows teens from Chinese families worldwide to participate. Genesis Camp has 12-student small classes with 4-person groups; Odyssey Camp has 6-12 person small classes. We ensure everyone gets sufficient attention and guidance.",
          },
          {
            q: "What can achieve after 3 weeks (Genesis) or 6 weeks (Odyssey)?",
            a: "Genesis Camp (3 weeks): Student will be able to: \n1) Complete a real runnable AI application independently; \n2) Understand AI workflow design basics; \n3) Build interest in taming AI to serve them; \n4) Present their work on Demo Day. \n\nOdyssey Camp (6 weeks): In addition to the above, Student will: \n1) Master AI-assisted full-stack development; \n2) Complete payment loop integration; \n3) Launch on Product Hunt; \n4) Have a chance for seed investment; \n5) Get industrial-standard project proof suitable for college applications.",
          },
          {
            q: "How is this different from other coding/AI courses?",
            a: 'The biggest difference is we focus on "making things" rather than "learning knowledge points." Traditional coding courses often start with syntax, and many students still can\'t make useful things after half a year. BEEBEE AI-Alpha starts with real projects from day one, using real AI tools and models to solve real problems. We don\'t just teach tool operation, but AI thinking and product capability.',
          },
          {
            q: "What age range is suitable?",
            a: "Genesis Camp: Ages 12-18, interested in technology, aspiring to create independent products (no coding background required). \n\nOdyssey Camp: Ages 12-18, with coding/engineering experience, seeking college portfolio or high-intensity product proof. \n\nWe value interest in AI/tech over just age. If you are curious about technology, likes hands-on creation, and wants to master future skills, they're a great fit.",
          },
          {
            q: "How is the class schedule arranged?",
            a: "Genesis Camp: 3 weeks, 2 main sessions per week (1.5h each) + 1 mid-week Q&A session (1h). \n\nOdyssey Camp: 6 weeks, 2 main sessions per week (1.5h each) + 1 mid-week Q&A/homework review (2h). \n\nWe arrange the most suitable class times based on students' time zones. Specific times will be confirmed with parents before the course starts to ensure it doesn't affect the student's regular studies.",
          },
          {
            q: "What if I needs to miss a class?",
            a: "We provide course recordings. If you misses class for a reason, you can watch the recording to catch up. For Q&A sessions, we'll coordinate makeup times based on circumstances. Our goal is to ensure every student completes their learning and creates their work, so we'll do our best to accommodate parents and students' actual situations. If something really comes up and you can't continue, please communicate with us. We'll refund remaining tuition for reasonable causes—we want everyone to have a good experience!",
          },
          {
            q: "What will get after the camp?",
            a: "In addition to a complete AI application portfolio, students will receive: \n1) BEEBEE AI-Alpha internship certificate and recommendation letter; \n2) Demo Day project presentation opportunity; \n3) Outstanding Odyssey projects may receive seed investment; \n4) Most importantly, build a sense of control over AI and future confidence.",
          },
        ],
      },
      cta: {
        title: "AI is here. The future looks bright",
        subtitle:
          "Limited spots, small classes. Enroll now and stay ahead in the AI era.",
        form: {
          title: "Inquire Now",
          name: "Parent Name",
          email: "Email",
          phone: "Phone",
          message: "Your Questions or Needs (Optional)",
          submit: "Submit Inquiry",
        },
        contact: {
          title: "Other Contact Methods",
          project: "Program Inquiry",
          direct: "Direct Contact",
        },
      },
      footer: {
        brand: "BEE ALPHA",
        tagline:
          "Build real apps with AI and master the future way of working.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        locationZh:
          "中国四川省成都市高新区成都高新孵化园 1 号楼 A 座",
        locationNz:
          "B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand",
        rights: "All rights reserved.",
        empower: "Empowering the next generation with AI",
      },
    },
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
        cta: "立即咨询",
      },
      hero: {
        badge: "让青少年掌握未来的工作方式",
        title_start: "让孩子无摩擦地",
        title_highlight: "用 AI 做出真实应用",
        description:
          '不用编程基础，不靠死记硬背。从第一节课开始就能让 AI 帮您完成真实任务，从"会用 AI"进化成"能做出作品"。',
        cta_primary: "立即报名",
        cta_secondary: "了解更多",
      },
      outcome: {
        badge: "The Result",
        title: "青少年能得到什么？",
        items: [
          {
            title: "可迁移的生产力",
            desc: "掌握任务拆解，用 AI 解决 80% 的重复性工作。",
          },
          {
            title: "真实的 MVP 作品",
            desc: "拥有一个可运行、可展示、能解决实际问题的 AI 应用。",
          },
          {
            title: "掌握未来工作方式",
            desc: "不再是 AI 的使用者，而是 AI 的驯化者与开发者。",
          },
          {
            title: "极强的未来自信",
            desc: "站在科技最前沿，建立对新技术的掌控感。",
          },
        ],
      },
      courseMode: {
        badge: "Course Mode",
        title: "课程模式",
        items: [
          { number: "6 周", desc: "完整训练营" },
          { number: "12 人", desc: "小班教学" },
          { number: "1 对 1", desc: "专属陪练" },
        ],
      },
      coursePaths: {
        badge: "Learning Paths",
        title: "两大训练营",
        subtitle: "根据基础和目标，选择适合的营地路径",
        labels: {
          targetAudience: "目标学员：",
          classSize: "班级规模：",
          selection: "选拔方式：",
        },
        path1: {
          title: "Alpha 启航营 (Genesis)",
          subtitle: "AI 核心认知与工程实践",
          duration: "3 周 · 约 15 小时",
          targetAudience:
            "12-18 岁，对科技感兴趣，希望拥有自己独立产品的青少年（无需编程基础）",
          description:
            '通过亲手实践 AI 的"魔法"到"工程"的全过程，从 Google AI Studio 的灵感验证到 Cursor 的全栈开发。不讲枯燥理论，只做酷炫产品。让青少年对 AI 祛魅，建立驯化 AI 为自己服务的兴趣，并拥有真正的工程自信。',
          scheduleTitle: "课程设置",
          schedule: [
            "主课安排：每周 2 次线上课，共 6 次，每次 1.5 小时授课（含实操演练）",
            "答疑课：每周中 1 次线上答疑课，共 3 次，每次 1 小时，确保环境跑通、代码无 Bug",
            "Demo Day：6次主课之外单独举行，以小组为单位进行团队线上产品演示，约 2 小时",
          ],
          classSize:
            "12 人精品小班制，4人1组，由营长带领学习团队配合",
          curriculumTitle: "课程清单",
          curriculum: [
            "Google AI Studio 探秘",
            "CRAFT 提问框架 + Vibe Coding 初体验",
            "JSK 产品设计模型实操",
            "API 增强外挂连接",
            "线上独立域名部署",
            "Product Hunt 发布 · 闭环实战",
            "Demo Day · 成果路演与答辩",
          ],
        },
        path2: {
          title: "ALPHA 远航营 (Odyssey)",
          subtitle: "独立产品创造高阶课",
          duration: "6 周 · 约 27 小时",
          targetAudience:
            "12-18 岁，有一定编程或工程经验，获得明确升学或做出较高强度产品证明能力",
          description:
            "用AI开发出自己的产品并市场化，实现个人兴趣落地。此项目完全以工业化标准设立，完成后可用于升学作品，职业转型，创业起点。导师和创始人均可为成功结营的学生背书。",
          scheduleTitle: "课程设置",
          schedule: [
            "主课安排：每周 2 次线上课，共 12 次，每次 1.5 小时互动课程",
            "答疑课：每周中 1 次线上答疑+作业检查，共 6 次，每次 2 小时，确保环境跑通、代码无 Bug",
            "Demo Day：主课之外单独举行，以小组为单位进行团队线上产品演示，约 3 小时，有机会获得CVC/BEEBEE 种子投资",
          ],
          classSize: "6-12人小班制",
          selection: "线上面对面答题选拔",
          curriculumTitle: "课程清单",
          curriculum: [
            "掌握Cursor AI辅助全栈开发",
            "CRAFT 提问框架用于工程开发",
            "JSK 产品设计模型实操",
            "运用React/Vue前端框架与响应式设计",
            "学会GitHub+Cloudflare+Firebase全链路",
            "Stripe全球多货币API接入完成收费闭环",
            "RAG架构及大模型API能力接入",
            "AI时代的爬虫技术实战",
            "Product Hunt登顶指南",
            "完成高强度团队Demo Day路演，有机会获得CVC/BEEBEE 种子投资",
          ],
          highlight:
            '本期课程以"产品商业闭环"为核心目标，通过四个阶段完成从 MVP（最小可行性产品）到 MSP（最小可销售产品）的跨越',
        },
      },
      whyWhat: {
        badge: "Why Choose Us",
        title: "为什么选择我们",
        subtitle:
          "让青少年在 AI 时代不被动、不恐惧，而是有控制权",
        items: [
          {
            title: "真实产品导向",
            desc: "6 周做出一个真实、可运行的 AI 应用，不教空理论，只做实战产品",
          },
          {
            title: "小班制个性化",
            desc: "12 人小班 + 1对1 陪练，导师能直接盯每个人的作品，确保都被看见",
          },
          {
            title: "全球化在线教学",
            desc: "打破地域限制，面向全球华人家庭，在线为主，随时随地学习",
          },
          {
            title: "真实工具链",
            desc: "在真实工具链上学习，而不是过时的软件环境和课本理论",
          },
          {
            title: "AI 时代刚需",
            desc: "学校教育跟不上 AI 变革，青少年需要系统化的 AI 实战能力培养",
          },
          {
            title: "掌控权思维",
            desc: "让青少年把 AI 当工具而非威胁，培养驯化 AI 的能力和思维模式",
          },
        ],
      },
      coreValues: {
        badge: "Core Values",
        title: "我们的核心价值",
        subtitle: "BEEBEE AI-Alpha 的教学理念与方法论",
        items: [
          {
            title: "反神秘化",
            subtitle: "Demystify AI",
            desc: "不把 AI 当玄学，用真实模型让您理解 AI 的逻辑。",
            example:
              '能解释 AI 为什么写错一句话，而不是只是说"AI 就是这样"。',
          },
          {
            title: "用得出来",
            subtitle: "Hands-on First",
            desc: "我们更关心您做出来什么，而不是学了多少知识点。",
            example:
              "课程结束后都能做一个自己训练的 AI 项目，而不是一份 PPT。",
          },
          {
            title: "AI 思维",
            subtitle: "AI Thinking",
            desc: "我们不是教工具，而是教思维模式——如何把一个问题分解，让 AI 接手重复性部分。",
            example:
              "懂得把论文查找、数据整理、文本生成交给 AI，而自己专注判断与创意。",
          },
          {
            title: "自信心建立",
            subtitle: "Confidence Building",
            desc: '当青少年意识到 AI 被他控制，而不是控制他，会形成很强的"未来自信"。',
            example:
              "能在班级里展示 AI 项目，知道自己站在科技发展的前排。",
          },
          {
            title: "小班互动 + 一对一陪练",
            subtitle: "Small Cohort with 1-on-1",
            desc: "12 人小班，导师能直接盯每个人的作品。这是为了提高产出质量，不追求规模。",
            example:
              "这种高密度陪练，让青少年逐渐建立起对 AI 的掌控感。",
          },
          {
            title: "面向现实",
            subtitle: "Practical & Future-Oriented",
            desc: "课程完全围绕真实应用，不做无用的理论堆砌。",
            example:
              '做的项目能在家长或学校生活里直接使用，而不是"玩具项目"。',
          },
        ],
        footer:
          "这些价值不是口号，而是每节课、每个项目、每次反馈中的真实体现。",
      },
      studentWorks: {
        badge: "Showcase",
        title: "往期学员作品展示",
        subtitle: "从 0 到 1，学员们用 AI 创造了真实的价值",
        footer:
          "这些都是真实学员在训练营中完成的项目。每个孩子在结营 Demo Day 上展示自己的作品，建立起强大的自信心。",
        works: [
          {
            title: "Infinite Challenge Generator",
            role: "N同学，15岁，新西兰，零代码基础",
            desc: "ALPHA启航营（Genesis）一期",
          },
          {
            title: "VoiceAI",
            role: "三人小组作品（新西兰，12-22岁，零代码基础）",
            desc: "ALPHA启航营（Genesis）一期",
          },
          {
            title: "Lumina Academy",
            role: "W同学（新西兰，12岁，零代码基础）",
            desc: "ALPHA启航营（Genesis）一期",
          },
          {
            title: "字在午餐",
            role: "T同学，0工程经验",
            desc: "ZERO 三期",
          },
          {
            title: "纯素甄选",
            role: "Z同学，0工程经验",
            desc: "ZERO 三期",
          },
          {
            title: "RowingPro",
            role: "V同学，16岁",
            desc: "ALPHA Odyssey — US CAMP C",
          },
          {
            title: "新西兰首个AI驱动房产交易平台",
            role: "H同学，0工程经验",
            desc: "ZERO 一期",
          },
          {
            title: "生活日历与知识盒",
            role: "Y同学，15岁，0代码基础",
            desc: "ALPHA Odyssey — TN CAMP C",
          },
          {
            title: "AI高尔夫成绩分析",
            role: "P同学，14岁，9年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "一个帮助年轻人实现梦想的众筹网站",
            role: "P同学，14岁，9年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "音乐生的自我介绍网站",
            role: "Y同学，17岁，12年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "AI自动礼物推荐",
            role: "I同学，14岁，9年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "Egg Prices NZ 鸡蛋比价网站",
            role: "T同学，13，9年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "AI升学规划助手",
            role: "J同学，12岁，8年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "内容集群和 AI 工具",
            role: "K同学，无工程经验",
            desc: "ZERO 二期",
          },
          {
            title: "PROJECT;echo 个人时间管理工具",
            role: "J同学，13岁，9年级",
            desc: "ALPHA Odyssey — NZ CAMP C",
          },
          {
            title: "智能健康饮食助手",
            role: "Y同学，17岁",
            desc: "ALPHA Odyssey — TN CAMP C",
          },
        ],
      },
      teachers: {
        title: "导师团队",
        subtitle:
          "我们不是'老师'，而是您的 AI 驯化教练和未来能力合伙人",
        tabs: {
          mentors: "项目导师",
          experts: "专业讲师",
        },
        mentors: [
          {
            name: "Pin Zhou",
            role: "创业导师 / AI 产品总经理",
            desc: "连续创业者，BeeBee AI & 超加速学院人，AI 实战经验丰富，跨学科、跨产业、跨年龄……",
          },
          {
            name: "Iris Hu",
            role: "NLP 科学家 / 高效能教练",
            desc: "北师大教授，国家项目负责人，NLP 领域深耕 40+，三次中科转科学家……",
          },
          {
            name: "Vito Liu",
            role: "RAG 系统工程师 / AI 全栈",
            desc: "资深 CS+ 教学双学位，主导多个企业级 RAG 与知识库系统开发。",
          },
        ],
        experts: [
          {
            name: "Ashlynn Lu",
            role: "数据科学 / AI 数据工程师",
            desc: "数据驱动型专家，数据可视化及用户体验优化专家，擅长机器学习建模实战……",
          },
          {
            name: "Jennifer Liu",
            role: "资深 AI 产品 GTM 专家 / 增长",
            desc: "NYU 毕业，长期深耕产品市场增长管理层职，长江商学院 MBA，具有国际化视野……",
          },
          {
            name: "Fangzhong Liu",
            role: "资深数据科学家",
            desc: "美国顶尖大学数据科学硕士，优秀 XGBoost/uplift 建模、MMM、RAG……",
          },
        ],
      },
      faq: {
        title: "常见问题",
        subtitle: "同学们最关心的问题，我们都为您解答",
        more: "还有其他问题？",
        contact: "立即咨询我们",
        items: [
          {
            q: "没有任何编程基础，能学会吗？",
            a: "完全可以！Alpha 启航营（Genesis）专门为零基础学生设计。BEEBEE AI-Alpha 采用「无摩擦学习」方法，不需要编程基础。在启航营中，同学们从第一节课就能做出成果。约 15 小时的学习后，同学们就能完成一个真实的 AI 应用。远航营（Odyssey）则建议有一定编程或工程经验。",
          },
          {
            q: "课程是线上还是线下？",
            a: "课程以线上为主，采用在线互动教学。这样可以打破地域限制，让全球华人家庭的孩子都能参与。启航营12人小班制，4人1组；\n\n远航营6-12人小班制。我们确保每位同学都能得到充分的关注和指导。",
          },
          {
            q: "3 周（启航营）或 6 周（远航营）能学到什么程度？",
            a: "启航营（3周）：同学们将能够：\n1) 独立完成一个真实可运行的 AI 应用；\n2) 理解 AI 工作流设计基础；\n3) 建立驯化 AI 为自己服务的兴趣；\n4) 在结营 Demo Day 上展示自己的作品。\n\n远航营（6周）：除以上外，同学们还将：\n1) 掌握 AI 辅助全栈开发；\n2) 完成收费闭环集成；\n3) 在 Product Hunt 上发布；\n4) 有机会获得种子投资；\n5) 获得适合升学作品的工业化标准项目证明。",
          },
          {
            q: "和其他编程/AI 课程有什么不同？",
            a: '最大的不同是我们专注于\"做出来\"而不是\"学知识点\"。传统编程课往往从语法开始，很多人学了半年还做不出能用的东西。BEEBEE AI-Alpha 从第一节课就开始做项目，用真实的 AI 工具和模型，解决真实的问题。我们教的不是工具操作，而是 AI 思维和产品能力。',
          },
          {
            q: "什么年龄段的青少年适合参加？",
            a: "启航营：12-18 岁，对科技感兴趣，希望拥有自己独立产品的青少年（无需编程基础）。\n\n远航营：12-18 岁，有一定编程或工程经验，想获得明确升学或做出较高强度产品证明能力。\n\n我们更看重的是同学们对 AI/科技的兴趣，而不仅是年龄。如果您对技术好奇、喜欢动手创造、想要掌握未来技能，就很适合参加我们的训练营。",
          },
          {
            q: "上课时间如何安排？",
            a: "启航营：3 周，每周 2 次主课（每次1.5小时）+ 1 次周中答疑课（1小时）。\n\n远航营：6 周，每周 2 次主课（每次1.5小时）+ 1 次周中答疑/作业检查（2小时）。\n\n我们会根据同学们的时区安排最合适的上课时间。具体时间在开课前会和家长确认，确保不影响同学们的正常学习。",
          },
          {
            q: "如果中途有事缺课怎么办？",
            a: "我们提供课程录像回放，如果因故缺课可以观看录像补课。对答疑课，我们会根据情况协调补课时间。我们的目标是确保每位同学都能完成学习并做出作品，所以会尽力配合家长和学生的实际情况。如果中途有事真的坚持不了，记得和我们沟通。有合理原因会退剩余学费，我们希望每个人都能有好体验！",
          },
          {
            q: "结营后能获得什么？",
            a: "除了一个完整的 AI 应用作品，同学们还将获得：\n1) BEEBEE AI-Alpha 实习证明、推荐信；\n2) Demo Day 项目展示机会；\n3) 优秀远航营项目还有机会拿到种子投资；\n4) 最重要的是，建立起对 AI 的掌控感和未来自信心。",
          },
        ],
      },
      cta: {
        title: "AI已至，未来可期",
        subtitle:
          "名额有限，每期仅招收 12 人小班。立即报名，在AI世界领先一步。",
        form: {
          title: "立即报名咨询",
          name: "家长姓名",
          email: "联系邮箱",
          phone: "联系电话",
          message: "您的问题或需求（选填）",
          submit: "提交咨询",
        },
        contact: {
          title: "其他联系方式",
          project: "项目咨询",
          direct: "直接联系",
        },
      },
      footer: {
        brand: "BEE ALPHA",
        tagline: "用 AI 做出真实应用，掌握未来的工作方式。",
        quickLinks: "快速链接",
        contactUs: "联系我们",
        locationZh:
          "中国四川省成都市高新区成都高新孵化园 1 号楼 A 座",
        locationNz:
          "B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand",
        rights: "All rights reserved.",
        empower: "Empowering the next generation with AI",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "zh"],
    load: "languageOnly", // 只使用语言代码，忽略地区代码（如 zh-CN -> zh）
    detection: {
      // 检测顺序：localStorage > 浏览器语言
      order: ["localStorage", "navigator"],
      // localStorage 的 key 名称
      lookupLocalStorage: "i18nextLng",
      // 缓存用户选择的语言
      caches: ["localStorage"],
      // 排除某些语言检测方式
      excludeCacheFor: ["cimode"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;