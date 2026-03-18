import React, { useState, useEffect } from "react";
import "../style/MainNav.css";

const NAV_ITEMS = [
  { id: "aboutMe",   label: "About",      num: "01" },
  { id: "experience",label: "Experience", num: "02" },
  { id: "skills",    label: "Skills",     num: "03" },
  { id: "projects",  label: "Projects",   num: "04" },
  { id: "contactme", label: "Contact",    num: "05" },
];

const scrollTo = (id) => {
  if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MainNav = ({ isDark, toggleTheme }) => {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ScrollSpy via IntersectionObserver */
  useEffect(() => {
    const targets = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="sidenav">
        {/* Logo / Name */}
        <button className="sidenav-logo" onClick={() => handleNav("top")}>
          <span className="sidenav-initials">JC</span>
          <div className="sidenav-identity">
            <span className="sidenav-name">Jay Chiang</span>
            <span className="sidenav-role">Data Engineer</span>
          </div>
        </button>

        {/* Nav links */}
        <nav className="sidenav-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`sidenav-link ${active === item.id ? "sidenav-link--active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="sidenav-link-num">{item.num}</span>
              <span className="sidenav-link-label">{item.label}</span>
              <span className="sidenav-link-bar" />
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="sidenav-social">
          <a href="https://github.com/JayChiang17" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/jay-chiang-9054001a7/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:chiang.mengchieh@gmail.com" title="Email">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.9.725-1.636 1.636-1.636h.749L12 10.87 21.615 3.82h.749A1.636 1.636 0 0124 5.457z"/>
            </svg>
          </a>
        </div>

        {/* Theme toggle */}
        <button
          className="sidenav-theme-btn"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? (
            /* Sun icon */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>

        {/* Vertical progress line */}
        <div className="sidenav-line" />
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="mobile-nav">
        <button className="mobile-nav-brand" onClick={() => handleNav("top")}>
          <span className="sidenav-initials sidenav-initials--sm">JC</span>
          <span className="sidenav-name">Jay Chiang</span>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button className="mobile-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>
        <button className="mobile-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
        </div>
        {mobileOpen && (
          <div className="mobile-menu">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} className={`mobile-menu-link ${active === item.id ? "active" : ""}`} onClick={() => handleNav(item.id)}>
                <span>{item.num}</span>{item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MainNav;
