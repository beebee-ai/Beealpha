import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("感谢您的咨询！我们会尽快与您联系。");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "邮箱咨询",
      content: "info@beebee-alpha.com",
      href: "mailto:info@beebee-alpha.com",
    },
    {
      icon: Phone,
      title: "电话咨询",
      content: "+64 XXX XXXX",
      href: "tel:+64XXXXXXXX",
    },
    {
      icon: MessageCircle,
      title: "微信咨询",
      content: "扫码添加客服",
      href: "#",
    },
  ];

  return (
    <section
      id="cta"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-orange-50/30 to-white"
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
              开始孩子的 AI 未来之旅
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              名额有限，每期仅招收 12 人小班。立即报名，让孩子领先一步。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6">立即报名咨询</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">家长姓名</label>
                  <Input
                    type="text"
                    placeholder="请输入您的姓名"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">联系邮箱</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">联系电话</label>
                  <Input
                    type="tel"
                    placeholder="+64 XXX XXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">
                    您的问题或需求（选填）
                  </label>
                  <Textarea
                    placeholder="请告诉我们您想了解的内容，或孩子的情况..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  提交咨询
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">其他联系方式</h3>
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{method.title}</h4>
                      <p className="text-muted-foreground">{method.content}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">为什么选择我们？</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>6 周完整训练营，真实项目产出</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>12 人小班 + 1对1 陪练，高密度关注</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>零基础也能学，无摩擦学习方法</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>不只学知识，更培养 AI 时代思维</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>结营 Demo Day，展示作品建立自信</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
