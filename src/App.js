import "./styles.css";
import img1 from "./img1.svg";
import img2 from "./play.svg";
import img6 from "./right.svg";
import img7 from "./Accreditation.svg";
import img8 from "./eclipse.svg";
import img9 from "./women.svg";
import img10 from "./two.svg";
import img11 from "./three.svg";
import img12 from "./four.svg";
import img13 from "./nabl.svg";
import img14 from "./rect.svg";
import Why from "./Why";
import Form from "./Form";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
import { useState } from "react";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="ham">
        <Hamburger />
      </div>
      <div className="header">
        <div className="head1">
          <img src={img1} alt="Image 1" />
        </div>
        <div className="head5">
          <div className="head2">
            <div>Home</div>
            <div>Health Condition</div>
            <div>Lab tests</div>
            <div>Medicines</div>
          </div>
          <div className="head3">
            <button className="btn1">For patients</button>
            <button className="btn2">For hospitals</button>
          </div>
        </div>
        <div className="head4">
          <button className="playBtn">
            <img src={img2} alt="Image 1" />
            Play Store
          </button>
        </div>
      </div>
      <div className="content1">
        <div className="c1-3">
          <span style={{ color: "#138ED1" }}>Best in class</span> lab tests!
        </div>
        <div className="c1-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="265"
            height="21"
            viewBox="0 0 265 21"
            fill="none"
          >
            <path
              d="M1 8.36268C17.3852 6.61131 34.3483 5.55603 51.0368 4.41552C62.5882 3.62607 73.949 3.00499 85.6431 2.85026C98.0116 2.68661 109.667 1.01279 122.197 1.01279C146.396 1.01279 170.136 0.772597 194.106 2.37388C207.379 3.2606 220.395 4.44926 233.506 5.6405C239.003 6.13989 244.256 7.1628 249.686 7.68213C254.135 8.10768 256.876 7.51359 260.472 8.97517C268.229 12.128 256.12 9.82949 251.109 9.31544C215.456 5.65823 177.002 6.10555 140.549 6.55923C125.823 6.7425 111.061 7.35134 96.3545 7.75019C78.7676 8.22715 62.3332 11.4996 45.6436 13.807C44.9907 13.8973 14.006 18.2861 14.7826 18.6389C15.6802 19.0467 19.3213 18.775 20.4754 18.775C31.8966 18.775 42.8334 17.7224 53.9581 16.6313C68.6659 15.1887 82.9019 15.1001 97.7777 15.1001C130.275 15.1001 163.226 14.3815 195.454 16.1889C202.773 16.5994 221.491 16.9781 224.817 20"
              stroke="#008DD9"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="offer">
          <div className="offer1">
            Get Full Body Check up <pre> Now </pre> at
          </div>
          <div className="offer2">
            <pre><del>&#8377;5,999</del>
            <span> &#8377;999</span> 70% Off
            </pre>
          </div>
        </div>
        <div className="c1-l">
          <div className="form">
            <Form />
          </div>
          <div className="discount">
            <div className="b-div">70% OFF</div>
            <div className="f-div">
              Get a Full Body Check up Now at <del>&#8377;5,999</del>
              <span> &#8377;999</span>
            </div>
          </div>
        </div>
        <div className="c1-r">
          <img src={img6} alt="Image 1" />
        </div>
      </div>

      <div className="con1">
        <div className="c1-1">
          <div className="c1-1-1">
            <img src={img13} alt="Image 4" />
          </div>
          <div className="c1-1-2">NABL Accredited Labs</div>
        </div>
        <div className="c1-2">
          <div className="c1-2-1">
            <img src={img14} alt="Image 4" />
          </div>
          <div className="c1-2-2">Free sample collection</div>
        </div>
      </div>
      <div className="content4">
        <div className="c4-1">
          We keep <span style={{ color: "#138ED1" }}>expending</span>!
        </div>
        <div className="c4-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="265"
            height="21"
            viewBox="0 0 265 21"
            fill="none"
          >
            <path
              d="M1 8.36268C17.3852 6.61131 34.3483 5.55603 51.0368 4.41552C62.5882 3.62607 73.949 3.00499 85.6431 2.85026C98.0116 2.68661 109.667 1.01279 122.197 1.01279C146.396 1.01279 170.136 0.772597 194.106 2.37388C207.379 3.2606 220.395 4.44926 233.506 5.6405C239.003 6.13989 244.256 7.1628 249.686 7.68213C254.135 8.10768 256.876 7.51359 260.472 8.97517C268.229 12.128 256.12 9.82949 251.109 9.31544C215.456 5.65823 177.002 6.10555 140.549 6.55923C125.823 6.7425 111.061 7.35134 96.3545 7.75019C78.7676 8.22715 62.3332 11.4996 45.6436 13.807C44.9907 13.8973 14.006 18.2861 14.7826 18.6389C15.6802 19.0467 19.3213 18.775 20.4754 18.775C31.8966 18.775 42.8334 17.7224 53.9581 16.6313C68.6659 15.1887 82.9019 15.1001 97.7777 15.1001C130.275 15.1001 163.226 14.3815 195.454 16.1889C202.773 16.5994 221.491 16.9781 224.817 20"
              stroke="#008DD9"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="c4-3">
          <div className="c4-3-1">
            <div className="c4-3-1-1">
              5+ <p>Lakh</p>
            </div>
            <div className="c4-3-1-1">
              100+ <p>Collection</p>
              <p>centers</p>
            </div>
          </div>
          <div className="c4-3-1">
            <div className="c4-3-1-1">
              1000+ <p>Monthly tests</p>
            </div>
            <div className="c4-3-1-1">
              2200 <p>Test menu</p>
            </div>
          </div>
          <div className="c4-3-1">
            <div className="c4-3-1-1">
              5+ <p>Cities present in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content5">
        <div className="c4-1">
          Top <span style={{ color: "#138ED1" }}>packages</span>
        </div>
        <div className="c5-2" style={{ paddingLeft: "100px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="21"
            viewBox="0 0 265 21"
            fill="none"
          >
            <path
              d="M1 8.36268C17.3852 6.61131 34.3483 5.55603 51.0368 4.41552C62.5882 3.62607 73.949 3.00499 85.6431 2.85026C98.0116 2.68661 109.667 1.01279 122.197 1.01279C146.396 1.01279 170.136 0.772597 194.106 2.37388C207.379 3.2606 220.395 4.44926 233.506 5.6405C239.003 6.13989 244.256 7.1628 249.686 7.68213C254.135 8.10768 256.876 7.51359 260.472 8.97517C268.229 12.128 256.12 9.82949 251.109 9.31544C215.456 5.65823 177.002 6.10555 140.549 6.55923C125.823 6.7425 111.061 7.35134 96.3545 7.75019C78.7676 8.22715 62.3332 11.4996 45.6436 13.807C44.9907 13.8973 14.006 18.2861 14.7826 18.6389C15.6802 19.0467 19.3213 18.775 20.4754 18.775C31.8966 18.775 42.8334 17.7224 53.9581 16.6313C68.6659 15.1887 82.9019 15.1001 97.7777 15.1001C130.275 15.1001 163.226 14.3815 195.454 16.1889C202.773 16.5994 221.491 16.9781 224.817 20"
              stroke="#008DD9"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="c5-3">
          Explore our wide range of tests! We ensure that you don’t miss out on
          any chance to keep yourself healthy.
        </div>
        <div className="c5-4"></div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="wave">
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 400"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stop-color="rgba(177.413, 223.163, 248.084, 1)"
                  offset="0%"
                ></stop>
                <stop stop-color="rgba(255, 255, 255, 0)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-0)"
              d="M0,200L48,173.3C96,147,192,93,288,80C384,67,480,93,576,113.3C672,133,768,147,864,160C960,173,1056,187,1152,193.3C1248,200,1344,200,1440,166.7C1536,133,1632,67,1728,53.3C1824,40,1920,80,2016,86.7C2112,93,2208,67,2304,73.3C2400,80,2496,120,2592,120C2688,120,2784,80,2880,53.3C2976,27,3072,13,3168,20C3264,27,3360,53,3456,53.3C3552,53,3648,27,3744,26.7C3840,27,3936,53,4032,80C4128,107,4224,133,4320,126.7C4416,120,4512,80,4608,73.3C4704,67,4800,93,4896,120C4992,147,5088,173,5184,173.3C5280,173,5376,147,5472,146.7C5568,147,5664,173,5760,180C5856,187,5952,173,6048,193.3C6144,213,6240,267,6336,246.7C6432,227,6528,133,6624,100C6720,67,6816,93,6864,106.7L6912,120L6912,400L6864,400C6816,400,6720,400,6624,400C6528,400,6432,400,6336,400C6240,400,6144,400,6048,400C5952,400,5856,400,5760,400C5664,400,5568,400,5472,400C5376,400,5280,400,5184,400C5088,400,4992,400,4896,400C4800,400,4704,400,4608,400C4512,400,4416,400,4320,400C4224,400,4128,400,4032,400C3936,400,3840,400,3744,400C3648,400,3552,400,3456,400C3360,400,3264,400,3168,400C3072,400,2976,400,2880,400C2784,400,2688,400,2592,400C2496,400,2400,400,2304,400C2208,400,2112,400,2016,400C1920,400,1824,400,1728,400C1632,400,1536,400,1440,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
            ></path>
          </svg>
        </div>
        <div className="c6-1">
          <div className="c6-1-1">
            <div className="c6-1-1-1">
              Basic Full Body <div>Checkup</div>
            </div>
            <div className="c6-1-1-2">
              4.3
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_196"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_196)">
                    <path
                      d="M6.99318 20.8C6.80985 20.95 6.61402 20.9583 6.40568 20.825C6.19735 20.6917 6.13485 20.5083 6.21818 20.275L8.09318 14.15L3.21818 10.65C3.01818 10.5167 2.95568 10.3333 3.03068 10.1C3.10568 9.86667 3.25985 9.75 3.49318 9.75H9.54318L11.4682 3.35C11.5015 3.21667 11.564 3.125 11.6557 3.075C11.7473 3.025 11.8432 3 11.9432 3C12.0432 3 12.139 3.025 12.2307 3.075C12.3223 3.125 12.3848 3.21667 12.4182 3.35L14.3432 9.75H20.3932C20.6265 9.75 20.7807 9.86667 20.8557 10.1C20.9307 10.3333 20.8682 10.5167 20.6682 10.65L15.7932 14.15L17.6682 20.275C17.7515 20.5083 17.689 20.6917 17.4807 20.825C17.2723 20.9583 17.0765 20.95 16.8932 20.8L11.9432 17.05L6.99318 20.8Z"
                      fill="#E2E700"
                    />
                  </g>
                </svg>
              </span>
              <span>(75 Reviews)</span>
            </div>
            <div className="c6-1-1-3">Number of tests - 53</div>
            <div className="c6-1-1-4">
              MRP: <del>&#8377;10,000</del>
              <span
                style={{
                  fontWeight: "600",
                  color: "black",
                  paddingLeft: "10px"
                }}
              >
                {" "}
                &#8377;8,490
              </span>
            </div>
            <button className="book">Book Now</button>
          </div>
          <div className="c6-1-1">
            <div className="c6-1-1-1">
              Advance Full Body <div>Checkup</div>
            </div>
            <div className="c6-1-1-2">
              4.7
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_196"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_196)">
                    <path
                      d="M6.99318 20.8C6.80985 20.95 6.61402 20.9583 6.40568 20.825C6.19735 20.6917 6.13485 20.5083 6.21818 20.275L8.09318 14.15L3.21818 10.65C3.01818 10.5167 2.95568 10.3333 3.03068 10.1C3.10568 9.86667 3.25985 9.75 3.49318 9.75H9.54318L11.4682 3.35C11.5015 3.21667 11.564 3.125 11.6557 3.075C11.7473 3.025 11.8432 3 11.9432 3C12.0432 3 12.139 3.025 12.2307 3.075C12.3223 3.125 12.3848 3.21667 12.4182 3.35L14.3432 9.75H20.3932C20.6265 9.75 20.7807 9.86667 20.8557 10.1C20.9307 10.3333 20.8682 10.5167 20.6682 10.65L15.7932 14.15L17.6682 20.275C17.7515 20.5083 17.689 20.6917 17.4807 20.825C17.2723 20.9583 17.0765 20.95 16.8932 20.8L11.9432 17.05L6.99318 20.8Z"
                      fill="#E2E700"
                    />
                  </g>
                </svg>
              </span>
              <span>(100 Reviews)</span>
            </div>
            <div className="c6-1-1-3">Number of tests - 70</div>
            <div className="c6-1-1-4">
              MRP: <del>&#8377;12,000</del>
              <span
                style={{
                  fontWeight: "600",
                  color: "black",
                  paddingLeft: "10px"
                }}
              >
                {" "}
                &#8377;10,000
              </span>
            </div>
            <button className="book">Book Now</button>
          </div>
          <div className="c6-1-1">
            <div className="c6-1-1-1">
              Liver Function Test<div>(LFT)</div>
            </div>
            <div className="c6-1-1-2">
              4.3
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_196"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_196)">
                    <path
                      d="M6.99318 20.8C6.80985 20.95 6.61402 20.9583 6.40568 20.825C6.19735 20.6917 6.13485 20.5083 6.21818 20.275L8.09318 14.15L3.21818 10.65C3.01818 10.5167 2.95568 10.3333 3.03068 10.1C3.10568 9.86667 3.25985 9.75 3.49318 9.75H9.54318L11.4682 3.35C11.5015 3.21667 11.564 3.125 11.6557 3.075C11.7473 3.025 11.8432 3 11.9432 3C12.0432 3 12.139 3.025 12.2307 3.075C12.3223 3.125 12.3848 3.21667 12.4182 3.35L14.3432 9.75H20.3932C20.6265 9.75 20.7807 9.86667 20.8557 10.1C20.9307 10.3333 20.8682 10.5167 20.6682 10.65L15.7932 14.15L17.6682 20.275C17.7515 20.5083 17.689 20.6917 17.4807 20.825C17.2723 20.9583 17.0765 20.95 16.8932 20.8L11.9432 17.05L6.99318 20.8Z"
                      fill="#E2E700"
                    />
                  </g>
                </svg>
              </span>
              <span>(43 Reviews)</span>
            </div>
            <div className="c6-1-1-3">Number of tests - 89</div>
            <div className="c6-1-1-4">
              MRP: <del>&#8377;13,299 </del>
              <span
                style={{
                  fontWeight: "600",
                  color: "black",
                  paddingLeft: "10px"
                }}
              >
                &#8377;11,299
              </span>
            </div>
            <button className="book">Book Now</button>
          </div>
        </div>
        <div className="content7">
          <div className="c4-1">
            Why <span style={{ color: "#138ED1" }}>choose</span> us?
          </div>
          <div className="c5-2" style={{ paddingLeft: "40px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="21"
              viewBox="0 0 265 21"
              fill="none"
            >
              <path
                d="M1 8.36268C17.3852 6.61131 34.3483 5.55603 51.0368 4.41552C62.5882 3.62607 73.949 3.00499 85.6431 2.85026C98.0116 2.68661 109.667 1.01279 122.197 1.01279C146.396 1.01279 170.136 0.772597 194.106 2.37388C207.379 3.2606 220.395 4.44926 233.506 5.6405C239.003 6.13989 244.256 7.1628 249.686 7.68213C254.135 8.10768 256.876 7.51359 260.472 8.97517C268.229 12.128 256.12 9.82949 251.109 9.31544C215.456 5.65823 177.002 6.10555 140.549 6.55923C125.823 6.7425 111.061 7.35134 96.3545 7.75019C78.7676 8.22715 62.3332 11.4996 45.6436 13.807C44.9907 13.8973 14.006 18.2861 14.7826 18.6389C15.6802 19.0467 19.3213 18.775 20.4754 18.775C31.8966 18.775 42.8334 17.7224 53.9581 16.6313C68.6659 15.1887 82.9019 15.1001 97.7777 15.1001C130.275 15.1001 163.226 14.3815 195.454 16.1889C202.773 16.5994 221.491 16.9781 224.817 20"
                stroke="#008DD9"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="content8">
          <div className="c8-1">
            <div className="c8-1-1">
              <div className="c8-1-1-head">
                NABL Accredited <div>Labs</div>
              </div>
              <div className="c8-1-1-cont">
                Get accurate and safe results from our NABL-certified lab
                partners.
              </div>
              <div className="c8-1-1-img">
                <img src={img8} alt="Image 1" />
              </div>
            </div>
            <div className="c8-1-1">
              <div className="c8-1-1-head">
                Timely <div>collections</div>
              </div>
              <div className="c8-1-1-cont">
                We collect samples timely to prevent treatment delays and ensure
                your continued well-being.
              </div>
              <div className="c8-1-1-img">
                <img src={img10} alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="c8-2">
            <div className="c8-1-1">
              <div className="c8-1-1-head">
                Value <div>experience</div>
              </div>
              <div className="c8-1-1-cont">
                Experience seamless care without the hassle of waiting in long
                lines for an appointment. Book with us for a healthier
                lifestyle.
              </div>
              <div className="c8-1-1-img">
                <img src={img11} alt="Image 3" />
              </div>
            </div>
            <div className="c8-1-1">
              <div className="c8-1-1-head">Transparency</div>
              <div className="c8-1-1-cont">
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth medical
                journey.
              </div>
              <div className="c8-1-1-img">
                <img src={img12} alt="Image 4" />
              </div>
            </div>
          </div>
          <div className="c8-3">
            <img src={img9} alt="Image 4" />
          </div>
        </div>
      </div>
      <div className="choose">
        <Why />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="h-line">
        <br />
      </div>
    </div>
  );
}
