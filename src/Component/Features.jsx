import features from "../assets/features.png";
import check from "../assets/check-icon.svg";
export default function Features() {
  return (
    <section className="features-section">
      <img className="features-image" src={features} />

      <div className="features-content">
        <h2 className="section-title">We Provide Many <br /> Features You Can Use</h2>
        <p className="section-subtitle">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="features-list">
          <li>
            <img src={check} />
            Powerfull online protection
          </li>
          <li>
            <img src={check} />
            Internet without borders
          </li>
          <li>
            <img src={check} />
            Supercharged VPN
          </li>
          <li>
            <img src={check} />
            No specific time limits
          </li>
        </ul>
      </div>
    </section>
  );
}
