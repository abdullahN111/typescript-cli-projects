import * as readline from 'readline'
import { getWeather, WeatherData } from "./mockWeatherApi.js";
import { log } from 'console';


function getWeatherWithCallback(location: string, callback: (error: Error | null, data?: WeatherData) => void) {
    getWeather(location)
    .then((data) => callback(null,data))
    .catch((error) => callback(error))
}
function getWeatherWithPromise(location: string): Promise<WeatherData> {
    return getWeather(location)
}

function main() {
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question("Enter a location:", (location) => {
        console.log(`Fetching Weather for ${location}`)
        getWeatherWithCallback(location, (error, data) => {
            if (error) {
                console.log(`Callback Error: ${error.message}`)
            } else {
                console.log(`Callback Result: ${data?.location} - ${data?.temperature}°C - ${data?.description}`);
              }
              getWeatherWithPromise(location)
              .then((data) => {
                  console.log(`Promise Result: ${data.location} - ${data.temperature}°C - ${data.description}`)
              })
              .catch((error) => {
                  console.error(`Promise Error: ${error.message}`);
                });
          
                (async () => {
                  try {
                      const data = await getWeatherWithPromise(location);
                      console.log(`Async/Await Result: ${data.location} - ${data.temperature}°C - ${data.description}`)
                  } catch (error) {
                      console.error(`Async/Await Error: ${(error as Error).message}`);
                  } finally {
                      r1.close(); // Close the readline interface after the operations are done
                    }
                }) ()
    })

    })

    
}
main()