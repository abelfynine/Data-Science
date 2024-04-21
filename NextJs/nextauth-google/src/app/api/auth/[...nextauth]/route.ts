// Importa el módulo NextAuth y el proveedor de autenticación de Google de NextAuth.
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define un manejador de autenticación utilizando NextAuth.
// Este manejador utiliza el proveedor de autenticación de Google y configura el cliente ID y el cliente secreto utilizando variables de entorno.
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

// Exporta el manejador como GET y POST para que pueda ser utilizado en las rutas de la aplicación.
export { handler as GET, handler as POST };
