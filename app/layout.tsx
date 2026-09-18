import SideNav from "./ui/dashboard/SideNav";

import "./ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          <SideNav />
          <main className="flex-1 p-8 max-w-4xl">
            {children} {/* aquí se inserta el contenido de cada página */}
          </main>
        </div>
      </body>
    </html>
  );
}
