import { motion } from "motion/react";
import { Code, Sparkles, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function StudentWorks() {
  const works = [
    {
      title: "智能作文助手",
      student: "李同学 · 13岁",
      description: "帮助分析作文结构，提供写作建议，自动生成改进方案",
      tags: ["NLP", "写作辅助", "教育"],
    },
    {
      title: "个性化学习计划生成器",
      student: "王同学 · 14岁",
      description: "根据学习进度和目标，自动生成个性化的学习计划和复习提醒",
      tags: ["推荐系统", "教育", "时间管理"],
    },
    {
      title: "图像风格转换工具",
      student: "张同学 · 15岁",
      description: "将普通照片转换成不同艺术风格，支持多种滤镜和效果",
      tags: ["计算机视觉", "艺术创作", "图像处理"],
    },
    {
      title: "智能问答机器人",
      student: "刘同学 · 12岁",
      description: "针对学科知识的智能问答系统，能够解答常见学习问题",
      tags: ["对话系统", "教育", "知识图谱"],
    },
    {
      title: "音乐推荐系统",
      student: "陈同学 · 14岁",
      description: "基于用户喜好推荐音乐，学习用户偏好并不断优化推荐",
      tags: ["推荐算法", "音乐", "个性化"],
    },
    {
      title: "代码学习助手",
      student: "赵同学 · 15岁",
      description: "帮助理解代码逻辑，提供代码优化建议和学习资源推荐",
      tags: ["编程教育", "代码分析", "学习辅助"],
    },
  ];

  return (
    <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Trophy className="w-4 h-4" />
              <span className="text-sm">真实学员作品</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              看看他们做出了什么
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              每个项目都是学员在 6 周内独立完成的真实 AI 应用
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-orange-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <Code className="w-16 h-16 text-primary/40" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-primary mb-3">{work.student}</p>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-border max-w-3xl mx-auto">
            <p className="text-lg">
              这些都是<span className="font-bold text-primary">真实学员</span>
              在训练营中完成的项目。
              <br />
              每个孩子在结营 Demo Day 上展示自己的作品，建立起强大的自信心。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
