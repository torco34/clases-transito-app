import { categorias } from "../../../../data/temas";

interface PageProps {
  params: Promise<{
    locale: string;
    categoria: string;
    tema: string;
  }>;
}

export default async function ClasePage({ params }: PageProps) {
  const { categoria: rawCategoria, tema: rawTema, locale } = await params;

  // Decodificar por si vienen caracteres especiales o espacio en la URL
  const categoriaSlug = decodeURIComponent(rawCategoria);
  const temaSlug = decodeURIComponent(rawTema);

  const categoria = categorias.find((cat) => cat.slug === categoriaSlug);
  const tema = categoria?.temas.find((item) => item.slug === temaSlug);

  if (!categoria || !tema) {
    return (
      <div className="p-6 bg-red-50 rounded-lg border border-red-200">
        <h1 className="text-2xl font-bold text-red-600">
          Clase no encontrada (404)
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          No se encontró el contenido para la siguiente ruta:
        </p>
        <ul className="mt-2 text-xs font-mono bg-white p-3 rounded border text-gray-800 space-y-1">
          <li>
            <strong>Locale:</strong> {locale}
          </li>
          <li>
            <strong>Categoría recibida:</strong> {categoriaSlug}
          </li>
          <li>
            <strong>Tema recibido:</strong> {temaSlug}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-yellow-600">
          {categoria.nombre}
        </p>
        <h1 className="mt-1 text-4xl font-bold text-gray-900">{tema.titulo}</h1>
      </header>

      <section className="space-y-6">
        {tema.parrafos.map((parrafo, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-gray-800">
              {parrafo.titulo}
            </h2>
            <p className="mt-2 leading-7 text-gray-700">{parrafo.texto}</p>
          </div>
        ))}
      </section>

      {tema.tabla && (
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Normativa relacionada
          </h2>
          <table className="w-full border-collapse border bg-white">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border p-3 text-left">Ley</th>
                <th className="border p-3 text-left">Regula</th>
              </tr>
            </thead>
            <tbody>
              {tema.tabla.map((fila, index) => (
                <tr key={index}>
                  <td className="border p-3 font-semibold">{fila.ley}</td>
                  <td className="border p-3">{fila.regula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {tema.cita && (
        <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 p-4 text-gray-800 italic">
          {tema.cita}
        </blockquote>
      )}

      <section className="rounded-lg bg-white border p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Preguntas de repaso
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          {tema.preguntas.map((pregunta, index) => (
            <li key={index}>{pregunta}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
