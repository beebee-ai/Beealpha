import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Outcome } from "./components/outcome";
import { CourseMode } from "./components/course-mode";
import { CoursePaths } from "./components/course-paths";
import { WhyWhat } from "./components/why-what";
import { CoreValues } from "./components/core-values";
import { StudentWorks } from "./components/student-works";
import { Teachers } from "./components/teachers";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { AboutUs } from "./components/about-us";
import { AllMentors } from "./components/all-mentors";
import { InviteCodeModal } from "./components/invite-code-modal";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  const [showAllMentors, setShowAllMentors] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  
  const handleOpenAllMentors = () => {
    // 检查是否已经验证过邀请码
    const isVerified = localStorage.getItem('mentorAccessVerified') === 'true';
    if (isVerified) {
      setShowAllMentors(true);
    } else {
      setShowInviteModal(true);
    }
  };

  const handleInviteSuccess = () => {
    setShowInviteModal(false);
    setShowAllMentors(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Outcome />
        <CourseMode />
        <CoursePaths />
        <WhyWhat />
        <CoreValues />
        <StudentWorks />
        <Teachers onViewAll={handleOpenAllMentors} />
        <AboutUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      {showAllMentors && (
        <AllMentors onClose={() => setShowAllMentors(false)} />
      )}

      <InviteCodeModal 
        isOpen={showInviteModal} 
        onClose={() => setShowInviteModal(false)}
        onSuccess={handleInviteSuccess}
      />
    </div>
  );
}