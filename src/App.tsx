import { usePortfolio } from "./hooks/usePortfolio";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Quote } from "./components/sections/Quote";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Footer } from "./components/layout/Footer";
import { BackgroundAsterisk } from "./components/ui/BackgroundAsterisk";

export default function App() {
  const { data, isLoading, error } = usePortfolio();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#131313] flex flex-col items-center justify-center gap-6 select-none">
        <div className="relative w-16 h-16 animate-rotate">
          <BackgroundAsterisk className="w-full h-full" />
        </div>
        <p className="font-label-caps text-label-caps text-on-surface-variant animate-pulse">
          Cargando Portfolio...
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#131313] flex flex-col items-center justify-center gap-4 text-center px-4 select-none">
        <h2 className="font-headline-md text-red-400">Error al cargar el contenido</h2>
        <p className="font-body-md text-on-surface-variant max-w-md">
          {error?.message || "No se ha podido conectar con el servicio de datos."}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-white text-black font-label-caps text-label-caps hover:bg-gradient-asterisk hover:text-white transition-all duration-300 rounded-none interactive-element"
        >
          Reintentar
        </button>
      </div>
    );
  }

  const { personalInfo, projects, experiences, socials } = data;

  return (
    <>
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar name={personalInfo.name} />

      {/* Page Sections */}
      <main className="w-full">
        <Hero 
          name={personalInfo.name} 
          subheadline={personalInfo.subheadline} 
        />
        <Quote />
        <About 
          avatarUrl={personalInfo.avatarUrl} 
          bioParagraphs={personalInfo.bioParagraphs} 
        />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
      </main>

      {/* Global Footer */}
      <Footer 
        email={personalInfo.email} 
        phone={personalInfo.phone} 
        socials={socials} 
      />
    </>
  );
}
