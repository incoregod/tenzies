import { useState, useEffect } from "react";
import LoadingScreen from "./Pages/LoadingScreen/LoadingScreen";
import AppLoading from "./Pages/AppLoading/AppLoading";
import { useRoutes, useNavigate } from "react-router-dom";
import GameScreen from "./Pages/GameScreen/GameScreen";
import ScoresScreen from "./Pages/ScoresScreen/ScoresScreen";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);

  const navigate = useNavigate();

  const element = useRoutes([
    {
      path: "/",
      element: <LoadingScreen />,
    },
    {
      path: "/game",
      element: <GameScreen />,
    },
    {
      path: "/scores",
      element: <ScoresScreen />,
    },
  ]);

  useEffect(() => {
    navigate("/");
    setTimeout(() => {
      setHasLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      {!hasLoaded ? (
        <div className="center">
          <AppLoading />
        </div>
      ) : (
        element
      )}
    </>
  );
}

export default App;
