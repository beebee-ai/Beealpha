import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq.items.0.q"),
      answer: t("faq.items.0.a"),
    },
    {
      question: t("faq.items.1.q"),
      answer: t("faq.items.1.a"),
    },
    {
      question: t("faq.items.2.q"),
      answer: t("faq.items.2.a"),
    },
    {
      question: t("faq.items.3.q"),
      answer: t("faq.items.3.a"),
    },
    {
      question: t("faq.items.4.q"),
      answer: t("faq.items.4.a"),
    },
    {
      question: t("faq.items.5.q"),
      answer: t("faq.items.5.a"),
    },
    {
      question: t("faq.items.6.q"),
      answer: t("faq.items.6.a"),
    },
    {
      question: t("faq.items.7.q"),
      answer: t("faq.items.7.a"),
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("faq.subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-white to-gray-50 border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-bold pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-wrap">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
            <p className="text-lg">
              {t("faq.more")}
              <a
                href="#cta"
                className="text-primary font-bold hover:underline ml-2"
              >
                {t("faq.contact")}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}