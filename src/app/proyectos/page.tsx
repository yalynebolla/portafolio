

export default function Proyectos() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center accent">Proyectos Power BI</h1>
        <section className="space-y-10">
          {/* Proyecto 1 */}
          <div className="rounded-xl shadow-lg p-8 mb-8" style={{ background: "#fff", border: "2px solid var(--accent)" }}>
            <h2 className="text-2xl font-semibold mb-4 accent">Análisis de Transportadoras</h2>
            {/* Si tienes el enlace público, reemplázalo aquí. Si no, deja en blanco o muestra un mensaje. */}
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <span className="text-lg text-gray-500">El informe estará disponible próximamente.</span>
            </div>
            <p className="mt-4" style={{ color: "#222" }}>
              Este dashboard permite analizar el desempeño de diferentes transportadoras, midiendo costos y tiempos de entrega. Facilita la identificación de oportunidades de optimización y reducción de gastos logísticos.
            </p>
          </div>
          {/* Aquí se agregarán más proyectos */}
        </section>
      </div>
    </main>
  );
}
