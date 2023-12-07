import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Pie,
  PieChart,
  Sector,
  Cell,
  LineChart,
  Legend,
  Line,
} from "recharts";

import axios from "../../Api/axios";
import mess from "../../Svg/mess.jpg";

function Dashboad() {
  const COLORS = ["#005298", "#004e40", "#ff0000"];
  const color = "#009d7f";
  const color1 = "#005298";
  const COLORS1 = ["#005298", "#004e40", "#ff0000", "#cc8400", "#964b00"];
  const [data, setData] = useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  console.log(data1);

  useEffect(() => {
    const getData = async (e) => {
      // if button enabled with JS hack
      try {
        const response = await axios.get("/stats/getDayMember", {
          withCredentials: true,
        });

        // console.log("Get All User", response.data);
        setData(response.data);
        // console.log(JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  useEffect(() => {
    const getData = async (e) => {
      // if button enabled with JS hack
      try {
        const response = await axios.get("/stats/getPlanCount", {
          withCredentials: true,
        });

        // console.log("Get All User", response.data);
        setData1(response.data);
        // console.log(JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  useEffect(() => {
    const getData = async (e) => {
      // if button enabled with JS hack
      try {
        const response = await axios.get("/stats/getMonthlyExpenses", {
          withCredentials: true,
        });

        console.log("Get All User", response.data);
        setData3(response.data);
        // console.log(JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  useEffect(() => {
    const getData = async (e) => {
      // if button enabled with JS hack
      try {
        const response = await axios.get("/stats/getWeekProfit", {
          withCredentials: true,
        });

        // console.log("Get All User", response.data);
        setData2(response.data);
        // console.log(JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <span className="text-[2rem] text-[#009d7f] h2 border-b-2 border-black pb-2 text-center">
        DASHBOARD
      </span>
      <div
        style={{
          height: "1000px",
          width: "1200px",
          backgroundImage: `url(${mess})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mainbar ">
          <div className="m-main">
            <div className="m-title"></div>
            <div className="flex items-center gap-[1rem] justify-center">
              <div className="card-container">
                <div className="piecard bg-gray-200 w-[37rem] shadow-xl h-[20rem] flex items-center mt-[1.5rem] rounded-[1rem] justify-center ">
                  <div className="p-content flex flex-col gap-[1rem] justify-center">
                    {/* <Time color="white" /> */}
                    <span>Contacts</span>
                    <div className="flex gap-[0.5rem] items-center">
                      <div className="w-5 h-5 bg-[#ff0000] rounded-full"></div>
                      <span>Cosha - Aman Manish Agrawal(7014839099) </span>
                    </div>
                    <div className="flex gap-[0.5rem] items-center">
                      <div className="w-5 h-5 bg-[#004e40] rounded-full"></div>
                      <span> Mess A Incharge - Rakesh Sharma(9315111857)</span>
                    </div>
                    <div className="flex gap-[0.5rem] items-center">
                      <div className="w-5 h-5 bg-[#005298] rounded-full"></div>
                      <span>Mess B incharge - Shailendra Kumar Yadav(9424482567)</span>
                    </div>
                    <div className="flex gap-[0.5rem] items-center">
                      <div className="w-5 h-5 bg-[#005298] rounded-full"></div>
                      <span>Wardem Mess - warden-mess@lnmiit.ac.in </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboad;
