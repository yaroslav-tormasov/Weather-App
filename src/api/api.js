import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/"
})

export const weatherApi = {
    byCoord(lat, lon) {
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    },

    byCityName(city) {
        return instance.get(`weather?q=${city}&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    },
}
