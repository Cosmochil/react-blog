import { logo, routerIcon, bootstrapIcon, styledIcon } from '../components/Images'
import "./styles/Home.css";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Link to="/blog">
          <img src={logo} className="Home-logo" alt="logo" />
        </Link>
        <p>Practicing React Website with</p>
        <div className="tools">
          <a href="https://reactrouter.com/" className="link">
            <figure>
              <img src={routerIcon} alt="react router" className="tools-logo" />
              <figcaption>React Router</figcaption>
            </figure>
          </a>
          <a href="https://getbootstrap.com/" className="link">
            <figure>
              <img src={bootstrapIcon} alt="bootstrap" className="tools-logo" />
              <figcaption>Bootstrap</figcaption>
            </figure>
          </a>
          <a href="https://styled-components.com/" className="link">
            <figure>
              <img src={styledIcon} alt="styled components" className="tools-logo" />
              <figcaption>Styled Components</figcaption>
            </figure>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;
