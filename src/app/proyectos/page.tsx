
export default function Proyectos() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-50">Proyectos Power BI</h1>
        <section className="space-y-10">
          {/* Proyecto 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Análisis de Transportadoras</h2>
            <iframe
              title="Power BI Report - Análisis de Transportadoras"
              width="100%"
              height="500"
              src="https://licenciasonline449-my.sharepoint.com/:u:/g/personal/ybolla_licenciasonline_com/IQASVj200PewQoE6Ap1S7El9AalUmhmrkd_Pq_Yu-jrp1i4?e=PYyXGK"
              frameBorder="0"
              allowFullScreen={true}
              className="rounded-lg border"
            ></iframe>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">Este dashboard permite analizar el desempeño de diferentes transportadoras, midiendo costos y tiempos de entrega. Facilita la identificación de oportunidades de optimización y reducción de gastos logísticos.</p>
          </div>
          {/* Aquí se agregarán más proyectos */}
        </section>
      </div>
    </main>
  );
}
