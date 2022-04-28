import React from 'react';

//ui
import { Input } from 'antd';

//hooks
import { useInput } from '../hooks/useInput';

const { Search } = Input;

export default function SearcInput({ fetchCurrentWeather, fetchWeeklyWeather }) {
  const [city, setCity] = useInput('');

  const handleSearch = () => {
    fetchCurrentWeather(city);
    fetchWeeklyWeather(city);

    setCity('');
  };

  return (
    <Search
      className="weather-search"
      placeholder="Город"
      enterButton
      onChange={setCity}
      onSearch={city.length ? handleSearch : false}
      value={city}
    />
  );
}
