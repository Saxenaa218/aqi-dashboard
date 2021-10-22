export const getAQIColorClass = (aqi: number) => {
    if (0<=aqi && aqi<=50) return "green";
    else if (51<=aqi && aqi<=100) return "light-green";
    else if (101<=aqi && aqi<=200) return "yellow";
    else if (201<=aqi && aqi<=300) return "orange";
    else if (301<=aqi && aqi<=400) return "red";
    else if (401<=aqi && aqi<=500) return "dark-red";
    else return "";
}