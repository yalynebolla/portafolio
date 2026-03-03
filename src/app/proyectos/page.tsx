"use client";
import { useState, useEffect } from 'react';

export default function Proyectos() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const proyectos = [
    {
      titulo: "Análisis de Transportadoras",
      img: "/logistica-dashboard.png",
      descripcion: "Optimización de costos y tiempos de entrega mediante KPIs logísticos avanzados. Visualización de rutas críticas y rendimiento por transportadora.",
      tag: "Logística",
      herramientas: ["Power BI", "DAX", "Excel"],
      numero: "01",
    },
    {
      titulo: "Gestión de Recursos Humanos",
      img: "/analisis2.png",
      descripcion: "Dashboard de métricas clave, rotación y desempeño de talento humano. Seguimiento de indicadores estratégicos de RRHH en tiempo real.",
      tag: "RRHH",
      herramientas: ["Power BI", "ETL"],
      numero: "02",
    },
    {
      titulo: "Indicadores Mundiales",
      img: "/analisis3.png",
      descripcion: "Reporte interactivo de tendencias globales y patrones regionales. Análisis comparativo de métricas internacionales por país y región.",
      tag: "Global",
      herramientas: ["Power BI", "SQL"],
      numero: "03",
      proximamente: true,
    }
  ];

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

        /* CURSOR GLOW */
        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%);
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
          background: rgba(248,249,251,0.88);
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
          text-decoration: none;
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
        .nav-links a.active { color: var(--dark); font-weight: 600; }
        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--accent);
        }
        .nav-links a:hover { color: var(--dark); }

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
        .nav-cta:hover { background: var(--accent); border-color: var(--accent); }

        /* HERO HEADER */
        .page-hero {
          padding: 160px 32px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        .page-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
        }

        .page-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .page-eyebrow::before {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--accent);
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 900;
          color: var(--dark);
          line-height: 1.0;
          letter-spacing: -3px;
          animation: fadeInUp 0.7s ease both;
        }
        .page-title em {
          color: var(--accent);
          font-style: italic;
        }

        .page-sub {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.8;
          max-width: 440px;
          animation: fadeInUp 0.7s 0.15s ease both;
          align-self: end;
        }

        /* BIG BG TEXT */
        .bg-text {
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 18rem;
          font-weight: 900;
          color: rgba(6,182,212,0.04);
          bottom: -40px;
          right: -20px;
          pointer-events: none;
          letter-spacing: -15px;
          line-height: 1;
          user-select: none;
        }

        /* COUNT STRIP */
        .count-strip {
          background: var(--dark);
          padding: 20px 32px;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
        }
        .count-strip-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .count-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #475569;
          white-space: nowrap;
        }
        .count-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(6,182,212,0.4), transparent);
        }
        .count-num {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-style: italic;
          color: var(--accent);
          white-space: nowrap;
        }

        /* PROJECTS SECTION */
        .projects-section {
          padding: 80px 32px 120px;
          position: relative;
        }

        .projects-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* FEATURED - first card large */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* First card spans full width */
        .card-featured {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          animation: fadeInUp 0.6s 0.1s ease both;
        }
        .card-featured:hover {
          border-color: rgba(6,182,212,0.35);
          box-shadow: 0 12px 30px rgba(6,182,212,0.08);
          transform: translateY(-2px);
        }

        .card-featured .card-img {
          height: 360px;
        }

        .card-featured .card-body {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-featured .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .card-featured .card-desc {
          font-size: 1rem;
        }

        /* Regular cards */
        .card-regular {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          position: relative;
        }
        .card-regular:nth-child(2) { animation: fadeInUp 0.6s 0.2s ease both; }
        .card-regular:nth-child(3) { animation: fadeInUp 0.6s 0.3s ease both; }

        .card-regular:hover {
          border-color: rgba(6,182,212,0.35);
          box-shadow: 0 12px 30px rgba(6,182,212,0.08);
          transform: translateY(-2px);
        }

        /* Shared card styles */
        .card-img {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .card-featured:hover .card-img img,
        .card-regular:hover .card-img img {
          transform: scale(1.06);
        }

        .card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.3), transparent);
        }

        .card-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: white;
          color: var(--dark);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(6,182,212,0.2);
          z-index: 2;
        }

        .card-num {
          position: absolute;
          bottom: 16px;
          right: 16px;
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-style: italic;
          font-weight: 900;
          color: white;
          opacity: 0.6;
          z-index: 2;
        }

        /* PRÓXIMAMENTE overlay */
        .proximamente-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15,23,42,0.88);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 3;
          backdrop-filter: blur(4px);
        }
        .prox-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          border: 1px solid rgba(6,182,212,0.4);
          padding: 8px 18px;
          border-radius: 100px;
        }
        .prox-icon {
          font-size: 2rem;
          opacity: 0.4;
        }

        .card-body {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          transition: color 0.3s;
        }
        .card-featured:hover .card-title,
        .card-regular:hover .card-title {
          color: var(--accent-dark);
        }

        .card-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.75;
          flex: 1;
          margin-bottom: 24px;
        }

        .card-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tool-chip {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-dark);
          background: rgba(6,182,212,0.08);
          border: 1px solid rgba(6,182,212,0.2);
          padding: 5px 12px;
          border-radius: 100px;
        }

        .card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          background: var(--dark);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
          align-self: flex-start;
        }
        .card-btn:hover {
          background: var(--accent);
          transform: translateX(3px);
          box-shadow: 0 8px 24px rgba(6,182,212,0.3);
        }
        .card-btn svg { transition: transform 0.3s; }
        .card-btn:hover svg { transform: translateX(3px); }

        /* CTA BOTTOM */
        .cta-section {
          padding: 80px 32px 100px;
          background: var(--dark);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }
        .cta-glow {
          position: absolute;
          width: 600px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .cta-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          color: white;
          letter-spacing: -2px;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .cta-title em { color: var(--accent); font-style: italic; }
        .cta-sub {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          background: var(--accent);
          color: white;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 16px 36px;
          border-radius: 100px;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .cta-btn:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(6,182,212,0.4);
        }

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
          text-decoration: none;
        }
        .footer-copy {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #475569;
        }

        /* ANIMS */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .page-hero-inner { grid-template-columns: 1fr; gap: 20px; }
          .card-featured { grid-template-columns: 1fr; grid-column: 1; }
          .projects-grid { grid-template-columns: 1fr; }
          .card-featured { grid-column: 1; }
          .nav-links { display: none; }
          .bg-text { font-size: 8rem; }
        }
      `}</style>

      {/* CURSOR GLOW */}
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* NAVBAR */}
      <nav className={scrolled ? 'scrolled' : 'top'}>
        <div className="nav-inner">
          <a href="/" className="logo">YB.</a>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="/proyectos" className="active">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <a href="mailto:yalynne_bolla@hotmail.com" className="nav-cta">Hablemos</a>
        </div>
      </nav>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-grid-bg" />
        <div className="bg-text">BI</div>
        <div className="page-hero-inner">
          <div>
            <div className="page-eyebrow">Portfolio de trabajo</div>
            <h1 className="page-title">
              Proyectos<br /><em>de datos</em>
            </h1>
          </div>
          <p className="page-sub">
            Soluciones visuales diseñadas para transformar datos crudos en decisiones estratégicas. Cada dashboard cuenta una historia.
          </p>
        </div>
      </section>

      {/* COUNT STRIP */}
      <div className="count-strip">
        <div className="count-strip-inner">
          <span className="count-label">Proyectos publicados</span>
          <div className="count-line" />
          <span className="count-num">
            {proyectos.filter(p => !p.proximamente).length} de {proyectos.length} casos
          </span>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="projects-inner">
          <div className="projects-grid">
            {proyectos.map((proy, index) => {
              const isFeatured = index === 0;
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                isFeatured
                  ? <div className="card-featured">{children}</div>
                  : <div className="card-regular">{children}</div>;

              return (
                <CardWrapper key={index}>
                  <div className="card-img">
                    {proy.proximamente ? (
                      <div className="proximamente-overlay">
                        <div className="prox-icon">⏳</div>
                        <div className="prox-badge">Próximamente</div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={proy.img}
                          alt={proy.titulo}
                          onError={e => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className="card-img-overlay" />
                      </>
                    )}
                    <div className="card-tag">{proy.tag}</div>
                    <div className="card-num">{proy.numero}</div>
                  </div>

                  <div className="card-body">
                    <h2 className="card-title">{proy.titulo}</h2>
                    <p className="card-desc">{proy.descripcion}</p>
                    <div className="card-tools">
                      {proy.herramientas.map(tool => (
                        <span className="tool-chip" key={tool}>{tool}</span>
                      ))}
                    </div>
                    {!proy.proximamente && (
                      <button className="card-btn">
                        Ver reporte interactivo
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="cta-inner">
          <div className="cta-eyebrow">✦ ¿Trabajamos juntos? ✦</div>
          <h2 className="cta-title">¿Tenés un proyecto<br /><em>en mente?</em></h2>
          <p className="cta-sub">
            Estoy disponible para nuevos proyectos de análisis de datos y consultoría en Business Intelligence.
          </p>
          <a href="mailto:yalynne_bolla@hotmail.com" className="cta-btn">
            Escribime
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="/" className="footer-logo">YB.</a>
        <span className="footer-copy">© {new Date().getFullYear()} Yalyne Bolla — Analista de Datos</span>
        <span className="footer-copy" style={{color:'#1e293b'}}>Asunción, Paraguay</span>
      </footer>
    </>
  );
}


