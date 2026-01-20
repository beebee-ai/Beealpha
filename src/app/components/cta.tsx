import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { supabase } from "../../lib/supabase";

// Initialize EmailJS
emailjs.init("B2gEaR0ySBdY6MP21");

interface InquiryFormData {
  name: string;
  age?: string;
  country: string;
  email: string;
  message: string;
}

export function CTA() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    defaultValues: {
      message: isEn
        ? "I would like to inquire about BEE ALPHA courses, please contact me."
        : "我想咨询BEE ALPHA课程，请联系我。",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    const currentLang = isEn ? "EN" : "CN";
    const courseName = isEn
      ? "General Inquiry (CTA)"
      : "综合咨询 (CTA)";

    const templateParams = {
      name: data.name,
      country: data.country,
      grade:
        data.age ||
        (currentLang === "CN" ? "未填写" : "Not specified"),
      "contact-email": data.email,
      message: data.message,
      camptype: courseName,
      submit_time: new Date().toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
      }),
      source_region: currentLang,
    };

    try {
      // 1. Write to Supabase
      const { error: supabaseError } = await supabase
        .from("inquiries")
        .insert([
          {
            name: templateParams.name,
            country: templateParams.country,
            grade: templateParams.grade,
            contact_email: templateParams["contact-email"],
            message: templateParams.message,
            camptype: templateParams.camptype,
            submit_time: templateParams.submit_time,
            source_region: templateParams.source_region,
          },
        ]);

      if (supabaseError) {
        console.error("Supabase insert error:", supabaseError);
      }

      // 2. Send Email
      await emailjs.send(
        "service_or46bak",
        "template_4ticelj",
        templateParams,
      );

      toast.success(
        t(
          "cta.form.success",
          "Inquiry submitted successfully!",
        ),
      );
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        t(
          "cta.form.error",
          "Failed to submit inquiry. Please try again or email us directly.",
        ),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactEmails = [
    "nicho.shi@beebee.ai",
    "brinny@beebee.ai",
  ];

  return (
    <section
      id="cta"
      className="px-4 py-12 bg-gradient-to-br to-white sm:px-6 lg:px-8 from-primary/5 via-orange-50/30"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              {isEn
                ? "AI is here. The future looks bright"
                : "AI已至，未来可期"}
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {t("cta.subtitle")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-2">
          {/* Registration Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 bg-white rounded-2xl border shadow-lg border-border">
              <h3 className="mb-6 text-2xl font-bold text-center">
                {isEn
                  ? "Registration Consultation"
                  : "报名咨询"}
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="name">
                      {isEn ? "Learner's Name *" : "同学姓名 *"}
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: true })}
                      className={
                        errors.name ? "border-red-500" : ""
                      }
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="age">
                      {isEn
                        ? "Learner's Age (Optional)"
                        : "同学年龄 (选填)"}
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      {...register("age")}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="country">
                      {isEn ? "Country *" : "所在国家 *"}
                    </Label>
                    <Input
                      id="country"
                      {...register("country", {
                        required: true,
                      })}
                      className={
                        errors.country ? "border-red-500" : ""
                      }
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="email">
                      {isEn ? "Email *" : "电子邮件 *"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      placeholder="example@email.com"
                      className={
                        errors.email ? "border-red-500" : ""
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {isEn ? "Message *" : "咨询说明 *"}
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: true })}
                    rows={4}
                    className={
                      errors.message ? "border-red-500" : ""
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:opacity-90 mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? isEn
                      ? "Sending..."
                      : "发送中..."
                    : isEn
                      ? "Submit Inquiry"
                      : "立即咨询"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:mt-0"
          >
            <div className="space-y-4">
              <h3 className="mb-6 text-2xl font-bold">
                {isEn ? "Contact Methods" : "联系方式"}
              </h3>

              <div className="p-6 bg-white rounded-xl border shadow-sm transition-shadow border-border hover:shadow-md">
                <div className="flex gap-3 items-center mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">
                    {isEn ? "Contact Email" : "联系邮箱"}
                  </h4>
                </div>
                <div className="pl-0 space-y-4 sm:pl-12">
                  {contactEmails.map((email, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 items-center"
                    >
                      <Send className="w-4 h-4 text-gray-400" />
                      <a
                        href={`mailto:${email}`}
                        className="text-lg font-medium text-primary hover:underline"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}