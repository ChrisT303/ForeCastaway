import React from 'react';
import Particles from 'react-tsparticles';
import type { IParticlesProps } from 'react-tsparticles';

interface WeatherBackgroundProps {
  weather: string;
}

const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ weather }) => {
  const rainParticles: IParticlesProps['options'] = {
    fpsLimit: 30,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 5,
        direction: 'bottom',
        out_mode: 'out',
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
    },
    retina_detect: true,
  };
  



  console.log('Current weather:', weather);
  if (weather.toLowerCase().includes('rain')) {
    console.log('Rendering rain particles');
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }}>
        <Particles width="100%" height="100%" options={rainParticles} />
      </div>
    );
  }


  // Add more conditions for different weather backgrounds
  return null;
};

export default WeatherBackground;



  



