import "./App.css";
import pexelsphoto from "./pexelsphoto.jpeg";
import img2 from "./img2.jpeg";

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="/Brandlogo.png" width="150" alt="branlogo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <h1 style={{ color: "#D91414", fontSize: 60 }}>
        Architectural photography
      </h1>
      <div className="mine">
        <div>
          <p>
            Architecture photography has a long history. In fact, the world’s
            oldest surviving photo, is an example of architectural
            photography—and it was taken in the 1820s! The medium has remained
            popular for all these years, and that’s no surprise when you
            consider the significance of architecture. Buildings do much more
            than provide us with shelter. They are also works of art and
            long-lasting cultural symbols. Building photography may have first
            taken off as a way to document buildings, but along the way, it has
            evolved into its own diverse art form. This guide will teach you
            about the basics of and give you some architecture photography tips
            so that you can put together an outstanding online architecture
            portfolio.
            <br />
            <br></br>
            Architecture photography (also referred to as building photography
            or structure photography) generally means photography that focuses
            on buildings. It can include shooting building exteriors and
            interiors, as well as bridges, other structures, and cityscapes.
            <br />
            <br></br>
            There are many photographers who capture stunning architecture
            photography. Some of them do it as a purely artistic pursuit, while
            others make a career of it by shooting for clients such as
            architecture firms, advertising firms, and magazines.
          </p>
        </div>
        <div>
          <img src={pexelsphoto} alt="mine img" width="600" />
        </div>
      </div>
      <br></br>
      <div>
        <h1 className="title">Architecture photo</h1>
        <div
          className="lastdiv"
          style={{ border: "solid 1px black", maxWidth: "100vw" }}
        >
          <br />
          <img src={img2} alt="sky" width="600" className="imgmove" />
          <img src="/stairs.jpeg" width="600" className="imgmove" />
        </div>
        <br></br>
        <h1 className="title">Tips for architecture photography</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wCGMRA502qI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <source src="myVideo.mp4" type="video/mp4" />
      </div>
    </div>
  );
}

export default App;
