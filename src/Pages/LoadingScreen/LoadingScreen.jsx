import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../../Components/Header";
import RegisterPlayer from "../../Components/RegisterPlayer";
import { useState } from "react";

const LoadingScreen = () => {
  const [playerName, setPlayerName] = useState(() =>
    localStorage.getItem("playerName")
  );
  const [tempName, setTempName] = useState("");
  function handlePlayerRegister() {
    setPlayerName(tempName);
    localStorage.playerName = tempName;
  }

  function handleChange(e) {
    const { value } = e.target;
    setTempName(value);
  }

  function changeNick() {
    localStorage.clear("playerName");
    setTempName("");
    setPlayerName("");
  }

  return (
    <div className="min-h-screen min-w-screen bg-white flex items-center justify-start flex-col font-montserrat gap-5 relative ">
      <Header
        text={"TENZIES"}
        divStyles={
          "flex items-center flex-col justify-center max-md:mt-0 gap-5"
        }
        textStyles={"text-8xl font-black max-sm:text-7xl"}
      />
      <div className="flex items-center flex-col justify-center gap-5 ">
        <Link
          to={"/game"}
          className="py-3 px-6 bg-slate-600 rounded-lg text-white font-black tracking-widest text-3xl max-sm:text-xl mt-10 max-sm:mt-5"
        >
          Start Game
        </Link>
        <Link
          to={"/scores"}
          className="py-3 px-6 bg-orange-700 rounded-lg text-white font-black tracking-widest text-3xl max-sm:text-xl"
        >
          HighScores
        </Link>
        {!playerName ? (
          <RegisterPlayer
            registerFunc={handlePlayerRegister}
            handleChange={handleChange}
          />
        ) : (
          <p>
            Welcome {playerName}{" "}
            <button
              onClick={changeNick}
              className="bg-slate-600 text-xs p-1 rounded-md text-white"
            >
              Logout
            </button>
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LoadingScreen;
