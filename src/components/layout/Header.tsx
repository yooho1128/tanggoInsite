"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "회사소개",
    items: [
      { label: "회사개요", href: "#about" },
      { label: "연혁", href: "#history" },
    ],
  },
  {
    label: "서비스",
    items: [
      { label: "서비스 안내", href: "#services" },
      { label: "서비스 신청", href: "#apply" },
    ],
  },
  {
    label: "솔루션",
    items: [
      { label: "Tango PDF", href: "#pdf" },
      { label: "Tango Batch", href: "#batch" },
      { label: "Tango Editor", href: "#editor" },
      { label: "MooN AI OCR", href: "#moon" },
    ],
  },
  {
    label: "문의하기",
    items: [{ label: "문의하기", href: "#contact" }],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setOpenMobileMenu(null);

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-violet-100"
          : "bg-white/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight transition-colors text-slate-950">
              탱고인사이트
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors">
                  {item.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 rounded-2xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-xl shadow-blue-500/10 p-2">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.href)}
                        className="block w-full text-left px-4 py-3 rounded-xl text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-500 hover:to-blue-400 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
            >
              무료 상담
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-violet-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-violet-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === item.label ? null : item.label
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-800 font-semibold rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openMobileMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMobileMenu === item.label && (
                  <div className="mt-1 ml-3 border-l border-violet-100 pl-3">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.href)}
                        className="block w-full text-left px-3 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-violet-50 hover:text-violet-600 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold transition-all text-center"
            >
              무료 상담 문의
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}