import axios from 'axios';

export const apiMethods = {
  getCurrentWeather(city) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY}&lang=ru`,
    );
  },
  getWeeklyWeather(city) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY}&lang=ru`,
    );
  },
};
