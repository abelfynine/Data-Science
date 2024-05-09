// Importa las hojas de estilo CSS y las dependencias necesarias.
import "./index.css";
import React, { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

// Exporta la función del componente App.
export default function App() {
// Define los estados iniciales para el texto de captura y la visibilidad del escáner.
  const [data, setData] = useState("Capture : ...");
  const [show, setShow] = useState(false);

// Función para actualizar la pantalla con el resultado del escaneo.
  const onUpdateScreen = (err, result) => {
    if (result) {
// Actualiza el estado del texto de captura con el resultado del escaneo.
      setData(result.text);
// Oculta el escáner después de capturar el código.
      setShow(false);
    } else {
// Actualiza el estado del texto de captura si no se encuentra ningún código.
      setData("Not Found");
    }
  };

// Renderiza la interfaz de usuario del componente App.
  return (
    <>
{/* Título de la página. */}
      <h1>Scan BarCode</h1>
{/* Contenedor de la tarjeta. */}
      <div className="card">
{/* Renderiza el componente del escáner de código de barras si show es verdadero. */}
        {show && (
          <BarcodeScannerComponent
            width={400}
            height={400}
            onUpdate={(err, result) => onUpdateScreen(err, result)} // Llama a la función onUpdateScreen al actualizar.
          />
        )}
{/* Muestra el resultado del escaneo. */}
        <p className="result">{data}</p>
        
      </div>
      <div>
{/* Botón para capturar un código de barras */}
          <button className="button" onClick={() => setShow(true)}> Capture </button>
        </div>
    </>
  );
}