import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { homeMentors, homeExperts, Mentor } from "../data/mentors";

interface TeachersProps {
  onViewAll?: () => void;
}

export function Teachers({ onViewAll }: TeachersProps) {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<"mentors" | "experts">("mentors");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  
  const isEn = i18n.language === 'en';

  const currentTeam: Mentor[] = activeTab === "mentors" ? homeMentors : homeExperts;

  // Handle Resize for itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      // Mobile: Show 2 items per page (1 column x 2 rows)
      // Desktop: Show 6 items per page (3 columns x 2 rows)
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate pages
  const totalPages = Math.ceil(currentTeam.length / itemsPerPage);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  // Ensure current page is valid after resize
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = currentTeam.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="teachers"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0e14]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              {t("teachers.title")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("teachers.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#1a1f2e] rounded-lg p-1">
            <button
              onClick={() => setActiveTab("mentors")}
              className={`px-8 py-3 rounded-lg transition-all ${
                activeTab === "mentors"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("teachers.tabs.mentors")}
            </button>
            <button
              onClick={() => setActiveTab("experts")}
              className={`px-8 py-3 rounded-lg transition-all ${
                activeTab === "experts"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("teachers.tabs.experts")}
            </button>
          </div>
        </div>

        {/* Team Grid with Pagination */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${currentPage}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 min-h-[300px]"
          >
            {currentItems.map((member, index) => {
              if (member.isInviteCard) {
                 return (
                  <div
                    key={`invite-${index}`}
                    onClick={onViewAll}
                    className="group relative bg-[#1a1f2e] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center items-center text-center p-8 border border-dashed border-gray-700 hover:border-primary/50 h-full min-h-[240px] cursor-pointer"
                  >
                     <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                       <ArrowRight className="w-8 h-8 text-primary" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">
                       {isEn ? "View All Mentors" : "查看所有导师"}
                     </h3>
                     <p className="text-sm text-gray-400">
                       {isEn 
                         ? "Click to see detailed profiles of our full mentor team." 
                         : "点击查看导师团队详细介绍"}
                     </p>
                  </div>
                 );
              }

              return (
                <div
                  key={member.id}
                  className="group bg-[#1a1f2e] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-row h-full border border-white/5 hover:border-primary/20 min-h-[240px]"
                >
                  {/* Left Side: Image (Vertical Portrait) */}
                  <div className="w-[140px] sm:w-[180px] flex-shrink-0 relative bg-[#151925] flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex-1 flex flex-col p-4 sm:p-5 relative z-10 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs text-primary mb-2 font-medium uppercase tracking-wide leading-tight line-clamp-2">
                      {isEn ? member.title.en : member.title.zh}
                    </p>
                    <div className="mb-3 flex-1 min-h-0">
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-4">
                        {isEn ? member.bio.en : member.bio.zh}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {(isEn ? member.expertise.en : member.expertise.zh).slice(0, 3).map((tag, i) => { 
                        const colors = [
                          "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                          "bg-green-500/10 text-green-400 border-green-500/20",
                          "bg-blue-500/10 text-blue-400 border-blue-500/20",
                        ];
                        return (
                          <span
                            key={i}
                            className={`text-[10px] px-1.5 py-0.5 rounded border ${colors[i % colors.length]} whitespace-nowrap`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                      {/* Removed the +N badge logic here */}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-[#1a1f2e] text-white hover:bg-primary transition-colors disabled:opacity-50"
            disabled={totalPages <= 1}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === i ? "bg-primary w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-[#1a1f2e] text-white hover:bg-primary transition-colors disabled:opacity-50"
            disabled={totalPages <= 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}