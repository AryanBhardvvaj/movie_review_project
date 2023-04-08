import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img src={props.image} alt=""/>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
