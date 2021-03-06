import { useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level: 1, levelUp }}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  );
}

export default MyApp;
