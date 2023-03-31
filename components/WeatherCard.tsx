import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faThunderstorm, faCloudRain, faCloudShowersHeavy, faSnowflake, faSmog, faTornado } from '@fortawesome/free-solid-svg-icons';

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
  let icon;
  let color;

  if (data.description.toLowerCase().includes('clear')) {
    icon = faSun;
    color = 'orange';
  } else if (data.description.toLowerCase().includes('clouds')) {
    icon = faCloud;
    color = 'gray';
  } else if (data.description.toLowerCase().includes('rain')) {
    icon = faCloudRain;
    color = 'blue';
  } else if (data.description.toLowerCase().includes('thunderstorm')) {
    icon = faThunderstorm;
    color = 'gray';
  } else if (data.description.toLowerCase().includes('snow')) {
    icon = faSnowflake;
    color = 'blue';
  } else if (data.description.toLowerCase().includes('mist')) {
    icon = faSmog;
    color = 'gray';
  } else if (data.description.toLowerCase().includes('tornado')) {
    icon = faTornado;
    color = 'gray';
  } else if (data.description.toLowerCase().includes('drizzle')) {
    icon = faCloudShowersHeavy;
    color = 'gray';
  }

  return (
    <div className="bg-white rounded-md shadow-md p-8 w-full flex">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{data.location}</h2>
        <p className="mb-2">Description: {data.description}</p>
        <p className="mb-2">Temperature: {data.temperature} °C</p>
        <p className="mb-2">Humidity: {data.humidity}%</p>
        <p className="mb-2">Wind Speed: {data.windSpeed} m/s</p>
      </div>
      {icon && (
    <div className="flex-shrink-0 self-center mr-8">
    <FontAwesomeIcon icon={icon} size="5x" color={color} />
  </div>
  
      )}
    </div>
  );
};

export default WeatherCard;







