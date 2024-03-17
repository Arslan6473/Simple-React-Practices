import bgimg from "../Assets/sara-the-freak-A4UojtraSrw-unsplash.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMiniArrowDown, HiMiniArrowUp } from "react-icons/hi2";
import { GiWindsock } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
import { useState } from "react";

function SerchArea({ weather, units, setCity ,loding}) {
  const [serch, setSerch] = useState("");
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      title: "min",
      icon: <HiMiniArrowDown />,
      data: Math.round(weather.feels_like),
      unit: tempUnit,
    },
    {
      id: 2,
      title: "max",
      icon: <HiMiniArrowUp />,
      data: Math.round(weather.temp_max),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <IoMdHappy />,
      title: "feels like",
      data: Math.round(weather.temp),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <FaWind />,
      title: "pressure",
      data: weather.pressure,
      unit: windUnit,
    },
    {
      id: 5,
      icon: <IoIosWater />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <GiWindsock />,
      title: "wind speed",
      data: weather.speed,
      unit: windUnit,
    },
  ];

  const changeFun = (e) => {
    setSerch(e.target.value);
  };
  const clickFun = () => {
    setCity(serch);
    setSerch("");
  };
  return (
    <div>
      <div
        className="min-h-[100vh] bg-cover"
        style={{ "background-image": `url(${bgimg})` }}
      >
        <div className="h-[30vh] w-screen gap-4 flex flex-col items-center justify-center ">
          <p className="text-white font-bold text-[2rem]">
            Find Weather Forecast
          </p>
          <input
            className="p-4 w-[40vw] rounded-xl bg-[#ffffffaa] focus:outline-none relative"
            type="text"
            name="serch"
            id="serch"
            value={serch}
            onChange={changeFun}
          />
        </div>
        <div className="absolute top-[17.9%]  right-[32%] cursor-pointer">
          <FaMagnifyingGlass
            className="text-[1.6rem] font-black text-white"
            onClick={clickFun}
          />
        </div>

        {/* Weather section */}
        {loding ? (
          <div className="text-white font-black text-[2rem]">
            Loding ...... 
          </div>
        ) : (
          <div>
            <div className="h-[26vh] w-[70vw] text-white grid grid-cols-3 justify-center mx-auto items-center">
              <div className="text-[3rem] font-bold mx-auto">
                {`${Math.round(weather.feels_like)}`} °
                {`${units === "metric" ? "C" : "F"}`}
              </div>
              <div>
                <div className="text-[1.8rem] font-medium ">
                  {weather.name} {weather.country}
                </div>
                <div>
                  <div className="text-[1rem]">{weather.description}</div>
                </div>
              </div>
              <div className="mx-auto">
                <div>
                  <img src={weather.iconURL} alt="pic" />
                </div>
              </div>
            </div>

            <div className="h-[40vh] w-[70vw] grid grid-cols-3 gap-2  justify-center items-center mx-auto">
              {cards.map((card) => (
                <div className="flex flex-col justify-center  items-center h-[14vh] w-[10vw] rounded-md mx-auto  bg-white">
                  <div className="flex gap-2 justify-center items-center">
                    <div>{card.icon}</div>

                    <div className="text-[1rem]">{card.title}</div>
                  </div>
                  <div className="text-[1.4rem] font-medium">
                    {card.data} {card.unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SerchArea;
