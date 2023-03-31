import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  weather?: string;
}

const weatherToBackgroundImage: Record<string, string> = {
  'ragged shower rain': '/rain-background.jpg',
  'light rain': '/rain-background.jpg',
  'moderate rain': '/rain-background.jpg',
  'heavy intensity rain': '/rain-background.jpg',
  'very heavy rain': '/rain-background.jpg',
  'extreme rain': '/rain-background.jpg',
  'freezing rain': '/rain-background.jpg',
  'light intensity shower rain': '/rain-background.jpg',
  'shower rain': '/rain-background.jpg',
  'heavy intensity shower rain': '/rain-background.jpg',
  'snow': '/snow-background.jpg',
  'light snow': '/snow-background.jpg',
  'heavy snow': '/snow-background.jpg',
  'sleet': '/snow-background.jpg',
  'light shower sleet': '/snow-background.jpg',
  'shower sleet': '/snow-background.jpg',
  'light rain and snow': '/snow-background.jpg',
  'rain and snow': '/snow-background.jpg',
  'light shower snow': '/snow-background.jpg',
  'shower snow': '/snow-background.jpg',
  'heavy shower snow': '/snow-background.jpg',
  'thunderstorm': '/thunderstorm-background.jpg',
  'thunderstorm with light rain': '/thunderstorm-background.jpg',
  'thunderstorm with rain': '/thunderstorm-background.jpg',
  'thunderstorm with heavy rain': '/thunderstorm-background.jpg',
  'light thunderstorm': '/thunderstorm-background.jpg',
  'heavy thunderstorm': '/thunderstorm-background.jpg',
  'ragged thunderstorm': '/thunderstorm-background.jpg',
  'thunderstorm with light drizzle': '/thunderstorm-background.jpg',
  'thunderstorm with drizzle': '/thunderstorm-background.jpg',
  'thunderstorm with heavy drizzle': '/thunderstorm-background.jpg',
  'drizzle': '/drizzle-background.jpg',
  'light intensity drizzle': '/drizzle-background.jpg',
  'heavy intensity drizzle': '/drizzle-background.jpg',
  'light intensity drizzle rain': '/drizzle-background.jpg',
  'drizzle rain': '/drizzle-background.jpg',
  'heavy intensity drizzle rain': '/drizzle-background.jpg',
  'shower rain and drizzle': '/drizzle-background.jpg',
  'heavy shower rain and drizzle': '/drizzle-background.jpg',
  'shower drizzle': '/drizzle-background.jpg',
  'mist': '/mist-background.jpg',
  'overcast clouds': '/clouds-background.jpg',
  'scattered clouds': '/clouds-background.jpg',
  'broken clouds': '/clouds-background.jpg',
  'few clouds': '/clouds-background.jpg',
  'smoke': '/smoke-background.jpg',
  'haze': '/haze-background.jpg',
  'dust': '/dust-background.jpg',
  'fog': '/fog-background.jpg',
  'sand': '/sand-background.jpg',
  'ash': '/ash-background.jpg',
  'squall': '/squall-background.jpg',
  'clear sky': '/clear-sky-background.jpg',
  'tornado': '/tornado-background.jpg',
  'default': '/default-background.jpg',
};

const Layout: React.FC<LayoutProps> = ({ children, weather }) => {
  let backgroundImage = '/default-background.jpg';

  if (weather) {
    const weatherLower = weather.toLowerCase();
    backgroundImage = weatherToBackgroundImage[weatherLower] || weatherToBackgroundImage.default;
  }

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="w-full max-w-2xl px-4">{children}</div>
    </div>
  );
};


export default Layout;







