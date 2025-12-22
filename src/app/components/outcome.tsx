import { motion } from "motion/react";
import { Target, Brain, Zap, Award, TrendingUp, Users } from "lucide-react";

export function Outcome() {
  const outcomes = [
    {
      icon: Target,
      title: "真实 AI 应用",
      description: "不是玩具项目，而是能在家长或学校生活里直接使用的 AI 产品",
    },
    {
      icon: Brain,
      title: "AI 思维模式",
      description: "学会把问题分解，让 AI 接手重复性部分，自己专注判断与创意",
    },
    {
      icon: Zap,
      title: "无摩擦学习",
      description: "零编程基础也能做出作品，从第一节课就能让 AI 帮他完成任务",
    },
    {
      icon: Award,
      title: "未来自信心",
      description: "意识到 AI 被他控制，而不是控制他，形成强大的未来竞争力",
    },
    {
      icon: TrendingUp,
      title: "可复用能力",
      description: "掌握任务拆解、AI 协作、产品输出的完整能力框架",
    },
    {
      icon: Users,
      title: "高密度陪练",
      description: "12 人小班 + 1对1 导师陪练，确保每个孩子都被真正看见",
    },
  ];

  return (
    <section id="outcome" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              孩子将获得什么？
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              我们不是教知识，也不是教软件操作。我们教的是"把问题交给 AI，让自己做更有价值的部分"
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50/30 p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
