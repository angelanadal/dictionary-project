import Twemoji from "react-twemoji";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <div className="background-card">
        <h3>{meaning.partOfSpeech}</h3>
        {meaning.definitions.map((definition, index) => {
          return (
            <div className="definition" key={index}>
              <div>
                <span className="definition-heading">
                  <strong>Definition:</strong>
                </span>{" "}
                {definition.definition}
              </div>
              {definition.example ? (
                <span className="example">
                  <span className="fren">
                    <Twemoji options={{ className: "twemoji" }}>🐙</Twemoji>
                  </span>
                  <span className="example-wrapper">
                    <span className="example-bubble">
                      <div className="example-header">Example:</div>
                      <span className="example-text">
                        <em>"{definition.example}"</em>
                      </span>
                      <span className="speech-arrow"></span>
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
              {definition.synonyms.length ? (
                <div>
                  <p>
                    <strong>Synonyms: </strong>
                  </p>
                  <ul className="synonyms">
                    {definition.synonyms.map((synonym, index) => {
                      return (
                        <li className="synonym" key={index}>
                          {synonym}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
