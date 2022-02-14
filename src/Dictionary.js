import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [searchResults, setSearchResults] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleResponse(response) {
    let word = response.data[0].word;
    let headers = {
      Authorization: `563492ad6f917000010000018b38af014cc94e149f9c28cd0b2e8298`,
    };
    axios
      .get(
        `https://api.pexels.com/v1/search?query=${word}&per_page=9&orientation=landscape`,
        {
          headers,
        }
      )
      .then((pexelsResponse) => {
        console.log(pexelsResponse);
        setSearchResults({
          ...response.data[0],
          photos: pexelsResponse.data.photos,
        });
        setLoading(false);
      });
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
