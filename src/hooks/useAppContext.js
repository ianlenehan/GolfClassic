import { useContext } from "react";
import AppContext from "../utils/AppContext";

const useAppContext = () => {
  const { authUser, currentUser, players, emoji, setAppState } = useContext(
    AppContext
  );

  return { authUser, currentUser, players, emoji, setAppState };
};

export default useAppContext;
