export type ProjectSectionType = 
  | 'brand-intro'
  | 'hero-fullbleed'
  | 'media-showcase'
  | 'split-content';

export interface ProjectSection {
  type: ProjectSectionType;
  headline?: string;
  description?: string;
  logoText?: string;
  backgroundImageUrl?: string;
  overlayText?: string;
  mediaItems?: {
    imageUrl: string;
    caption?: string;
    type?: 'photo' | 'phone-mockup' | 'billboard';
  }[];
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  accentColor?: string;
  year?: string;
  client?: string;
  role?: string;
  sections?: ProjectSection[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logoText: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    headline: string;
    subheadline: string;
    bioParagraphs: string[];
    email: string;
    phone: string;
    location: string;
    avatarUrl: string;
  };
  projects: Project[];
  experiences: Experience[];
  socials: {
    label: string;
    url: string;
  }[];
}

export const portfolioData: Record<'es' | 'en', PortfolioData> = {
  es: {
    personalInfo: {
      name: "Espe Moragues",
      headline: "Espe Moragues",
      subheadline: "Creative Art Director based in Valencia. Crafting visual narratives with a copywriter's soul.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=500&q=80",
      bioParagraphs: [
        "Graduada en el doble grado de Publicidad, RRPP + Marketing en la Universidad CEU Cardenal Herrera de València. Apasionada del Marketing y la Creatividad Publicitaria con gran interés en la dirección de arte y el diseño.",
        "Mi especialidad es tanto idear conceptos, como traducirlos de forma visual a publicidad coherente con el tono y objetivo de las marcas.",
        "Suena utópico pero creo en el poder que tienen las marcas para cambiar la sociedad que les rodea."
      ],
      email: "espemoragues@gmail.com",
      phone: "652 984 348",
      location: "Valencia, España"
    },
    projects: [
      {
        id: "consum-mascotas",
        title: "Consum Mascotas",
        category: "Art Direction / Campaign",
        description: "Creatividad integral y dirección de arte para la campaña de fidelización de mascotas de Consum.",
        imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
        accentColor: "#E85C2B", // Naranja Consum
        year: "2024",
        client: "Consum",
        role: "Dirección de Arte",
        sections: [
          {
            type: "brand-intro",
            logoText: "consum",
            description: "La cooperativa Consum lanza una campaña enfocada en las mascotas, destacando la importancia de los animales en la familia y premiando a sus clientes más fieles."
          },
          {
            type: "hero-fullbleed",
            backgroundImageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
            overlayText: "FELIZ DÍA DE LA MASCOTA"
          },
          {
            type: "media-showcase",
            headline: "Campaña digital y física",
            description: "Desarrollo de piezas para redes sociales (Reels, TikTok) y material POP en supermercados, manteniendo un tono cercano y emotivo.",
            mediaItems: [
              { imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80", type: "phone-mockup" },
              { imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80", type: "photo" }
            ]
          }
        ]
      },
      {
        id: "essential-comp",
        title: "Essential Comp.",
        category: "Visual Branding / Experimental",
        description: "Exploración visual y branding experimental para Essential Compositions.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        accentColor: "#EBB1B9", // Rosa palo
        year: "2025",
        client: "The Essence Design Company",
        role: "Branding & Visual",
        sections: [
          {
            type: "brand-intro",
            logoText: "essential",
            description: "Essential Compositions es un laboratorio creativo que busca extraer la esencia de las cosas cotidianas a través del diseño minimalista y sensorial."
          },
          {
            type: "split-content",
            headline: "Eau de Parkinson",
            description: "Un proyecto conceptual que explora la relación entre el olfato y las memorias, utilizando fragancias como vehículo de concienciación.",
            imageUrl: "https://images.unsplash.com/photo-1595532545831-5231c5b88237?auto=format&fit=crop&w=800&q=80",
            imagePosition: "left"
          },
          {
            type: "media-showcase",
            headline: "Packaging Design",
            mediaItems: [
              { imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80", type: "photo" },
              { imageUrl: "https://images.unsplash.com/photo-1587448834465-b51676de20ae?auto=format&fit=crop&w=800&q=80", type: "photo" }
            ]
          }
        ]
      },
      {
        id: "ivi-35-aniversario",
        title: "IVI 35 Aniversario",
        category: "Event Identity / Strategy",
        description: "Identidad de evento y estrategia de comunicación para el 35 aniversario de IVI.",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        accentColor: "#115B9D", // Azul IVI
        year: "2024",
        client: "IVI",
        role: "Dirección de Arte & Estrategia",
        sections: [
          {
            type: "brand-intro",
            logoText: "IVI)",
            description: "La red de clínicas de reproducción asistida líder mundial cumple 35 años. Una campaña para celebrar los 'Greatest Hits' de la marca: los nacimientos."
          },
          {
            type: "hero-fullbleed",
            backgroundImageUrl: "https://images.unsplash.com/photo-1520694086658-005187e1f440?auto=format&fit=crop&w=1600&q=80",
            overlayText: "GREATEST HITS"
          },
          {
            type: "media-showcase",
            headline: "Campaña Gráfica",
            description: "Despliegue de campaña en exteriores y medios digitales mostrando a los protagonistas reales del éxito de IVI.",
            mediaItems: [
              { imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80", type: "billboard" },
              { imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80", type: "photo" }
            ]
          }
        ]
      },
      {
        id: "axn-accionistas",
        title: "AXN Accionistas",
        category: "B2B Design / Reports",
        description: "Diseño de reportes y materiales B2B para la junta de accionistas de AXN.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        accentColor: "#CC0000", // Rojo AXN
        year: "2023",
        client: "AXN",
        role: "Diseño Editorial B2B"
      },
      {
        id: "snatts-piti-pausa",
        title: "Snatt's Piti-pausa",
        category: "Social Content / Creative",
        description: "Contenido creativo y social media para la campaña Piti-pausa de Snatt's.",
        imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
        accentColor: "#F4D03F", // Amarillo Snatts
        year: "2024",
        client: "Snatt's (Grefusa)",
        role: "Creatividad Digital"
      },
      {
        id: "porcelanosa",
        title: "Porcelanosa",
        category: "Branded Content / Luxury",
        description: "Branded content de lujo y materiales digitales para Porcelanosa.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        accentColor: "#1A1A1A", // Negro Porcelanosa
        year: "2024",
        client: "Porcelanosa",
        role: "Branded Content"
      }
    ],
    experiences: [
      {
        id: "kids",
        company: "AGENCIA KIDS (VLC)",
        role: "Creativa Junior",
        period: "Feb 25 - Actualidad",
        description: "Creatividad para Consum, Snatt’s (Grefusa), AXN y Sony España, IVI, Essential. Habilidades para la conceptualización de ideas, diseño, realización de artes finales para impresión y gestión de tareas simultáneas.",
        logoText: "kids."
      },
      {
        id: "rosas",
        company: "AGENCIA &ROSÀS (BCN)",
        role: "Dirección de Arte",
        period: "Sept - Dic 24",
        description: "Prácticas en el departamento creativo tras paso por el Tour del Club de Creatividad. Ideación de conceptos y diseño de creatividades para las marcas Mahou y Cupra.",
        logoText: "&"
      },
      {
        id: "porcelanosa-exp",
        company: "PORCELANOSA (VLC)",
        role: "Branded Content",
        period: "Jul - Sept 24",
        description: "Prácticas en el departamento de Branded Content Internacional. Apoyo en presencia London Design Week (Copywriting, SEO, diseño de materiales y apoyo creativo).",
        logoText: "PORCELANOSA"
      }
    ],
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Instagram", url: "https://instagram.com" },
      { label: "Email", url: "mailto:espemoragues@gmail.com" }
    ]
  },
  en: {
    personalInfo: {
      name: "Espe Moragues",
      headline: "Espe Moragues",
      subheadline: "Creative Art Director based in Valencia. Crafting visual narratives with a copywriter's soul.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=500&q=80",
      bioParagraphs: [
        "Double Degree in Advertising, PR + Marketing at Universidad CEU Cardenal Herrera in Valencia. Passionate about Marketing and Advertising Creativity with a strong interest in art direction and design.",
        "My specialty is both ideating concepts and translating them visually into advertising that is consistent with the tone and goals of brands.",
        "It may sound utopian, but I believe in the power of brands to change the society around them."
      ],
      email: "espemoragues@gmail.com",
      phone: "652 984 348",
      location: "Valencia, Spain"
    },
    projects: [
      {
        id: "consum-mascotas",
        title: "Consum Pets",
        category: "Art Direction / Campaign",
        description: "Comprehensive creativity and art direction for Consum's pet loyalty campaign.",
        imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
        accentColor: "#E85C2B", 
        year: "2024",
        client: "Consum",
        role: "Art Direction",
        sections: [
          {
            type: "brand-intro",
            logoText: "consum",
            description: "Consum cooperative launches a campaign focused on pets, highlighting the importance of animals in the family and rewarding its most loyal customers."
          },
          {
            type: "hero-fullbleed",
            backgroundImageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
            overlayText: "HAPPY PET DAY"
          },
          {
            type: "media-showcase",
            headline: "Digital and Physical Campaign",
            description: "Development of pieces for social networks (Reels, TikTok) and POP material in supermarkets, maintaining an emotional and approachable tone.",
            mediaItems: [
              { imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80", type: "phone-mockup" },
              { imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80", type: "photo" }
            ]
          }
        ]
      },
      {
        id: "essential-comp",
        title: "Essential Comp.",
        category: "Visual Branding / Experimental",
        description: "Visual exploration and experimental branding for Essential Compositions.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        accentColor: "#EBB1B9",
        year: "2025",
        client: "The Essence Design Company",
        role: "Branding & Visual",
        sections: [
          {
            type: "brand-intro",
            logoText: "essential",
            description: "Essential Compositions is a creative laboratory that seeks to extract the essence of everyday things through minimalist and sensory design."
          },
          {
            type: "split-content",
            headline: "Eau de Parkinson",
            description: "A conceptual project that explores the relationship between smell and memory, using fragrances as a vehicle for awareness.",
            imageUrl: "https://images.unsplash.com/photo-1595532545831-5231c5b88237?auto=format&fit=crop&w=800&q=80",
            imagePosition: "left"
          },
          {
            type: "media-showcase",
            headline: "Packaging Design",
            mediaItems: [
              { imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80", type: "photo" },
              { imageUrl: "https://images.unsplash.com/photo-1587448834465-b51676de20ae?auto=format&fit=crop&w=800&q=80", type: "photo" }
            ]
          }
        ]
      },
      {
        id: "ivi-35-aniversario",
        title: "IVI 35th Anniversary",
        category: "Event Identity / Strategy",
        description: "Event identity and communication strategy for IVI's 35th anniversary.",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        accentColor: "#115B9D",
        year: "2024",
        client: "IVI",
        role: "Art Direction & Strategy",
        sections: [
          {
            type: "brand-intro",
            logoText: "IVI)",
            description: "The world's leading assisted reproduction clinic network turns 35. A campaign to celebrate the brand's 'Greatest Hits': births."
          },
          {
            type: "hero-fullbleed",
            backgroundImageUrl: "https://images.unsplash.com/photo-1520694086658-005187e1f440?auto=format&fit=crop&w=1600&q=80",
            overlayText: "GREATEST HITS"
          },
          {
            type: "media-showcase",
            headline: "Graphic Campaign",
            description: "Deployment of an outdoor and digital campaign showing the real protagonists of IVI's success.",
            mediaItems: [
              { imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80", type: "billboard" },
              { imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80", type: "photo" }
            ]
          }
        ]
      },
      {
        id: "axn-accionistas",
        title: "AXN Shareholders",
        category: "B2B Design / Reports",
        description: "B2B reports and materials design for the AXN shareholders' meeting.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        accentColor: "#CC0000",
        year: "2023",
        client: "AXN",
        role: "B2B Editorial Design"
      },
      {
        id: "snatts-piti-pausa",
        title: "Snatt's Piti-pausa",
        category: "Social Content / Creative",
        description: "Creative content and social media for Snatt's Piti-pausa campaign.",
        imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
        accentColor: "#F4D03F",
        year: "2024",
        client: "Snatt's (Grefusa)",
        role: "Digital Creativity"
      },
      {
        id: "porcelanosa",
        title: "Porcelanosa",
        category: "Branded Content / Luxury",
        description: "Luxury branded content and digital materials for Porcelanosa.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        accentColor: "#1A1A1A",
        year: "2024",
        client: "Porcelanosa",
        role: "Branded Content"
      }
    ],
    experiences: [
      {
        id: "kids",
        company: "AGENCIA KIDS (VLC)",
        role: "Junior Creative",
        period: "Feb 25 - Present",
        description: "Creativity for Consum, Snatt's (Grefusa), AXN and Sony Spain, IVI, Essential. Skills for conceptualizing ideas, design, final artwork for print, and simultaneous task management.",
        logoText: "kids."
      },
      {
        id: "rosas",
        company: "AGENCIA &ROSÀS (BCN)",
        role: "Art Direction",
        period: "Sept - Dec 24",
        description: "Internship in the creative department after passing through the Club de Creatividad Tour. Concept ideation and creativity design for Mahou and Cupra brands.",
        logoText: "&"
      },
      {
        id: "porcelanosa-exp",
        company: "PORCELANOSA (VLC)",
        role: "Branded Content",
        period: "Jul - Sept 24",
        description: "Internship in the International Branded Content department. Support at London Design Week (Copywriting, SEO, material design, and creative support).",
        logoText: "PORCELANOSA"
      }
    ],
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Instagram", url: "https://instagram.com" },
      { label: "Email", url: "mailto:espemoragues@gmail.com" }
    ]
  }
};
