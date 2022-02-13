import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [searchResults, setSearchResults] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleResponse(response) {
    setSearchResults(response.data[0]);
    setLoading(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    setLoading(true);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="centered" onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          autoFocus={true}
          placeholder="Enter a word..."
          className="search-box"
        />
        <input
          type="submit"
          className="btn btn-primary"
          label="Go"
          value="Go"
        />
      </form>
      {loading ? (
        <h2 className="centered">Loading...</h2>
      ) : (
        <Results results={searchResults} />
      )}
    </div>
  );
}
