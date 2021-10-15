import { useQuery, useLazyQuery } from "@apollo/client"
import { GET_CITY_BY_NAME } from "../../api/queries"

import Search from "../../components/Search"
import WeatherCard from "../../components/WeatherCard"

const Home = () => {
  const { loading, data, error } = useQuery(GET_CITY_BY_NAME, {
    variables: { name: "corum", country: "TR", config: {units: "metric", lang: "tr"} }
  })
  console.log(data)

  return (
    <div>
      Home
      <Search />
      <WeatherCard />
    </div>
  )
}

export default Home