import React, { useState, useEffect } from "react";
import axios from "axios";
import shiftsData from "../data";

const Table = () => {
  const [shifts, setShifts] = useState([]);
  //const [newShift, setNewShift] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [ranks, setRanks] = useState([]);

  const hook = () => {
    axios.get("http://localhost:3001/shifts").then((response) => {
      const shifts = response.data;
      //console.log(shifts);
      setShifts(shifts);
      let temp = [];
      shifts.map((s) => {
        temp.push(s.rank);
      });
      //console.log(shifts, temp);
      setRanks(temp);
    });
  };

  useEffect(hook, []);
  useEffect(() => {
    setShifts(shiftsData);
    let temp = [];
    shifts.map((s) => {
      temp.push(s.rank);
    });
    //console.log(shifts, temp);
    setRanks(temp);
  }, []);

  const handleChange = (i, e) => {
    let items = [...shifts];
    // console.log(items);
    let item = { ...shifts[i] };
    let rank = e.target.value - items.length;
    items[i].rank = Number(rank);
    items = items.sort((a, b) =>
      a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0
    );
    // console.log(items);
    setShifts(items);
    //console.log(items);
    //console.log(item, e.target.value, i);
  };
  console.log(shifts);
  return (
    <div className="table-wrapper">
      {shifts.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Schedule</th>
              <th>Days</th>
              <th>Description</th>
              <th>Start</th>
              <th>End</th>
              <th>Schedule Count</th>
            </tr>
            {shifts
              /*          .sort((a, b) => a - b) */
              .map((s, i) => (
                <tr key={s.id}>
                  {/*  <td>{rank[i]}</td> */}
                  <td>
                    <input
                      placeholder={i + 1}
                      type="number"
                      onChange={(e) => handleChange(i, e)}
                    ></input>
                  </td>
                  <td>
                    {s.startTime} {s.endTime}
                  </td>
                  <td>{s.days}</td>
                  <td>{s.description}</td>
                  <td>{s.startTime}</td>
                  <td>{s.endTime}</td>
                  <td>{s.scheduleCount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <>no data...</>
      )}
    </div>
  );
};

export default Table;
