import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SEO() {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith('en');

  const seoData = {
    zh: {
      title: 'BEE ALPHA - 用 AI 搭建真实工作流',
      description: 'BEE ALPHA 是面向青少年的 AI 教育训练营，围绕学习、升学与真实工作场景中的任务，帮助学员理解真实问题、学习 AI 工具使用与工作流搭建，并形成可展示的真实产出。',
      keywords: '青少年 AI 学习, BEE ALPHA, AI 教育训练营, AI 工作流搭建, AI 工具使用, 真实任务实训, 学习工作流, 升学项目作品, AI 项目实战, 真实作品产出, AI 学习闭环, BEEBEE AI',
      ogTitle: 'BEE ALPHA - 用 AI 搭建真实工作流',
      ogDescription: 'BEE ALPHA 是面向青少年的 AI 教育训练营，帮助学员围绕学习、升学与真实工作场景中的任务，学习使用 AI 工具搭建工作流，并形成可展示的真实产出。',
    },
    en: {
      title: 'BEE ALPHA - Build Real Workflows with AI',
      description: 'BEE ALPHA is an AI education bootcamp for teens, built around tasks from learning, school admissions, and real work scenarios. It helps students understand real problems, learn to use AI tools, build workflows, and create demonstrable real outputs.',
      keywords: 'teen AI course,youth AI education,AI bootcamp,AI workflow building,AI tools for students,real-world task training,learning workflows,school admissions portfolio,AI project practice,demonstrable student outputs,online AI course,teen STEM education,BEE ALPHA,BEEBEE AI',
      ogTitle: 'BEE ALPHA - Build Real Workflows with AI',
      ogDescription: 'BEE ALPHA is an AI education bootcamp for teens, helping students learn to use AI tools to build workflows around tasks from learning, school admissions, and real work scenarios, and create demonstrable real outputs.',
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
