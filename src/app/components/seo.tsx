import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SEO() {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith('en');

  const seoData = {
    zh: {
      title: 'BEE ALPHA - 用 AI 做出真实应用',
      description: '不用编程基础，不靠死记硬背。从第一节课开始就能让 AI 帮您完成真实任务，从"会用 AI"进化成"能做出作品"',
      keywords: '青少年AI课程,少儿AI编程,AI训练营,青少年编程,AI产品开发,中学生AI课程,零基础AI学习,AI思维培养,新西兰AI教育,在线AI课程,青少年STEM教育,AI实战课程,无代码AI开发,Bee Alpha,BEEBEE AI',
      ogTitle: 'BEE ALPHA - 用 AI 做出真实应用',
      ogDescription: '不用编程基础，不靠死记硬背。从第一节课开始就能让 AI 帮您完成真实任务，从"会用 AI"进化成"能做出作品"',
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
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://beealpha.nz/" />
      <meta property="og:title" content={data.ogTitle} />
      <meta property="og:description" content={data.ogDescription} />
      <meta property="og:site_name" content="Bee Alpha" />
      <meta property="og:locale" content={isEn ? 'en_US' : 'zh_CN'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://beealpha.nz/" />
      <meta property="twitter:title" content={data.ogTitle} />
      <meta property="twitter:description" content={data.ogDescription} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={isEn ? 'English' : 'Chinese'} />
      <meta name="author" content="Bee Alpha" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical Link */}
      <link rel="canonical" href="https://beealpha.nz/" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/logo.png" />
      <link rel="apple-touch-icon" href="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/logo.png" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="zh" href="https://beealpha.nz/?lang=zh" />
      <link rel="alternate" hrefLang="en" href="https://beealpha.nz/?lang=en" />
      <link rel="alternate" hrefLang="x-default" href="https://beealpha.nz/" />
    </Helmet>
  );
}