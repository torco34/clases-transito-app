// app/components/TemaPage.tsx
import Link from "next/link";

import { ETIQUETAS, type Categoria } from "../lib/categorias";

interface FilaTabla {
  ley: string;
  regula: string;
}

interface TemaData {
  numero: number;
  titulo: string;
  categoria: Categoria;
  parrafos: { titulo: string; texto: string }[];
  tabla?: FilaTabla[];
  cita?: string;
  preguntas: string[];
  prevHref?: string;
  nextHref?: string;
}

export default function TemaPage({ data }: { data: TemaData }) {
  const etiqueta = ETIQUETAS[data.categoria];

  return (
    <>
      {/* Etiqueta de categoría */}
      <span
        className={`inline-block ${etiqueta.clase} text-xs font-bold px-3 py-1 rounded-full mb-3`}
      >
        {etiqueta.texto}
      </span>

      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.titulo}</h1>

      {/* Párrafos de contenido */}
      {data.parrafos.map((p, i) => (
        <div key={i}>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            {p.titulo}
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">{p.texto}</p>
        </div>
      ))}

      {/* Tabla legal (opcional — solo se muestra si el tema la tiene) */}
      {data.tabla && (
        <table className="w-full border-collapse mb-4 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-yellow-400 text-gray-900">
              <th className="border border-yellow-500 p-2 text-left">Ley</th>
              <th className="border border-yellow-500 p-2 text-left">
                Qué regula
              </th>
            </tr>
          </thead>
          <tbody>
            {data.tabla.map((fila, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border p-2">{fila.ley}</td>
                <td className="border p-2">{fila.regula}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Cita legal (opcional) */}
      {data.cita && (
        <blockquote className="border-l-4 border-red-600 bg-red-50 pl-4 py-2 italic text-gray-700 mb-4 rounded-r-md">
          {data.cita}
        </blockquote>
      )}

      {/* Preguntas de repaso */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        Preguntas de repaso
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {data.preguntas.map((pregunta, i) => (
          <li key={i}>{pregunta}</li>
        ))}
      </ol>

      {/* Navegación anterior/siguiente */}
      <div className="flex justify-between mt-10 pt-4 border-t">
        {data.prevHref ?
          <Link
            href={data.prevHref}
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300 text-sm"
          >
            ← Tema anterior
          </Link>
        : <span />}
        {data.nextHref ?
          <Link
            href={data.nextHref}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
          >
            Siguiente tema →
          </Link>
        : <span />}
      </div>
    </>
  );
}
