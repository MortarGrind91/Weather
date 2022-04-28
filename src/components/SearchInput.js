import React from 'react';

//ui
import { Input } from 'antd';

//hooks
import { useInput } from '../hooks/useInput';

const { Search } = Input;

const SearcInput = ({ fetchCurrentWeather, fetchWeeklyWeather }) => {
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
};

export default React.memo(SearcInput);
