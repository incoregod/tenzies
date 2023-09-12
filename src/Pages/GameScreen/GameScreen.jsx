import Dice from "../../Components/Dice";
import Footer from "../Footer/Footer";
import Header from "../../Components/Header";
import BackBtn from "../../Components/BackBtn";
import { useEffect, useState, useContext } from "react";
import { nanoid } from "nanoid";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { UserContext } from "../../Context/UserContext";

const GameScreen = () => {
  const [dicesTable, setDicesTable] = useState(() => generateAllDices());
  const [gameFinished, setGameFinished] = useState(false);
  const { width, height } = useWindowSize();
  const [totalClicks, setTotalClicks] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const { handleHighScore, setHighScores } = useContext(UserContext);
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  useEffect(() => {
    const firstNum = dicesTable[0].value;
    const allHeld = dicesTable.every((dice) => dice.isHeld);
    const allSameNum = dicesTable.every((dice) => dice.value === firstNum);

    allHeld && allSameNum && handleGameFinish();
  }, [dicesTable]);

  function handleGameFinish() {
    setGameFinished(true);
    setHighScores((prevScores) => {
      const isMinTime = prevScores.minutes
        ? prevScores.minutes > minutes
        : minutes;
      const isSecMinTime = prevScores.seconds
        ? prevScores.seconds > seconds
        : seconds;
      const isTotalClickMin = prevScores.clicks
        ? prevScores.clicks > totalClicks
        : totalClicks;

      if (isMinTime || isSecMinTime || isTotalClickMin) {
        setIsNewHighScore(true);
      }
      return {
        player: localStorage.getItem("playerName"),
        minutes: isMinTime ? minutes : prevScores.minutes,
        seconds: isSecMinTime ? seconds : prevScores.seconds,
        clicks: isTotalClickMin ? totalClicks : prevScores.clicks,
      };
    });

    handleHighScore();
  }

  useEffect(() => {
    if (!gameFinished) {
      const intervalId = setInterval(() => {
        if (seconds < 59) {
          setSeconds((oldValue) => oldValue + 1);
        } else {
          setMinutes((oldValue) => oldValue + 1);
          setSeconds(0);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [gameFinished]);

  function generateNewDice() {
    const randomNum = Math.ceil(Math.random() * 6);
    return { id: nanoid(), value: randomNum, isHeld: false };
  }

  function generateAllDices() {
    const dicesArray = [];
    for (let i = 0; i < 12; i++) {
      dicesArray.push(generateNewDice());
    }
    return dicesArray;
  }

  function rollDices() {
    setDicesTable((prevTable) =>
      prevTable.map((dice) => {
        return dice.isHeld ? dice : generateNewDice();
      })
    );
    setTotalClicks((oldValue) => oldValue + 1);
  }

  function holdDice(id) {
    setDicesTable((prevTable) =>
      prevTable.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  function restartGame() {
    setGameFinished(false);
    setDicesTable(generateAllDices());
    setMinutes(0);
    setSeconds(0);
    setTotalClicks(0);
  }

  const dicesEl = dicesTable.map((dice) => {
    return (
      <Dice
        key={dice.id}
        value={dice.value}
        handleHoldDice={() => holdDice(dice.id)}
        styles={dice.isHeld ? "bg-green-400" : "bg-white"}
      />
    );
  });

  return (
    <div className="min-h-screen min-w-screen bg-white text-center p-5 font-montserrat gap-5 relative ">
      {isNewHighScore && (
        <div className="flex justify-center items-center">
          <p className="text-center bg-green-400 rounded-lg p-1 px-2">
            New highscore
          </p>
        </div>
      )}
      <Header
        text={!gameFinished ? "Good Luck" : "TENZIES !!"}
        divStyles="flex items-center justify-center flex-col gap-5"
        textStyles={"font-black text-3xl"}
      />

      <div className="flex justify-center items-center">
        <div className="grid  grid-cols-4 items-center justify-center gap-2  max-sm:grid-cols-3 ">
          {dicesEl}
        </div>
      </div>
      <p className="text-center mt-5 text-xs">
        Current Time : {minutes}.{seconds}
      </p>
      <p className="text-center mt-1 text-xs">Total Clicks : {totalClicks}</p>
      <div className="flex gap-5 justify-center items-center flex-col">
        <button
          onClick={!gameFinished ? rollDices : restartGame}
          className="py-4 px-6 bg-slate-600 rounded-lg text-white font-black tracking-widest text-3xl  mt-10 max-sm:mt-10 max-sm:text-xl"
        >
          {!gameFinished ? "Roll Dices" : "New Game"}
        </button>
        <BackBtn />
        <Footer />
      </div>
      {gameFinished && <Confetti width={width} height={height} />}
    </div>
  );
};

export default GameScreen;
