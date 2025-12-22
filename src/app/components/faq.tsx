import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "孩子没有任何编程基础，能学会吗？",
      answer:
        "完全可以！我们的课程专门为零基础学生设计。BEEBEE AI-Alpha 采用「无摩擦学习」方法，不需要编程基础。我们提供零基础路径（Alpha 产品课 + Orbiter 陪练课），让孩子从第一节课就能做出成果。约 30 小时的学习后，孩子就能完成一个真实的 AI 应用。",
    },
    {
      question: "课程是线上还是线下？",
      answer:
        "课程以线上为主，采用在线直播互动教学。这样可以打破地域限制，让全球华人家庭的孩子都能参与。我们使用专业的在线教学平台，确保互动效果和教学质量。12 人小班制 + 1对1 陪练，保证每个孩子都能得到充分的关注和指导。",
    },
    {
      question: "6 周能学到什么程度？",
      answer:
        "6 周训练营结束后，孩子将能够：1) 独立完成一个真实可运行的 AI 应用；2) 掌握 AI 工作流的设计和搭建；3) 理解如何选择和使用不同的 AI 模型；4) 具备把问题拆解并用 AI 解决的思维能力；5) 在结营 Demo Day 上展示自己的作品。这不是理论学习，而是实实在在的产品开发能力。",
    },
    {
      question: "和其他编程/AI 课程有什么不同？",
      answer:
        "最大的不同是我们专注于\"做出来\"而不是\"学知识点\"。传统编程课往往从语法开始，很多孩子学了半年还做不出能用的东西。BEEBEE AI-Alpha 从第一节课就开始做项目，用真实的 AI 工具和模型，解决真实的问题。我们教的不是工具操作，而是 AI 思维和产品能力。",
    },
    {
      question: "课程费用是多少？",
      answer:
        "我们提供两种路径：1) 零基础路径（Alpha 产品课 + Orbiter 陪练课）：6,000 NZD，包含 12 次产品课（18 小时）+ 10 次陪练课（10 小时），总计约 30 小时；2) 加速路径（仅 Alpha 产品课）：4,200 NZD，包含 12 次产品课（18 小时），适合已有编程或 STEAM 基础的学生。",
    },
    {
      question: "什么年龄段的孩子适合参加？",
      answer:
        "课程主要面向 10-16 岁的青少年。具体来说，小学高年级到高中阶段的学生都适合。我们更看重的是孩子的学习动力和对 AI/科技的兴趣，而不仅是年龄。如果孩子对技术好奇、喜欢动手创造、想要掌握未来技能，就很适合参加我们的训练营。",
    },
    {
      question: "上课时间如何安排？",
      answer:
        "课程为期 6 周，每周 2-3 次课。产品课每次 1.5 小时，陪练课每次 1 小时。我们会根据学员的时区和时间安排最合适的上课时间。具体时间在开课前会和家长确认，确保不影响孩子的正常学习。",
    },
    {
      question: "如果孩子中途有事缺课怎么办？",
      answer:
        "我们提供课程录像回放，如果孩子因故缺课可以观看录像补课。对于陪练课，我们会根据情况协调补课时间。我们的目标是确保每个孩子都能完成学习并做出作品，所以会尽力配合家长和学生的实际情况。",
    },
    {
      question: "结营后孩子能获得什么？",
      answer:
        "除了一个完整的 AI 应用作品，孩子还将获得：1) BEEBEE AI-Alpha 结业证书；2) Demo Day 项目展示机会；3) 项目作品集，可用于学校展示或升学材料；4) 持续的社群支持，可以继续和同学、导师交流；5) 最重要的是，建立起对 AI 的掌控感和未来自信心。",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              常见问题
            </h2>
            <p className="text-xl text-muted-foreground">
              家长最关心的问题，我们都为您解答
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-white to-gray-50 border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-bold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
            <p className="text-lg">
              还有其他问题？
              <a
                href="#cta"
                className="text-primary font-bold hover:underline ml-2"
              >
                立即咨询我们
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}