import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useIotDataMutation } from "../slices/userApiSlice";
import Loader from "../components/Loader";
const UserHomeScreen = () => {
  const [getIotData, { isLoading }] = useIotDataMutation();

  const [iotData, setIotData] = useState({});

  useEffect(() => {
    const getIotDataFunction = async () => {
      const res = await getIotData().unwrap();
      console.log(res,'fffff');
      setIotData(res);
    };
    getIotDataFunction();
  }, []);

  
  return (
    <div className="chart flex flex-col items-center mt-8 mb-8">
      <h1 className="text-center mb-5 font-black text-2xl">IOT DATA VISUALISATION</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
          <div className="col-4 mt-5 ">
          <h1 className="text-center">TWO DIGIT NUMBER</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: [],
              },
            }}
            series={[
              {
                name: "series-1",
                data: [],
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default UserHomeScreen;
