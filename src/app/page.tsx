

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[var(--background)]">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[var(--background)]">
        <div className="max-w-2xl w-full flex flex-col items-center gap-6">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-[var(--accent)] bg-white flex items-center justify-center">
            <img src="/profile.jpg" alt="Foto de perfil" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-5xl font-bold accent text-center mt-4">Yalyne Bolla</h1>
          <h2 className="text-xl font-semibold accent text-center">Analista de Datos & Business Intelligence</h2>
          <p className="text-lg text-center text-gray-700 max-w-xl">
            Especialista en análisis de datos, visualización y BI. Apasionada por transformar datos en estrategias claras y decisiones inteligentes. Experiencia en análisis de costos, tiempos y desempeño logístico, y creación de dashboards interactivos con Power BI.
          </p>
          <div className="bg-white rounded-xl shadow p-6 mt-4 text-gray-800 max-w-xl">
            <h3 className="text-2xl font-bold accent mb-2 text-center">Acerca de mí</h3>
            <p className="mb-2">Soy una profesional orientada a resultados, con experiencia en la interpretación de datos complejos y la generación de informes claros para la toma de decisiones estratégicas. Me motiva descubrir oportunidades ocultas en la información y aportar soluciones innovadoras a los desafíos empresariales.</p>
            <p className="mb-2">He trabajado en proyectos de optimización logística, análisis de costos y recursos humanos, colaborando con equipos multidisciplinarios para lograr mejoras medibles en procesos y resultados.</p>
            <p className="mb-2">Mi enfoque combina precisión técnica y visión estratégica, utilizando herramientas como Power BI, Python, Excel y SQL para crear dashboards interactivos y reportes personalizados.</p>
            <p>Estoy en constante aprendizaje y busco siempre superar expectativas, aportando valor a cada proyecto en el que participo.</p>
          </div>
          <a href="/proyectos" className="btn-celeste mt-4">Ver proyectos Power BI</a>
        </div>
      </section>

      // ...existing code...

      {/* Contacto Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 px-4 bg-[var(--background)]">
        <div className="max-w-2xl w-full px-6">
          <h3 className="text-2xl font-bold accent text-center mb-4">Contacto</h3>
          <div className="flex flex-col items-center gap-2">
            <p><span className="font-semibold">Correo:</span> <a href="mailto:yalynne_bolla@hotmail.com" className="accent">yalynne_bolla@hotmail.com</a></p>
            <p><span className="font-semibold">Teléfono:</span> <a href="tel:+595982113599" className="accent">+595 982 113599</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
