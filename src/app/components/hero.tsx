import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">让青少年掌握未来的工作方式</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            6 周，让孩子
            <span className="text-primary"> 用 AI 做出真实应用</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            不用编程基础，不靠死记硬背。从第一节课开始就能让 AI
            帮他完成现实任务，从"会用 AI"进化成"能做出作品"。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => scrollToSection("cta")}
            >
              立即报名
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() => scrollToSection("outcome")}
            >
              了解更多
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6 周</div>
              <div className="text-muted-foreground">完整训练营</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12 人</div>
              <div className="text-muted-foreground">小班教学</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1 对 1</div>
              <div className="text-muted-foreground">专属陪练</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
