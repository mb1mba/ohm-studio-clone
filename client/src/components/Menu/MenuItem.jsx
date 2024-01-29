const MenuItem = ({ children, type }) => {
  const styles = {
    shop: " bg-[#eee] font-favorit font-bold text-[10vw] px-5 py-1 uppercase",
    about: " font-helvetica  text-[10vw] px-5 ",
  };

  const style = styles[type];
  return <li className={style}>{children}</li>;
};

export default MenuItem;
