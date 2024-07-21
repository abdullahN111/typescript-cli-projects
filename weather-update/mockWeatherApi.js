import axios from 'axios';
export async function getWeather(location) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        return {
            location: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description
        };
    }
    catch (error) {
        throw new Error('Failed to fetch weather data');
    }
}
