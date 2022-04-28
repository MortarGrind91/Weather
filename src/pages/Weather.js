import React, { useState } from 'react';
import cx from 'classnames';

import { SearchInput, CurrentWeather, WeeklyWeather } from '../components';

//ui
import { Layout } from 'antd';

//utils
import { openNotification, getWeatherBg } from '../utils';
import WeatherService from '../API/WeatherService';

//styles
import '../styles/Weather.scss';

const { Content } = Layout;

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);

  const fetchCurrentWeather = async (city) => {
    try {
      const { data } = await WeatherService.getCurrentWeather(city);
      setCurrentWeather(data);
    } catch (error) {
      const { data } = error.response;

      openNotification({ type: 'error', title: data.cod, text: data.message });
    }
  };

  const fetchWeeklyWeather = async (city) => {
    const { data } = await WeatherService.getWeeklyWeather(city);
    setWeeklyWeather(data);
  };

  return (
    <div className="weather">
      <div className="overlay"></div>
      <video autoPlay muted loop id="video" key={currentWeather?.weather[0]?.main}>
        <source src={getWeatherBg(currentWeather?.weather[0]?.main)} type="video/mp4" />
      </video>
      <Content className="weather-container">
        <div
          className={cx('weather-search__container', {
            animation: currentWeather || weeklyWeather,
          })}>
          <SearchInput
            fetchCurrentWeather={fetchCurrentWeather}
            fetchWeeklyWeather={fetchWeeklyWeather}
          />
        </div>
        <div className={cx('weather-info', { animation: currentWeather || weeklyWeather })}>
          {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
          {weeklyWeather && <WeeklyWeather weeklyWeather={weeklyWeather} />}
        </div>
      </Content>
    </div>
  );
}
