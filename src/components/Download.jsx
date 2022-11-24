import { PrimaryBtn } from "./styled/Button";
import Appstore from "../assets/images/appstore.png";
import Playstore from "../assets/images/playstore.png";

const Download = () => {
  return (
    <div className="download-links">
      <h2>Download here</h2>
      <PrimaryBtn fs={"var(--fs-400)"} icon={Appstore} text="Get on Appstore" />
      <PrimaryBtn
        fs={"var(--fs-400)"}
        icon={Playstore}
        text="Get on Playstore"
      />
    </div>
  );
};

export default Download;
