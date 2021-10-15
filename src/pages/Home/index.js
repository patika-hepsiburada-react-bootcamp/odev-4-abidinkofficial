import { useState } from "react"

import Search from "../../components/Search"
import WeatherCard from "../../components/WeatherCard"

const Home = () => {
  const [city, setCity] = useState("istanbul")

  return (
    <div>
      Home
      <Search city={city} setCity={setCity} />
      <WeatherCard city={city} />
    </div>
  )
}

export default Home