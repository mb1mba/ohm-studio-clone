import { TextReveal } from "../Reveal";

const MenuSection = ({ name, children, onClick }) => {
  return (
    <TextReveal width="100%">
      <div className="" onClick={onClick}>
        <div className="flex justify-between items-center">
          <h2 className=" text-[10vw]  font-helvetica ">{name}</h2>
          {name === "Shop" && <p>See All</p>}
        </div>
        {children}
      </div>
    </TextReveal>
  );
};

export default MenuSection;
