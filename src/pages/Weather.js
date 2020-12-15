import React, { useState } from 'react';
import cx from 'classnames';

import { SearchInput, CurrentWeather, WeeklyWeather } from '../components';

//ui
import { Layout } from 'antd';

//utils
import { openNotification } from '../utils';
import { apiMethods } from '../utils';

//images
import drizzle from '../assets/images/Drizzle.jpg';

//video
import weatherVideo from '../assets/video/weather.mp4';
import sunVideo from '../assets/video/Sun.mp4';
import cloudsVideo from '../assets/video/Clouds.mp4';
import rainVideo from '../assets/video/Rain.mp4';
import snowVideo from '../assets/video/Snow.mp4';
import mistVideo from '../assets/video/Mist.mp4';

//styles
import '../styles/Weather.scss';

const { Content } = Layout;

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);

  const fetchCurrentWeather = async (city) => {
    try {
      const { data } = await apiMethods.getCurrentWeather(city);
      setCurrentWeather(data);
    } catch (error) {
      const { data } = error.response;

      openNotification({ type: 'error', title: data.cod, text: data.message });
    }
  };

  const fetchWeeklyWeather = async (city) => {
    try {
      const { data } = await apiMethods.getWeeklyWeather(city);
      setWeeklyWeather(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const currentWeatherVideoBg = (weather) => {
    switch (weather) {
      case 'Clear': {
        return weatherVideo;
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

  return (
    <div className="weather">
      <div className="overlay"></div>
      <video autoPlay muted loop id="video" key={currentWeather?.weather[0]?.main}>
        <source src={currentWeatherVideoBg(currentWeather?.weather[0]?.main)} type="video/mp4" />
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
