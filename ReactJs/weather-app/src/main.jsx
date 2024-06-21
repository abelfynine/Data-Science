// Se importan las bibliotecas necesarias de React para la renderización del componente principal de la aplicación.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Se utiliza el método createRoot de ReactDOM para renderizar el componente principal de la aplicación en el elemento con el id 'root' del DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Se envuelve la aplicación en <React.StrictMode> para activar advertencias adicionales y verificar problemas de rendimiento en el código.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
