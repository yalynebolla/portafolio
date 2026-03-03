import Image from "next/image";



export default function Home() {
  return (
          <main className="min-h-screen flex flex-col items-center justify-center p-0" style={{ background: "var(--background)" }}>
            <section className="w-full flex flex-col items-center justify-center py-20" style={{ background: "#f8f6f2" }}>
              <div className="max-w-3xl w-full flex flex-col items-center gap-6 px-6">
                <img src="/profile.jpg" alt="Foto de perfil" className="rounded-full shadow-lg mb-4" width={140} height={140} />
                <h1 className="text-5xl font-bold accent mb-2 text-center">¡Hola! Soy Yalyne Bolla</h1>
                <h2 className="text-2xl font-semibold accent mb-4 text-center">Analista de Datos & Business Intelligence</h2>
                <p className="text-lg text-center mb-6" style={{ color: "#222" }}>
                  Apasionada por transformar datos en estrategias claras y decisiones inteligentes. Tengo experiencia en análisis de costos, tiempos y desempeño logístico, así como en la creación de dashboards interactivos con Power BI.
                </p>
                <a href="/proyectos" className="btn-celeste mb-8">Ver proyectos Power BI</a>
              </div>
            </section>
            <section className="w-full flex flex-col items-center justify-center py-10" style={{ background: "#fff" }}>
              <div className="max-w-2xl w-full px-6">
                <h3 className="text-2xl font-bold mb-4 accent text-center">Contacto</h3>
                <div className="flex flex-col items-center gap-2">
                  <p><span className="font-semibold">Correo:</span> <a href="mailto:yalynne_bolla@hotmail.com" className="accent">yalynne_bolla@hotmail.com</a></p>
                  <p><span className="font-semibold">Teléfono:</span> <a href="tel:+595982113599" className="accent">+595 982 113599</a></p>
                </div>
              </div>
            </section>
          </main>
          <h3 className="text-2xl font-bold mb-2 accent">Contacto</h3>
          <p className="mb-1"><span className="font-semibold">Correo:</span> <a href="mailto:yalynne_bolla@hotmail.com" className="accent">yalynne_bolla@hotmail.com</a></p>
          <p><span className="font-semibold">Teléfono:</span> <a href="tel:+595982113599" className="accent">+595 982 113599</a></p>
        </div>
      </div>
    </main>
  );
}
