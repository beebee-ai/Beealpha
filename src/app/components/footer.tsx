import { Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-bold text-xl text-white">
                BEEBEE AI-Alpha
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              让青少年无摩擦地用 AI 做出真实应用，掌握未来的工作方式。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#outcome" className="hover:text-primary transition-colors">
                  课程价值
                </a>
              </li>
              <li>
                <a href="#course" className="hover:text-primary transition-colors">
                  课程结构
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-primary transition-colors">
                  学员作品
                </a>
              </li>
              <li>
                <a href="#teachers" className="hover:text-primary transition-colors">
                  导师团队
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  常见问题
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@beebee-alpha.com"
                  className="hover:text-primary transition-colors"
                >
                  info@beebee-alpha.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>新西兰及全球在线</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://bee-alpha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  bee-alpha.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {currentYear} BEEBEE AI-Alpha. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500">
            Empowering the next generation with AI
          </p>
        </div>
      </div>
    </footer>
  );
}
