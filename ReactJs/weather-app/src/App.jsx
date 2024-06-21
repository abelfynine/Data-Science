// Importa React y los hooks useState y useRef desde la biblioteca de React.
import React, { useState, useEffect, useRef } from 'react';
// Importa el archivo de estilos CSS.
import './index.css';

// Define el componente funcional App.
const App = () => {
  // Declara un estado llamado weatherData con un valor inicial de null.
  const [weatherData, setWeatherData] = useState(null);
  // Declara un estado llamado cityInput con un valor inicial de 'London'.
  const [cityInput, setCityInput] = useState('London');
  // Declara un estado llamado forecastData con un valor inicial de un array vacío.
  const [forecastData, setForecastData] = useState([]);
  // Declara un estado llamado backgroundImage con un valor inicial de una cadena vacía.
  const [backgroundImage, setBackgroundImage] = useState('');
  // Declara un estado llamado isPanelVisible con un valor inicial de false.
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  // Declara un estado llamado isMobile con un valor inicial de false.
  const [isMobile, setIsMobile] = useState(false);

  // Usa el hook useEffect para ejecutar fetchWeatherData y fetchWeatherForecast al montar el componente.
  useEffect(() => {
    fetchWeatherData();
    fetchWeatherForecast();
  }, []);

  // Usa el hook useEffect para gestionar los cambios de la media query.
  useEffect(() => {
    // Define una media query para dispositivos móviles.
    const mediaQuery = window.matchMedia('(max-width: 600px) and (max-height: 1280px)');

    // Define una función para actualizar el estado isMobile basado en la media query.
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Agrega un listener para la media query.
    mediaQuery.addListener(handleMediaQueryChange);

    // Verifica inicialmente la condición de la media query.
    handleMediaQueryChange(mediaQuery);

    // Limpia el listener cuando el componente se desmonte.
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  // Declara una referencia llamada btnRef.
  const btnRef = useRef(null);
  // Declara una segunda referencia llamada btnRef2.
  const btnRef2 = useRef(null);
  // Declara una referencia para el componente App.
  const appRef = useRef(null);

  // Define una función asincrónica llamada fetchWeatherData.
  const fetchWeatherData = async () => {
    // Verifica si cityInput está vacío después de eliminar los espacios en blanco.
    if (cityInput.trim() === '') {
      // Muestra una alerta si cityInput está vacío y termina la función.
      alert('Please enter a city');
      return;
    }

    try {
      // Realiza una solicitud fetch a la API del clima con cityInput y el token de acceso.
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_ACCESS_TOKEN_SECRET}&q=${cityInput}`);

      // Verifica si la respuesta no es correcta (status no es 200-299).
      if (!response.ok) {
        // Lanza un error si la respuesta no es correcta.
        throw new Error('City not found, please try again');
      }

      // Convierte la respuesta a formato JSON.
      const data = await response.json();

      // Verifica si la respuesta contiene un error.
      if (data.error) {
        // Lanza un error si la respuesta contiene un error.
        throw new Error('City not found, please try again');
      }

      // Establece el estado weatherData con los datos obtenidos.
      setWeatherData(data);
      // Resetea el valor de cityInput a una cadena vacía.
      setCityInput('');
      // Llama a la función changeBackground con los datos obtenidos.
      changeBackground(data);
    } catch (error) {
      // Muestra una alerta si ocurre un error durante la solicitud.
      alert('Failed to fetch weather data, please try again');
      // Muestra un mensaje de error en la consola.
      console.error('Error fetching weather data:', error);
    }
  };

  // Define una función asincrónica llamada fetchWeatherForecast.
  const fetchWeatherForecast = async () => {
    try {
      // Realiza una solicitud fetch a la API del clima para obtener el pronóstico del tiempo con cityInput y el token de acceso.
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_ACCESS_TOKEN_SECRET}&q=${cityInput}&days=7&aqi=no&alerts=no`);
      // Verifica si la respuesta no es correcta (status no es 200-299).
      if (!response.ok) {
        // Lanza un error si la respuesta no es correcta.
        throw new Error('Network response was not ok');
      }

      // Convierte la respuesta a formato JSON.
      const data = await response.json();

      // Establece el estado forecastData con los datos del pronóstico obtenidos, excluyendo el primer día.
      setForecastData(data.forecast.forecastday.slice(1));
    } catch (error) {
      // Muestra un mensaje de error en la consola si ocurre un error durante la solicitud.
      console.error('Error fetching weather forecast:', error);
    }
  };

  // Define una función asincrónica llamada changeBackground que toma un parámetro data.
  const changeBackground = async (data) => {

    // Inicializa la variable timeOfDay con el valor "day".
    let timeOfDay = "day";
    // Verifica si no es de día, si es así, cambia timeOfDay a "night".
    if (!data.current.is_day) {
      timeOfDay = "night";
    }

    // Obtiene el código de la condición actual del clima desde data.
    const code = data.current.condition.code;

    // Referencias a los elementos del DOM mediante los refs definidos.
    const app = appRef.current;
    const btn = btnRef.current;
    const btn2 = btnRef2.current

    // Declara una variable para almacenar la URL de la imagen de fondo.
    let imageUrl;

    // Verifica si el código de la condición del clima es 1000 (despejado).
    if (code == 1000) {
      // Importa la imagen correspondiente al momento del día (day/night).
      imageUrl = await import(`./assets/images/${timeOfDay}/clear.jpg`);

      // Cambia el fondo del botón btn a un color específico.
      if (btn) {
        btn.style.background = "#e5ba92";
      }
      // Cambia el fondo del botón btn2 a un color específico.
      if (btn2) {
        btn2.style.background = "#e5ba92";
      }

      // Si es de noche, cambia el fondo de los botones a otro color.
      if (timeOfDay == "night") {
        if (btn) {
          btn.style.background = "#181e27"
        }
        if (btn2) {
          btn2.style.background = "#181e27"
        }

      }
    }
    // Verifica si el código de la condición del clima está en la lista de códigos nublados.
    else if (
      code == 1003 ||
      code == 1006 ||
      code == 1009 ||
      code == 1030 ||
      code == 1069 ||
      code == 1087 ||
      code == 1135 ||
      code == 1273 ||
      code == 1276 ||
      code == 1279 ||
      code == 1282
    ) {
      // Importa la imagen correspondiente al momento del día (day/night) para el clima nublado.
      imageUrl = await import(`./assets/images/${timeOfDay}/cloudy.jpg`);

      // Cambia el fondo del botón btn a un color específico.
      if (btn) {
        btn.style.background = "#fa6d1b"
      }
      // Cambia el fondo del botón btn2 a un color específico.
      if (btn2) {
        btn2.style.background = "#fa6d1b"
      }

      // Si es de noche, cambia el fondo de los botones a otro color.
      if (timeOfDay == "night") {
        if (btn) {
          btn.style.background = "#181e27"
        }
        if (btn2) {
          btn2.style.background = "#181e27"
        }

      }
    }
    // Verifica si el código de la condición del clima está en la lista de códigos lluviosos.
    else if (
      code == 1063 ||
      code == 1069 ||
      code == 1072 ||
      code == 1150 ||
      code == 1153 ||
      code == 1180 ||
      code == 1183 ||
      code == 1186 ||
      code == 1189 ||
      code == 1192 ||
      code == 1195 ||
      code == 1204 ||
      code == 1207 ||
      code == 1240 ||
      code == 1243 ||
      code == 1246 ||
      code == 1249 ||
      code == 1252
    ) {
      // Importa la imagen correspondiente al momento del día (day/night) para el clima lluvioso.
      imageUrl = await import(`./assets/images/${timeOfDay}/rainy.jpg`);

      // Cambia el fondo del botón btn a un color específico.
      if (btn) {
        btn.style.background = "#647d75"
      }
      // Cambia el fondo del botón btn2 a un color específico.
      if (btn2) {
        btn2.style.background = "#647d75"
      }

      // Si es de noche, cambia el fondo de los botones a otro color.
      if (timeOfDay == "night") {
        if (btn) {
          btn.style.background = "#325c80"
        }
        if (btn2) {
          btn2.style.background = "#325c80"
        }

      }
    } else {
      // Para cualquier otro código, importa la imagen correspondiente al momento del día (day/night) para el clima nevado.
      imageUrl = await import(`./assets/images/${timeOfDay}/snowy.jpg`);

      // Cambia el fondo del botón btn a un color específico.
      if (btn) {
        btn.style.background = "#4d72aa"
      }
      // Cambia el fondo del botón btn2 a un color específico.
      if (btn2) {
        btn2.style.background = "#4d72aa"
      }

      // Si es de noche, cambia el fondo de los botones a otro color.
      if (timeOfDay == "night") {
        if (btn) {
          btn.style.background = "#1b1b1b"
        }
        if (btn2) {
          btn2.style.background = "#1b1b1b"
        }

      }
    }
    // Establece la imagen de fondo con la URL obtenida.
    setBackgroundImage(`url(${imageUrl.default})`);
    // Establece la opacidad del contenedor de la aplicación a 1 para que aparezca gradualmente.
    app.style.opacity = "1"
  };

  // Define una función llamada getDayName que toma un parámetro dateStr.
  const getDayName = (dateStr) => {
    // Declara un array con los días de la semana.
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Crea un objeto Date a partir de dateStr.
    const date = new Date(dateStr);
    // Obtiene el día de la semana y le suma 1 para obtener el día siguiente.
    let dayOfWeek = date.getDay() + 1;
    // Si el día siguiente es sábado (índice 6), entonces el día siguiente es domingo (índice 0).
    if (dayOfWeek === 7) dayOfWeek = 0;
    // Retorna el nombre del día de la semana correspondiente.
    return daysOfWeek[dayOfWeek];
  };

  // Define una función llamada formatDate que toma un parámetro dateStr.
  const formatDate = (dateStr) => {
    // Crea un objeto Date a partir de dateStr.
    const date = new Date(dateStr);
    // Declara un array con los días de la semana.
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Obtiene el nombre del día de la semana correspondiente a la fecha.
    const dayOfWeek = daysOfWeek[date.getDay()];
    // Obtiene el día del mes de la fecha.
    const day = date.getDate();
    // Obtiene el año de la fecha.
    const year = date.getFullYear();
    // Retorna una cadena de texto con el formato "día de la semana, día, mes, año".
    return `${dayOfWeek} ${day}, ${date.getMonth() + 1} ${year}`;
  };

  // Función para mostrar u ocultar el panel en dispositivos moviles
  const togglePanelVisibility = () => {
    // Verifica si el dispositivo coincide con la media query para pantallas con un ancho máximo de 600px y una altura máxima de 1280px.
    if (window.matchMedia('(max-width: 600px) and (max-height: 1280px)').matches) {
      // Cambia el estado de visibilidad del panel al valor opuesto.
      setIsPanelVisible(!isPanelVisible);
    }
  };

  return (
    // Componente principal que establece la referencia 'appRef' y aplica clases de estilo y estilos en línea para el fondo.
    <div ref={appRef} className='relative min-h-screen bg-cover bg-center bg-no-repeat text-white transition-opacity duration-500' style={{ backgroundImage: backgroundImage }}>
      {/* Div para aplicar una capa negra semitransparente sobre el fondo. */}
      <div className='absolute inset-0 bg-black bg-opacity-30 z-0'>
        {/* Div para contener el contenido de la parte superior de la pantalla. */}
        <div className='absolute top-0 left-0 w-full h-full flex justify-between items-start flex-col p-8 pt-12 pb-16'>
          {/* Título de la aplicación. */}
          <h3 className="brand">The Weather</h3>
          {/* Contenedor flex para el contenido principal, dispuesto en columna en pantallas móviles y en fila en pantallas grandes. */}
          <div className='flex justify-center items-center flex-col md:flex-row'>
            {/* Div para mostrar la temperatura actual. */}
            <div className='mb-4 md:mb-0'>
              <h1 className='text-7xl m-0'>{weatherData?.current?.temp_c}&#176;</h1>
            </div>
            {/* Div para mostrar el nombre de la ciudad y la hora local. */}
            <div className='mx-4 mb-4 md:mb-0 text-center md:text-left'>
              <h1 className='m-0 mb-1 text-3xl'>{weatherData?.location?.name}</h1>
              <small>
                <span>{weatherData?.location?.localtime.split(' ')[1]}</span> - <span>{formatDate(weatherData?.location?.localtime)}</span>
              </small>
            </div>

            {/* Renderizado condicional basado en el estado 'isMobile' para mostrar el ícono y la descripción del clima. */}
            {isMobile ? (
              <div className='mx-4 text-center md:text-left'>
                <div className="flex flex-col items-center md:flex-row md:items-start justify-center">
                  <img src={`http:${weatherData?.current?.condition?.icon}`} className='block mx-0 w-10 h-10' alt="icon" width="50" height="50" />
                  <span className="text-lg">{weatherData?.current?.condition?.text}</span>
                </div>
              </div>
            ) : (
              <div className='mx-4 text-center md:text-left'>
                <div className="flex md:flex-col">
                  <img src={`http:${weatherData?.current?.condition?.icon}`} className='block mx-0 w-10 h-10' alt="icon" width="50" height="50" />
                  <span className="text-lg m-1">{weatherData?.current?.condition?.text}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Panel que muestra detalles adicionales del clima y el pronóstico de 6 días. */}
        <div className={`absolute top-0 right-0 w-full md:w-2/5 h-full bg-gray-400 bg-opacity-25 shadow-lg backdrop-filter backdrop-blur-lg border border-white border-opacity-25 z-10 p-8 overflow-y-auto ${isPanelVisible ? 'block' : 'hidden md:block'}`}>
          <form onSubmit={(e) => {
            // Maneja el envío del formulario para buscar datos del clima.
            e.preventDefault();
            fetchWeatherData();
            fetchWeatherForecast();
          }} id="locationInput" className='mb-12'>
            {isPanelVisible && (
              // Botón para cerrar el panel en dispositivos móviles.
              <div>
                <button type="button" onClick={togglePanelVisibility} className="absolute left-2 top-1 p-1">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}

            {/* Campo de entrada para buscar una ubicación. */}
            <input type="text"
              className="bg-transparent border-b border-gray-300 px-4 py-2 w-4/5 text-white text-lg focus:outline-none"
              placeholder="Search Location..." value={cityInput} onChange={(e) => setCityInput(e.target.value)} />
            {/* Botón de búsqueda. */}
            <button type="submit" ref={btnRef} className="absolute top-0 right-0 p-6 m-0 border-none outline-none bg-orange-500 text-white cursor-pointer text-lg transition-colors duration-400 hover:text-black">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Lista de detalles del clima actual. */}
          <ul className="py-0 my-8 border-b border-gray-300">
            <h4 className='my-12'>Weather Details</h4>
            <li className='text-gray-300 my-10 flex justify-between items-center'>
              <span className='text-gray-100'>Cloudy</span>
              <span className="text-gray-100">{weatherData?.current?.cloud}%</span>
            </li>
            <li className='text-gray-300 my-10 flex justify-between items-center'>
              <span className='text-gray-100'>Humidity</span>
              <span className='text-gray-100'>{weatherData?.current?.humidity}%</span>
            </li>
            <li className='text-gray-300 my-10 flex justify-between items-center'>
              <span className='text-gray-100'>Wind</span>
              <span className='text-gray-100'>{weatherData?.current?.wind_kph}km/h</span>
            </li>
          </ul>

          {/* Título para la sección de pronóstico de 6 días. */}
          <h4>6 - Day Forecast</h4>
          <ul>
            {/* Mapea los datos del pronóstico para mostrar cada día. */}
            {forecastData.map((day, index) => (
              <li key={index} className="flex justify-between items-center border border-gray-300 bg-gray-100 bg-opacity-15 p-2 my-6">
                <div className="flex-1 flex justify-center items-center">{getDayName(day.date)}</div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="text-center">
                    <span>{day.day?.maxtemp_c}&#176;C</span><br />
                    <span>Max Temp</span>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="text-center">
                    <span>{day.day?.mintemp_c}&#176;C</span><br />
                    <span>Min Temp</span>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <div className="text-center">
                    <img src={`http:${day.day?.condition?.icon}`} className="mx-auto h-12 w-12" alt="icon" />
                    <p className="mt-1 text-sm">{day.day?.condition?.text}</p>
                  </div>
                </div>
              </li>
            ))}
            <div className="mt-8 border-b border-gray-300"></div>
          </ul>
        </div>

        {/* Botón de búsqueda visible en dispositivos móviles. */}
        <button ref={btnRef2} onClick={togglePanelVisibility} className="absolute top-0 right-0 p-6 m-0 border-none outline-none bg-orange-500 text-white cursor-pointer text-lg transition-colors duration-400 hover:text-black">
          <i className="fas fa-search"></i>
        </button>

      </div>
    </div>
  );
};
// Aquí se exporta el componente `App` como el valor predeterminado del archivo. 
export default App;