// app/data/temas.ts

export interface Tema {
  slug: string;
  titulo: string;
  categoria: string;
  parrafos: { titulo: string; texto: string }[];
  tabla?: { ley: string; regula: string }[];
  cita?: string;
  preguntas: string[];
}

export interface CategoriaTemas {
  slug: string;
  nombre: string;
  temas: Tema[];
}

export const categorias: CategoriaTemas[] = [
  {
    slug: "movilidad-segura",
    nombre: "Movilidad segura y sostenible",
    temas: [
      {
        slug: "vision-cero",
        titulo: "1. Visión cero",
        categoria: "comportamiento",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "victimas-accidentes",
        titulo: "2. Las víctimas de accidentes de tránsito",
        categoria: "comportamiento",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "usuarios-vulnerables",
        titulo: "3. Los usuarios vulnerables y su prelación",
        categoria: "normas",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "movilidad-sostenible",
        titulo: "4. La movilidad sostenible",
        categoria: "comportamiento",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "omision-socorro",
        titulo: "5. La omisión de socorro",
        categoria: "normas",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "conduccion-preventiva",
        titulo: "6. Conducción preventiva",
        categoria: "comportamiento",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "conduccion-eficiente",
        titulo: "7. Conducción eficiente",
        categoria: "comportamiento",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "corresponsabilidad",
        titulo: "8. La corresponsabilidad",
        categoria: "comportamiento",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "circulacion-accesibilidad",
        titulo: "9. Circulación, permanencia y accesibilidad para todos",
        categoria: "normas",
        parrafos: [
          {
            titulo: "¿Qué es?",
            texto:
              "Es un derecho constitucional (Artículo 24) que protege a todas las personas, sin importar su condición física o cognitiva, a circular, permanecer y acceder a los espacios públicos.",
          },
        ],
        tabla: [
          {
            ley: "Ley 769/2002",
            regula: "Estacionamiento y espacios exclusivos",
          },
          {
            ley: "Ley 599/2000, Art. 134A",
            regula: "Sanción penal por discriminación",
          },
        ],
        preguntas: ["¿Qué artículo constitucional protege este derecho?"],
      },
    ],
  },
  {
    slug: "normas-transito",
    nombre: "Normas de tránsito",
    temas: [
      // 👇 Reemplaza estos 11 por tus títulos reales — dime cuáles son y te los completo
      {
        slug: "tema-1",
        titulo: "Tema 1 (pendiente)",
        categoria: "normas",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
      {
        slug: "tema-2",
        titulo: "Tema 2 (pendiente)",
        categoria: "normas",
        parrafos: [{ titulo: "¿Qué es?", texto: "Escribe aquí el contenido." }],
        preguntas: ["Pregunta de repaso."],
      },
    ],
  },
];
