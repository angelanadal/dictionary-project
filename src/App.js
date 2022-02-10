import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Bookish Octo Dictionary 🐙📖</h1>
        </header>
        <Dictionary />
        <footer className="footer">
          <a
            href="https://github.com/angelanadal/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            Open-sourced on GitHub
          </a>
          <span className="footer-text"> by </span>
          <a
            href="https://www.linkedin.com/in/angela-nadal/"
            rel="noreferrer"
            target="_blank"
          >
            Angela Nadal
          </a>
          <span className="footer-text"> and hosted on </span>
          <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
