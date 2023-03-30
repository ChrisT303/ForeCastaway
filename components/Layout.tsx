import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  weather?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, weather }) => {
  let backgroundImage;

  if (weather && weather.toLowerCase().includes('overcast')) {
    backgroundImage = '/rain-background.jpg';
  } else if (weather && weather.toLowerCase().includes('snow')) {
    backgroundImage = '/snow-background.jpg';
  } else {
    backgroundImage = '/clear-background.jpg';
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






