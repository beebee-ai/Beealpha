import { motion } from "motion/react";
import { AlertCircle, Target, Globe, Lightbulb } from "lucide-react";

export function WhyWhat() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Why Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold">为什么需要 BEEBEE AI-Alpha？</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-border">
                <h3 className="font-bold text-xl mb-3">世界变了，学校没跟上</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI 正在重写学习方式、工作方式和竞争规则。但大多数青少年：
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>学校里几乎接触不到系统的 AI 教育</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>家长焦虑，却不知道该教什么</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>孩子要么把 AI 当玩具，要么把 AI 当威胁</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
                <p className="font-bold text-lg mb-2">真正的问题不是"会不会用 AI"</p>
                <p className="text-muted-foreground">
                  而是<span className="text-primary font-bold">"能不能用 AI 做事"</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
                <p className="leading-relaxed">
                  <span className="font-bold">BEEBEE AI-Alpha 诞生的原因只有一个：</span>
                  <br />
                  让孩子在 AI 时代不被动、不恐惧，而是有控制权。
                </p>
              </div>
            </div>
          </motion.div>

          {/* What Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">我们在做什么？</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-border">
                <h3 className="font-bold text-xl mb-3">青少年 AI 产品训练营</h3>
                <p className="text-muted-foreground leading-relaxed">
                  我们不教概念、不刷题、不讲空理论。
                </p>
                <div className="mt-4 bg-white/60 p-4 rounded-lg">
                  <p className="font-bold text-primary text-lg">
                    我们只做一件事：
                  </p>
                  <p className="mt-2">
                    让青少年在 6 周内，用 AI 做出一个真实、可运行的应用
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white border border-border rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">面向全球华人家庭</h4>
                    <p className="text-sm text-muted-foreground">
                      在线为主，打破地域限制，尤其面向新西兰及海外市场
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white border border-border rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">真实世界问题</h4>
                    <p className="text-sm text-muted-foreground">
                      在真实工具链上学习，而不是过时的软件环境和课本理论
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 rounded-xl">
                <p className="text-lg leading-relaxed">
                  不管孩子有没有编程基础，最终目标都只有一个：
                  <span className="font-bold block mt-2 text-xl">
                    产出一个真正的 AI 产品（MVP）
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
