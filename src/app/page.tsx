import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black p-8">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Yalyne Bolla</h1>
        <h2 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Analista de Datos</h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
          Soy Yalyne Bolla, especialista en análisis de datos y visualización de información. Me apasiona convertir datos en conocimiento útil para la toma de decisiones estratégicas. En este portafolio encontrarás proyectos destacados donde aplico herramientas como Power BI para resolver problemas reales de negocio.
        </p>
        <a
          href="/proyectos"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Ver proyectos Power BI
        </a>
      </div>
    </main>
  );
}
