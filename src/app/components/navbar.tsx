import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const logo = "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // 更准确的语言判断，支持 zh-CN, zh-TW 等变体
  const currentLanguageLabel = i18n.language?.startsWith('zh') ? '中文' : 'English';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: t("navbar.outcome"), id: "outcome" },
    { label: t("navbar.course"), id: "course" },
    { label: t("navbar.works"), id: "works" },
    { label: t("navbar.teachers"), id: "teachers" },
    { label: t("navbar.aboutUs"), id: "about" },
    { label: t("navbar.faq"), id: "faq" },
  ];

  const LanguageSelector = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 px-2">
          <Globe className="w-4 h-4" />
          <span>{currentLanguageLabel}</span>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('zh')} className={i18n.language?.startsWith('zh') ? 'bg-accent' : ''}>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')} className={i18n.language?.startsWith('en') ? 'bg-accent' : ''}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 group"
          >
            <img 
              src={logo} 
              alt="BEEBEE AI-Alpha Logo" 
              className="w-10 h-10 transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl">Bee Alpha</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <LanguageSelector />
            
            <Button onClick={() => scrollToSection("cta")}>{t("navbar.cta")}</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              className="md:hidden ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full"
              onClick={() => scrollToSection("cta")}
            >
              {t("navbar.cta")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}