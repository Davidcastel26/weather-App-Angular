export interface WeatherData {
    temp: number
    humidity: number
    min_temp: number
    max_temp: number
    wind_speed: number
    sunrise: number
    sunset: number
  }

export interface DataHere {
    images: string[]
    description: string[]
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}