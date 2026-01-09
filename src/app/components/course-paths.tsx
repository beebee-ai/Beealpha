import { motion } from "motion/react";
import { Rocket, Users, Clock, Target, GraduationCap, CircleCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { InquiryModal } from "./InquiryModal";
import { Button } from "./ui/button";

export function CoursePaths() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleInquire = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  const pathways = [
    {
      title: t("coursePaths.path1.title"),
      subtitle: t("coursePaths.path1.subtitle"),
      icon: Users,
      duration: t("coursePaths.path1.duration"),
      targetAudience: t("coursePaths.path1.targetAudience"),
      description: t("coursePaths.path1.description"),
      scheduleTitle: t("coursePaths.path1.scheduleTitle"),
      schedule: [
        t("coursePaths.path1.schedule.0"),
        t("coursePaths.path1.schedule.1"),
        t("coursePaths.path1.schedule.2"),
      ],
      classSize: t("coursePaths.path1.classSize"),
      curriculumTitle: t("coursePaths.path1.curriculumTitle"),
      curriculum: [
        t("coursePaths.path1.curriculum.0"),
        t("coursePaths.path1.curriculum.1"),
        t("coursePaths.path1.curriculum.2"),
        t("coursePaths.path1.curriculum.3"),
        t("coursePaths.path1.curriculum.4"),
        t("coursePaths.path1.curriculum.5"),
        t("coursePaths.path1.curriculum.6"),
      ],
      gradient: "from-blue-50 to-purple-50",
    },
    {
      title: t("coursePaths.path2.title"),
      subtitle: t("coursePaths.path2.subtitle"),
      icon: Rocket,
      duration: t("coursePaths.path2.duration"),
      targetAudience: t("coursePaths.path2.targetAudience"),
      description: t("coursePaths.path2.description"),
      scheduleTitle: t("coursePaths.path2.scheduleTitle"),
      schedule: [
        t("coursePaths.path2.schedule.0"),
        t("coursePaths.path2.schedule.1"),
        t("coursePaths.path2.schedule.2"),
      ],
      classSize: t("coursePaths.path2.classSize"),
      selection: t("coursePaths.path2.selection", ""),
      curriculumTitle: t("coursePaths.path2.curriculumTitle"),
      curriculum: [
        t("coursePaths.path2.curriculum.0"),
        t("coursePaths.path2.curriculum.1"),
        t("coursePaths.path2.curriculum.2"),
        t("coursePaths.path2.curriculum.3"),
        t("coursePaths.path2.curriculum.4"),
        t("coursePaths.path2.curriculum.5"),
        t("coursePaths.path2.curriculum.6"),
        t("coursePaths.path2.curriculum.7"),
        t("coursePaths.path2.curriculum.8"),
        t("coursePaths.path2.curriculum.9", ""),
      ].filter(item => item !== ""),
      gradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section id="course" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary text-sm font-semibold tracking-widest mb-3 uppercase">
              {t("coursePaths.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("coursePaths.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("coursePaths.subtitle")}
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
                <Card className={`h-full bg-gradient-to-br ${pathway.gradient} border-2 flex flex-col`}>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[20px]">{pathway.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {pathway.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                      {pathway.description}
                    </p>

                    {/* 课程时长 */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold">{pathway.duration}</span>
                      </div>
                    </div>

                    {/* 适用人群 */}
                    <div className="mb-6">
                      <div className="flex items-start gap-2">
                        <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold mb-1">{t('coursePaths.labels.targetAudience')}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {pathway.targetAudience}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 课程设置 */}
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {pathway.scheduleTitle}
                      </h4>
                      <div className="space-y-2">
                        {pathway.schedule.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 班级规模 */}
                    <div className="mb-6 bg-white/60 p-4 rounded-lg border border-border">
                      <p className="text-sm">
                        <span className="font-semibold">{t('coursePaths.labels.classSize')}</span>
                        {pathway.classSize}
                      </p>
                      {pathway.selection && (
                        <p className="text-sm mt-2">
                          <span className="font-semibold">{t('coursePaths.labels.selection')}</span>
                          {pathway.selection}
                        </p>
                      )}
                    </div>

                    {/* 课程结构 */}
                    <div className="mb-6 flex-1">
                      <h4 className="font-bold mb-3">{pathway.curriculumTitle}</h4>
                      <div className="space-y-2">
                        {pathway.curriculum.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inquiry Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:opacity-90 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:translate-y-[-2px] transition-all"
                      onClick={() => handleInquire(pathway.title)}
                    >
                      {t('navbar.cta')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={selectedCourse} 
      />
    </section>
  );
}