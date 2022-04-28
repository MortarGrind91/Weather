import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function CurrentWeather({ currentWeather }) {
  const currentDay = format(new Date(), 'EEEE d MMMM', { locale: ru });
  const icon = `http://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`;

  return (
    <div className="weather-current">
      <div className="weather-current__col">
        <div className="weather-current__city">{currentWeather?.name}</div>
        <div className="weather-current__day">{currentDay}</div>
        <div className="weather-current__box">
          <div className="weather-current__image">
            <img src={icon} alt="icon" />
            <p>{currentWeather?.weather[0]?.description}</p>
          </div>
          <div className="weather-current__temp">
            {Math.ceil(currentWeather?.main?.temp)} &#176;
          </div>
        </div>
      </div>
      <div className="weather-current__col">
        <div>
          <span>Вероятность осадков: </span>
          {currentWeather?.clouds?.all} %
        </div>
        <div>
          <span>Влажность: </span>
          {currentWeather?.main?.humidity} %
        </div>
        <div>
          <span>Ветер: </span>
          {currentWeather?.wind?.speed} км/ч
        </div>
      </div>
    </div>
  );
}
