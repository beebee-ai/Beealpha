const S3_BASE_URL =
  "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/";

// New Genesis Camp Cohort 1 works
const nicolasChallengeRandomizer1 = `${S3_BASE_URL}nicolas-challenge-randomizer-01.jpg`;
const nicolasChallengeRandomizer2 = `${S3_BASE_URL}nicolas-challenge-randomizer-02.jpg`;
const nicolasChallengeRandomizer3 = `${S3_BASE_URL}nicolas-challenge-randomizer-03.jpg`;
const teamVoiceAi1 = `${S3_BASE_URL}team-voice-ai-01.jpg`;
const teamVoiceAi2 = `${S3_BASE_URL}team-voice-ai-02.jpg`;
const teamVoiceAi3 = `${S3_BASE_URL}team-voice-ai-03.jpg`;
const weiyaLuminaAcademy1 = `${S3_BASE_URL}weiya-lumina-academy-01.jpg`;
const weiyaLuminaAcademy2 = `${S3_BASE_URL}weiya-lumina-academy-02.jpg`;
const weiyaLuminaAcademy3 = `${S3_BASE_URL}weiya-lumina-academy-03.jpg`;

const chineseWordSnackImg1 = `${S3_BASE_URL}wordSnack_1.png`;
const chineseWordSnackImg2 = `${S3_BASE_URL}wordSnack_2.png`;
const chineseWordSnackImg3 = `${S3_BASE_URL}wordSnack_3.png`;
const chineseWordSnackImg4 = `${S3_BASE_URL}wordSnack_4.png`;
const chineseWordSnackImg5 = `${S3_BASE_URL}wordSnack_5.png`;
const pdSelectionImg = `${S3_BASE_URL}pdselection-1.png`;
const relabImg = `${S3_BASE_URL}relabai.png`;
const propertyAiImg = `${S3_BASE_URL}propertyAI-1.png`;
const projectEchoImg1 = `${S3_BASE_URL}jaxsen_1.png`;
const projectEchoImg2 = `${S3_BASE_URL}jaxsen_2.png`;
const rowingProImg1 = `${S3_BASE_URL}rowingPro_1.png`;
const rowingProImg2 = `${S3_BASE_URL}rowingPro_2.png`;
const rowingProImg3 = `${S3_BASE_URL}rowingPro_3.png`;
const healthyEatingImg1 = `${S3_BASE_URL}healthyEating_1.png`;
const healthyEatingImg2 = `${S3_BASE_URL}healthyEating_2.png`;
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
  // Genesis Camp Cohort 1 - Top 3 newest works
  {
    images: [nicolasChallengeRandomizer1, nicolasChallengeRandomizer2, nicolasChallengeRandomizer3],
    url: "https://challengerandomizer.netlify.app/",
  },
  {
    images: [teamVoiceAi1, teamVoiceAi2, teamVoiceAi3],
    url: "https://stalwart-bavarois-92bfc5.netlify.app/",
  },
  {
    images: [weiyaLuminaAcademy1, weiyaLuminaAcademy2, weiyaLuminaAcademy3],
    url: "https://luminacadamey.netlify.app/",
  },
  // Other works
  {
    images: [chineseWordSnackImg4, chineseWordSnackImg5],
    url: "https://chinesewordsnack.netlify.app/",
    isMobile: false,
  },
  {
    images: [pdSelectionImg],
    url: "https://www.pdselection.com/",
  },
  {
    images: [rowingProImg1, rowingProImg2, rowingProImg3],
    url: "https://crew-trainer.com",
  },
  {
    images: [propertyAiImg],
    url: "https://aipropertyagent.netlify.app/",
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
  // Moved to page 2
  {
    images: [relabImg],
    url: "https://relabai.netlify.app",
  },
  {
    images: [projectEchoImg1, projectEchoImg2],
    url: "https://changepr0jectecho.uk",
  },
  {
    images: [healthyEatingImg1, healthyEatingImg2],
    url: "https://healthyeating365.netlify.app/",
  },
];