// Exporta el middleware predeterminado de next-auth para autenticación de sesión.
export { default } from "next-auth/middleware"

// Exporta un objeto de configuración con una propiedad matcher que especifica la ruta "/dashboard".
// Esta configuración se utiliza para aplicar el middleware de autenticación solo en la ruta "/dashboard".
export const config = { matcher: ["/dashboard"] }
