import { motion } from "motion/react";
import { Lightbulb, HandMetal, Brain, Sparkles, Users, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CoreValues() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: t("coreValues.items.0.title"),
      subtitle: t("coreValues.items.0.subtitle"),
      description: t("coreValues.items.0.desc"),
      example: t("coreValues.items.0.example"),
      color: "from-yellow-50 to-orange-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: HandMetal,
      title: t("coreValues.items.1.title"),
      subtitle: t("coreValues.items.1.subtitle"),
      description: t("coreValues.items.1.desc"),
      example: t("coreValues.items.1.example"),
      color: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Brain,
      title: t("coreValues.items.2.title"),
      subtitle: t("coreValues.items.2.subtitle"),
      description: t("coreValues.items.2.desc"),
      example: t("coreValues.items.2.example"),
      color: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Sparkles,
      title: t("coreValues.items.3.title"),
      subtitle: t("coreValues.items.3.subtitle"),
      description: t("coreValues.items.3.desc"),
      example: t("coreValues.items.3.example"),
      color: "from-green-50 to-teal-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: t("coreValues.items.4.title"),
      subtitle: t("coreValues.items.4.subtitle"),
      description: t("coreValues.items.4.desc"),
      example: t("coreValues.items.4.example"),
      color: "from-orange-50 to-amber-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Target,
      title: t("coreValues.items.5.title"),
      subtitle: t("coreValues.items.5.subtitle"),
      description: t("coreValues.items.5.desc"),
      example: t("coreValues.items.5.example"),
      color: "from-red-50 to-rose-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
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
            <div className="text-primary text-sm font-semibold tracking-widest mb-3 uppercase">
              {t("coreValues.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("coreValues.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("coreValues.subtitle")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${value.color} p-6 rounded-2xl border border-border hover:shadow-lg transition-all`}
              >
                <div className={`w-12 h-12 ${value.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                
                <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                <p className="text-xs text-primary font-semibold mb-3 uppercase tracking-wide">
                  {value.subtitle}
                </p>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {value.description}
                </p>
                
                <div className="bg-white/60 p-3 rounded-lg border border-border/50">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {value.example}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg">
              {t("coreValues.footer")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
