"use client";

import Link from "next/link";
import { useState } from "react";

interface Tema {
  slug: string;
  titulo: string;
}

interface Categoria {
  slug: string;
  nombre: string;
  temas: Tema[];
}

interface AcordeonProps {
  categoria: Categoria;
  locale: string;
}

export default function MenuAcordeon({ categoria, locale }: AcordeonProps) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAbierto(!abierto)}
        type="button"
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
      >
        <span>{categoria.nombre}</span>

        <span className="text-xs text-gray-400">{abierto ? "▲" : "▼"}</span>
      </button>

      {abierto && (
        <div className="pl-4 mt-1 space-y-1 border-l-2 border-dashed border-gray-700 ml-3">
          {categoria.temas.map((tema) => (
            <Link
              key={tema.slug}
              href={`/${locale}/clases/${categoria.slug}/${tema.slug}`}
              className="block px-3 py-1.5 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {tema.titulo}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
