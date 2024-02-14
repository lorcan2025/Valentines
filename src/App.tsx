import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [noPressed, setNoPressed] = useState(false);
  const [noPressed2, setNoPressed2] = useState(false);
  const [noPressed3, setNoPressed3] = useState(false);
  const [noPressed4, setNoPressed4] = useState(false);
  const [noPressed5, setNoPressed5] = useState(false);

  const handleNoClick = () => {
    if (noPressed === false) {
      setNoPressed(true);
      setNoCount(noCount + 1);
      return;
    }
    if (noPressed2 === false) {
      setNoPressed2(true);
      setNoCount(noCount + 1);
      return;
    }
    if (noPressed3 === false) {
      setNoPressed3(true);
      setNoCount(noCount + 1);
      return;
    }
    if (noPressed4 === false) {
      setNoPressed4(true);
      setNoCount(noCount + 1);
      return;
    }
    if (noPressed5 === false) {
      setNoPressed5(true);
      setNoCount(noCount + 1);
      return;
    }
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "What have I done to you?",
      "Sharam Karle thodi",
      "Click if u r gay",
      "DO NOT PRESS",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">
              Hehehe I love you baby. Happy Valentine's Day!
            </div>
            <img
              src="https://media1.tenor.com/m/JWc2xV5Y1QcAAAAC/dance.gif"
              width={250}
              height={250}
            />
          </>
        ) : noPressed5 ? (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/VM3xxTzjSJAAAAAC/bear-fart-fart.gif"
            />
            <h1 className="text-container">What u gon do now?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
            </div>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/mW3z-dMT-sAAAAAC/dudu-and-bubu.gif"
            />
          </>
        ) : noPressed4 ? (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/34zuTUW6blQAAAAC/cat-kitty.gif"
            />
            <h1 className="text-container">..... Last warning </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "WTF" : getNoButtonText()}
              </button>
            </div>
          </>
        ) : noPressed3 ? (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media.tenor.com/6CeMWEhB-4MAAAAi/mimibubu.gif"
            />
            <h1 className="text-container">Now you making me angry</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "WTF" : getNoButtonText()}
              </button>
            </div>
          </>
        ) : noPressed2 ? (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/3bSXpL7qMQAAAAAC/dudu-cry-hay-nako-reika.gif"
            />
            <h4 className="text-container">
              THIS IS NOT A JOKE. MAAN JAA TEESTA.
            </h4>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "WTF" : getNoButtonText()}
              </button>
            </div>
          </>
        ) : noPressed ? (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/VOGprX5j0W8AAAAC/cat.gif"
            />
            <h1 className="text-container">HAWWWWW Please say Yes</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "WTF" : getNoButtonText()}
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">
              Henlo Teesta, Will you be my Valentine?
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "WTF" : getNoButtonText()}
              </button>
            </div>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media.tenor.com/zR-aeXzmOoYAAAAi/mimibubu.gif"
            />
          </>
        )}
      </div>
    </div>
  );
}
