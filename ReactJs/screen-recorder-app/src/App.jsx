import { useState, useRef } from 'react';
import './index.css';

function App() {
  const [status, setStatus] = useState('idle');
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const mediaStreamRef = useRef(null);

  const handleTrackEnded = () => {
    if (status === 'recording') {
      setStatus('stopped');
    }
  };

  const startRecording = async () => {
    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      mediaStreamRef.current = displayStream;

      displayStream.getTracks().forEach(track => {
        track.addEventListener('ended', handleTrackEnded);
      });

      mediaRecorderRef.current = new MediaRecorder(displayStream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/mp4' });
        setMediaBlobUrl(URL.createObjectURL(blob));
        chunksRef.current = [];
        setStatus('stopped');
      };
      mediaRecorderRef.current.start();
      setStatus('recording');
    } catch (error) {
      console.error("Error accessing display media", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    // Detener todas las pistas de medios
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
  };

  return (
    <div className="screen-recorder">
      {(status === "recording" || status === "stopped") && (
        <p className={`status ${status}`}>{status === "recording" ? "Recording..." : "Stopped"}</p>
      )}
      <video src={mediaBlobUrl} autoPlay loop controls className="video-player"></video>
      <div className="controls">
        <button className="btn start-btn" onClick={startRecording} disabled={status === "recording"}>
          Start Recording
        </button>
        <button className="btn stop-btn" onClick={stopRecording} disabled={status !== "recording"}>
          Stop Recording
        </button>
      </div>
    </div>
  );
}

export default App;
