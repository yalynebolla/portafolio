"use client"; // Necesario para el scroll y el menú interactivo
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] text-slate-800 font-sans selection:bg-cyan-100">
      
      {/* --- ENCABEZADO / NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter accent">YB.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-[var(--accent)] transition-colors">Sobre mí</a>
            <a href="/proyectos" className="hover:text-[var(--accent)] transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-[var(--accent)] transition-colors">Contacto</a>
          </div>
          {/* Botón de acción rápido en el menú */}
          <a href="mailto:yalynne_bolla@hotmail.com" className="text-xs font-bold border-2 border-slate-800 px-4 py-2 rounded-full hover:bg-slate-800 hover:text-white transition-all">
            Hablemos
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texto Hero */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-cyan-50 text-[var(--accent)] rounded-full">
              Data Analyst & BI
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold accent mb-2">Yalyne Bolla</h1>
            <h2 className="text-2xl font-medium text-gray-600 italic">Analista de Datos & Business Intelligence</h2>
            <p className="text-lg leading-relaxed max-w-2xl text-gray-700">
              Transformo datos complejos en estrategias claras. Especialista en optimización logística y creación de dashboards interactivos que impulsan decisiones inteligentes.
            </p>
            <div className="flex gap-4">
              <a href="/proyectos" className="btn-celeste shadow-lg hover:shadow-xl transition-all">
                Explorar Proyectos BI
              </a>
              <a href="#contacto" className="px-6 py-3 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-bold hover:bg-[var(--accent)] hover:text-white transition-all">
                Contactar
              </a>
            </div>
          </div>

          {/* Foto con Círculo Estilo Referencia */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-cyan-300 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Yalyne Bolla" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- SCROLL DOWN INDICATOR --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-slate-400"></div>
        </div>
      </section>

      {/* --- SECCIÓN SOBRE MÍ --- */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <h2 className="text-3xl font-bold sticky top-32">Acerca de mi trayectoria</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Soy una profesional orientada a resultados, con experiencia en la interpretación de datos complejos y la generación de informes claros para la toma de decisiones estratégicas.
              </p>
              <p>
                Mi enfoque combina precisión técnica y visión estratégica, utilizando herramientas como <span className="font-bold text-slate-900 underline decoration-cyan-400">Power BI, Excel y SQL</span> para crear dashboards que realmente cuentan una historia.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--background)] rounded-2xl">
                  <h4 className="font-bold text-slate-900">Logística</h4>
                  <p className="text-sm">Optimización de costos y tiempos.</p>
                </div>
                <div className="p-4 bg-[var(--background)] rounded-2xl">
                  <h4 className="font-bold text-slate-900">BI</h4>
                  <p className="text-sm">Visualización avanzada y ETL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-8 italic">¿Tienes un proyecto en mente?</h3>
          <p className="text-slate-400 mb-12 max-w-md mx-auto">
            Estoy disponible para proyectos de análisis de datos y consultoría en Business Intelligence.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <a href="mailto:yalynne_bolla@hotmail.com" className="text-xl hover:text-[var(--accent)] transition-colors underline underline-offset-8">
              yalynne_bolla@hotmail.com
            </a>
            <span className="hidden md:block text-slate-700">|</span>
            <a href="tel:+595982113599" className="text-xl hover:text-[var(--accent)] transition-colors">
              +595 982 113599
            </a>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="py-8 text-center text-xs text-slate-400 uppercase tracking-widest">
        © {new Date().getFullYear()} Yalyne Bolla — Analista de Datos
      </footer>
    </main>
  );
}