//images
import drizzle from '../assets/images/Drizzle.jpg';

//video
import weatherVideo from '../assets/video/weather.mp4';
import sunVideo from '../assets/video/Sun.mp4';
import cloudsVideo from '../assets/video/Clouds.mp4';
import rainVideo from '../assets/video/Rain.mp4';
import snowVideo from '../assets/video/Snow.mp4';
import mistVideo from '../assets/video/Mist.mp4';

export const getWeatherBg = (weather) => {
  switch (weather) {
    case 'Clear': {
      return sunVideo;
    }
    case 'Rain': {
      return rainVideo;
    }
    case 'Sun': {
      return sunVideo;
    }
    case 'Drizzle': {
      return drizzle;
    }
    case 'Clouds': {
      return cloudsVideo;
    }
    case 'Snow': {
      return snowVideo;
    }
    case 'Mist': {
      return mistVideo;
    }
    default: {
      return weatherVideo;
    }
  }
};
