// Este componente es una barra de navegación (Navbar) que se muestra en la parte superior de la página.
// Utiliza Next.js y NextAuth para la autenticación de usuarios.
// Importa los módulos necesarios de Next.js y NextAuth.
"use client";

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

// Define el componente Navbar.
function Navbar() {
  // Usa el hook useSession de NextAuth para obtener la sesión del usuario.
  const { data: session } = useSession();

  // Retorna la estructura de la barra de navegación.
  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-white">
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>

      {/* Condicionalmente muestra diferentes elementos dependiendo si el usuario está autenticado o no. */}
      {session?.user ? (
      // Si el usuario está autenticado, muestra enlaces al dashboard, el nombre y correo del usuario, su imagen y un botón de logout.
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>
            {session.user.name} {session.user.email}
          </p>
          <img
            src={session.user.image}
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <button
            // Utiliza el método signOut de NextAuth para cerrar sesión.
            onClick={async () => {
              await signOut({
                callbackUrl: "/",
              })
            }}
          >
            Logout
          </button>
        </div>
      ) : (
      // Si el usuario no está autenticado, muestra un botón de Sign In que al hacer clic llama a la función signIn de NextAuth para iniciar sesión.
        <button
          onClick={() => signIn()}
          className="bg-sky-400 px-3 py-2 rounded"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}
// Exporta el componente Navbar para que pueda ser utilizado en otros archivos.
export default Navbar;
