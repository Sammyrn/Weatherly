import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  // Add null check for `data` and `data.list`
  if (!data || !data.list) {
    return <p>..</p>;
  }

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="forecast">
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`./icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]} </label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)} °C /
                    {Math.round(item.main.temp_max)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <label>Pressure</label>
                <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Humidity</label>
                <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Clouds</label>
                <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Wind speed</label>
                <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Sea level</label>
                <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Feels like</label>
                <label>{item.main.feels_like}</label>
                </div>
                
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
