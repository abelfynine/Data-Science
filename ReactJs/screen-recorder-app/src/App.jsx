// Importa useState y useRef de React.
import { useState, useRef } from 'react';
// Importa el archivo de estilos CSS.
import './index.css';

function App() {
  // Declara el estado 'status' con el valor inicial 'idle'.
  const [status, setStatus] = useState('idle');
  // Declara el estado 'mediaBlobUrl' para almacenar la URL del video grabado.
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  // Crea una referencia para el MediaRecorder.
  const mediaRecorderRef = useRef(null);
  // Crea una referencia para almacenar los fragmentos de datos del video.
  const chunksRef = useRef([]);
  // Crea una referencia para el flujo de medios.
  const mediaStreamRef = useRef(null);
  
  // Maneja el evento cuando una pista de medios termina.
  const handleTrackEnded = () => {
    if (status === 'recording') {
      setStatus('stopped');
    }
  };

  // Función para iniciar la grabación.
  const startRecording = async () => {
    try {
      // Solicita acceso a la captura de pantalla y audio del sistema.
      const displayStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      mediaStreamRef.current = displayStream;

      // Añade un evento de finalización a cada pista de medios.
      displayStream.getTracks().forEach(track => {
        track.addEventListener('ended', handleTrackEnded);
      });

      // Inicializa el MediaRecorder con el flujo de medios capturado.
      mediaRecorderRef.current = new MediaRecorder(displayStream);
      // Almacena los datos grabados en chunksRef cuando están disponibles.
      mediaRecorderRef.current.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };
      // Maneja el evento cuando se detiene la grabación.
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/mp4' });
        setMediaBlobUrl(URL.createObjectURL(blob));
        chunksRef.current = [];
        setStatus('stopped');
      };
      // Inicia la grabación.
      mediaRecorderRef.current.start();
      setStatus('recording');
    } catch (error) {
      console.error("Error accessing display media", error);
    }
  };

  // Función para detener la grabación.
  const stopRecording = () => {
    // Detiene el MediaRecorder si está grabando.
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    // Detener todas las pistas de medios.
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
  };

  return (
    // Contenedor principal de la aplicación de grabación de pantalla.
    <div className="screen-recorder">
      // Condicional para mostrar el estado de la grabación solo si está grabando o detenido.
      {(status === "recording" || status === "stopped") && (
      // Párrafo que muestra el estado actual de la grabación, con una clase dinámica basada en el estado.
        <p className={`status ${status}`}>{status === "recording" ? "Recording..." : "Stopped"}</p>
      )}
      // Elemento de video que reproduce el contenido grabado, con controles y reproducción en bucle.
      <video src={mediaBlobUrl} autoPlay loop controls className="video-player"></video>
      // Contenedor de los botones de control.
      <div className="controls">
        // Botón para iniciar la grabación, deshabilitado si ya está grabando.
        <button className="btn start-btn" onClick={startRecording} disabled={status === "recording"}>
          Start Recording
        </button>
        // Botón para detener la grabación, deshabilitado si no está grabando.
        <button className="btn stop-btn" onClick={stopRecording} disabled={status !== "recording"}>
          Stop Recording
        </button>
      </div>
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos.
export default App;
