import React, { useState } from "react";
import plusIcon from "../../Images/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen,setlistOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={()=>setlistOpen(!listOpen)}  />
      {/* TO TOGGLE THE SIDEBAR i.e.  ADD ACTIVE CLASS WHEN CLICKED WHICH IS SET ABOVE BY SETLISTOPEN*/}
      <ul className={`sidebar-list ${listOpen?'sidebar-list-active':''}`}>   
        {colors.map((item, index) => (
          <li
            key={index}
            className="list-item"
            style={{ backgroundColor: item }}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
