import { useState } from "react"
import styles from "./Home.module.css"

import Search from "../../components/Search"
import WeatherCard from "../../components/WeatherCard"

const Home = () => {
  const [city, setCity] = useState("istanbul")

  return (
    <div className={styles.Home}>
      <Search city={city} setCity={setCity} />
      <WeatherCard city={city} />
    </div>
  )
}

export default Home