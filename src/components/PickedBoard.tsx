import React from "react";
import styled from "styled-components";
import { Card, cards, Result, Selected } from "../App";
import useWindowSize from "../hooks/useWindowSize";
import { Circle } from "./GameBoard";

const PickedBoard = ({ selected,setSelected }: { selected: Selected, setSelected(value: Selected): void}) => {
  const screen = useWindowSize();

  const me: Card = cards.find((card: Card) => card.name === selected.me)!;
  const house: Card = cards.find((card: Card) => card.name === selected.house)!;

  const handlePlayAgain = () => {
    setSelected({house: null, me: null,result: null});
  }

  const win = selected.result && selected.result === "YOU LOSE" ? false : selected.result === "YOU WIN" ? true : selected.result === "IT'S A DRAW" && null;

  return (
    <Wrapper>
      <Container>
        <Reel>
          <span>
            <p>You Picked</p>
          </span>

          <div>
            <Circle color1={me.color1} color2={me.color2} big>
              <div>
                <img src={me.image} alt="" />
              </div>
            </Circle>

            {win === true && (
              <>
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>
              </>
            )}
          </div>
        </Reel>

        {screen.width! > 768 && <WinCard handlePlayAgain={handlePlayAgain} result={selected.result!}/>}

        <Reel>
          <span>
            <p>The House Picked</p>
          </span>
          <div>
            <Circle color1={house.color1} color2={house.color2} big>
              <div>
                <img src={house.image} alt="" />
              </div>
            </Circle>
            {win === false && (
              <>
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>
              </>
            )}
          </div>
        </Reel>
      </Container>

      {screen.width! < 768 && <WinCard handlePlayAgain={handlePlayAgain} result={selected.result!}/>}
    </Wrapper>
  );
};

const WinCard = ({ handlePlayAgain,result }: { handlePlayAgain(): void,result: Result}) => {
  return (
    <WinContainer>
      <span>
        <p>{result}</p>
      </span>
      <button onClick={handlePlayAgain}>PLAY AGAIN</button>
    </WinContainer>
  );
};

// styles

const Wrapper = styled("div")({
  display: "grid",
  placeItems: "center",
  width: "100%",
  marginTop: "30px",
  "@media only screen and (max-width: 768px)": {
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "30px",
  },
});

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "60%",
  height: "350px",
  "@media only screen and (max-width: 768px)": {
    height: "fit-content",
    width: "80%",
  },
});

const Reel = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
  height: "80%",
  "> span": {
    padding: "20px 0",
    zIndex: "1",
    "> p": {
      color: "#fff",
      fontSize: "1.5rem",
    },
  },
  "> div": {
    position: "relative",
    "> span": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "100%",
    },
    "> .span-1": {
      height: "270px",
      width: "270px",
      zIndex: "-100",
      background: "rgba(255, 255, 255, 0.03)",
    },
    "> .span-2": {
      height: "360px",
      width: "360px",
      zIndex: "-100",
      background: "rgba(255, 255, 255, 0.03)",
    },
    "> .span-3": {
      height: "450px",
      width: "450px",
      zIndex: "-100",
      background: "rgba(255, 255, 255, 0.03)",
    },
  },
  "@media only screen and (max-width: 768px)": {
    flexDirection: "column-reverse",
    "> span": {
      padding: "10px 0",
      "> p": {
        fontSize: "1rem"
      }
    },
    "> div": {
      "> .span-1": {
        height: "150px",
        width: "150px",
      },
      "> .span-2": {
        height: "200px",
        width: "200px",
      },
      "> .span-3": {
        height: "250px",
        width: "250px",
      },
    }
  },
});

const WinContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
  marginTop: "60px",
  "> span": {
    padding: "20px 0",
    "> p": {
      color: "#fff",
      fontSize: "2.5rem",
      whiteSpace: "nowrap",
    },
  },
  "> button": {
    width: "150px",
    height: "40px",
    borderRadius: "10px",
    border: 0,
    color: "hsl(229, 25%, 31%)",
    boxShadow: `rgba(0, 0, 0, 0.20) 3px 3px 6px 1px, rgba(0, 0, 0, 0.22) 3px 3px 6px 0px`,
    transition: "all 0.3s ease-in-out",
    ":hover": {
      transform: "scale(1.05)",
    },
    ":active": {
      transform: "scale(0.95)",
    },
  },

  "@media only screen and (max-width: 768px)": {
    "> span": {
      "> p": {
        fontSize: "2.5rem"
      }
    }
  }
});
export default PickedBoard;
