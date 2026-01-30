import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Globe,
  User,
  Briefcase,
  Brain,
  Quote,
} from "lucide-react";

export function AboutUs() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";

  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#151a22] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#f7931e]">
              {isEn ? "ABOUT US" : "关于 我们"}
            </h2>
            <div className="h-1 w-20 bg-[#f7931e] mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* About BEEBEE AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111] p-8 sm:p-12 rounded-2xl border border-gray-800 hover:border-[#f7931e]/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-[#f7931e]" />
              <h3 className="text-xl font-bold text-gray-200">
                {isEn ? "About BEEBEE AI" : "关于 BEEBEE AI"}
              </h3>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                {isEn
                  ? "BEEBEE AI LTD is a New Zealand based international tech company with teams distributed across New Zealand, UK, Canada, USA, Thailand, and China. Focused on GenAI intelligent product development, it was founded in 2022 by veterans with over 20 years of internet/IT experience and 8 years of AI full-modal application development experience."
                  : "BEEBEE AI LTD 是一家总部位于新西兰的国际科技公司，团队分布在新西兰、英国、加拿大、美国、泰国、中国。公司专注于GenAI智能产品开发，由具有20年以上互联网/IT经验及8年AI全模态应用开发经验的资深人士于2022年创立。"}
              </p>
              <p>
                {isEn
                  ? "The company's mission is to lift personal and organizational productivity via 'AI x Private Knowledge'. Its core product 2Brain (Second Brain), launched in 2024, allows enterprises to import multi-modal content (documents, audio/video, websites, chat logs) to form a private knowledge base, visualizing it as a dynamic knowledge graph in real-time. It enables deployment of RAG (Retrieval-Augmented Generation) based chatbots and various business agents within minutes."
                  : "公司的使命是通过“AI x 私域知识”提升个人与组织的生产力。其核心产品2Brain（第二大脑）于2024年推出，可以让企业导入多模态内容（文档、音频/视频、网站、聊天记录）形成私有知识库，并实时可视化为动态知识图谱，几分钟内即可部署基于RAG（检索增强生成）的聊天机器人和各类业务智能体。"}
              </p>
              <p>
                {isEn
                  ? "2Brain is already serving dozens of global clients for enterprise-level application implementation, redefining how knowledge is applied in various scenarios ranging from training programs for Fortune 500 companies to key customer support assistants."
                  : "2Brain已经为全球数十家客户提供企业级应用落地服务，正在从世界500强企业的培训项目到关键客户支持助手等多种场景中，重新定义知识的应用方式。"}
              </p>
            </div>
          </motion.div>

          {/* Founder Introduction - Updated to match image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-[#f7931e]" />
              <h3 className="text-xl font-bold text-gray-200">
                {isEn ? "Founder Introduction" : "创始人介绍"}
              </h3>
            </div>

            <div className="bg-[#111] p-8 sm:p-12 rounded-2xl border border-gray-800 hover:border-[#f7931e]/30 transition-colors space-y-12">
              {/* Header Profile */}
              <div className="flex flex-row items-start gap-6">
                {/* Left Side: Image (mobile: + Name + Title, desktop: image only) */}
                <div className="flex flex-col items-center text-center flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#f7931e]/20 mb-4 md:mb-0">
                    <img
                      src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_pin.png"
                      alt="Pin Zhou"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Mobile only: Name + Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 md:hidden">
                    {isEn ? "Pin Zhou" : "周品"}
                  </h4>
                  <div className="text-[#f7931e] font-medium text-sm sm:text-base md:hidden">
                    {isEn ? "Founder & CEO" : "创始人 & CEO"}
                  </div>
                </div>

                {/* Right Side: mobile (description only), desktop (name + title + description) */}
                <div className="flex-1 text-left">
                  {/* Desktop only: Name + Title */}
                  <h4 className="hidden md:block text-2xl font-bold text-white mb-2">
                    {isEn ? "Pin Zhou" : "周品"}
                  </h4>
                  <div className="hidden md:block text-[#f7931e] font-medium mb-6">
                    {isEn ? "Founder & CEO" : "创始人 & CEO"}
                  </div>

                  {/* Description for all screens */}
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {isEn
                      ? "Mr. Pin Zhou is a serial entrepreneur with over 20 years of experience in IT and internet product operations. As one of the first entrepreneurs in the global GPT era, he has 8 years of relevant experience in the field of AI and has always maintained a strong curiosity for new technologies."
                      : "周品先生是一位拥有超过20年IT和互联网产品运营创业经验的连续创业者，作为全球第一批GPT时代的创业者，他在人工智能领域拥有8年的相关经验，始终保持着对新技术的强烈好奇心。"}
                  </p>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="bg-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-5 h-5 text-[#f7931e]" />
                  <h5 className="text-lg font-bold text-[#f7931e]">
                    {isEn
                      ? "Professional Experience"
                      : "职业经历"}
                  </h5>
                </div>
                <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#f7931e] mt-1.5">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        BEEBEE AI
                      </strong>{" "}
                      -
                      {isEn
                        ? " Founded in 2022, headquartered in New Zealand, with teams distributed across NZ, UK, Canada, USA, Thailand, and China. Focused on GenAI and knowledge management product development."
                        : " 2022年创立，总部新西兰，团队分布于新西兰、英国、加拿大、美国、泰国和中国，聚焦人工智能与知识管理产品研发"}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f7931e] mt-1.5">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        {isEn ? "Cheetah Mobile" : "猎豹移动"}
                      </strong>{" "}
                      -
                      {isEn
                        ? " Senior VP, responsible for Mobile App + AI business development."
                        : " 董事高级副总裁，负责移动App+AI业务发展"}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f7931e] mt-1.5">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        {isEn ? "Quwan Network" : "趣玩网"}
                      </strong>{" "}
                      -
                      {isEn
                        ? " Founder, possessing rich practical experience in vertical e-commerce."
                        : " 创始人，在垂直电商领域拥有丰富的实战经验"}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f7931e] mt-1.5">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        {isEn ? "Baidu" : "百度"}
                      </strong>{" "}
                      -
                      {isEn
                        ? " Director of Alliance + Client, responsible for expanding search engine related businesses."
                        : " 联盟+客户端总监，负责搜索引擎相关业务的拓展"}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f7931e] mt-1.5">
                      •
                    </span>
                    <span>
                      <strong className="text-white">
                        {isEn
                          ? "Top Software & Hero"
                          : "托普软件 & 豪杰超级解霸"}
                      </strong>{" "}
                      -
                      {isEn
                        ? " Early career, accumulated rich experience in toB and toC software product management."
                        : " 早期经历，积累了丰富的toB和toC软件产品管理经验"}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Philosophy */}
              <div className="bg-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-5 h-5 text-[#f7931e]" />
                  <h5 className="text-lg font-bold text-[#f7931e]">
                    {isEn
                      ? "Entrepreneurial Philosophy"
                      : "创业理念"}
                  </h5>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {isEn
                    ? "As a curious serial entrepreneur, Mr. Zhou constantly explores the boundaries between technology and business. At the same time, he is a father willing to share AI education practices, committed to passing on his experience and insights in the field of artificial intelligence to the next generation, finding the perfect balance between technological innovation and educational practice."
                    : "作为一位充满好奇心的连续创业者，周品先生不断探索技术与商业的边界。同时，他也是一位愿意分享AI教育实践的父亲，致力于将自己在人工智能领域的经验和见解传递给下一代，在技术创新与教育实践之间找到了完美的平衡点。"}
                </p>
              </div>

              {/* Quote */}
              <div className="relative pl-8 border-l-4 border-[#f7931e] py-2">
                <Quote className="absolute top-0 left-0 -ml-3 -mt-4 w-8 h-8 text-[#f7931e] bg-[#111] p-1" />
                <p className="text-lg sm:text-xl font-medium text-white italic mb-4">
                  “
                  {isEn
                    ? "AI makes lifelong learning easier, questioning allows us to surpass AI, and building products validates learning."
                    : "AI让我们更容易终生学习，提问让我们超越AI，做出产品才能验证学习。"}
                  ”
                </p>
                <div className="text-right text-[#f7931e] font-medium">
                  —— {isEn ? "Pin Zhou" : "周品"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}