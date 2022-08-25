import { PrimaryBtn } from "./styled/Button";
import Appstore from "../assets/images/appstore.png";
import Playstore from "../assets/images/playstore.png";

const Download = () => {
  return (
    <div className="download-links">
      <h2>Download here</h2>
      <PrimaryBtn icon={Appstore} text="Get on Appstore" />
      <PrimaryBtn icon={Playstore} text="Get on Playstore" />
    </div>
  );
};

export default Download;
