export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
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

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Espe Moragues",
    headline: "Espe Moragues",
    subheadline: "Creative Art Director based in Valencia. Crafting visual narratives with a copywriter's soul.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsb4T9fFZ0Uo2az_2y4XJD7O-P4rxepm-FgnfVYfwTHxo7DN7MP97X9yI5EMMRSiuhlTN40HWUe2K7jvJiiBxxRn_8xfrvtdPDE_bt5xcGmjjpwq6msPgzYRoUuUkUfJjsLi92KExqiUcAKPRaos_rIUjw99mJpPqT10IbW6z4-BQBInTJPqC-ybTADQ8IDNoaaH2xfke23L9W4c6A-RnbTtzxFQtOIYoS-oVZQhDNrwo2cs-TVTZsNLa3udF5_6DKk4VAYrdssZxo",
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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwuQMb71md0z-NhrTciG2U5P2y7_XT3WXAak80aDeZ5oyInfCOY_dm6t47JMJcua8T3wPGoRCde98B1SPTC8V3UYdQzodYy0Q2IpK9TDGOXyhMIyZsJos6_IQwDsWZ1ZyKVklX1fMPdgSThLz6U4qcc1CKI21pH3wXQF6ZbKgWLCc62Kbrm1Df_6E7CwvhpwFyiQmsU74hoDK_VY_RPGIQj_YDdHa9fT4-nebyfFQOrW4lIXRQPBhWzIU3Qne8AYYtRfHEp-d6dtMU"
    },
    {
      id: "essential-comp",
      title: "Essential Comp.",
      category: "Visual Branding / Experimental",
      description: "Exploración visual y branding experimental para Essential Compositions.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzzx6ziIcmOuebqLvhBwJZotoXXitGpfExy4lphh9CjtjJ48IbJw19QgwsKTtKrreW26KH1m3p9AdTEVlGx2XgEz_ahevxamiKqQMY3ge831fGCbgDDQ69Y7CPIT5XxCtYvhF-F8VrCnmpe8mWy0f7_rfuL36NH0ozw9OzG54L4qIeoX0Kx9N9kiV7fv23bHaU_I-237UnMXcxyJ4z9qN0NtKkfNEybPvNRlfJkJ2xPnzkEGEu4XX5umMZQFr3sWbz92R16oNyoypP"
    },
    {
      id: "ivi-35-aniversario",
      title: "IVI 35 Aniversario",
      category: "Event Identity / Strategy",
      description: "Identidad de evento y estrategia de comunicación para el 35 aniversario de IVI.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWwtWB8d8xcvOwp8jRko9rD5z_rE91896os3H3DgwTlCQofQYCyzraV1Mk6Gb-hS0uMEqaDCCN0ZFEldNzh26ef7m6vdbKTX5SRjzO22zqiWgf-tRgNjsfEVmcj_5MrGcD_gHszNAnteLxFeUr8SmoA98vOGLpUlpmv6iVPfAFWI5LLZt_vR4nax7jEpoIW8FWK7d1Dlvm-X4mxyOacLiFHZj-YSOU48BT7qprTblFY6Cfe4MfSLPgKwzE9oAq-JRRAYUOpFzzgusH"
    },
    {
      id: "axn-accionistas",
      title: "AXN Accionistas",
      category: "B2B Design / Reports",
      description: "Diseño de reportes y materiales B2B para la junta de accionistas de AXN.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQcVs48b7ZzrlYBUoFBReyE88PhhDSyVL2LwWJTRcyvkkEesv0C_qNT3yJN7IO2jawymk21TEo2sDBUw5EFDGGUBNKijibNyULV8LvdyN8ilGo2tIO8MW731cBQWGiPUZd3TW8Fz-N1UjBbPifFI74KFbPupWPzmt9ERZp2dqh5iF98d1FQVzOuOo5ASoA2B0o4bP0tbT7j50hnHkj-uEWLAC2OWS7QmLnl3oaYiu2vUG-MhYaSP9PBcx5Q87oe2pYdN9IrOvZhQjy"
    },
    {
      id: "snatts-piti-pausa",
      title: "Snatt's Piti-pausa",
      category: "Social Content / Creative",
      description: "Contenido creativo y social media para la campaña Piti-pausa de Snatt's.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLmbUxrk7eFqxbcsVPgY-nQ2Z5tU7irf0wOUZ3GzA13W_5-Nt4xTxZYRIOicRgXpDSdI75VIt1b3EDGFgt1ZUr_YBlfJ89cVGgup2Ss6S2sU15pXjgWE8BN9A9WnTMDflo_1ufJlELhDMIJJJoKQZW5rD4XiEsPdTlshL2RvHaWKb9_j5WMAf5JJmg9K8_MTT1brbpQjkGPK4o2wXyo3DUAVN6nWiJcavph2oV63VxKTllS4wqY4xWCEHqZUzFtkiTxwg5fRNx4J1T"
    },
    {
      id: "porcelanosa",
      title: "Porcelanosa",
      category: "Branded Content / Luxury",
      description: "Branded content de lujo y materiales digitales para Porcelanosa.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZy4Hv0GQWEpV7BEiU0tpEmNbm6XvvO_irmbukctvJT3vMBksFruSXGAZ2iLzmF37vKG2tPWHxjqmRU0VmhWwiHvtdBKqshI2qWw90n74hWIYTQ5jc-vb_bUqOf7ogRAGn-uzwSYno79cTdA0ZULgPVIKTQ2hws3RTfk4WqrGRZQnL5nO0ofo-0vhfSo24_k-yz96pKM3jeysj6aNh35qTsvOHDQfzJkfM6Bljf-I8BVPKQ04gHxK529jl-NQ9eEz9rM8oM992NhKC"
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
};
