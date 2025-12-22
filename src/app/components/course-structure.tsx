import { motion } from "motion/react";
import { Rocket, Users, Clock, DollarSign, CircleCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function CourseStructure() {
  const pathways = [
    {
      title: "零基础路径",
      subtitle: "适合没有编程基础的学生",
      icon: Users,
      duration: "6 周 · 约 30 小时",
      price: "6,000 NZD",
      courses: [
        {
          name: "Alpha 远航产品课",
          details: "12 次课 · 18 小时 · 系统学习",
        },
        {
          name: "Orbiter 陪练课",
          details: "10 次课 · 10 小时 · 1对1 辅导",
        },
      ],
      outcomes: [
        "完整 AI 应用产品",
        "掌握 AI 工作流搭建",
        "理解 AI 模型选择",
        "具备产品思维",
      ],
      gradient: "from-blue-50 to-purple-50",
    },
    {
      title: "加速路径",
      subtitle: "适合有编程/STEAM基础的学生",
      icon: Rocket,
      duration: "6 周 · 18 小时",
      price: "4,200 NZD",
      courses: [
        {
          name: "Alpha 远航产品课",
          details: "12 次课 · 18 小时 · 深度实践",
        },
      ],
      outcomes: [
        "更复杂的 AI 工具",
        "自主迭代优化模型",
        "高级工作流设计",
        "独立项目开发",
      ],
      gradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section
      id="course"
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
              两条路径，都能产出真实作品
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              无论孩子是否有编程基础，我们都为他们设计了合适的学习路径
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`h-full bg-gradient-to-br ${pathway.gradient} border-2`}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{pathway.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {pathway.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5" />
                        <span>{pathway.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold text-xl">
                        <DollarSign className="w-5 h-5" />
                        <span>{pathway.price}</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-bold">课程内容：</h4>
                      {pathway.courses.map((course, i) => (
                        <div
                          key={i}
                          className="bg-white/60 p-4 rounded-lg border border-border"
                        >
                          <div className="font-bold mb-1">{course.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {course.details}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">学习成果：</h4>
                      <div className="space-y-2">
                        {pathway.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CircleCheck className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg">
              <span className="font-bold">无论选择哪条路径</span>
              ，孩子最终都能做出一个真实、可运行的 AI
              应用，并在结营 Demo Day 上展示成果。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}