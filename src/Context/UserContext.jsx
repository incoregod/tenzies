import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [highScores, setHighScores] = useState(() => {
    const storedHighScores = localStorage.getItem("highscores");

    return storedHighScores
      ? JSON.parse(storedHighScores)
      : {
          player: "",
          minutes: "",
          seconds: "",
          clicks: "",
        };
  });
  //   localStorage.clear("highscores");

  function handleHighScore() {
    localStorage.setItem("highscores", JSON.stringify(highScores));
  }
  const values = { handleHighScore, highScores, setHighScores };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider, UserContext };
