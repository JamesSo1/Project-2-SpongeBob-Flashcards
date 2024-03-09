import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

const cardSet = [
  {
    info: ["What is the name of SpongeBob's pet snail?", "Gary"],
    imgSrc:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ac6fb6-2fa3-4dfb-8250-2e634f94f40e/dg9dmon-6ffad406-ad7e-4594-bb0f-076eb080ef3d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwYWM2ZmI2LTJmYTMtNGRmYi04MjUwLTJlNjM0Zjk0ZjQwZVwvZGc5ZG1vbi02ZmZhZDQwNi1hZDdlLTQ1OTQtYmIwZi0wNzZlYjA4MGVmM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y1e9NCknlk_deKYjTkbWX_TgP0i8WeF2UArIofsDgk4",
  },
  {
    info: [
      "What is the name of the restaurant where SpongeBob works?",
      "The Krusty Krab",
    ],
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Krusty_Krab.png/1280px-The_Krusty_Krab.png",
  },
  {
    info: ["What instrument does Squidward play?", "The clarinet"],
    imgSrc:
      "https://i.pinimg.com/originals/ee/13/bb/ee13bb3499db70af21dfc3d119b6eb9c.jpg",
  },
  {
    info: ["Who is SpongeBob's best friend and neighbor?", "Patrick Star"],
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png",
  },
  {
    info: ["What is the name of Mr. Krabs' daughter?", "Pearl"],
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Pearl_the_Whale.svg/640px-Pearl_the_Whale.svg.png",
  },
  {
    info: ["What is the town where SpongeBob lives called?", "Bikini Bottom"],
    imgSrc:
      "https://imgix.bustle.com/fatherly/2018/06/bikini-bottom.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
  },
  {
    info: ["What is the name of SpongeBob's driving instructor?", "Mrs. Puff"],
    imgSrc: "https://i.ebayimg.com/images/g/RQ0AAOSwUwReio-V/s-l1600.jpg",
  },
  {
    info: [
      "What is the name of the fast food restaurant owned by Plankton?",
      "The Chum Bucket",
    ],
    imgSrc: "https://i1.sndcdn.com/artworks-000540368046-8nn1wy-t500x500.jpg",
  },
];
function App() {
  const [card, setCard] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [state, setState] = useState(0);
  const updateState = () => setState((state + 1) % 2);
  const resetState = () => setState(0);
  const updateCard = () =>
    setCard(
      (card + Math.floor(Math.random() * (cardSet.length - 1)) + 1) %
        cardSet.length
    );

  const updateRightCount = () => setRightCount(rightCount + 1);

  const updateWrongCount = () => setWrongCount(wrongCount + 1);

  return (
    <>
      <Title
        className="title"
        deckSize={cardSet.length}
        wrongCount={wrongCount}
        rightCount={rightCount}
      />

      {/* Card */}
      <div onClick={updateState} className="card">
        <p>{state == 0 ? cardSet[card].info[0] : cardSet[card].info[1]}</p>
        {state == 1 && <img src={cardSet[card].imgSrc} alt="Card Image" />}
      </div>

      {/* Wrong and Right Buttons */}
      <div className="btn-div">
        <button
          className="wrong-btn"
          onClick={() => {
            updateCard();
            updateWrongCount();
            resetState();
          }}
        >
          Wrong
        </button>
        <button
          className="right-btn"
          onClick={() => {
            updateCard();
            updateRightCount();
            resetState();
          }}
        >
          Right
        </button>
      </div>
    </>
  );
}

export default App;
