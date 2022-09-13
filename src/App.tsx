import { useState } from "react";
import styled from "styled-components";
import lizard from "./assets/images/icon-lizard.svg";
import paper from "./assets/images/icon-paper.svg";
import rock from "./assets/images/icon-rock.svg";
import scissors from "./assets/images/icon-scissors.svg";
import spock from "./assets/images/icon-spock.svg";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import PickedBoard from "./components/PickedBoard";
import ScoreBoard from "./components/ScoreBoard";

export interface Setting {
  board: "triangle" | "pentagon";
}

export type cardName = "lizard" | "paper" | "rock" | "scissors" | "spock";
export type Result = "YOU WIN" | "YOU LOSE" | "IT'S A DRAW"

export interface Selected {
  me: cardName | null;
  house: cardName | null;
  result: Result | null
}

export interface Card {
  name: cardName;
  image: string;
  color1: string;
  color2: string;
}

export const cards: Card[] = [
  {
    name: "paper",
    image: paper,
    color1: "hsl(230, 89%, 62%)",
    color2: "hsl(230, 89%, 65%)",
  },
  {
    name: "rock",
    image: rock,
    color1: "hsl(349, 71%, 52%)",
    color2: "hsl(349, 70%, 56%)",
  },
  {
    name: "scissors",
    image: scissors,
    color1: "hsl(39, 89%, 49%)",
    color2: "hsl(40, 84%, 53%)",
  },
  {
    name: "lizard",
    image: lizard,
    color1: "hsl(261, 73%, 60%)",
    color2: "hsl(261, 72%, 63%)",
  },
  {
    name: "spock",
    image: spock,
    color1: "hsl(189, 59%, 53%)",
    color2: "hsl(189, 58%, 57%)",
  },
];

function App() {
  const [selected, setSelected] = useState<Selected>({
    me: null,
    house: null,
    result: null
  });
  const [score,setScore] = useState<number>(0);

  const [setting, setSetting] = useState<Setting>({
    board: "triangle",
  });

  return (
    <Container>
      <ScoreBoard setting={setting} score={score}/>
      {selected.house && selected.me ? (
        <PickedBoard selected={selected} setSelected={setSelected}/>
      ) : (
        <GameBoard setting={setting} setSelected={setSelected} setScore={setScore} score={score}/>
      )}

      <Footer setting={setting} setSetting={setSetting} />
    </Container>
  );
}

const Container = styled("div")({
  height: "100vh",
  display: "grid",
  placeItems: "center",
  overflow: "hidden"
});
export default App;
