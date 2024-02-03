import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <label htmlFor="product">
          <span>Product</span>
          <ul id="product">
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </label>
        <label htmlFor="engage">
          <span>Engage</span>
          <ul id="engage">
            <li>LaslesVPN?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </label>
        <label htmlFor="earn">
          <span>Earn Money</span>
          <ul id="earn">
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </label>
      </nav>
      <div className="footer-misc">
        <img className="logo" src={logo} />
        <p className="footer-logo-subtext">
          <span className="bold-light-small">LaslesVPN</span> is a private
          virtual network that has unique features and has high security.
        </p>
        <div className="social-btn-wrapper">
          <button className="social-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Facebook</title>
              <desc>A line styled icon from Orion Icon Library.</desc>
              <path
                data-name="layer1"
                d="M39.312 13.437H47V2h-9.094C26.938 2.469 24.688 8.656 24.5 15.125v5.719H17V32h7.5v30h11.25V32h9.281l1.781-11.156H35.75v-3.469a3.714 3.714 0 0 1 3.562-3.938z"
                fill="red"
              ></path>
            </svg>
          </button>
          <button className="social-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Twitter</title>
              <desc>A line styled icon from Orion Icon Library.</desc>
              <path
                data-name="layer1"
                d="M60.448 15.109a24.276 24.276 0 0 1-3.288.968.5.5 0 0 1-.451-.853 15.146 15.146 0 0 0 3.119-4.263.5.5 0 0 0-.677-.662 18.6 18.6 0 0 1-6.527 2.071 12.92 12.92 0 0 0-9-3.75A12.363 12.363 0 0 0 31.25 20.994a12.727 12.727 0 0 0 .281 2.719c-9.048-.274-19.61-4.647-25.781-12.249a.5.5 0 0 0-.83.073 12.475 12.475 0 0 0 2.956 14.79.5.5 0 0 1-.344.887 7.749 7.749 0 0 1-3.1-.8.5.5 0 0 0-.725.477 11.653 11.653 0 0 0 7.979 10.567.5.5 0 0 1-.09.964 12.567 12.567 0 0 1-2.834 0 .506.506 0 0 0-.536.635c.849 3.282 5.092 7.125 9.839 7.652a.5.5 0 0 1 .267.87 20.943 20.943 0 0 1-14 4.577.5.5 0 0 0-.255.942 37.29 37.29 0 0 0 17.33 4.266 34.5 34.5 0 0 0 34.687-36.182v-.469a21.11 21.11 0 0 0 4.934-4.839.5.5 0 0 0-.58-.765z"
                fill="red"
              ></path>
            </svg>
          </button>
          <button className="social-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Instagram</title>
              <desc>A line styled icon from Orion Icon Library.</desc>
              <path
                data-name="layer1"
                d="M9.687 2h44.625A7.49 7.49 0 0 1 62 9.687v44.625A7.49 7.49 0 0 1 54.312 62H9.687A7.49 7.49 0 0 1 2 54.312V9.687A7.49 7.49 0 0 1 9.687 2z"
                fill="red"
              ></path>
              <path
                data-name="layer1"
                d="M45.687 8.656a2.721 2.721 0 0 0-2.719 2.719v6.469a2.721 2.721 0 0 0 2.719 2.719h6.75a2.721 2.721 0 0 0 2.719-2.719v-6.469a2.721 2.721 0 0 0-2.719-2.719zm9.563 18.75H50a18.523 18.523 0 0 1 .75 5.156c0 9.937-8.344 18.094-18.656 18.094a18.1 18.1 0 0 1-17.906-23.25H8.656v25.313A2.321 2.321 0 0 0 11 55.062h41.812a2.321 2.321 0 0 0 2.344-2.344l.094-25.312z"
                fill="white"
              ></path>
              <path
                data-name="layer1"
                d="M32.094 20.187A11.927 11.927 0 0 0 20 31.906a11.85 11.85 0 0 0 12.094 11.625 11.927 11.927 0 0 0 12.094-11.719 11.85 11.85 0 0 0-12.094-11.625z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
        <p className="trademark">
          ©2020Lasles<span className="bold-light-small">VPN</span>
        </p>
      </div>
    </footer>
  );
}