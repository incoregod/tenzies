import logo from "../assets/logo.png";

const Header = ({ text, divStyles, textStyles }) => {
  return (
    <div className={divStyles}>
      <h1 className={textStyles}>{text}</h1>
      <img
        className="w-24 max-sm:mb-1  max-sm:w-16 "
        src={logo}
        alt="dice-logo"
      />
    </div>
  );
};

export default Header;
