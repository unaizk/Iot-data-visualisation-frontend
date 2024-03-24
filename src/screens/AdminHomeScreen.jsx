import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAdminIotDataMutation } from "../slices/adminApiSlice";
import Loader from "../components/Loader";


const AdminHomeScreen = () => {
  const [getAdminIotData, {isLoading}] = useAdminIotDataMutation();
  const [iotData, setIotData] = useState({});

  useEffect(() => {
    const getIotDataFunction = async () => {
      const res = await getAdminIotData().unwrap();
      console.log(res);
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
                categories: iotData?.twoDigitNumber?.map((data) => data.time),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.twoDigitNumber?.map((data) => data.data),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-center">THREE DIGIT NUMBER</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: iotData?.threeDigitNumber?.map((data) => data.time),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.threeDigitNumber?.map((data) => data.data),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-center">FOUR DIGIT NUMBER</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: iotData?.fourDigitNumber?.map((data) => data.time),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.fourDigitNumber?.map((data) => data.data),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-center">TWO DIGIT LETTER</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: iotData?.twoDigitLetter?.map((data) => data.data),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.twoDigitLetter?.map((data) => data.time),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-center">FOUR DIGIT LETTER</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: iotData?.fourDigitLetter?.map((data) => data.data),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.fourDigitLetter?.map((data) => data.time),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-center">CONCAT TWO VALUES</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: iotData?.concatTwoValues?.map((data) => data.data),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.concatTwoValues?.map((data) => data.time),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4 mt-5">
          <h1 className="text-center">CONCAT FOUR VALUES</h1>
          {isLoading && <Loader />}
          <Chart
            options={{
              colors: ["#000000", "#808080"],
              chart: { id: "basic-bar" },
              xaxis: {
                categories: iotData?.concatFourValues?.map((data) => data.data),
              },
            }}
            series={[
              {
                name: "series-1",
                data: iotData?.concatFourValues?.map((data) => data.time),
              },
            ]}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  )
}

export default AdminHomeScreen