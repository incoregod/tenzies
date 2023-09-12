import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <Link
      to={"/"}
      className="max-sm:text-xl py-4 px-6 bg-orange-700 rounded-lg text-white font-black tracking-widest text-3xl mt-2 max-sm:mt-0 max-sm:px-2 max-sm:py-2"
    >
      Back
    </Link>
  );
};

export default BackBtn;
