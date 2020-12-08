import React, { useState } from 'react';

//ui
import { Input } from 'antd';

const { Search } = Input;

export default function SearcInput({ fetchCurrentWeather, fetchWeeklyWeather }) {
  const [city, setCity] = useState('');

  const handleChangeInput = (e) => {
    setCity(e.target.value);
  };

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
      onChange={handleChangeInput}
      onSearch={handleSearch}
      value={city}
    />
  );
}
