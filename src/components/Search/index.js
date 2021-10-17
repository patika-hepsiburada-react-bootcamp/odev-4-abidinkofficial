import styles from "./Search.module.css"
import cities from "../../utils/cities"

const Search = ({ city, setCity }) => {
  return (
    <div className={styles["Search"]}>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {
          cities.map(city => <option key={city.id} value={city.name}>{city.city}</option>)
        }
      </select>
    </div>
  )
}

export default Search