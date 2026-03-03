"use client";
import { useState, useEffect } from 'react';

export default function Proyectos() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const proyectos = [
    {
      titulo: "Análisis de Transportadoras",
      img: "/analisis1.png",
      descripcion: "Optimización de costos y tiempos de entrega mediante KPIs logísticos.",
      tag: "Logística",
      herramientas: ["Power BI", "DAX", "Excel"]
    },
    {
      titulo: "Gestión de Recursos Humanos",
      img: "/analisis2.png",
      descripcion: "Dashboard de métricas clave, rotación y desempeño de talento humano.",
      tag: "RRHH",
      herramientas: ["Power BI", "ETL"]
    },
    {
      titulo: "Indicadores Mundiales",
      img: "/analisis3.png",
      descripcion: "Reporte interactivo de tendencias globales y patrones regionales.",
      tag: "Global",
      herramientas: ["Power BI", "SQL"],
      proximamente: true
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      
      {/* --- NAVBAR IGUAL AL HOME --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter accent">YB.</a>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="/" className="hover:text-[var(--accent)] transition-colors">Inicio</a>
            <a href="/proyectos" className="text-[var(--accent)]">Proyectos</a>
          </div>
        </div>
      </nav>

      {/* --- CABECERA --- */}
      <section className="pt-32 pb-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Proyectos <span className="text-[var(--accent)] text-6xl">BI</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Soluciones visuales diseñadas para transformar datos crudos en decisiones estratégicas.
          </p>
        </div>
      </section>

      {/* --- GRID DE PROYECTOS --- */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proy, index) => (
            <div key={index} className="group bg-black rounded-3xl overflow-hidden border border-slate-800 flex flex-col">
              
              {/* Contenedor Imagen */}
              <div className="relative h-52 overflow-hidden bg-black">
                {proy.proximamente ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black text-slate-500 font-bold uppercase tracking-widest text-xs">
                    Próximamente
                  </div>
                ) : (
                  <img 
                    src={proy.img} 
                    alt={proy.titulo} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={e => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Cargando+Dashboard..."; }}
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-800 text-white">
                    {proy.tag}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {proy.titulo}
                </h3>
                <p className="text-slate-300 text-sm mb-6 flex-grow">
                  {proy.descripcion}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proy.herramientas.map(tool => (
                    <span key={tool} className="text-[10px] bg-black text-white px-2 py-1 rounded-md border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>

                {!proy.proximamente && (
                  <button className="w-full py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-[var(--accent)] hover:text-white transition-colors">
                    Ver Reporte Interactivo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center text-slate-600 text-xs tracking-[0.2em] uppercase">
        Explora la eficiencia a través de los datos
      </footer>
    </main>
  );
}


