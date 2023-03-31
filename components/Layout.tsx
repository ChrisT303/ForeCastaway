import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  weather?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, weather }) => {
  let backgroundImage;

  if (weather && weather.toLowerCase().includes('rain')) {
    backgroundImage = '/rain-background.jpg';
  } else if (weather && weather.toLowerCase().includes('snow')) {
    backgroundImage = '/snow-background.jpg';
  } 
  else if (weather && weather.toLowerCase().includes('thunderstorm')) {
    backgroundImage = '/thunderstorm-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('drizzle')) {
    backgroundImage = '/drizzle-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('mist')) {
    backgroundImage = '/mist-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('clouds')) {
    backgroundImage = '/clouds-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('smoke')) {
    backgroundImage = '/smoke-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('haze')) {
    backgroundImage = '/haze-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('dust')) {
    backgroundImage = '/dust-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('fog')) {
    backgroundImage = '/fog-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('sand')) {
    backgroundImage = '/sand-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('ash')) {
    backgroundImage = '/ash-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('squall')) {
    backgroundImage = '/squall-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('clear')) {
    backgroundImage = '/clear-sky-background.jpg';
  }
  else if (weather && weather.toLowerCase().includes('tornado')) {
    backgroundImage = '/tornado-background.jpg';
  }
  else {
    backgroundImage = '/default-background.jpg';
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






