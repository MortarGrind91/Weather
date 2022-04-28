import axios from 'axios';

export default class WeatherService {
  static async getCurrentWeather(city) {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY}&lang=ru`,
    );

    return resp;
  }

  static async getWeeklyWeather(city) {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY}&lang=ru`,
    );

    return resp;
  }
}
