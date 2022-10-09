import "./currentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgium</p>
          <p className="weather-description">Cloudy</p>
        </div>
        <img
          className="weather-icon"
          src="../weatherIcons/04d.png"
          alt="weather"
        />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">30%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
