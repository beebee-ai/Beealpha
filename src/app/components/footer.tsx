import { Mail, MapPin, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const logo =
  "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/logo.png";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="BEEBEE AI-Alpha Logo"
                className="w-8 h-8"
              />
              <span className="font-bold text-xl text-white">
                {t("footer.brand")}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#outcome"
                  className="hover:text-primary transition-colors"
                >
                  {t("navbar.outcome")}
                </a>
              </li>
              <li>
                <a
                  href="#course"
                  className="hover:text-primary transition-colors"
                >
                  {t("navbar.course")}
                </a>
              </li>
              <li>
                <a
                  href="#student-works"
                  className="hover:text-primary transition-colors"
                >
                  {t("navbar.works")}
                </a>
              </li>
              <li>
                <a
                  href="#teachers"
                  className="hover:text-primary transition-colors"
                >
                  {t("navbar.teachers")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  {t("navbar.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-primary transition-colors"
                >
                  {t("navbar.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:nicho.shi@beebee.a"
                  className="hover:text-primary transition-colors"
                >
                  nicho.shi@beebee.ai
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:brinny@beebee.ai"
                  className="hover:text-primary transition-colors"
                >
                  brinny@beebee.ai
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.locationZh")}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.locationNz")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {currentYear} {t("footer.brand")}.{" "}
            {t("footer.rights")}
          </p>
          <p className="mt-2 text-gray-500">
            {t("footer.empower")}
          </p>
        </div>
      </div>
    </footer>
  );
}