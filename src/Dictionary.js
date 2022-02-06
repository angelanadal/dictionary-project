import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          autoFocus={true}
          placeholder="Enter a word..."
        />
        <input
          type="submit"
          className="btn btn-primary"
          label="Go"
          value="Go"
        />
      </form>
    </div>
  );
}
