// app/components/Sidebar.js
"use client"; // necesario porque usamos useState (interactividad)

import Link from "next/link";
import { useState } from "react";
export default function menuAcordeon({ categoria }: any) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm hover:bg-gray-800"
      >
        <span>{categoria.nombre}</span>
        <span>{abierto ? "▼" : "▲"}</span>
      </button>

      {abierto && (
        <div className="pl-4 mt-1 space-y-1 border-l-2 border-dashed border-gray-700 ml-3">
          {categoria.temas.map((tema) => (
            <Link
              key={tema.slug}
              href={`/temas/${categoria.slug}/${tema.slug}`}
              className="block px-3 py-1.5 rounded-md text-sm hover:bg-gray-600"
            >
              {tema.titulo}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
