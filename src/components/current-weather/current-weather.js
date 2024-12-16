import "./current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img className="weather-icon" alt="weather" src="logo192.png"></img>
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
        <div className="parameter-row">
            <span className="parameter-label top">Details</span>
           
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">23%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">2 m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
