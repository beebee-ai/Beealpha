import { motion } from "motion/react";
import { Clock, Users, UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CourseMode() {
  const { t } = useTranslation();

  const modes = [
    {
      icon: Clock,
      number: t("courseMode.items.0.number"),
      description: t("courseMode.items.0.desc"),
    },
    {
      icon: Users,
      number: t("courseMode.items.1.number"),
      description: t("courseMode.items.1.desc"),
    },
    {
      icon: UserCheck,
      number: t("courseMode.items.2.number"),
      description: t("courseMode.items.2.desc"),
    },
  ];

  return (
    <section id="course" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary text-sm font-semibold tracking-widest mb-3 uppercase">
              {t("courseMode.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("courseMode.title")}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {mode.number}
                </div>
                <div className="text-muted-foreground">{mode.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}