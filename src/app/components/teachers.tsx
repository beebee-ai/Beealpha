import { motion } from "motion/react";
import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react";

export function Teachers() {
  const values = [
    {
      icon: GraduationCap,
      title: "懂 AI 的教练",
      description: "不只是老师，更是帮助孩子驯化 AI 的专业教练",
    },
    {
      icon: Lightbulb,
      title: "懂产品的导师",
      description: "具备真实产品开发经验，教会孩子产品思维",
    },
    {
      icon: Heart,
      title: "懂孩子的伙伴",
      description: "理解青少年学习心理，用对方法带领成长",
    },
    {
      icon: Users,
      title: "高密度陪伴",
      description: "12人小班 + 1对1陪练，确保每个孩子都被看见",
    },
  ];

  const principles = [
    {
      title: "反神秘化",
      description: "不把 AI 当玄学，用真实模型让孩子理解 AI 的逻辑",
      example: "孩子能解释 AI 为什么写错一句话，而不只是说「AI 就是这样」",
    },
    {
      title: "用得出来",
      description: "更关心孩子做出来什么，而不是学了多少知识点",
      example: "课程结束孩子能做一个自己训练的 AI 项目，而不是一份 PPT",
    },
    {
      title: "AI 思维",
      description: "不是教工具，而是教思维模式",
      example: "孩子懂得把重复性工作交给 AI，自己专注判断与创意",
    },
    {
      title: "面向现实",
      description: "课程完全围绕真实应用，不做无用的理论堆砌",
      example: "孩子做的项目能在生活里直接使用，而不是「玩具项目」",
    },
  ];

  return (
    <section
      id="teachers"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              是谁在教孩子？
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              我们不是"老师"，而是孩子的 AI 驯化教练和未来能力合伙人
            </p>
          </motion.div>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Teaching Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-8 text-center">
              我们的教学原则
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-orange-400 rounded-full" />
                  <div className="pl-4">
                    <h4 className="font-bold text-lg mb-2 text-primary">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {principle.description}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary/30">
                      <p className="text-sm italic text-muted-foreground">
                        例：{principle.example}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Belief Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-orange-600 text-white p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-2xl font-bold mb-4">我们相信</p>
            <p className="text-xl">
              孩子不是学不会，只是没人用对方法带他们
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}