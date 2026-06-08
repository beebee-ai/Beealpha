import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { supabase } from "../../lib/supabase";
import { useTranslation } from "react-i18next";

// Initialize EmailJS
emailjs.init("qZns4V5w0SwSNuOpU");

const INQUIRY_RECIPIENT_EMAIL = "service@beebee.ai, brinny@beebee.ai, pin@beebee.ai";
const INQUIRY_CC_EMAIL = "528573772@qq.com";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

interface InquiryFormData {
  name: string;
  age?: string;
  country: string;
  email: string;
  message: string;
}

export function InquiryModal({ isOpen, onClose, courseName }: InquiryModalProps) {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InquiryFormData>({
    defaultValues: {
      message: i18n.language === 'zh' ? "我想咨询BEE ALPHA课程，请联系我。" : "I would like to inquire about BEE ALPHA courses, please contact me."
    }
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    const currentLang = i18n.language === 'zh' ? 'CN' : 'EN';
    const submitTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const grade = data.age || (currentLang === 'CN' ? "未填写" : "Not specified");
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
      const { error: supabaseError } = await supabase.from("inquiries").insert([
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
        // Continue to send email even if Supabase fails
      }

      // 2. Send Email
      await emailjs.send(
        "service_beebeeai",
        "template_dynamic",
        templateParams
      );

      toast.success(t('cta.form.success', 'Inquiry submitted successfully!'));
      reset();
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(t('cta.form.error', 'Failed to submit inquiry. Please try again or email us directly.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {i18n.language === 'zh' ? '咨询表单' : 'Inquiry Form'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {i18n.language === 'zh' 
              ? '请填写下方信息，我们将尽快与您联系。' 
              : 'Please fill out the form below and we will contact you shortly.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-4">
          <div className="mb-4 font-bold text-center text-primary">
            {courseName}
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="name">
                {i18n.language === 'zh' ? '同学姓名 *' : "Learner's Name *"}
              </Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                className={errors.name ? "border-red-500" : ""}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="age">
                {i18n.language === 'zh' ? '同学年龄 (选填)' : "Learner's Age (Optional)"}
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
                {i18n.language === 'zh' ? '所在国家 *' : 'Country *'}
              </Label>
              <Input
                id="country"
                {...register("country", { required: true })}
                className={errors.country ? "border-red-500" : ""}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="email">
                {i18n.language === 'zh' ? '电子邮件 *' : 'Email *'}
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                placeholder="example@email.com"
                className={errors.email ? "border-red-500" : ""}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              {i18n.language === 'zh' ? '咨询说明 *' : 'Message *'}
            </Label>
            <Textarea
              id="message"
              {...register("message", { required: true })}
              rows={3}
              className={errors.message ? "border-red-500" : ""}
            />
          </div>

          <DialogFooter className="gap-2 mt-6 sm:gap-0">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="w-full text-gray-800 bg-gray-200 sm:w-1/2 hover:bg-gray-300"
            >
              {i18n.language === 'zh' ? '取消' : 'Cancel'}
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-1/2 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (i18n.language === 'zh' ? '发送中...' : 'Sending...') 
                : (i18n.language === 'zh' ? '提交' : 'Submit')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
