import React from 'react';
import { format, fromUnixTime } from 'date-fns';

export default function WeeklyWeather({ weeklyWeather }) {
  const checkCurrentDay = (date) => {
    // const currentDay = format(new Date(), 'd.MM.yyyy');
    // const convertDate = format(fromUnixTime(date), 'd.MM.yyyy');

    // if (currentDay === convertDate) {
    //   return format(fromUnixTime(date), 'HH:mm');
    // } else {
    //   return format(fromUnixTime(date), 'dd.MM HH:mm');
    // }
    return format(fromUnixTime(date), 'dd.MM HH:mm');
  };

  const showIcon = (iconId) => {
    const icon = `http://openweathermap.org/img/w/${iconId}.png`;
    return <img src={icon} />;
  };

  return (
    <div className="weather-weekly">
      {weeklyWeather?.list.map((item, key) => (
        <div className="weather-weekly__item" key={key}>
          <div className="weather-weekly__time">{checkCurrentDay(item.dt)}</div>
          <div className="weather-weekly__icon">{showIcon(item.weather[0].icon)}</div>
          <div className="weather-weekly__temp">{Math.round(item.main.temp)} &#176;</div>
        </div>
      ))}
    </div>
  );
}

WeeklyWeather.defaultProps = {
  weeklyWeather: {},
};
