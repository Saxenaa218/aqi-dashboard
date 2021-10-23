export const getAQIColorClass = (aqi: number) => {
    if (0<=aqi && aqi<=50) return "green";
    else if (50<aqi && aqi<=100) return "light-green";
    else if (100<aqi && aqi<=200) return "yellow";
    else if (200<aqi && aqi<=300) return "orange";
    else if (300<aqi && aqi<=400) return "red";
    else if (400<aqi && aqi<=500) return "dark-red";
    else return "";
}

export const getTimeForChart = (timeStamp: number) => {
    const time = new Date(timeStamp);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${time.getSeconds()} ${hours >= 12 ? 'pm' : 'am'}`
}