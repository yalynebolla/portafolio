


export default function Proyectos() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-0" style={{ background: "var(--background)" }}>
      <section className="w-full flex flex-col items-center justify-center py-20" style={{ background: "#f8f6f2" }}>
        <div className="max-w-3xl w-full flex flex-col items-center gap-6 px-6">
          <h1 className="text-5xl font-bold accent mb-2 text-center">Proyectos Power BI</h1>
          <p className="text-lg text-center mb-6" style={{ color: "#222" }}>
            Aquí encontrarás algunos de mis proyectos destacados en análisis de datos y visualización con Power BI. Cada dashboard está diseñado para resolver problemas reales y facilitar la toma de decisiones estratégicas.
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center py-10" style={{ background: "#fff" }}>
        <div className="max-w-2xl w-full px-6">
          {/* Proyecto 1 */}
          <div className="rounded-xl shadow-lg p-8 mb-8" style={{ background: "#fff", border: "2px solid var(--accent)" }}>
            <h2 className="text-2xl font-semibold mb-4 accent">Análisis de Transportadoras</h2>
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-lg text-gray-500">El informe estará disponible próximamente.</span>
            </div>
            <p className="mt-4" style={{ color: "#222" }}>
              Este dashboard permite analizar el desempeño de diferentes transportadoras, midiendo costos y tiempos de entrega. Facilita la identificación de oportunidades de optimización y reducción de gastos logísticos.
            </p>
          </div>
          {/* Proyecto 2 (placeholder) */}
          <div className="rounded-xl shadow-lg p-8 mb-8" style={{ background: "#fff", border: "2px solid var(--accent)" }}>
            <h2 className="text-2xl font-semibold mb-4 accent">Recursos Humanos</h2>
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-lg text-gray-500">Próximamente disponible.</span>
            </div>
            <p className="mt-4" style={{ color: "#222" }}>
              Dashboard para el análisis de métricas clave de recursos humanos, facilitando la toma de decisiones informadas y la gestión eficiente del talento.
            </p>
          </div>
          {/* Proyecto 3 (placeholder) */}
          <div className="rounded-xl shadow-lg p-8 mb-8" style={{ background: "#fff", border: "2px solid var(--accent)" }}>
            <h2 className="text-2xl font-semibold mb-4 accent">Indicadores Mundiales</h2>
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-lg text-gray-500">Próximamente disponible.</span>
            </div>
            <p className="mt-4" style={{ color: "#222" }}>
              Reporte interactivo para el análisis de indicadores globales, permitiendo comparar tendencias y patrones entre países y regiones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
