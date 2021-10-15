import { gql } from "@apollo/client";

export const GET_CITY_BY_NAME = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          humidity
        }
        timestamp
      }
    }
  }
`;