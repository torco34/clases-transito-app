"use client";

import { useParams } from "next/navigation";
import { categorias } from "../../data/temas";
import Acordeon from "./MenuAcordeon";

export default function SideNav() {
  const params = useParams();

  const locale = (params?.locale as string) || "es";
  return (
    <aside className="w-72 bg-gray-900 text-white flex flex-col border-r-4 border-dashed border-yellow-400">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-lg font-bold text-yellow-400">🚦 Educación Vial</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {categorias.map((cat) => (
          <Acordeon key={cat.slug} categoria={cat} locale={locale} />
        ))}
      </nav>
    </aside>
  );
}
