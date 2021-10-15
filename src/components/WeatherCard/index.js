import { useQuery } from "@apollo/client"
import { GET_CITY_BY_NAME } from "../../api/queries"

const WeatherCard = ({ city }) => {
  const { loading, data, error } = useQuery(GET_CITY_BY_NAME, {
    variables: { name: city, country: "TR", config: {units: "metric", lang: "tr"} }
  })
  console.log(data)

  return (
    <div>
      Weather card
      <br />
      { !loading && data.getCityByName.name }
      <br />
      { !loading && data.getCityByName.weather.summary.description }
    </div>
  )
}

export default WeatherCard