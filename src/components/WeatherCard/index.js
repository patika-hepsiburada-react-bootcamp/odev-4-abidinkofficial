import { useQuery } from "@apollo/client"
import { GET_CITY_BY_NAME } from "../../api/queries"
import styles from "./WeatherCard.module.css"

const WeatherCard = ({ city }) => {
  const { loading, data } = useQuery(GET_CITY_BY_NAME, {
    variables: { name: city, country: "TR", config: { units: "metric", lang: "tr" } }
  })

  if (loading) return <div className={styles["card"]}>Yüklenior...</div>

  return (
    data && <div className={styles["card"]}>
      <div className={styles["card-intro"]}>
        <h1>{data.getCityByName.name},<br /><span>Türkiye</span></h1>
        <img
          src={`https://openweathermap.org/img/wn/${data.getCityByName.weather.summary.icon}@4x.png`}
          alt={`${data.getCityByName.weather.summary.title}`}
        />
        <p>{data.getCityByName.weather.summary.description}:</p>
        <h2>{data.getCityByName.weather.temperature.actual} &#176;C</h2>
        
      </div>
      <div className={styles["card-temp"]}>
        <div className={styles["card-misc"]}>
          <div>Hissedilen <span>{data.getCityByName.weather.temperature.feelsLike} &#176;C</span></div>
          <div>En yüksek <span>{data.getCityByName.weather.temperature.max} &#176;C</span></div>
          <div>En düşük <span>{data.getCityByName.weather.temperature.min} &#176;C</span></div>
          <div>Rüzgar <span>{data.getCityByName.weather.wind.speed} km/h</span></div>
          <div>Nem <span>%{data.getCityByName.weather.clouds.humidity}</span></div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
