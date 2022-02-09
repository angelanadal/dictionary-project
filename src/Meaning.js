import "./Meaning.css";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            {definition.example ? (
              <p className="example">
                <em>"{definition.example}"</em>
              </p>
            ) : (
              ""
            )}
            {definition.synonyms ? (
              <ul className="synonyms">
                {definition.synonyms.map((synonym, index) => {
                  return (
                    <li className="synonym" key={index}>
                      {synonym}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
