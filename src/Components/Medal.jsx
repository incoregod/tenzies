import { FaMedal } from "react-icons/fa";

const Medal = ({ styles, scores }) => {
  return (
    <div className=" flex items-center justify-center gap-5">
      <FaMedal className={styles} />
      <div className="flex flex-col items-start  gap-2">
        <h1 className="text-md max-sm:text-xs">Name : {scores.player}</h1>
        <h1 className="text-md max-sm:text-xs">
          Timer : {scores.minutes} : {scores.seconds}
        </h1>
        <h1 className="text-md max-sm:text-xs">Clicks : {scores.clicks}</h1>
      </div>
    </div>
  );
};

export default Medal;
