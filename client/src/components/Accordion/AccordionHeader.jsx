import { Drawline } from "../Shared";
import { useToggleContext } from "./AccordionContext";

const AccordionHeader = ({ title, index, children }) => {
  const { setToggle } = useToggleContext();

  return (
    <>
      <div
        onClick={() => setToggle(index)}
        className="flex justify-between items-center   py-5 cursor-pointer"
      >
        <p className=" font-helvetica text-lg ">{title}</p>
        <svg
          fill="none"
          height="7"
          viewBox="0 0 10 7"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L9 1" strokeWidth="1.5" stroke="#111111"></path>
        </svg>
      </div>
    </>
  );
};

export default AccordionHeader;
