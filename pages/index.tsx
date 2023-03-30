import React, { useState } from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import WeatherCard from '@components/WeatherCard';


interface WeatherData {
  location: string;
  description: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const Home = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async (location: string) => {
    // Fetch weather data using a weather API, e.g., OpenWeatherMap
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );

    if (response.ok) {
      const data = await response.json();
      setWeatherData({
        location: `${data.name}, ${data.sys.country}`,
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });
    } else {
      // Handle error, e.g., display an error message
      console.error(`Error fetching weather data: ${response.statusText}`);
    }
  };

  return (
    <Layout weather={weatherData?.description}>
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
    </Layout>
  );
};

export default Home;



