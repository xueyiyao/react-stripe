import "./App.css";
import { useState } from "react";
import StripeContainer from "./components/StripeContainer";
import meme from "./assets/soph_winnie.jpeg";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Buy a Meme!</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3>
          <img src={meme} alt="Meme" />
          <button onClick={() => setShowItem(true)}>Purchase Meme</button>
        </>
      )}
    </div>
  );
}

export default App;
