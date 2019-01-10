let defaultCity = '哈尔滨'
try {
    if ( localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}