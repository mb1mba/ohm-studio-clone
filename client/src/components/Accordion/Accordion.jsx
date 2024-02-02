import AccordionContext from "./AccordionContext";

const Accordion = ({ children }) => {
  return (
    <AccordionContext>
      <div className="md:hidden">{children}</div>
    </AccordionContext>
  );
};

export default Accordion;
