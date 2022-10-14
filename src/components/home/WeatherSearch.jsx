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

    try {
      setError(null);
      if (citySearch.trim().length > 0) {
        const { data } = await axios.get(
          `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.React_App_Acc_Key}&q=${citySearch}`
        );
        if (data.length > 0) {
          setCityData(data[0]);
        } else {
          setError("Oh! city name does not exist.");
        }
      } else {
        setError("input field is empty");
      }
    } catch (err) {
      setError("Sorry! Api is not working.");
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
                autoComplete='off'
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
        {error && !cityData && (
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
