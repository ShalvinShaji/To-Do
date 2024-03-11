import React from "react";
import "../css/Topbar.css";

function Topbar() {
  let currentDate = new Date();

  // Get the current day in full letters (e.g., Monday, Tuesday)
  let day = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  // Get the current date
  let date = currentDate.getDate();

  // Get the current month in three letters (e.g., Jan, Feb)
  let month = currentDate.toLocaleDateString("en-US", { month: "short" });

  return (
    <>
      <div className="topbar p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center justify-content-start">
            <h6 className="m-0 me-2">symbol</h6>
            <h6 className="m-0">/</h6>
            <div className="small-circle mx-2"></div>
            <h6 className="m-0">simple todo's</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="small-circle mx-2"></div>
            <div>
              <h6 className="m-0">
                <i>
                  {day}, {date} {month}
                </i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
