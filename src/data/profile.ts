import { Profile, EducationItem } from "@/types";

export const profileData: Profile = {
  firstName: "Ezequiel",
  lastName: "Martínez",
  role: "Desarrollador de Software",
  bio: "Estudiante de Desarrollo de Software con enfoque en backend. Trabajo con Python y JavaScript, y estoy creciendo en React, TypeScript y ciberseguridad. Construyo software que resuelve problemas reales de forma simple y eficaz.",
  location: "Esperanza, Santa Fe",
  email: "ezequieljemartinez@gmail.com",
  aboutText: [
    "Soy una persona curiosa y creativa, siempre con ganas de aprender algo nuevo. Disfruto el proceso de pensar ideas y convertirlas en soluciones útiles para los demás.",
    "Actualmente curso la Tecnicatura en Software Informático en ITEC \"El Molino\" (Esperanza, Santa Fe), donde vengo trabajando con Python, Java, Kotlin y JavaScript en proyectos que van desde sistemas de gestión hasta aplicaciones móviles. Mi enfoque principal es el backend, pero también me muevo en el frontend con React y TypeScript.",
    "Me manejo con la terminal de Linux y uso Git como parte de mi flujo de trabajo diario. Estoy buscando bootcamps y oportunidades de aprendizaje para seguir creciendo, especialmente en el área de ciberseguridad - entender cómo proteger los sistemas que construyo y pensar la seguridad desde el diseño.",
    "Me gusta enfrentar desafíos, trabajar de manera autodidacta y colaborar con otras personas para crecer juntos."
  ],
  aboutTextEn: [
    "I am a curious and creative person, always eager to learn something new. I enjoy the process of brainstorming ideas and turning them into useful solutions for others.",
    "I am currently studying for a Degree in Computer Software at ITEC \"El Molino\" (Esperanza, Santa Fe), where I have been working with Python, Java, Kotlin, and JavaScript on projects ranging from management systems to mobile applications. My main focus is the backend, but I also work on the frontend with React and TypeScript.",
    "I'm comfortable using the Linux terminal and use Git as part of my daily workflow. I am looking for bootcamps and learning opportunities to continue growing, especially in the area of cybersecurity - understanding how to protect the systems I build and thinking about security from the design phase.",
    "I like facing challenges, being self-taught, and collaborating with others to grow together."
  ]
};

export const educationData: EducationItem[] = [
  {
    institution: 'ITEC "El Molino"',
    title: "Tecnicatura en Software Informático",
    titleEn: "Degree in Computer Software",
    period: "2024 - 2026",
    type: "degree",
  },
  {
    institution: 'CEIT "Centro de estudios informáticos y tecnológicos"',
    title: "Programación y Desarrollo Web HTML, CSS, JS y PHP",
    titleEn: "Web Programming and Development HTML, CSS, JS and PHP",
    period: "Feb 2023",
    type: "certificate",
    certificateUrl: "/Certificado_Desarrollo_Web.pdf",
  }
];
