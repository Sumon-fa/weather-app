import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../common/WeatherCard";
const WeatherViewer = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${props.cityData.Key}?apikey=${process.env.React_App_Acc_Key}&metric=true`
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [props.cityData.Key]);

  return (
    <div> {data && <WeatherCard data={data} cityData={props.cityData} />}</div>
  );
};

export default WeatherViewer;
