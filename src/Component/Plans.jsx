import free from "../assets/free.svg";
import standard from "../assets/standard.svg";
import premium from "../assets/premium.svg";
import check from "../assets/plans-check-icon.svg";
export default function Plans() {
  return (
    <>
    <div className="container-fluid bg-light">
        <div className="container">
        <section className="plans-section ">
      <h2 className="section-title">Choose Your Plan</h2>
      <p className="section-subtitle">
        Let's choose the package that is best for you and <br /> explore it happily and
        cheerfully.
      </p>
      <div className="plans-container ">
        <div tabIndex="0" className="plan">
          <img className="package" src={free} />
          <h3 className="plan-title">Free Plan</h3>
          <ul className="plan-list">
            <li>
              <img src={check} />
              Unlimited Bandwidth
            </li>
            <li>
              <img src={check} />
              Encrypted Connection
            </li>
            <li>
              <img src={check} />
              No Traffic Logs
            </li>
            <li>
              <img src={check} />
              Works on All Devices
            </li>
          </ul>
          <p className="price">
            <span className="bold-big">Free</span>
          </p>
          <button className="btn-hollow select-btn">Select</button>
        </div>
        <div tabIndex="0" className="plan">
          <img className="package" src={standard} />
          <h3 className="plan-title">Standard Plan</h3>
          <ul className="plan-list">
            <li>
              <img src={check} />
              Unlimited Bandwidth
            </li>
            <li>
              <img src={check} />
              Encrypted Connection
            </li>
            <li>
              <img src={check} />
              Traffic Logs
            </li>
            <li>
              <img src={check} />
              Works on All Devices
            </li>
            <li>
              <img src={check} />
              Connect Anywhere
            </li>
          </ul>
          <p className="price">
            <span className="bold-big">$9</span> / mo
          </p>
          <button className="btn-hollow select-btn">Select</button>
        </div>
        <div tabIndex="0" className="plan">
          <img className="package" src={premium} />
          <h3 className="plan-title">Premium Plan</h3>
          <ul className="plan-list">
            <li>
              <img src={check} />
              Unlimited Bandwidth
            </li>
            <li>
              <img src={check} />
              Encrypted Connection
            </li>
            <li>
              <img src={check} />
              Traffic Logs
            </li>
            <li>
              <img src={check} />
              Works on All Devices
            </li>
            <li>
              <img src={check} />
              Connect Anywhere
            </li>
            <li>
              <img src={check} />
              Get New Features
            </li>
          </ul>
          <p className="price">
            <span className="bold-big">$12</span> / mo
          </p>
          <button className="btn-hollow select-btn">Select</button>
        </div>
      </div>
    </section>
        </div>
    
    </div>
    </>
    
  );
}