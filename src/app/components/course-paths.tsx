import { motion } from "motion/react";
import { Rocket, Users, Clock, DollarSign, CircleCheck } from "lucide-react";
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
      price: "6,000 NZD",
      description: t("coursePaths.path1.description"),
      courses: [
        {
          name: t("coursePaths.path1.courses.0.name"),
          details: t("coursePaths.path1.courses.0.details"),
          description: t("coursePaths.path1.courses.0.desc"),
        },
        {
          name: t("coursePaths.path1.courses.1.name"),
          details: t("coursePaths.path1.courses.1.details"),
          description: t("coursePaths.path1.courses.1.desc"),
        },
      ],
      outcomes: [
        t("coursePaths.path1.outcomes.0"),
        t("coursePaths.path1.outcomes.1"),
        t("coursePaths.path1.outcomes.2"),
        t("coursePaths.path1.outcomes.3"),
      ],
      highlight: t("coursePaths.path1.highlight"),
      gradient: "from-blue-50 to-purple-50",
    },
    {
      title: t("coursePaths.path2.title"),
      subtitle: t("coursePaths.path2.subtitle"),
      icon: Rocket,
      duration: t("coursePaths.path2.duration"),
      price: "4,200 NZD",
      description: t("coursePaths.path2.description"),
      courses: [
        {
          name: t("coursePaths.path2.courses.0.name"),
          details: t("coursePaths.path2.courses.0.details"),
          description: t("coursePaths.path2.courses.0.desc"),
        },
      ],
      outcomes: [
        t("coursePaths.path2.outcomes.0"),
        t("coursePaths.path2.outcomes.1"),
        t("coursePaths.path2.outcomes.2"),
        t("coursePaths.path2.outcomes.3"),
      ],
      highlight: t("coursePaths.path2.highlight"),
      gradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
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
                            <h3 className="text-2xl font-bold">{pathway.title}</h3>
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

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5" />
                        <span>{pathway.duration}</span>
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
                          <div className="text-sm text-muted-foreground mb-1">
                            {course.details}
                          </div>
                          <div className="text-xs text-muted-foreground italic">
                            {course.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6 flex-1">
                      <h4 className="font-bold mb-3">孩子能做到：</h4>
                      <div className="space-y-2">
                        {pathway.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CircleCheck className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="bg-white/80 p-4 rounded-lg border-l-4 border-primary mb-6">
                      <p className="text-sm leading-relaxed">
                        {pathway.highlight}
                      </p>
                    </div>

                    {/* Inquiry Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:opacity-90 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:translate-y-[-2px] transition-all"
                      onClick={() => handleInquire(pathway.title)}
                    >
                      {i18n.language === 'zh' ? '立即咨询' : 'Inquire Now'}
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