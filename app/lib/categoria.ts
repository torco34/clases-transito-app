// app/lib/categorias.ts
export const ETIQUETAS = {
  normas: { clase: "bg-red-600 text-white", texto: "NORMAS Y SANCIONES" },
  senalizacion: {
    clase: "bg-yellow-400 text-gray-900",
    texto: "SEÑALIZACIÓN VIAL",
  },
  documentos: {
    clase: "bg-blue-600 text-white",
    texto: "DOCUMENTOS Y TRÁMITES",
  },
  comportamiento: {
    clase: "bg-green-600 text-white",
    texto: "COMPORTAMIENTO SEGURO",
  },
} as const;

export type Categoria = keyof typeof ETIQUETAS;
