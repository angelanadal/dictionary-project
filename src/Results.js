import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  function playAudio(url) {
    new Audio(url).play();
  }

  if (results) {
    return (
      <div className="Results">
        <div className="background-card centered">
          <h2>
            <strong>{results.word}</strong>
          </h2>
          {results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <span className="phonetic-text">/ {phonetic.text} /</span>
                <div
                  className="btn btn-primary phonetic-listen-btn"
                  onClick={() => playAudio(phonetic.audio)}
                >
                  Listen
                </div>
              </div>
            );
          })}
        </div>
        {results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
