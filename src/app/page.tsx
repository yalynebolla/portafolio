"use client";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --accent: #06b6d4;
          --accent-light: #67e8f9;
          --accent-dark: #0891b2;
          --bg: #f8f9fb;
          --dark: #0f172a;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--dark);
          overflow-x: hidden;
        }

        .font-display { font-family: 'Playfair Display', serif; }

        /* CURSOR GLOW */
        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          transform: translate(-50%, -50%);
          transition: left 0.3s ease, top 0.3s ease;
        }

        /* NAVBAR */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.4s ease;
        }
        nav.scrolled {
          background: rgba(248,249,251,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(6,182,212,0.15);
          padding: 12px 0;
        }
        nav.top { padding: 28px 0; }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 900;
          font-style: italic;
          color: var(--accent);
          letter-spacing: -1px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #64748b;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-links a:hover { color: var(--dark); }
        .nav-links a:hover::after { width: 100%; }

        .nav-cta {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          background: var(--dark);
          padding: 10px 22px;
          border-radius: 100px;
          transition: all 0.3s ease;
          border: 1.5px solid var(--dark);
        }
        .nav-cta:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 32px 80px;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        .hero-blob {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 0;
          animation: pulse-blob 8s ease-in-out infinite;
        }

        @keyframes pulse-blob {
          0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.7; }
          50% { transform: translateY(-50%) scale(1.1); opacity: 1; }
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(6,182,212,0.08);
          border: 1px solid rgba(6,182,212,0.25);
          color: var(--accent-dark);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
          animation: fadeInUp 0.6s ease both;
        }

        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: blink 2s ease infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 1.0;
          color: var(--dark);
          letter-spacing: -3px;
          margin-bottom: 8px;
          animation: fadeInUp 0.6s 0.1s ease both;
        }

        .hero-name span {
          color: var(--accent);
          font-style: italic;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.3rem;
          color: #94a3b8;
          margin-bottom: 24px;
          font-weight: 400;
          animation: fadeInUp 0.6s 0.2s ease both;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.8;
          max-width: 480px;
          margin-bottom: 40px;
          animation: fadeInUp 0.6s 0.3s ease both;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
          animation: fadeInUp 0.6s 0.4s ease both;
        }

        .btn-primary {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--dark);
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .btn-primary:hover {
          background: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(6,182,212,0.3);
        }
        .btn-primary svg { transition: transform 0.3s; }
        .btn-primary:hover svg { transform: translateX(3px); }

        .btn-outline {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--dark);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          border: 1.5px solid #cbd5e1;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* PHOTO */
        .hero-photo-wrap {
          display: flex;
          justify-content: center;
          position: relative;
          animation: fadeInRight 0.8s 0.3s ease both;
        }

        .photo-ring-outer {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          border: 1px dashed rgba(6,182,212,0.3);
          animation: spin-slow 20s linear infinite;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .photo-ring-inner {
          position: absolute;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.15);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .photo-circle {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid white;
          box-shadow: 0 30px 80px rgba(15,23,42,0.15), 0 0 0 1px rgba(6,182,212,0.2);
          z-index: 2;
          transition: transform 0.5s ease;
        }
        .photo-circle:hover { transform: scale(1.03); }
        .photo-circle img { width: 100%; height: 100%; object-fit: cover; }

        /* Floating tags */
        .float-tag {
          position: absolute;
          background: white;
          border: 1px solid rgba(6,182,212,0.2);
          border-radius: 12px;
          padding: 10px 16px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--dark);
          box-shadow: 0 8px 24px rgba(15,23,42,0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 3;
          white-space: nowrap;
        }
        .float-tag .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); }
        .float-tag-1 { bottom: 20px; left: -30px; animation: float1 4s ease-in-out infinite; }
        .float-tag-2 { top: 30px; right: -20px; animation: float2 4s ease-in-out infinite; }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }

        /* STATS STRIP */
        .stats-strip {
          background: var(--dark);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
        }
        .stats-strip::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }
        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
          font-style: italic;
        }
        .stat-label {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-top: 6px;
        }

        /* SOBRE MÍ */
        .sobre-mi {
          padding: 120px 32px;
          background: white;
          position: relative;
          overflow: hidden;
        }
        .sobre-mi::before {
          content: 'SOBRE';
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 14rem;
          font-weight: 900;
          color: rgba(6,182,212,0.04);
          top: 50%;
          left: -20px;
          transform: translateY(-50%);
          pointer-events: none;
          letter-spacing: -10px;
          white-space: nowrap;
        }
        .sobre-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        .section-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-label::before {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--accent);
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--dark);
          letter-spacing: -1px;
          position: sticky;
          top: 100px;
        }
        .sobre-text {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.9;
          margin-bottom: 20px;
        }
        .highlight {
          color: var(--dark);
          font-weight: 600;
          background: linear-gradient(180deg, transparent 60%, rgba(6,182,212,0.2) 60%);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        .skill-card {
          background: var(--bg);
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 3px;
          height: 0;
          background: var(--accent);
          transition: height 0.3s ease;
        }
        .skill-card:hover::before { height: 100%; }
        .skill-card:hover { border-color: rgba(6,182,212,0.3); transform: translateY(-3px); box-shadow: 0 12px 30px rgba(6,182,212,0.1); }
        .skill-icon { font-size: 1.5rem; margin-bottom: 10px; }
        .skill-name { font-weight: 700; font-size: 0.95rem; color: var(--dark); }
        .skill-desc { font-size: 0.82rem; color: #94a3b8; margin-top: 4px; }

        /* TOOLS */
        .tools-section {
          padding: 100px 32px;
          background: var(--bg);
        }
        .tools-inner { max-width: 1200px; margin: 0 auto; }
        .tools-header { text-align: center; margin-bottom: 60px; }
        .tools-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          color: var(--dark);
          letter-spacing: -2px;
          margin-bottom: 16px;
        }
        .tools-title em { color: var(--accent); font-style: italic; }
        .tools-subtitle { font-size: 1rem; color: #94a3b8; }
        .tools-marquee-wrap {
          overflow: hidden;
          -webkit-mask: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          mask: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          margin-bottom: 20px;
        }
        .tools-marquee {
          display: flex;
          gap: 16px;
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        .tools-marquee-rev {
          animation-direction: reverse;
          animation-duration: 30s;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tool-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          padding: 12px 22px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
          white-space: nowrap;
          transition: all 0.3s ease;
          cursor: default;
        }
        .tool-pill:hover { border-color: var(--accent); color: var(--accent); background: rgba(6,182,212,0.04); }
        .tool-pill span { font-size: 1.1rem; }

        /* CONTACTO */
        .contacto {
          padding: 120px 32px;
          background: var(--dark);
          position: relative;
          overflow: hidden;
        }
        .contacto-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .contacto-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .contacto-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .contacto-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .contacto-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 20px;
        }
        .contacto-title em { color: var(--accent); font-style: italic; }
        .contacto-sub { font-size: 1rem; color: #94a3b8; margin-bottom: 48px; line-height: 1.7; }
        .contacto-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          padding: 16px 30px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .contact-link:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(6,182,212,0.35);
        }
        .contact-link svg { opacity: 0.7; }
        .contact-link:hover svg { opacity: 1; }

        /* FOOTER */
        footer {
          background: #060d1a;
          padding: 28px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 900;
          font-style: italic;
          color: var(--accent);
        }
        .footer-copy {
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #475569;
        }

        /* SCROLL INDICATOR */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          z-index: 1;
          animation: fadeIn 1s 1s ease both;
        }
        .scroll-text {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #94a3b8, transparent);
          animation: scroll-down 2s ease-in-out infinite;
        }
        @keyframes scroll-down {
          0% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        }

        /* KEYFRAMES */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* DIVIDER */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .hero-photo-wrap { order: -1; }
          .hero-desc { margin: 0 auto 40px; }
          .hero-actions { justify-content: center; flex-wrap: wrap; }
          .hero-badge { margin: 0 auto 28px; }
          .photo-ring-outer, .photo-ring-inner { display: none; }
          .float-tag { display: none; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .sobre-inner { grid-template-columns: 1fr; gap: 40px; }
          .section-title { position: static; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* CURSOR GLOW */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* NAVBAR */}
      <nav className={scrolled ? 'scrolled' : 'top'}>
        <div className="nav-inner">
          <span className="logo">YB.</span>
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <a href="mailto:yalynne_bolla@hotmail.com" className="nav-cta">Hablemos</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-grid-bg" />
        <div className="hero-blob" />

        <div className="hero-inner">
          {/* Left: text */}
          <div>
            <div className="hero-badge">Data Analyst &amp; BI Specialist</div>
            <h1 className="hero-name">
              Yalyne<br /><span>Bolla</span>
            </h1>
            <p className="hero-title">Analista de Datos &amp; Business Intelligence</p>
            <p className="hero-desc">
              Transformo datos complejos en estrategias claras. Especialista en optimización logística y dashboards interactivos que impulsan decisiones inteligentes.
            </p>
            <div className="hero-actions">
              <a href="/proyectos" className="btn-primary">
                Explorar Proyectos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contacto" className="btn-outline">
                Contactar
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hero-photo-wrap">
            <div className="photo-ring-outer" />
            <div className="photo-ring-inner" />
            <div className="photo-circle">
              <img src="/profile.jpg" alt="Yalyne Bolla" />
            </div>
            <div className="float-tag float-tag-1">
              <div className="dot" />
              Power BI Expert
            </div>
            <div className="float-tag float-tag-2">
              <div className="dot" />
              SQL &amp; ETL
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-inner">
          {[
            { num: '5+', label: 'Años de experiencia' },
            { num: '30+', label: 'Proyectos entregados' },
            { num: '15+', label: 'Dashboards activos' },
            { num: '100%', label: 'Orientada a resultados' },
          ].map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="sobre-inner">
          <div>
            <div className="section-label">Acerca de mí</div>
            <h2 className="section-title">Mi trayectoria profesional</h2>
          </div>
          <div>
            <p className="sobre-text">
              Soy una profesional orientada a resultados, con experiencia en la interpretación de datos complejos y la generación de informes claros para la toma de <span className="highlight">decisiones estratégicas</span>.
            </p>
            <p className="sobre-text">
              Mi enfoque combina precisión técnica y visión estratégica, utilizando herramientas como <span className="highlight">Power BI, Excel y SQL</span> para crear dashboards que realmente cuentan una historia y generan impacto.
            </p>
            <p className="sobre-text">
              Con experiencia en el sector logístico, he desarrollado soluciones de inteligencia de negocio que optimizan costos, reducen tiempos de respuesta y mejoran la visibilidad operativa.
            </p>
            <div className="skills-grid">
              {[
                { icon: '📊', name: 'Business Intelligence', desc: 'Dashboards interactivos y reportes ejecutivos' },
                { icon: '🚚', name: 'Logística', desc: 'Optimización de costos y tiempos de entrega' },
                { icon: '🗃️', name: 'SQL & ETL', desc: 'Modelado de datos y procesos de transformación' },
                { icon: '📈', name: 'Análisis Predictivo', desc: 'Tendencias y proyecciones basadas en datos' },
              ].map((s, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                  <div className="skill-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CONTACTO */}
      <section id="contacto" className="contacto">
        <div className="contacto-grid-bg" />
        <div className="contacto-blob" />
        <div className="contacto-inner">
          <div className="contacto-eyebrow">✦ Disponible para proyectos ✦</div>
          <h2 className="contacto-title">
            ¿Tienes un proyecto<br /><em>en mente?</em>
          </h2>
          <p className="contacto-sub">
            Estoy disponible para proyectos de análisis de datos y consultoría<br />en Business Intelligence. Hablemos de cómo puedo ayudarte.
          </p>
          <div className="contacto-links">
            <a href="mailto:yalynne_bolla@hotmail.com" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              yalynne_bolla@hotmail.com
            </a>
            <a href="tel:+595982113599" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12.5 19.79 19.79 0 0 1 1.07 4 2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +595 982 113599
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">YB.</span>
        <span className="footer-copy">© {new Date().getFullYear()} Yalyne Bolla — Analista de Datos</span>
        <span className="footer-copy" style={{color:'#1e293b'}}>Asunción, Paraguay</span>
      </footer>
    </>
  );
}