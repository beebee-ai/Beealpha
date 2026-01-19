import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SEO() {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith('en');

  const seoData = {
    zh: {
      title: 'BEE ALPHA - 用 AI 做出真实应用',
      description: 'BEE ALPHA 是面向青少年的 AI 教育训练营，无需编程基础，从第一节课起就用语言驱动 AI 完成真实项目。课程强调小班陪练、真实产出导向和可迁移的未来能力，帮助学员理解 AI、设计工作流，并独立完成可展示的 AI 应用。',
      keywords: '青少年 AI 学习, BEE ALPHA, AI 教育训练营, AI 项目实战, 小班陪练, 无摩擦学习, AI 驯化, 可迁移能力, 真实作品产出, AI 学习闭环, BEEBEE AI',
      ogTitle: 'BEE ALPHA - 用 AI 做出真实应用',
      ogDescription: 'BEE ALPHA 是面向青少年的 AI 教育训练营，无需编程基础，从第一节课起就用语言驱动 AI 完成真实项目。课程强调小班陪练、真实产出导向和可迁移的未来能力，帮助学员理解 AI、设计工作流，并独立完成可展示的 AI 应用。',
    },
    en: {
      title: 'BEE ALPHA - Build Real Apps with AI',
      description: 'No coding background needed. No rote memorization. Start building real apps with AI from day one. Evolve from "using AI" to "creating products"',
      keywords: 'teen AI course,youth AI programming,AI bootcamp,teen coding,AI product development,middle school AI,beginner AI learning,AI thinking training,New Zealand AI education,online AI course,teen STEM education,practical AI course,no-code AI,Bee Alpha,BEEBEE AI',
      ogTitle: 'BEE ALPHA - Build Real Apps with AI',
      ogDescription: 'No coding background needed. Start building real apps with AI from day one. Evolve from "using AI" to "creating products"',
    },
  };

  const data = isEn ? seoData.en : seoData.zh;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={data.ogTitle} />
      <meta property="og:description" content={data.ogDescription} />
      <meta property="og:locale" content={isEn ? 'en_US' : 'zh_CN'} />

      {/* Twitter */}
      <meta property="twitter:title" content={data.ogTitle} />
      <meta property="twitter:description" content={data.ogDescription} />

      {/* Additional Meta Tags */}
      <meta name="language" content={isEn ? 'English' : 'Chinese'} />
      <meta name="author" content="BEE ALPHA" />
    </Helmet>
  );
}