// Importa StrictMode de React y ReactDOM para renderizar la aplicación en el DOM.
import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Importa el componente principal de la aplicación desde "./App".
import App from "./App";

// Obtiene el elemento raíz del DOM con el id "root".
const rootElement = document.getElementById("root");

// Renderiza la aplicación dentro de StrictMode para detectar posibles problemas en la aplicación.
ReactDOM.render(
  <StrictMode>
{/* Renderiza el componente App dentro de StrictMode. */}
    <App />
  </StrictMode>,
// Renderiza la aplicación en el elemento raíz del DOM.
  rootElement
);