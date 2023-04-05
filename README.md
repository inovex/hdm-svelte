# HDM - Entwicklung von Webanwendungen - Svelte 101

## Setup

* Make sure to have Node.js installed. You can download it here if necessary: https://nodejs.org/en/download
* Execute the following commands to clone the repo, install the dependencies and start the dev server:
  ````bash
  git clone git@github.com:inovex/talk-hdm-svelte.git # clone the repo
  cd talk-hdm-svelte
  npm install # install external dependencies
  npm run dev # start the dev server that serves the application locally
  ````
* Navigate to [localhost:5173](http://localhost:5173/) in your browser

## Assignment

### Assignment 1

In the directory `/src/lib` you'll find a client for an API that returns weather data. 
The client provides only method (`getWeatherData`) that can be used to retrieve the current weather data asynchronously.

The returned object has the following structure:

```
type WEATHER_TYPE = 'SUN' | 'SUN_CLOUDY' | 'CLOUDY' | 'RAIN' | 'SNOW'

WeatherData {
  type: WEATHER_TYPE
  temperatureCelsius: number
  humidityPercent: number
  windKmH: number
}
```

Implement a component that on first render pulls the data from the remote API and renders the data on the screen.

To illustrate the weather types, use the following emojis that correspond to the types returned by the weather API:
☀️ ⛅ ☁️ 🌧️ 🌨️

Bonus-Assignment: 
Render a button that refreshes the weather data on every mouse click.

### Assignment 2

Refactor the previous example so that the weather data is being retrieved continuously e.g. every second.
Provide this data in your application so that it can be consumed from any arbitrary component. Store all the accumulating data points.
Hint: A good solution would be the usage of a writable store!
(https://svelte.dev/tutorial/writable-stores)

Refactor the component from the previous assignment to always display the latest weather information.

Implement a second component that renders the history of weather data points.

Bonus-Assignment:
Vor each Value, render an Arrow indicating if the value is currently trending upwards or downwards.
