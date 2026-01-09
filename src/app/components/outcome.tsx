import { motion } from "motion/react";
import { PenTool, Trophy, Globe, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Outcome() {
  const { t } = useTranslation();

  const outcomes = [
    {
      icon: PenTool,
      title: t("outcome.items.0.title"),
      description: t("outcome.items.0.desc"),
    },
    {
      icon: Trophy,
      title: t("outcome.items.1.title"),
      description: t("outcome.items.1.desc"),
    },
    {
      icon: Globe,
      title: t("outcome.items.2.title"),
      description: t("outcome.items.2.desc"),
    },
    {
      icon: Zap,
      title: t("outcome.items.3.title"),
      description: t("outcome.items.3.desc"),
    },
  ];

  return (
    <section
      id="outcome"
      className="py-6 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary text-sm font-semibold tracking-widest mb-3 uppercase">
              {t("outcome.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t("outcome.title")}
            </h2>
          </motion.div>
        </div>

        {/* Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-gray-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4 md:flex-col md:items-start md:gap-0 md:mb-6">
                  <Icon
                    className="w-8 h-8 md:w-12 md:h-12 text-primary flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-bold text-lg md:mt-6">
                    {outcome.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}