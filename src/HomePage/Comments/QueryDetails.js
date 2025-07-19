import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import './querydetails.css'
import Comments from "./Comments";

export function QueryDetails() {
  const location = useLocation();
  const query = location.state?.query;
  useEffect(()=> {
    console.log(query);
  })

  if (!query) {
    return <p>Query data is not available. Please try again later.</p>;
  }

  const formatTime = (timestamp) => {
    try {
      let dateObj;
      if (typeof timestamp.toDate === "function") {
        dateObj = timestamp.toDate(); // Firestore Timestamp
      } else if (timestamp.seconds && timestamp.nanoseconds) {
        // Plain Object (converted Firestore Timestamp)
        dateObj = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
      } else {
        throw new Error("Invalid timestamp format");
      }
      return `${dateObj.getHours().toString().padStart(2, "0")}:${dateObj
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } catch (error) {
      console.error("Invalid timestamp:", timestamp, error);
      return "Invalid time";
    }
  };

  console.log("Query received in QueryDetails:", query);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Invalid date";
    try {
      let dateObj;
      if (typeof timestamp.toDate === "function") {
        dateObj = timestamp.toDate(); // Firestore Timestamp
      } else if (timestamp.seconds && timestamp.nanoseconds) {
        dateObj = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate(); // Plain Object
      } else {
        return "Invalid date format";
      }
      return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
    } catch (error) {
      console.error("Error formatting timestamp:", error);
      return "Error";
    }
  };

  const userCreds = JSON.parse(sessionStorage.getItem('user-creds'));
  const userInfo = JSON.parse(sessionStorage.getItem('user-info'));
  const first = String(userInfo.name)[0];

  const postFirst = String(query.username)[0];


  return (
    <div className="comments-page">
      <div className='header'>
        <div className="details">
          <h1 className='logo'>{<FontAwesomeIcon icon={faJetFighter} />} Agritech Nexus</h1>
          <div className="user-deatils">
            <h3>{first}</h3>
            <div className="name-email">
              <h5>{userInfo.name}</h5>
              <p>{userCreds.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="query-detail">
        <div className="post-user-details">
          <div className="name-email">
            <div className="first">
              <h3>{postFirst}</h3>
            </div>
            <div className="details">
              <h1>{query.username || "Unknown User"}</h1>
              <p>{query.email || "N/A"}</p>
            </div>
          </div>
        </div>
        <div className="query">
          <h3>{query.query || "No query provided."}</h3>
          <div className="day-date">
            <p>{query.timestamp ? formatDate(query.timestamp) : "N/A"}</p>
            <p>{query.timestamp ? formatTime(query.timestamp) : "N/A"}</p>
          </div>
        </div>
      </div>
      <Comments QueryId={query.id}/>
    </div>
  );
}
