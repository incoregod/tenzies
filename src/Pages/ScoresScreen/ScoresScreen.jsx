import Footer from "../Footer/Footer";
import Header from "../../Components/Header";
import Medal from "../../Components/Medal";
import BackBtn from "../../Components/BackBtn";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

const ScoresScreen = () => {
  const { highScores } = useContext(UserContext);

  return (
    <div className="min-h-screen min-w-screen bg-white flex items-center justify-start flex-col  p-5 font-montserrat gap-5 relative">
      <Header
        text={"HighScores"}
        divStyles="flex items-center justify-center flex-col gap-5"
        textStyles={"text-6xl font-black max-sm:text-5xl "}
      />
      <Medal
        styles={"text-yellow-400 text-6xl max-sm:text-5xl "}
        scores={highScores}
      />
      <BackBtn />
      <Footer />
    </div>
  );
};

export default ScoresScreen;
