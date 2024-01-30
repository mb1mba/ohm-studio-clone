import { TextReveal } from "../Reveal";
import { Link } from "react-router-dom";
const MenuSection = ({ name, children, onClick }) => {
  return (
    <TextReveal width="100%">
      <div className="" onClick={onClick}>
        <div className="flex justify-between items-center">
          <h2 className=" text-[10vw]  font-helvetica ">{name}</h2>
          {name === "Shop" && <Link to="/products">See All</Link>}
        </div>
        {children}
      </div>
    </TextReveal>
  );
};

export default MenuSection;
