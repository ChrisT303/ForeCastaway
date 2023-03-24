

import React from 'react';

interface WeatherData {
  location: string;
  description: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-8 w-full">
      <h2 className="text-2xl font-bold mb-4">{data.location}</h2>
      <p className="mb-2">Description: {data.description}</p>
      <p className="mb-2">Temperature: {data.temperature} °C</p>
      <p className="mb-2">Humidity: {data.humidity}%</p>
      <p className="mb-2">Wind Speed: {data.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;

