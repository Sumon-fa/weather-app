import React from "react";
import moment from "moment";

const WeatherCard = (props) => {
  return (
    <div className='container-fluid mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <div
            className='card align-items-center '
            style={{
              height: "500px",
              marginTop: "24%",
              border: "12px solid rgb(56 53 53 / 86%)",
              borderRadius: "15%",
            }}
          >
            <h4 className='card-title mt-5'>
              {props.cityData.EnglishName}{" "}
              <span className='fs-6 rounded-pill bg-warning text-white position-absolute'>
                {props.cityData.Country.ID}
              </span>
            </h4>
            <h6 className='mt-5'>
              {moment(new Date(props.data.DailyForecasts[0].Date)).format("LL")}
            </h6>
            <div className='row m-auto' style={{ textAlign: "center" }}>
              <div className='col'>
                <div className='card-body'>
                  <p className='card-text mt-3'>
                    Max{" "}
                    {Math.round(
                      props.data.DailyForecasts[0].Temperature.Maximum.Value
                    )}
                    °C
                  </p>
                  <img
                    className='mt-5'
                    src={`https://developer.accuweather.com/sites/default/files/${
                      props.data.DailyForecasts[0].Day.Icon < 10
                        ? "0" + props.data.DailyForecasts[0].Day.Icon
                        : props.data.DailyForecasts[0].Day.Icon
                    }-s.png`}
                    alt='day'
                  />

                  <p className='card-text' style={{ display: "inline-block" }}>
                    <small className='text-muted'>
                      {props.data.DailyForecasts[0].Day.IconPhrase}
                    </small>
                  </p>
                </div>
              </div>
              <div className='col'>
                <div className='card-body'>
                  <p className='card-text mt-3'>
                    Min{" "}
                    {Math.round(
                      props.data.DailyForecasts[0].Temperature.Minimum.Value
                    )}
                    °C
                  </p>
                  <img
                    className='mt-5'
                    src={`https://developer.accuweather.com/sites/default/files/${
                      props.data.DailyForecasts[0].Night.Icon < 10
                        ? "0" + props.data.DailyForecasts[0].Night.Icon
                        : props.data.DailyForecasts[0].Night.Icon
                    }-s.png`}
                    alt='night'
                  />

                  <p className='card-text'>
                    <small className='text-muted'>
                      {props.data.DailyForecasts[0].Night.IconPhrase}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
