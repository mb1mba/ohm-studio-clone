import React from "react";
import { useInView } from "react-intersection-observer";

const Footer = ({ setIsFooterInView }) => {
  const [ref, inView] = useInView();

  React.useEffect(() => {
    setIsFooterInView(inView);
  }, [inView, setIsFooterInView]);

  return (
    <footer ref={ref} id="footer" className="bg-[#e3e3e3]">
      Footer
    </footer>
  );
};
export default Footer;
