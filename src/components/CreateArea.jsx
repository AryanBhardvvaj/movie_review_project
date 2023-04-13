import React, { useState } from "react";
import Movie from "./Movie"

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="all">
        <Movie/>
      <div className="review">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Movie Name"
        />
        <hr/>
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Your review..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
    </div>
  );
}

export default CreateArea;
