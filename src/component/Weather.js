import React, { useEffect, useState } from "react";
import "../component/Weather.css";
import img from "../img/sky.png";
import { Search } from "@mui/icons-material";

const Weather = () => {
  const [apiData, setApiData] = useState([]);
  const [name, setName] = useState("");
    console.log(apiData);
  const getData = async () => {
    let url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=44b65c03e1191603232f3ab2ec9307f7&units=metric`
    );
    let result = await url.json();
    setApiData(result.main);
    console.log(result);
  };

  useEffect(() => {
    getData();
  }, [name]);

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    getData(name);
  };

  return (
    <div className="main">
      {" "}
      <div class="center">
        <div class="form d-flex justify-content-center align-items-center mt-3">
          <form action="" onSubmit={formSubmit}>
            <input
              type="text"
              name="name"
              id=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button class="btn btn-primary mx-2">Serach</button>
          </form>
        </div>
        <div className="image ">
          <img src={img} alt="" style={{ width: "10rem" }} />
        </div>

        {!apiData ? (
          <p>NO data Found</p>
        ) : (
          <>
            <div class="temprature mt-3"> {apiData.temp} &deg;C</div>
            <div class="cityName">{name}</div>
            <div class="down">
              <div class="left">
                {" "}&#10039;{apiData.humidity}
                <br /> 
                <span>Humidity</span>{" "}
              </div>
              <div class="right">
                {" "} &#9781; {apiData.temp_max}
                <br /> <span>Max&deg;C </span>{" "}
              </div>
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
};

//
//
//
//
//

export default Weather;
