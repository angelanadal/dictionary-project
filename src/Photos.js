import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="Photos">
        <div className="background-card">
          <div className="row centered">
            {photos.map((photo) => {
              return (
                <div className="col-4" key={photo.id}>
                  <a
                    href={photo.url}
                    rel="noreferrer"
                    target="_blank"
                    className="App-link"
                  >
                    <img src={photo.src.landscape} alt={photo.alt} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else return "";
}
