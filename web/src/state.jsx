import { createContext, useContext, useMemo, useState } from "react";
import { recommendedSeason } from "./data";

const AppState = createContext(null);

export function AppStateProvider({ children }) {
  const [repDone, setRepDone] = useState(false);
  const [checkInDone, setCheckInDone] = useState(false);
  const [resetPhrase, setResetPhrase] = useState("");
  const [checkIn, setCheckIn] = useState({
    energy: 3,
    confidence: 4,
    motivation: 3,
    pressure: 4,
    connection: 4,
    enjoyment: 3,
  });
  const [season, setSeason] = useState(recommendedSeason);
  const [selectedTopics, setSelectedTopics] = useState([
    "confidence",
    "communication",
    "pressure",
    "resilience",
    "selftalk",
    "identity",
  ]);

  const value = useMemo(
    () => ({
      repDone,
      setRepDone,
      checkInDone,
      setCheckInDone,
      resetPhrase,
      setResetPhrase,
      checkIn,
      setCheckIn,
      season,
      setSeason,
      selectedTopics,
      setSelectedTopics,
    }),
    [repDone, checkInDone, resetPhrase, checkIn, season, selectedTopics]
  );

  return <AppState.Provider value={value}>{children}</AppState.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppState);
  if (!ctx) throw new Error("useAppState must be used inside provider");
  return ctx;
}
