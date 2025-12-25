import { motion } from "motion/react";
import { AlertCircle, Target, Globe, Lightbulb, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export function WhyWhat() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("whyWhat.items.0.title"),
      description: t("whyWhat.items.0.desc"),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("whyWhat.items.1.title"),
      description: t("whyWhat.items.1.desc"),
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("whyWhat.items.2.title"),
      description: t("whyWhat.items.2.desc"),
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t("whyWhat.items.3.title"),
      description: t("whyWhat.items.3.desc"),
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: t("whyWhat.items.4.title"),
      description: t("whyWhat.items.4.desc"),
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("whyWhat.items.5.title"),
      description: t("whyWhat.items.5.desc"),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">{t("whyWhat.badge")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t("whyWhat.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("whyWhat.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${value.bgColor} border-2 ${value.borderColor} rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {value.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}