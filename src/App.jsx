import WeatherDetails from './components/WeatherDetails/WeatherDetails'
import WeatherSearch from './components/WeatherSearch/WeatherSearch'
import * as weatherService from './services/weatherService'
import { useState, useEffect } from 'react'

export default function App() {
  const [weather, setWeather] = useState({})

  useEffect(
    ()=> {
      async function fetchDfaultData(){
         const data = await weatherService.show("Sydney")

      const weatherCondition = {
        location: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text
      }

      setWeather(weatherCondition)
      }

      fetchDfaultData()

    }, []
  )
  useEffect(
    ()=>{
      console.log('Weather has updated!!!!', weather)
    }, [weather]
  )

  const fetchData = async (city) => {
    const data = await weatherService.show(city)

    const weatherCondition = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text
    }

    setWeather(weatherCondition)
  }

  if(!weather.condition && !weather.temperature && !weather.location){
    return <h1>Loading....</h1>
  }

  return (
    <main>
      <h1>Weather API Example</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather}/>
    </main>
  )
}