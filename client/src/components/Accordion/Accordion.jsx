import AccordionContext from "./AccordionContext";

const Accordion = ({ children }) => {
  return (
    <AccordionContext>
      <div className=" ">{children}</div>
    </AccordionContext>
  );
};

export default Accordion;
