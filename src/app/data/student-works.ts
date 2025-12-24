import aloftImg from "figma:asset/39f00f67680a3eab67058c5fff830a0910959187.png";
import chineseWordSnackImg1 from "figma:asset/4ddd7c42d3dd280447181db1ecde9137539ab071.png";
import chineseWordSnackImg2 from "figma:asset/75640b5d570ed200cca5abc64bad1aa488b861de.png";
import docQueryImg from "figma:asset/ee03d91c4f9f521d847439908fc1024f7534b97b.png";
import eggPricingImg from "figma:asset/6fa074a549ae28819d28923af29a42df670aaa6b.png";
import healthyEatingImg1 from "figma:asset/51f288b04850e04a4f0819237ca8fdcab66bc3fb.png";
import healthyEatingImg2 from "figma:asset/f37270a993b7e12bf382c30518a68707e2cc711a.png";
import lifeCalendarDemoImg from "figma:asset/498865d900a946dc1190676b17b1f9ceb5a0e804.png";
import lifeCalendarUiImg from "figma:asset/1b66ae4fac637b9b14d905c5883bf706050ba142.png";
import overflowImg1 from "figma:asset/43b19b62a8a42dfde807f4ed186947d576175b9a.png";
import overflowImg2 from "figma:asset/253ceef5c1020e5aedd225e37a440c49d7dd21d0.png";
import pdSelectionImg from "figma:asset/57d1021739722fd3dd8c29b8435ab50bb46e1e11.png";
import propertyAiImg from "figma:asset/558169b466ddd3e0d0547f0308e5e3eac788cedc.png";
import relabImg from "figma:asset/7e93b213f57414f8c1b88e6ea3b94c766ad239ca.png";
import rowingProImg from "figma:asset/7783798df8a93c9a63daa29a1134895f6c7fb293.png";
import rowingProDashboardImg from "figma:asset/0dd3ab77b771a962dfdb854fc090981b7785351f.png";
import projectEchoImg1 from "figma:asset/adf2df8f34ac37e903f966432f4fdbb9184bc9f2.png";
import projectEchoImg2 from "figma:asset/b193e34e5df297a08210679c6a2cc9a5b3372c3c.png";
import projectEchoImg3 from "figma:asset/589574e4b0a42d1d7d64b289e324da23ee793b99.png";
import smartCollegeImg from "figma:asset/a5f80e07b23a9d4f78d97c7cecf6baa5ee274cff.png";
import traqrImg1 from "figma:asset/90f090ce05f4765a57f534d62061b7cb492744e6.png";
import traqrImg2 from "figma:asset/752d7b63e87783edcf7caf48158ff529d9ebcabe.png";
import yuqiaoGlobalImg from "figma:asset/9b2fe1b34dab7e03f4a734b8466e4ef88f837781.png";
import yuqiaoPianoImg from "figma:asset/476503e10e01b81dfa1fea2f6ae92199b4e7fcfb.png";

export interface StudentWork {
  images: string[];
  url: string;
}

export const studentWorks: StudentWork[] = [
  {
    images: [chineseWordSnackImg1, chineseWordSnackImg2],
    url: "https://chinesewordsnack.netlify.app/"
  },
  {
    images: [pdSelectionImg],
    url: "https://www.pdselection.com/"
  },
  {
    images: [relabImg],
    url: "https://relabai.netlify.app"
  },
  {
    images: [propertyAiImg],
    url: "https://aipropertyagent.netlify.app/"
  },
  {
    images: [projectEchoImg1, projectEchoImg2, projectEchoImg3],
    url: "https://changepr0jectecho.uk"
  },
  {
    images: [rowingProImg, rowingProDashboardImg],
    url: "https://crew-trainer.com"
  },
  {
    images: [healthyEatingImg1, healthyEatingImg2],
    url: "https://healthyeating365.netlify.app/"
  },
  {
    images: [lifeCalendarDemoImg, lifeCalendarUiImg],
    url: "https://studycalender.netlify.app/"
  },
  {
    images: [traqrImg1, traqrImg2],
    url: "https://mytraqr.com"
  },
  {
    images: [overflowImg1, overflowImg2],
    url: "https://overflow.cash"
  },
  {
    images: [yuqiaoGlobalImg, yuqiaoPianoImg],
    url: "https://yuqiaochen.uk"
  },
  {
    images: [aloftImg],
    url: "https://aloft.gift"
  },
  {
    images: [eggPricingImg],
    url: "https://eggpricingnz.netlify.app/"
  },
  {
    images: [smartCollegeImg],
    url: "https://smartcollegeadvisor.netlify.app/"
  },
];
