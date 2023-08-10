import img3 from "./person.svg";
import img4 from "./Call.svg";
import img5 from "./distance.svg";
import "./styles.css";
const form = () => {
  return (
    <form className="form1">
      <div>Fill in the details to get a call.</div>
      <div className="c1">
        <img src={img3} alt="Image 1" />
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Full Name"
          style={{
            height: "30px",
            width: "299px",
            backgroundColor: "#E3E3E3",
            color: "#E3E3E3",
            padding: "2px 10px",
            outline: "none",
            border: "none"
          }}
        />
      </div>
      <div className="c1">
        <img src={img4} alt="Image 1" />
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Phone Number"
          style={{
            height: "30px",
            width: "299px",
            backgroundColor: "#E3E3E3",
            color: "#E3E3E3",
            padding: "2px 10px",
            outline: "none",
            border: "none"
          }}
        />
      </div>
      <div className="c1">
        <img src={img5} alt="Image 1" />
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Location"
          style={{
            height: "30px",
            width: "299px",
            backgroundColor: "#E3E3E3",
            color: "#E3E3E3",
            padding: "2px 10px",
            outline: "none",
            border: "none"
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
          By continuing, you agree to our T&C and privacy policy
        </span>
      </div>
      <button className="btn3">Proceed</button>
    </form>
  );
};

export default form;
