// app/data/tema-circulacion.ts
import { Categoria } from "../../lib/categoria";

export const temaVisionCero = {
    numero: 3,
    titulo: "Visión Cero: Hacia un sistema de movilidad sin muertes ni lesiones graves",
    categoria: "normas" as Categoria,
    parrafos: [
        {
            titulo: "¿Qué es?",
            texto: "Es un derecho constitucional (Artículo 24) que protege a todas las personas, sin importar su condición física o cognitiva, a circular, permanecer y acceder a los espacios públicos de manera segura, confiable, eficiente y libre de barreras.",
        },
    ],
    tabla: [
        { ley: "Ley 769/2002", regula: "Estacionamiento y espacios exclusivos (Arts. 75, 76, 200)" },
        { ley: "Ley 1801/2016", regula: "Uso adecuado del espacio público" },
        { ley: "Ley 599/2000, Art. 134A", regula: "Sanción penal por discriminación" },
    ],
    cita: "\"El que arbitrariamente impida, obstruya o restrinja el pleno ejercicio de los derechos de las personas por razón de su discapacidad, incurrirá en prisión de doce (12) a treinta y seis (36) meses...\"",
    preguntas: [
        "¿Qué artículo constitucional protege este derecho?",
        "¿Qué porcentaje mínimo de parqueaderos exige la ley para personas con discapacidad?",
        "¿Qué ley modificó el Código Penal para sancionar la discriminación por discapacidad?",
    ],
    prevHref: "/temas/movilidad/usuarios-vulnerables",
    nextHref: "/temas/movilidad/omision-socorro",
};