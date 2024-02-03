import hero from "../assets/hero.png";
import user from "../assets/user-icon.svg";
import location from "../assets/location-icon.svg";
import server from "../assets/server-icon.svg";
export default function Hero() {
  return (
    <div className="hero">
      <h1 className="section-title">
      Want anything to be easy with 
        <span className="bold-big"> LaslesVPN.</span>
      </h1>

      <img className="hero-image" src={hero} />

      <p className="section-subtitle">
        Provide a network for all your needs with ease and <br /> fun using LaslesVPN
        discover interesting features from us.
      </p>

      <a href="#/" className=" btn-filled btn-get-started">
        Get Started
      </a>
      <div className="hero-showcase">
        <div className="showcase-item">
          <div className="showcase-icon">
            <img src={user} />
          </div>
          <div className="showcase-stats">
            <h3>90+</h3>
            <p>Users</p>
          </div>
        </div>
        <div className="showcase-item">
          <div className="showcase-icon">
            <img src={location} />
          </div>
          <div className="showcase-stats">
            <h3>30+</h3>
            <p>Locations</p>
          </div>
        </div>
        <div className="showcase-item">
          <div className="showcase-icon">
            <img src={server} />
          </div>
          <div>
            <h3 className="showcase-stats">50+</h3>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
