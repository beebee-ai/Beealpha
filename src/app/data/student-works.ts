const S3_BASE_URL =
  "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/";

const chineseWordSnackImg1 = `${S3_BASE_URL}wordSnack-1.png`;
const chineseWordSnackImg2 = `${S3_BASE_URL}wordSnack-2.png`;
const pdSelectionImg = `${S3_BASE_URL}pdselection-1.png`;
const relabImg = `${S3_BASE_URL}relabai.png`;
const propertyAiImg = `${S3_BASE_URL}propertyAI-1.png`;
const projectEchoImg1 = `${S3_BASE_URL}jaxsen.jpg`;
const rowingProImg = `${S3_BASE_URL}rowingPro1.png`;
const rowingProDashboardImg = `${S3_BASE_URL}rowingPro2.png`;
const healthyEatingImg1 = `${S3_BASE_URL}healthyEating1.png`;
const healthyEatingImg2 = `${S3_BASE_URL}healthyEating2.png`;
const lifeCalendarDemoImg = `${S3_BASE_URL}studycalender-1.png`;
const lifeCalendarUiImg = `${S3_BASE_URL}studycalender-2.png`;
const traqrImg1 = `${S3_BASE_URL}mytraqr1.png`;
const traqrImg2 = `${S3_BASE_URL}mytraqr2.png`;
const overflowImg1 = `${S3_BASE_URL}overflow1.png`;
const overflowImg2 = `${S3_BASE_URL}overflow2.png`;
const yuqiaoGlobalImg = `${S3_BASE_URL}yq1.png`;
const yuqiaoPianoImg = `${S3_BASE_URL}yq2.png`;
const aloftImg1 = `${S3_BASE_URL}aloft1.png`;
const aloftImg2 = `${S3_BASE_URL}aloft2.png`;
const aloftImg3 = `${S3_BASE_URL}aloft3.png`;
const eggPricingImg = `${S3_BASE_URL}terry.png`;
const smartCollegeImg = `${S3_BASE_URL}jay.png`;

export interface StudentWork {
  images: string[];
  url: string;
  isMobile?: boolean; // Optional flag to indicate if the project is mobile-focused
}

export const studentWorks: StudentWork[] = [
  {
    images: [chineseWordSnackImg1, chineseWordSnackImg2],
    url: "https://chinesewordsnack.netlify.app/",
    isMobile: true,
  },
  {
    images: [pdSelectionImg],
    url: "https://www.pdselection.com/",
  },
  {
    images: [relabImg],
    url: "https://relabai.netlify.app",
  },
  {
    images: [propertyAiImg],
    url: "https://aipropertyagent.netlify.app/",
  },
  {
    images: [projectEchoImg1],
    url: "https://changepr0jectecho.uk",
  },
  {
    images: [rowingProImg, rowingProDashboardImg],
    url: "https://crew-trainer.com",
  },
  {
    images: [healthyEatingImg1, healthyEatingImg2],
    url: "https://healthyeating365.netlify.app/",
  },
  {
    images: [lifeCalendarDemoImg, lifeCalendarUiImg],
    url: "https://studycalender.netlify.app/",
  },
  {
    images: [traqrImg1, traqrImg2],
    url: "https://mytraqr.com",
  },
  {
    images: [overflowImg1, overflowImg2],
    url: "https://overflow.cash",
  },
  {
    images: [yuqiaoGlobalImg, yuqiaoPianoImg],
    url: "https://yuqiaochen.uk",
  },
  {
    images: [aloftImg1, aloftImg2, aloftImg3],
    url: "https://aloft.gift",
  },
  {
    images: [eggPricingImg],
    url: "https://eggpricingnz.netlify.app/",
  },
  {
    images: [smartCollegeImg],
    url: "https://smartcollegeadvisor.netlify.app/",
  },
];