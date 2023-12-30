import axios from "axios";
import React, { useEffect, useState } from "react";

const PatientRequestPage = () => {
  const [allPatiants, setAllPatiants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3310/api/primaryusers/primaryusers").then((response) => {
      setAllPatiants(response.data);
    });
  }, []);

  
  // console.log(allPatiants);

  
  // const handleRequest = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:3310/api/primaryusers/primaryusers");
  //     setAllPatiants(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   handleRequest();

  //   const intervel = setInterval(() => {
  //     handleRequest();
  //   }, 1000);

  //   return () => clearInterval(intervel);
  // }, []);

  const handleDone = async (id) => {
    try {
      const { data } = await axios.patch(`/api/primaryusers/primaryusers/${id}`, {
        contacted: true,
      });

      if (data) {
        
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUndo = async (id) => {
    try {
      const { data } = await axios.patch(`/api/patiants-status-undo/${id}`, {
        contacted: false,
      });

      if (data) {
        
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Reason</th>
            <th>Address</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {allPatiants.length > 0 &&
            allPatiants.map((item, index) => (
              console.log(item, index),
              <tr key={index}>
                
                <th>{index + 1}</th>
                <td> {item.name} </td>
                <td> {item.age} </td>
                <td> {item.contact} </td>
                <td> {item.reason} </td>
                <td> {item.address} </td>
                <td> {item.status} </td>
                <td>
                  {!item.contacted ? (
                    <svg
                      onClick={() => handleDone(item._id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => handleUndo(item._id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRequestPage;
