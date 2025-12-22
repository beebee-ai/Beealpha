import { motion } from "motion/react";
import { Layers, GitBranch, Wand, Presentation, CircleCheck } from "lucide-react";

export function WhatKidsCanDo() {
  const capabilities = [
    {
      icon: Layers,
      title: "Idea → 拆解",
      description: "把一个想法拆成可执行的步骤",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: GitBranch,
      title: "选择 AI 模型",
      description: "根据需求选择合适的 AI 工具",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Wand,
      title: "搭建工作流",
      description: "设计并实现完整的 AI 工作流程",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: CircleCheck,
      title: "让 AI 跑起来",
      description: "调试优化，确保应用正常运行",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Presentation,
      title: "打磨成 MVP",
      description: "完成可展示的最小可用产品",
      color: "bg-red-100 text-red-600",
    },
  ];

  const examples = [
    {
      title: "智能学习助手",
      description: "自动整理笔记、生成知识卡片、个性化学习建议",
    },
    {
      title: "创意写作工具",
      description: "AI 辅助故事创作、角色设定、情节构建",
    },
    {
      title: "数据分析助手",
      description: "自动处理数据、生成可视化图表、提取关键洞察",
    },
    {
      title: "个性化推荐系统",
      description: "根据用户偏好推荐内容、优化推荐算法",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              孩子能做到什么？
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              6 周训练营结束后，孩子将掌握完整的 AI 产品开发流程
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              完整的产品开发流程
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <div
                        className={`w-16 h-16 ${capability.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      {index < capabilities.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                      )}
                    </div>
                    <h4 className="font-bold mb-2">{capability.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {capability.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Example Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            孩子可以做出什么样的应用？
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{example.title}</h4>
                    <p className="text-muted-foreground">{example.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-orange-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-2xl font-bold mb-4">
              这就是 Frictionless Learning
            </p>
            <p className="text-lg opacity-90">
              没有痛苦的编程墙，没有挫败感。孩子从第一节课就能做出真实成果，
              建立起对 AI 的掌控感和未来信心。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}