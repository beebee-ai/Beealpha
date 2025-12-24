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
emailjs.init("B2gEaR0ySBdY6MP21");

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
      message: i18n.language === 'zh' ? "我想咨询BEE Alpha课程，请联系我。" : "I would like to inquire about BEE Alpha courses, please contact me."
    }
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    const currentLang = i18n.language === 'zh' ? 'CN' : 'EN';

    const templateParams = {
      name: data.name,
      country: data.country,
      grade: data.age || (currentLang === 'CN' ? "未填写" : "Not specified"),
      "contact-email": data.email,
      message: data.message,
      camptype: courseName,
      submit_time: new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }),
      source_region: currentLang,
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
        "service_or46bak",
        "template_4ticelj",
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
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="font-bold text-primary mb-4 text-center">
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

          <DialogFooter className="gap-2 sm:gap-0 mt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="w-full sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800"
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
