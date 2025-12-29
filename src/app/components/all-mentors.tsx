import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { X, Quote } from "lucide-react";
import { detailedMentors as projectMentors, detailedExperts as professionalLecturers } from "../data/mentors";
import { useEffect, useState, useRef } from "react";

interface AllMentorsProps {
  onClose: () => void;
}

export function AllMentors({ onClose }: AllMentorsProps) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [activeMentorId, setActiveMentorId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter out the dummy "invite" cards/view all cards (ids 998, 999)
  const realProjectMentors = projectMentors.filter(m => !m.isInviteCard);
  const realProfessionalLecturers = professionalLecturers.filter(m => !m.isInviteCard);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Intersection Observer for scroll highlight
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const updateActiveItem = () => {
      const allMentorIds = [
        ...realProjectMentors.map(m => m.id),
        ...realProfessionalLecturers.map(m => m.id)
      ];

      let closestMentor: { id: number; distance: number } | null = null;

      allMentorIds.forEach((id) => {
        const element = document.getElementById(String(id));
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        // Calculate distance from the top of the scroll container
        const distanceFromTop = Math.abs(rect.top - containerRect.top);

        // Find the element closest to the top of the viewport
        if (!closestMentor || distanceFromTop < closestMentor.distance) {
          closestMentor = { id, distance: distanceFromTop };
        }
      });

      if (closestMentor) {
        setActiveMentorId(closestMentor.id);
      }
    };

    // Initial update
    setTimeout(updateActiveItem, 100);

    // Update on scroll
    scrollContainer.addEventListener('scroll', updateActiveItem);

    return () => {
      scrollContainer.removeEventListener('scroll', updateActiveItem);
    };
  }, [realProjectMentors, realProfessionalLecturers]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderMentorCard = (mentor: typeof projectMentors[0], gradientFrom: string, gradientTo: string, isExpert = false) => {
    const title = isEn ? mentor.title.en : mentor.title.zh;
    const bio = isEn ? mentor.bio.en : mentor.bio.zh;
    const details = mentor.details ? (isEn ? mentor.details.en : mentor.details.zh) : null;
    const quote = mentor.quote ? (isEn ? mentor.quote.en : mentor.quote.zh) : null;
    const expertise = mentor.expertise ? (isEn ? mentor.expertise.en : mentor.expertise.zh) : [];

    return (
      <div 
        key={mentor.id}
        id={String(mentor.id)}
        className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white`}
      >
        {/* Header Section with Gradient */}
        <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-1`}>
           <div className={`bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8`}>
             <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-2 text-[#2c1810]">
                    {mentor.name}
                  </h3>
                  <p className="font-bold mb-4 text-sm sm:text-base uppercase tracking-wide text-[#FF9D42]">
                     {title}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {bio}
                  </p>
                  
                  {expertise.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {expertise.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded text-xs font-medium border bg-orange-50 text-orange-600 border-orange-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
             </div>
           </div>
        </div>

        {/* Detailed HTML Content */}
        {details && (
          <div className="p-8 sm:p-10 bg-white border-t border-gray-100">
             <div 
               className="prose prose-slate max-w-none 
                 prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4 prose-headings:mt-8
                 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-li:text-gray-600 prose-li:mb-2
                 prose-strong:text-gray-900 prose-strong:font-semibold"
               dangerouslySetInnerHTML={{ __html: details }} 
             />
             
             {/* Quote Section */}
             {quote && (
               <div className="mt-10 relative pl-8 py-2">
                 <Quote className="absolute top-0 left-0 w-6 h-6 text-orange-400 opacity-50" />
                 <p className="text-lg font-medium text-gray-700 italic leading-relaxed">
                   "{quote}"
                 </p>
               </div>
             )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={scrollContainerRef} className="fixed inset-0 z-50 bg-[#f8f9fa] overflow-y-auto">
      {/* Header / Close Button */}
      <div className="fixed top-0 right-0 p-6 z-50">
        <button 
          onClick={onClose}
          className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 bg-white border-r border-gray-100 p-8 lg:fixed lg:h-full lg:overflow-y-auto z-40">
           <div className="mb-10">
             <h2 className="text-2xl font-bold mb-2">{isEn ? "Mentor Team" : "培训导师团队"}</h2>
             <p className="text-xs text-gray-400 whitespace-nowrap">
               {isEn ? "Gathering top AI experts to guide exploration." : "汇聚顶尖AI专家，引领探索实践之路"}
             </p>
           </div>
           
           <nav className="space-y-6">
             {/* Project Mentors Section */}
             <div>
               <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                 {isEn ? "Project Mentors" : "项目导师"}
               </h3>
               <ul className="space-y-2">
                 {realProjectMentors.map((mentor) => (
                   <li key={mentor.id}>
                     <button
                       onClick={() => {
                         const element = document.getElementById(String(mentor.id));
                         if (element) {
                           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                         }
                       }}
                       className={`block w-full text-left text-sm text-gray-600 hover:text-primary transition-colors py-1 ${activeMentorId === mentor.id ? 'text-primary font-semibold' : ''}`}
                     >
                       {mentor.name}
                     </button>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Expert Mentors Section */}
             <div>
               <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                 {isEn ? "Expert Mentors" : "专家导师"}
               </h3>
               <ul className="space-y-2">
                 {realProfessionalLecturers.map((mentor) => (
                   <li key={mentor.id}>
                     <button
                       onClick={() => {
                         const element = document.getElementById(String(mentor.id));
                         if (element) {
                           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                         }
                       }}
                       className={`block w-full text-left text-sm text-gray-600 hover:text-primary transition-colors py-1 ${activeMentorId === mentor.id ? 'text-primary font-semibold' : ''}`}
                     >
                       {mentor.name}
                     </button>
                   </li>
                 ))}
               </ul>
             </div>
           </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 p-4 sm:p-8 lg:p-16">
          <div className="max-w-4xl mx-auto space-y-20">
            
            {/* Project Mentors Section */}
            <section id="project-mentors">
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                {isEn ? "Project Mentors" : "项目导师"}
              </h2>
              <div className="space-y-12">
                {realProjectMentors.map((mentor) => 
                  renderMentorCard(mentor, "from-[#FF9D42]", "to-[#FFC582]", false)
                )}
              </div>
            </section>

            {/* Professional Mentors Section */}
            <section id="professional-mentors">
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                {isEn ? "Expert Mentors" : "专家导师"}
              </h2>
              <div className="space-y-12">
                {realProfessionalLecturers.map((mentor) => 
                  renderMentorCard(mentor, "from-[#FF9D42]", "to-[#FFC582]", true)
                )}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}