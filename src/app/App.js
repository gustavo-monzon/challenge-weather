import React, { Component } from 'react';

import CitiesWeather from './components/CitiesWeather'
import WeatherInfo from './components/WeatherInfo';
import { WEATHER_KEY } from './keys'
import moment from 'moment'

class App extends Component {
    state = {
        lat: '',
        lon: '',
        todayWeather: {
            temperature: '',
            description: '',
            humidity: '',
            wind_speed: '',
            city: '',
            country: '',
            error: null,
        },
        extendedWeather: [],
    }

    clearExtendedWeatherState = () => {
        this.setState({extendedWeather: []})
    }

    getWeatherToday =  async location => {
        this.clearExtendedWeatherState()
        const LOCATION_URL = 'http://ip-api.com/json'
        const GET_TODAY_WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
        let GET_WEATHER_URL = ''

        if (!location.name) {
            const response = await fetch(LOCATION_URL)
            const data = await response.json()
            GET_WEATHER_URL = GET_TODAY_WEATHER_BASE_URL+`${data.city}, ${data.countryCode}&appId=${WEATHER_KEY}&units=metric&lang=es`
            this.setState({lat: `${data.lat}`, lon: `${data.lon}`})
        } else {
            GET_WEATHER_URL = GET_TODAY_WEATHER_BASE_URL+`${location.name}&appId=${WEATHER_KEY}&units=metric&lang=es`
            this.setState({lat: `${location.lat}`, lon: `${location.lon}`})
        }

        try {
            const response = await fetch(GET_WEATHER_URL)
            const data = await response.json()

            const getHumanDescription = (description) => {
                switch (description) {
                case 'Thunderstorm':
                    return 'En una quinta bien cubiertos';
                case 'Drizzle':
                    return 'Que la parrilla tenga techo';
                case 'Rain':
                    return 'En una quinta bien cubiertos';
                case 'Snow':
                    return 'En una quinta bien cubiertos';
                case 'Clear':
                    return 'El día está hermoso para juntarse';
                case 'Clouds':
                    return 'Es un buen día para un asado';
                case 'Tornado':
                    return 'Si, pero en un refugio a salvo del tornado';
                default:
                    return 'Siempre es bueno disfrutar un asado'
                }
            }

            this.setState({
                todayWeather: {
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    humanDescription: getHumanDescription(data.weather[0].main),
                    city: data.name,
                    country: data.sys.country,
                    error: null,
                }
            })
        } catch (error) {
            this.setState({ todayWeather: { error: 'Se produjo un error' } })
        }
    }

    getExtendedWeather =  async () => {
        const GET_EXTENDED_WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=current,minutely,hourly,alerts&appId=${WEATHER_KEY}&units=metric&lang=es`;

        const fiveDaysWeather = []
        const response = await fetch(GET_EXTENDED_WEATHER_URL)
        const data = await response.json()

        data.daily.forEach((day, index) => {
            if (index > 0 && index < data.daily.length-1) {
                fiveDaysWeather.push({
                    date: moment.unix(day.dt).format("DD/MM"),
                    temp_min: day.temp.min,
                    temp_max: day.temp.min,
                    humidity: day.humidity,
                    description: day.weather[0].description,
                })
            }
        });
        this.setState({extendedWeather: fiveDaysWeather})
    }

    render(){
        return (
            <div>
                <div>
                    <CitiesWeather getWeatherToday={this.getWeatherToday} />
                    <WeatherInfo {...this.state} getExtendedWeather={this.getExtendedWeather} />
                </div>
            </div>
        )
    }
}

export default App;