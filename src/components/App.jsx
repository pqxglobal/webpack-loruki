import "../styles/index.scss";
import spool from "../images/pipespool.png";

const App = () => {
  return (
    <>
      <header>
        <section className="navbar">
          <div className="container flex">
            <h1 className="logo">Loruki</h1>
            <nav>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="features.html">Features</a>
                </li>
                <li>
                  <a href="docs.html">Docs</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
      <main>
        <section className="showcase">
          <div className="container grid">
            
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
