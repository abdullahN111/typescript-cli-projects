import axios from 'axios';
import { resolve } from 'path';

export interface WeatherData {
    location: string
    temperature: number
    description: string
}

export function getWeather(location:string): Promise<WeatherData> {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

 
    return new Promise((resolve) => {
        setTimeout(() => {
         resolve({
            location: location,
            temperature: 39,
            description: "Sunny"
         })
        },2000)
    })
}