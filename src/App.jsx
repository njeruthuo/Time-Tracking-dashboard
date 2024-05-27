import jeremy from "./images/image-jeremy.png";
import ellipsis from "./images/icon-ellipsis.svg";
import data from "../data.json";
import { useState } from "react";

const App = () => {
  const [dataLoad] = useState(data);
  const [select, setSelect] = useState("weekly");
  

  return (
    <div className="bg-VeryDarkBlue text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 sm:flex-row w-4/5 mx-auto">
        <div className="sm:w-[20%] bg-DarkBlue  rounded-lg">
          <div className="bg-DesaturatedBlue p-8 rounded-lg">
            <img className="h-12 border-2 rounded-full" src={jeremy} alt="" />
            <h3 className="text-sm my-4">Report for</h3>
            <h1 className="text-3xl">Jeremy Robson</h1>
          </div>
          <div className="p-8">
            <p onClick={() => setSelect("daily")}>Daily</p>
            <p onClick={() => setSelect("weekly")}>Weekly</p>
            <p onClick={() => setSelect("monthly")}>Monthly</p>
          </div>
        </div>
        <div className="sm:w-[80%]  flex flex-col sm:flex-row flex-wrap space-y-2 place-items-center">
          {dataLoad.map((item, index) => {
            return (
              <div key={index} className="w-auto sm:w-1/2 lg:w-1/3 ">
                <div
                  id={item.title}
                  className="mx-4 border-DarkBlue border rounded-md"
                >
                  <div className="bg-DarkBlue mt-12 rounded-md px-4 pt-2">
                    <div className="flex place-items-center justify-between">
                      <h1>{item.title}</h1>
                      <img className="h-2" src={ellipsis} alt="" />
                    </div>

                    <div id="info" className=" mt-8">
                      <h1 className="text-3xl">
                        {item.timeframes[select].current}hrs
                      </h1>

                      <h3 className="pb-8">
                        {select === "daily"
                          ? `Last ${select.replace(
                              select[0],
                              select[0].toUpperCase()
                            )} ${item.timeframes[select].previous}hrs`
                          : `Last ${select
                              .replace(select[0], select[0].toUpperCase())
                              .slice(0, -2)} - ${
                              item.timeframes[select].previous
                            }hrs`}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
