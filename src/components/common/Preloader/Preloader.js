import spin from "../../../assets/images/spin.gif";
import "boxicons";

let Preloader = (props) => {
   return (
      <div
         style={{
            width: "1000px",
            height: "700px",
            textAlign: "center",
         }}
      >
         <box-icon
            name="loader"
            animation="tada"
            style={{
               width: "100px",
               height: "100px",
               marginTop: "270px",
            }}
         ></box-icon>
      </div>
   );
};

export default Preloader;
