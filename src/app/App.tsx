import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Outcome } from "./components/outcome";
import { CourseStructure } from "./components/course-structure";
import { WhyWhat } from "./components/why-what";
import { WhatKidsCanDo } from "./components/what-kids-can-do";
import { StudentWorks } from "./components/student-works";
import { Teachers } from "./components/teachers";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Outcome />
        <CourseStructure />
        <WhyWhat />
        <WhatKidsCanDo />
        <StudentWorks />
        <Teachers />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
