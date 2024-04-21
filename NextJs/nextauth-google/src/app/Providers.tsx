// Importa el hook useSession de next-auth/react para manejar la sesión de usuario.
// El comentario "use client" indica que este código se ejecutará solo en el lado del cliente (navegador).
"use client";
import { SessionProvider } from "next-auth/react";

// Define un componente Providers que recibe un objeto con una propiedad children y retorna JSX.
export function Providers({ children }: { children: React.ReactNode }) {
  // Retorna un SessionProvider que envuelve el contenido de la aplicación.
  // El SessionProvider proporciona el contexto de sesión a los componentes hijos.
  return <SessionProvider>{children}</SessionProvider>;
}
