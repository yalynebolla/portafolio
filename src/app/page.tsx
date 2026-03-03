import Image from "next/image";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8" style={{ background: "var(--background)" }}>
      <div className="rounded-xl shadow-lg p-10 max-w-2xl w-full text-center" style={{ background: "#fff", border: "2px solid var(--accent)" }}>
        <h1 className="text-5xl font-bold mb-2 accent">Yalyne Bolla</h1>
        <h2 className="text-xl font-semibold mb-6 accent">Analista de Datos & BI</h2>
        <img src="https://portfolio-one-blue-17.vercel.app/assets/profile.png" alt="Foto de perfil" className="mx-auto mb-6 rounded-full shadow-lg" width={120} height={120} />
        <p className="text-lg mb-6" style={{ color: "#222" }}>
          Soy especialista en análisis de datos y visualización de información. Me apasiona transformar datos en conocimiento útil para la toma de decisiones estratégicas. En este portafolio encontrarás proyectos destacados donde aplico herramientas como Power BI para resolver problemas reales de negocio.
        </p>
        <a
          href="/proyectos"
          className="btn-celeste mb-8"
        >
          Ver proyectos Power BI
        </a>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2 accent">Contacto</h3>
          <p className="mb-1"><span className="font-semibold">Correo:</span> <a href="mailto:yalynne_bolla@hotmail.com" className="accent">yalynne_bolla@hotmail.com</a></p>
          <p><span className="font-semibold">Teléfono:</span> <a href="tel:+595982113599" className="accent">+595 982 113599</a></p>
        </div>
      </div>
    </main>
  );
}
