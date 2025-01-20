import React from "react";
const RightInformation = (props) => {
  const { weather, selectedCity, weatherLoading } = props;
  const RightCondition = () => {
    const conditions = weather.condition.toLowerCase();

    if (conditions.includes("cloud")) {
      return <img src="./image/moon.cloud.png" />;
    } else if (conditions.includes("rain")) {
      return <img src="./image/moon.rain.png" />;
    } else if (conditions.includes("snow")) {
      return <img src="./image/moon.snow.png" />;
    } else if (conditions.includes("wind")) {
      return <img src="./image/moon.wind.png" />;
    } else {
      return <img src="./image/moon.png" />;
    }
  };
  if (weatherLoading) {
    return (
      <div>
        <img src="./image/loading.png"/>
      </div>
    );
  }
  return (
    <section className="relative flex items-center justify-center">
      <div className="relative flex w-[567px] justify-center z-10">
        <div className="z-20 w-103 h-207 overflow-hidden shadow-lg bg-[#111827]/75 rounded-[48px] backdrop-blur-md">
          <div className="space-y-12 px-10 py-14">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h4 className="text-gray-400">{weather.date}</h4>
                <h2 className="h-12 text-white text-5xl font-extrabold text-gray-900">
                  {selectedCity}
                </h2>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
                    fill="black"
                  />
                  <path
                    d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
            <div> {RightCondition()} </div>
          </div>
          <div className="px-12">
            <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
              {weather.minTemp}°
            </div>
            <h6
              className="font-extrabold mb-12 h-6px text-indigo-500"
            >
              {weather.condition}
            </h6>
          </div>
        </div>
        <div className="absolute -bottom-16 -right-16 bg-radial-gradient">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="176"
            height="176"
            viewBox="0 0 128 128"
            fill="none"
          >
            <circle cx="64" cy="64" r="64" fill="#6E72C9" />
            <circle
              cx="64"
              cy="64"
              r="64"
              fill="url(#paint0_radial_202_285)"
              fillOpacity="0.35"
              // style="mix-blend-mode:overlay"
            />
            <defs>
              <radialGradient
                id="paint0_radial_202_285"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(64 64) rotate(90) scale(64)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default RightInformation;
