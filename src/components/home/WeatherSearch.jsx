import React, { useState } from "react";
import Button from "../common/Button";
import WeatherViewer from "./WeatherViewer";
import axios from "axios";
const WeatherSearch = () => {
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);
  async function fetchCityData(e) {
    e.preventDefault();
    setError(null);
    try {
      const { data } = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.React_App_Acc_Key}&q=${citySearch}`
      );
      setCityData(data[0]);
    } catch (err) {
      setError("Oh! city name does not exist.");
    }
    setCitySearch("");
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" +
          ")",
      }}
    >
      <div className='container'>
        <form onSubmit={fetchCityData}>
          <div className=' row g-3 align-items-center justify-content-center mt-5 mb-5'>
            <div className='col-auto'>
              <input
                autoFocus
                className='form-control'
                placeholder='Enter the name of a city'
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
              />
            </div>
            <div className='col-auto'>
              <Button />
            </div>
          </div>
        </form>
        {cityData && !error && <WeatherViewer cityData={cityData} />}
        {error && (
          <p
            style={{ textAlign: "center", fontSize: "1.4em", marginTop: "20%" }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherSearch;
