import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} />
      <div className="header-btn-wrapper">
        <a className=" btn-hollow btn-sign-up">Sign Up</a>
        <a className=" btn-sign-in">Sign In</a>
      </div>
      <nav>
        <ul className="header-nav">
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </nav>
    </header>
  );
}