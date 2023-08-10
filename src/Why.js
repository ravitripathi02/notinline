import "./styles.css";
import React, { useState } from "react";
import img9 from "./img9.svg";
import img10 from "./five.svg";
import img11 from "./img11.svg";
import img12 from "./img12.svg";
const Why = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <>
      <div className="drop-down">
        <div className="drop">
          <div className="d-1">
            <img src={img9} alt="Image 1" />
          </div>
          <div className="d2 c1-1-2">NABL Accredited Labs</div>
          <div className="d3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen === false ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_507"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_507)">
                    <path d="M12 15L7 10L17 10L12 15Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_517"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="24"
                      width="24"
                      height="24"
                      transform="rotate(90 24 0)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1_517)">
                    <path
                      d="M10.6 12L5.69995 7.09999C5.51662 6.91665 5.42495 6.68332 5.42495 6.39999C5.42495 6.11665 5.51662 5.88332 5.69995 5.69999C5.88328 5.51665 6.11662 5.42499 6.39995 5.42499C6.68328 5.42499 6.91662 5.51665 7.09995 5.69999L12 10.6L16.9 5.69999C17.0833 5.51665 17.3166 5.42499 17.6 5.42499C17.8833 5.42499 18.1166 5.51665 18.3 5.69999C18.4833 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4833 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4833 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4833 18.1167 18.3 18.3C18.1166 18.4833 17.8833 18.575 17.6 18.575C17.3166 18.575 17.0833 18.4833 16.9 18.3L12 13.4L7.09995 18.3C6.91662 18.4833 6.68328 18.575 6.39995 18.575C6.11662 18.575 5.88328 18.4833 5.69995 18.3C5.51662 18.1167 5.42495 17.8833 5.42495 17.6C5.42495 17.3167 5.51662 17.0833 5.69995 16.9L10.6 12Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="hc">
            Get accurate and safe results from our NABL-certified lab partners.
          </div>
        )}
      </div>

      <div className="drop-down">
        <div className="drop">
          <div className="d-1">
            <img src={img10} alt="Image 1" />
          </div>
          <div className="d2 c1-1-2">Timely collections</div>
          <div className="d3" onClick={() => setIsOpen1(!isOpen1)}>
            {isOpen1 === false ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_507"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_507)">
                    <path d="M12 15L7 10L17 10L12 15Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_517"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="24"
                      width="24"
                      height="24"
                      transform="rotate(90 24 0)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1_517)">
                    <path
                      d="M10.6 12L5.69995 7.09999C5.51662 6.91665 5.42495 6.68332 5.42495 6.39999C5.42495 6.11665 5.51662 5.88332 5.69995 5.69999C5.88328 5.51665 6.11662 5.42499 6.39995 5.42499C6.68328 5.42499 6.91662 5.51665 7.09995 5.69999L12 10.6L16.9 5.69999C17.0833 5.51665 17.3166 5.42499 17.6 5.42499C17.8833 5.42499 18.1166 5.51665 18.3 5.69999C18.4833 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4833 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4833 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4833 18.1167 18.3 18.3C18.1166 18.4833 17.8833 18.575 17.6 18.575C17.3166 18.575 17.0833 18.4833 16.9 18.3L12 13.4L7.09995 18.3C6.91662 18.4833 6.68328 18.575 6.39995 18.575C6.11662 18.575 5.88328 18.4833 5.69995 18.3C5.51662 18.1167 5.42495 17.8833 5.42495 17.6C5.42495 17.3167 5.51662 17.0833 5.69995 16.9L10.6 12Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
        {isOpen1 && (
          <div className="hc">
            We collect samples timely to prevent treatment delays and ensure
            your continued well-being.
          </div>
        )}
      </div>
      <div className="drop-down">
        <div className="drop">
          <div className="d-1">
            <img src={img11} alt="Image 1" />
          </div>
          <div className="d2 c1-1-2">Value experience</div>
          <div className="d3" onClick={() => setIsOpen2(!isOpen2)}>
            {isOpen2 === false ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_507"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_507)">
                    <path d="M12 15L7 10L17 10L12 15Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_517"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="24"
                      width="24"
                      height="24"
                      transform="rotate(90 24 0)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1_517)">
                    <path
                      d="M10.6 12L5.69995 7.09999C5.51662 6.91665 5.42495 6.68332 5.42495 6.39999C5.42495 6.11665 5.51662 5.88332 5.69995 5.69999C5.88328 5.51665 6.11662 5.42499 6.39995 5.42499C6.68328 5.42499 6.91662 5.51665 7.09995 5.69999L12 10.6L16.9 5.69999C17.0833 5.51665 17.3166 5.42499 17.6 5.42499C17.8833 5.42499 18.1166 5.51665 18.3 5.69999C18.4833 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4833 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4833 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4833 18.1167 18.3 18.3C18.1166 18.4833 17.8833 18.575 17.6 18.575C17.3166 18.575 17.0833 18.4833 16.9 18.3L12 13.4L7.09995 18.3C6.91662 18.4833 6.68328 18.575 6.39995 18.575C6.11662 18.575 5.88328 18.4833 5.69995 18.3C5.51662 18.1167 5.42495 17.8833 5.42495 17.6C5.42495 17.3167 5.51662 17.0833 5.69995 16.9L10.6 12Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
        {isOpen2 && (
          <div className="hc">
            Experience seamless care without the hassle of waiting in long lines
            for an appointment. Book with us for a healthier lifestyle.
          </div>
        )}
      </div>
      <div className="drop-down">
        <div className="drop">
          <div className="d-1">
            <img src={img12} alt="Image 1" />
          </div>
          <div className="d2 c1-1-2">Transparency</div>
          <div className="d3" onClick={() => setIsOpen3(!isOpen3)}>
            {isOpen3 === false ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_507"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_507)">
                    <path d="M12 15L7 10L17 10L12 15Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_517"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="24"
                      width="24"
                      height="24"
                      transform="rotate(90 24 0)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1_517)">
                    <path
                      d="M10.6 12L5.69995 7.09999C5.51662 6.91665 5.42495 6.68332 5.42495 6.39999C5.42495 6.11665 5.51662 5.88332 5.69995 5.69999C5.88328 5.51665 6.11662 5.42499 6.39995 5.42499C6.68328 5.42499 6.91662 5.51665 7.09995 5.69999L12 10.6L16.9 5.69999C17.0833 5.51665 17.3166 5.42499 17.6 5.42499C17.8833 5.42499 18.1166 5.51665 18.3 5.69999C18.4833 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4833 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4833 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4833 18.1167 18.3 18.3C18.1166 18.4833 17.8833 18.575 17.6 18.575C17.3166 18.575 17.0833 18.4833 16.9 18.3L12 13.4L7.09995 18.3C6.91662 18.4833 6.68328 18.575 6.39995 18.575C6.11662 18.575 5.88328 18.4833 5.69995 18.3C5.51662 18.1167 5.42495 17.8833 5.42495 17.6C5.42495 17.3167 5.51662 17.0833 5.69995 16.9L10.6 12Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
        {isOpen3 && (
          <div className="hc">
            Enjoy hassle free medical assistance with our transparent approach.
            We prioritize transparency for your smooth medical journey.
          </div>
        )}
      </div>
    </>
  );
};

export default Why;
