import React from 'react';

//utils
import { isCurrentDay } from '../utils';

export default function WeeklyWeather({ weeklyWeather }) {
  const renderIcon = (iconId) => {
    const icon = `http://openweathermap.org/img/w/${iconId}.png`;

    return <img src={icon} alt="icon" />;
  };

  return (
    <div className="weather-weekly">
      {weeklyWeather?.list.map((item, key) => (
        <div className="weather-weekly__item" key={key}>
          <div className="weather-weekly__time">{isCurrentDay(item.dt)}</div>
          <div className="weather-weekly__icon">{renderIcon(item.weather[0].icon)}</div>
          <div className="weather-weekly__temp">{Math.round(item.main.temp)} &#176;</div>
        </div>
      ))}
    </div>
  );
}

WeeklyWeather.defaultProps = {
  weeklyWeather: {},
};
