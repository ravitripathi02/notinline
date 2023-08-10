import "./styles.css";
import logo from "./logo.svg";
const Footer = () => {
  return (
    <div className="foot">
      <div className="foot-1">
        <div className="foot-1-1">
          <img src={logo} alt="logo" />
        </div>
        <div className="foot-1-2">
          Book doctor appointments online and get your ailments treated in no
          time with our expert medical support systems. Get rid of all your
          medical problem with our expert panel of doctors who guide you towards
          a healthier life.
        </div>
        <div className="foot-1-3">
          <div className="code">+91</div>
          <div className="line"></div>
          <input className="number" type="tel" />
          <div className="phone-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
            >
              <mask
                id="mask0_1_82"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="39"
                height="39"
              >
                <rect width="39" height="39" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_82)">
                <path
                  d="M32.4188 34.125C29.0333 34.125 25.6885 33.387 22.3844 31.9109C19.0802 30.4349 16.074 28.3427 13.3656 25.6344C10.6573 22.926 8.5651 19.9198 7.08906 16.6156C5.61302 13.3115 4.875 9.96667 4.875 6.58125C4.875 6.09375 5.0375 5.6875 5.3625 5.3625C5.6875 5.0375 6.09375 4.875 6.58125 4.875H13.1625C13.5417 4.875 13.8802 5.00365 14.1781 5.26094C14.476 5.51823 14.6521 5.82292 14.7063 6.175L15.7625 11.8625C15.8167 12.2958 15.8031 12.6615 15.7219 12.9594C15.6406 13.2573 15.4917 13.5146 15.275 13.7313L11.3344 17.7125C11.876 18.7146 12.5193 19.6828 13.2641 20.6172C14.0089 21.5516 14.8281 22.4521 15.7219 23.3188C16.5615 24.1583 17.4417 24.937 18.3625 25.6547C19.2833 26.3724 20.2583 27.0292 21.2875 27.625L25.1062 23.8063C25.35 23.5625 25.6682 23.3797 26.0609 23.2578C26.4536 23.1359 26.8396 23.1021 27.2188 23.1562L32.825 24.2937C33.2042 24.4021 33.5156 24.5984 33.7594 24.8828C34.0031 25.1672 34.125 25.4854 34.125 25.8375V32.4188C34.125 32.9063 33.9625 33.3125 33.6375 33.6375C33.3125 33.9625 32.9063 34.125 32.4188 34.125Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="foot2">
        <div className="foot-2">
          <div className="services">Services</div>
          <div className="app">Appointments</div>
          <div className="app">Lab tests</div>
          <div className="app">A-Z medicine</div>
          <div className="app">Doctor support</div>
        </div>
        <div className="foot-2">
          <div className="services">Legal</div>
          <div className="app">Career info</div>
          <div className="app">Privacy policy</div>
          <div className="app">Terms of services</div>
          <div className="app">Consultation</div>
          <div className="app">How it works</div>
        </div>
        <div className="foot-2">
          <div className="services">Talk to us</div>
          <div className="app">support@notinline.com</div>
          <div className="app">appointment@notinline.com</div>
          <div className="app">+91 12345 67899</div>
          <div className="app">+91 97642 09752</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
