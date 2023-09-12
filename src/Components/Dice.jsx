const Dice = ({ value, handleHoldDice, styles }) => {
  return (
    <div
      onClick={handleHoldDice}
      className={`border py-4 px-8 max-sm:py-2 mt-4 max-sm:px-5 rounded-xl shadow-md font-montserrat cursor-pointer ${styles} `}
    >
      <h1 className=" font-black text-4xl ">{value}</h1>
    </div>
  );
};

export default Dice;
