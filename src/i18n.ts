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
        title_highlight: "Build Real Workflows with AI",
        description:
          "Not just learning AI tools, and not only building apps.\nBuilt around tasks from learning, school admissions, and real work scenarios, learners practice using AI to build real workflows.",
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
            title: "Build a Complete Workflow",
            desc: "Not a one-off demo app, but a reusable AI workflow that keeps driving real tasks across study, university applications, and work.",
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
          subtitle: "AI Workflow Foundations & Real-Task Practice",
          duration: "~6 Weeks · ~18 Hours",
          durationNote:
            "The \"6+2\" structure: 1 one-on-one diagnostic + 6 main classes + 1 Demo Day; exact class timing is arranged per cohort",
          targetAudience:
            "Ages 12-18 interested in AI, study efficiency, application portfolios, or personal projects; no coding background required",
          description:
            "Around your own interest, university direction, or future scenario, define a real task and use Claude, Codex, and other frontier AI tools to complete a full workflow — from prompting and breakdown, to outcome design, research, building, and showcase.",
          scheduleTitle: "Course Setup",
          schedule: [
            "Main Classes: 6 sessions, 1.5h each, advancing the \"6+2\" workflow step by step (with instruction, demos, and hands-on practice)",
            "Q&A Sessions: a weekly 1-hour Office Hour, 6 in total, ensuring questions are resolved before the next class",
            "Demo Day: held separately from the 6 main classes — each presents solo + review, ~2 hours",
          ],
          classSize:
            "Supports both 1-on-1 private customization and Golden Group (up to 8); identical curriculum in both, each student ships an independent project",
          curriculumTitle: "Course Checklist",
          curriculum: [
            "Frontier AI tools: how Claude, Claude Code, and Codex split the workflow",
            "CRAFT framework: turn vague ideas into tasks AI can execute",
            "JSK outcome design: use JTBD / Four Forces / Kano to decide what to build, for whom, and what comes first",
            "Research & judgment: generate with AI, and learn to verify and correct",
            "Build with Codex: turn the workflow into a page or tool you can open and demo",
            "Polish & Demo prep: explain how you used AI to advance a real task",
            "Demo Day: solo presentation, defense, and retrospective",
          ],
        },
        path2: {
          title: "Alpha Odyssey Camp",
          subtitle:
            "Advanced Independent Product Creation Course",
          duration: "6 Weeks · ~27 Hours",
          durationNote:
            "(The schedule for the 12 sessions will be finalized based on each cohort.)",
          targetAudience:
            "Ages 12-18, with coding/engineering experience, seeking college portfolio or high-intensity product proof",
          description:
            "Develop your own product with AI and bring it to market, realizing personal interests. Industrial-standard project suitable for college applications, career transition, or startup. Mentors and founders can endorse successful graduates.",
          scheduleTitle: "Course Schedule",
          schedule: [
            "Main Course: 2 sessions/week, 12 sessions total, 1.5h each",
            "Q&A Sessions: Arranged weekly based on student needs to ensure all questions are resolved before the next class",
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
            title: "Real Task Oriented",
            desc: "Start by building an app; prove it by completing a real task with AI.",
          },
          {
            title: "Small Class Personalized",
            desc: "Two formats — 1-on-1 customized or Golden Group (up to 8). Every learner ships an independent project.",
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
            desc: "Not magic. Use real models and tasks to help students understand AI's logic.",
            example:
              "Can explain why AI gave a certain result, and know when to follow up, verify, or adjust.",
          },
          {
            title: "Hands-on First",
            subtitle: "Hands-on First",
            desc: "We care about what you make, not how many points they memorized.",
            example:
              "Finish with an AI workflow built around a real task, not a PPT.",
          },
          {
            title: "AI Thinking",
            subtitle: "AI Thinking",
            desc: "We teach thinking patterns—how to decompose a problem and let AI handle the repetitive parts.",
            example:
              "Organize information gathering, content generation, data processing, and presentation into a clear flow, focusing on judgment and decisions.",
          },
          {
            title: "Confidence Building",
            subtitle: "Confidence Building",
            desc: 'When teens realize they can direct AI to drive tasks instead of being pulled along by new tech, they build strong "future confidence".',
            example:
              "Can showcase their AI workflow and explain how a real task was broken down, advanced, and completed.",
          },
          {
            title: "Small Cohort + 1-on-1",
            subtitle: "Small Cohort with 1-on-1",
            desc: "Up to 8 students. Mentors track everyone's work. Quality over scale.",
            example:
              "High-density coaching helps teens build control over AI.",
          },
          {
            title: "Practical & Future-Oriented",
            subtitle: "Practical & Future-Oriented",
            desc: "Courses focus entirely on real tasks, no useless theory.",
            example:
              'Projects address tasks from study, university applications, or real work, not "toy projects".',
          },
        ],
        footer:
          "These values aren't slogans—they're embodied in every task breakdown, tool call, project iteration, and showcase.",
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
            title: "Word Snack",
            role: "Student T, 0 Engineering Exp",
            desc: "ZERO Camp Cohort 3",
          },
          {
            title: "Lumina Academy",
            role: "Student W (New Zealand, 12, Zero Coding Base)",
            desc: "ALPHA Genesis Camp Cohort 1",
          },
          {
            title: "VoiceAI",
            role: "3-Student Team, NZ, Ages 12-22",
            desc: "ALPHA Genesis Camp Cohort 1",
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
            q: "Can students join without any coding background?",
            a: "Yes. The BEE ALPHA Genesis Camp is built for students with zero coding background, and hands-on work starts from lesson one. We teach how to use AI tools to build workflows, not traditional programming that begins with syntax — what matters is the thinking, not coding skills.",
          },
          {
            q: "Is the course online or offline?",
            a: "Primarily online, so families across the global Chinese community can join. Every student gets a 1-on-1 diagnostic session, and the Golden Group format is capped at 8 students so every learner is seen by the mentor team directly.",
          },
          {
            q: "How do I choose between 1-on-1 and the Golden Group?",
            a: "Both share the same curriculum; they differ in pace and interaction density. 1-on-1 private customization suits students with a clear direction who want the mentor team's full attention. The Golden Group seats up to 8 students, each still delivering an independent project — a fit for learners who want peers driving the work alongside them.",
          },
          {
            q: "Which AI tools does the course use?",
            a: "Mainly Claude, Codex, and other international frontier AI tools. Students plug into the international mainstream environment from day one, not the locally restricted alternatives.",
          },
          {
            q: "What does the course actually teach?",
            a: "Students learn to use Claude, Codex, and other international frontier AI tools. Starting from each student's own interest, university direction, or future career scenario, they define a real problem and complete a full AI workflow: breaking down the task, designing the approach, calling tools, generating content, processing data, building the app, and shipping — with learning judged by a final result that can be demonstrated, explained, and used by others.",
          },
          {
            q: "What's the course structure?",
            a: "The 6+2 structure: 1 personal diagnostic session + 6 main classes + 1 Demo Day, with weekly Office Hours for Q&A.",
          },
          {
            q: "How is this different from other coding/AI courses?",
            a: "A direct comparison with typical AI camps:\n• Teaching to build an app/software → Teaching to build an AI workflow\n• Tool-making as the finish line → Problem-solving as the finish line\n• Output: a demo product → Output: a reusable workflow\n• Using lagging domestic AI → Using Claude, Codex, and other international frontier tools\n• Skills hard to apply → Directly relevant to university applications and real work",
          },
          {
            q: "What age range is the camp for?",
            a: "Mainly 12–18-year-olds curious about AI and tech, especially well-suited to families with study-abroad plans or backgrounds. We look at genuine interest in study, university applications, or a student's own direction more than at age alone.",
          },
          {
            q: "How is the schedule arranged?",
            a: "1-on-1 customization opens whenever the student is ready — sessions are aligned directly between mentor and family. Golden Group cohorts are scheduled by enrollment. Each week includes Office Hours, fixed time windows where students can dial in and get answers from multiple mentors live.",
          },
          {
            q: "What if a student has to miss a class?",
            a: "Recordings are provided for any missed sessions, and Office Hours are flexible for catch-up. Our goal is for every student to complete their own workflow delivery. If circumstances truly prevent finishing, we'll talk it through and refund the remaining tuition.",
          },
          {
            q: "What do students take away after graduation?",
            a: "Beyond a reusable AI workflow of their own, students receive: 1) a complete Project Card portfolio with every step from diagnostic to Demo recorded; 2) a BEE ALPHA internship certificate and recommendation letter; 3) a Demo Day showcase; 4) ongoing access to the AI Talk learning community.",
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
        works: "学员产品",
        teachers: "导师团队",
        faq: "常见问题",
        aboutUs: "关于我们",
        cta: "立即咨询",
      },
      hero: {
        badge: "让青少年掌握未来的工作方式",
        title_start: "让孩子无摩擦地",
        title_highlight: "用 AI 搭建真实工作流",
        description:
          "不止于学会 AI 工具，也不只是做出应用。\n围绕学习、升学与真实工作场景中的任务，学习用 AI 搭建真实工作流。",
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
            title: "搭建完整工作流",
            desc: "搭建一套可复用的 AI 工作流，能持续推进学习、升学与工作中的真实任务。",
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
          title: "ALPHA 启航营 (Genesis)",
          subtitle: "AI 工作流启蒙与真实任务实践",
          duration: "6 周 · 约 18 小时",
          durationNote:
            "（6次课具体时间分布根据各营期情况待定）",
          targetAudience:
            "12-18 岁，对 AI、学习效率、升学作品或兴趣项目感兴趣的青少年，无需编程基础",
          description:
            "围绕学习、升学与真实工作场景中的任务，用 Claude、Codex 等前沿 AI 工具，完成从提问拆解、成果设计、资料整理到搭建展示的完整工作流。",
          scheduleTitle: "课程设置",
          schedule: [
            "主课安排：每周一次线上课，共 6 次，每次 1.5 小时",
            "答疑课：每周根据学生需要安排答疑，保证所有问题在下节课前得以解决",
            "Demo Day：6 节正课之外单独举行，每人独立路演 + 评审，约 2 小时",
          ],
          classSize:
            "支持 1 对 1 私人定制与黄金组团（最多 8 人），两种形式课程内容一致，每人独立交付项目",
          curriculumTitle: "课程清单",
          curriculum: [
            "前沿 AI 工具认知",
            "CRAFT 提问框架",
            "JSK 成果设计",
            "资料整理与结果判断",
            "用 AI 工具搭建可展示成果",
            "成果完善与 Demo 准备",
            "Demo Day",
          ],
        },
        path2: {
          title: "ALPHA 远航营 (Odyssey)",
          subtitle: "独立产品创造高阶课",
          duration: "6 周 · 约 27 小时",
          durationNote:
            "（12次课具体时间分布根据各营期情况待定）",
          targetAudience:
            "12-18 岁，有一定编程或工程经验，获得明确升学或做出较高强度产品证明能力",
          description:
            "用AI开发出自己的产品并市场化，实现个人兴趣落地。此项目完全以工业化标准设立，完成后可用于升学作品，职业转型，创业起点。导师和创始人均可为成功结营的学生背书。",
          scheduleTitle: "课程设置",
          schedule: [
            "主课安排：每周 2 次线上课，共 12 次，每次 1.5 小时互动课程",
            "答疑课：每周根据学生需要安排答疑，保证所有问题在下节课前得以解决",
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
            title: "真实任务导向",
            desc: "以做出应用为起点，以用 AI 完成一项真实任务为检验",
          },
          {
            title: "小班制个性化",
            desc: "1对1 定制与黄金组团两种形式，最多 8 人，每人独立交付项目",
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
            desc: "不把 AI 当玄学，用真实模型让学员理解 AI 的逻辑。",
            example:
              "能解释 AI 为什么给出某个结果，也能判断什么时候需要继续追问、验证或调整。",
          },
          {
            title: "用得出来",
            subtitle: "Hands-on First",
            desc: "我们更关心您做出来什么，而不是学了多少知识点。",
            example:
              "课程结束后能展示一套围绕真实任务搭建的 AI 工作流成果，而不是一份 PPT。",
          },
          {
            title: "AI 思维",
            subtitle: "AI Thinking",
            desc: "我们不是教工具，而是教思维模式——如何把一个问题分解，让 AI 接手重复性部分。",
            example:
              "懂得把信息搜集、内容生成、数据整理、方案表达等环节组织成流程，自己专注判断与决策。",
          },
          {
            title: "自信心建立",
            subtitle: "Confidence Building",
            desc: "当青少年意识到自己可以指挥 AI 推进任务，而不是被新技术牵着走，会形成很强的未来自信。",
            example:
              "能展示自己的 AI 工作流成果，并说明一个真实任务是如何被拆解、推进和完成的。",
          },
          {
            title: "小班互动 + 一对一陪练",
            subtitle: "Small Cohort with 1-on-1",
            desc: "最多 8 人小班，导师能直接盯每个人的作品。这是为了提高产出质量，不追求规模。",
            example:
              "这种高密度陪练，让青少年逐渐建立起对 AI 的掌控感。",
          },
          {
            title: "面向现实",
            subtitle: "Practical & Future-Oriented",
            desc: "课程完全围绕真实任务，不做无用的理论堆砌。",
            example:
              '做的项目能回应学习、升学或真实工作场景中的任务，而不是"玩具项目"。',
          },
        ],
        footer:
          "这些价值不是口号，而是每次任务拆解、工具调用、项目推进与成果展示中的真实体现。",
      },
      studentWorks: {
        badge: "Showcase",
        title: "往期学员产品展示",
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
            title: "字在午餐",
            role: "T同学，0工程经验",
            desc: "ZERO 三期",
          },
          {
            title: "Lumina Academy",
            role: "W同学（新西兰，12岁，零代码基础）",
            desc: "ALPHA启航营（Genesis）一期",
          },
          {
            title: "VoiceAI",
            role: "三人小组作品（新西兰，12-22岁，零代码基础）",
            desc: "ALPHA启航营（Genesis）一期",
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
            a: "完全可以。BEE ALPHA 启航营专为零基础学员设计，第一节课就开始动手。我们教的是用 AI 工具搭建工作流，而不是从语法开始的传统编程，关键在思路，而不是代码功底。",
          },
          {
            q: "课程是线上还是线下？",
            a: "以线上交付为主，便于全球华人家庭参与。每位学员都有 1 对 1 前置诊断，黄金组团形式最多 8 人，确保每位学员都能被导师直接看到。",
          },
          {
            q: "1 对 1 定制和黄金组团（Golden Group）怎么选？",
            a: "两种形式课程内容一致，区别在节奏与互动密度。1 对 1 私人定制适合方向明确、希望全程独享导师注意力的学员；黄金组团最多 8 人，每位学员仍独立交付自己的项目，适合希望有同伴一起推进的学员。",
          },
          {
            q: "课程会用哪些 AI 工具？",
            a: "主用 Claude、Codex 等国际前沿 AI 工具。学员入营即接轨国际，使用海外主流环境，不被国内滞后版本限制。",
          },
          {
            q: "课程主要教什么？",
            a: "课程中教学员使用 Claude、Codex 等国际前沿 AI 工具，从个人的兴趣、升学方向或未来职业场景出发，先定义一个真实问题，再用 AI 工具完成完整工作流：拆解任务、设计方案、调用工具、生成内容、处理数据、搭建应用、上线展示，最后用一个可以演示、可以解释、可以被别人使用的成果来检验学习效果。",
          },
          {
            q: "课程结构是什么？",
            a: "课程采用「6+2」结构——1 节 1 对 1 前置诊断 + 6 节正课 + 1 节 Demo Day，配套每周 Office Hour 答疑。",
          },
          {
            q: "和其他编程/AI 课程有什么不同？",
            a: "对比市面普通 AI 营：\n• 教做 App/软件 → 教搭 AI 工作流\n• 造工具为终点 → 解决问题为终点\n• 成果是 Demo 产品 → 成果是可复用工作流方案\n• 用国内滞后 AI → 用 Claude、Codex 等国际前沿\n• 技能难落地 → 直接对接升学与职场实际需求",
          },
          {
            q: "什么年龄段的青少年适合参加？",
            a: "主要面向 12–18 岁、对 AI 与科技感兴趣的青少年，特别适合有留学背景或计划的家庭。我们看重的是对学习、升学或自己感兴趣方向的真实需求，而不仅是年龄。",
          },
          {
            q: "上课时间如何安排？",
            a: "1 对 1 定制随时可开课，时间由导师与学员家庭直接对齐；黄金组团按报名进度排期。每周配套 Office Hour 答疑窗口，学员可在固定时段拨入与多位老师在线交流。",
          },
          {
            q: "如果中途有事缺课怎么办？",
            a: "我们提供课程录像回放，因故缺课可观看录像补课；Office Hour 答疑可灵活补出席。我们的目标是确保每位学员完成自己的工作流交付，如果中途真的坚持不了，可沟通退还剩余学费。",
          },
          {
            q: "结营后能获得什么？",
            a: "除了一套属于自己的可复用 AI 工作流方案，学员还将获得：1）从前置诊断到 Demo 全程留痕的项目共建卡卷宗；2）BEE ALPHA 实习证明与推荐信；3）Demo Day 项目展示机会；4）持续参与 AI Talk 学习社群。",
          },
        ],
      },
      cta: {
        title: "AI已至，未来可期",
        subtitle:
          "名额有限，每期最多招收 8 人。立即报名，在AI世界领先一步。",
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
        tagline: "用 AI 搭建真实工作流，掌握未来的工作方式。",
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
