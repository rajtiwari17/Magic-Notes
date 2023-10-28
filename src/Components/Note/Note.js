import React from "react";
import "./Note.css";
import deleteicon from "../../Images/del-icon.png";


let timer = 500,timeout ;
function Note(props) {
  const dateFormat = (value) => {
    if (!value) return "";

    const date = new Date(value);
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func)=>{
    clearTimeout(timeout);
    timeout=setTimeout(func,timer);
  }

  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id));
  }

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        name=""
        id=""
        defaultValue={props.note.text}
        onChange={(event)=>updateText(event.target.value,props.note.id)}
      ></textarea>
      <div className="note-last">
        <p>{dateFormat(props.note.time)}</p>
        <img
          className="del-icon"
          src={deleteicon}
          alt="Delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
