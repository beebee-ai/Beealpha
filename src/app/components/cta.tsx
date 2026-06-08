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
emailjs.init("qZns4V5w0SwSNuOpU");

const INQUIRY_RECIPIENT_EMAIL = "service@beebee.ai";
const INQUIRY_CC_EMAIL = "528573772@qq.com";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

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
    const submitTime = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
    });
    const grade =
      data.age ||
      (currentLang === "CN" ? "未填写" : "Not specified");
    const subject = `BEE ALPHA 训练营报名咨询 - ${data.name}`;

    const templateParams = {
      subject,
      to_email: INQUIRY_RECIPIENT_EMAIL,
      cc_email: INQUIRY_CC_EMAIL,
      from_name: "BEE ALPHA 官网",
      from_email: data.email,
      name: data.name,
      country: data.country,
      grade,
      "contact-email": data.email,
      reply_to: data.email,
      message: data.message,
      camptype: courseName,
      submit_time: submitTime,
      source_region: currentLang,
      body_html: `
        <div>
          <p>您收到一条来自 BEE ALPHA 官网的训练营咨询信息</p>
          <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          <p>👤 联系人信息</p>
          <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          <p>姓名：${escapeHtml(data.name)}</p>
          <p>邮箱：${escapeHtml(data.email)}</p>
          <p>年龄/年级：${escapeHtml(grade)}</p>
          <p>所在国家：${escapeHtml(data.country)}</p>
          <p>咨询课程：${escapeHtml(courseName)}</p>
          <p>语言区域：${escapeHtml(currentLang)}</p>
          <p>提交时间：${escapeHtml(submitTime)}</p>
          <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          <p>💬 咨询说明</p>
          <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
          <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          <p>此邮件由 BEE ALPHA 官网自动发送</p>
          <p>请在24小时内回复用户</p>
        </div>
      `,
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
        "service_beebeeai",
        "template_dynamic",
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
    "service@beebee.ai",
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
