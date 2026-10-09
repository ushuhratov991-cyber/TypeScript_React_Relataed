import { type WeatherContextData, type WeatherData} from "../../types"; 

export interface WeatherDataProps {
  weather: WeatherData; 
  isSaved?: boolean;  
}
