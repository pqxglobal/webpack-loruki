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
            <div className="showcase-text">
              <h1>Easier Deployment</h1>
              <p>
                Deploy web apps of all kinds, from large scale enterprise APIs
                to static websites for individuals. Fill out the form to try a
                demo of our platform
              </p>
              <a href="features.html" className="btn btn-outline">
                Read More
              </a>
            </div>
            <div className="showcase-form card">
              <h2>Request a Demo</h2>
              <form>
                <div className="form-control">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input type="submit" value="Send" class="btn btn-primary"/>
              </form>
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="container">
            <h3 className="stats-heading text-center my-1">
              Welcome to the best platform for building applications of all types with modern architecture and scaling
            </h3>

            <div className="grid grid-3 text-center my-4">
              <div>
                <i className="fas fa-server fa-3x"></i>
                <h3>10,349,405</h3>
                <p className="text-secondary">Deployment</p>
              </div>
              <div>                
                <i className="fas fa-upload fa-3x"></i>
                <h3>987 TB</h3>
                <p className="text-secondary">Published</p></div>
              <div>
                <i className="fas fa-project-diagram fa-3x"></i>
                <h3>2,343,265</h3>
                <p className="text-secondary">Projects</p></div>
              </div>
            </div>
          </section>
      </main>
    </>
  );
};

export default App;
