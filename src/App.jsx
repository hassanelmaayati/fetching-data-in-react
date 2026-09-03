
import WeatherSearch from './components/WeatherSearch/WeatherSearch'
import * as weatherService from './services/weatherService'
import { useState } from 'react'



export default fucntion App() {

const [weather, setWeather] = useState({});
const fetchData=async()=>{
const data=await weatherService.show('Manama')

console.log('weather data', data)
}


  return (
<main>

  <h1>weather API Example</h1>
<button onClick={fetchData}>Get weather for the city</button>
<weatherSearch/>


</main>
  );
}

export default App