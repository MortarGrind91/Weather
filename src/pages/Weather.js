import React, { useState } from 'react';
import axios from 'axios';
import cx from 'classnames';

import { SearchInput, CurrentWeather, WeeklyWeather } from '../components';

//ui
import { Layout } from 'antd';

//images
import weatherImage from '../assets/images/weather.jpg';
import sun from '../assets/images/Sun.jpg';
import clouds from '../assets/images/Clouds.jpg';
import rain from '../assets/images/Rain.jpg';
import drizzle from '../assets/images/Drizzle.jpg';
import snow from '../assets/images/Snow.jpg';

//styles
import '../styles/Weather.scss';

const { Content } = Layout;

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);

  const fetchCurrentWeather = async (city) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac6f8b6be3fcb98a3062c42d3ee9095&lang=ru`,
      );
      setCurrentWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeeklyWeather = async (city) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=9ac6f8b6be3fcb98a3062c42d3ee9095&lang=ru`,
      );
      setWeeklyWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  const currentWeatherBg = (weather) => {
    switch (weather) {
      case 'Clear': {
        return weatherImage;
      }
      case 'Rain': {
        return rain;
      }
      case 'Sun': {
        return sun;
      }
      case 'Drizzle': {
        return drizzle;
      }
      case 'Clouds': {
        return clouds;
      }
      case 'Snow': {
        return snow;
      }
      default: {
        return weatherImage;
      }
    }
  };

  return (
    <div
      className="weather"
      style={{ backgroundImage: `url(${currentWeatherBg(currentWeather?.weather[0]?.main)})` }}>
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
