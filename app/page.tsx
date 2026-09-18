import { categorias } from "./data/temas";

export default function Page() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">
          Bienvenido a Educación Vial
        </h1>
        <p className="mt-2 text-gray-600">
          Selecciona una categoría en el menú lateral o explora los temas
          principales a continuación.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {categorias.map((cat) => (
          <div
            key={cat.slug}
            className="p-5 bg-white rounded-lg border shadow-sm"
          >
            <h2 className="text-xl font-bold text-yellow-600">{cat.nombre}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {cat.temas.length} temas disponibles
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
