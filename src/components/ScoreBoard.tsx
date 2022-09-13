import styled from "styled-components";
import { Setting } from "../App";
import logopentagon from "../assets/images/logo-bonus.svg";
import logotriangle from "../assets/images/logo.svg";

const ScoreBoard = ({ setting,score }: { setting: Setting,score: number}) => {
  return (
    <Container>
      <Board>
        <Logo>
          <img
            src={setting.board === "triangle" ? logotriangle : logopentagon}
            alt=""
          />
        </Logo>

        <Score>
          <p>SCORE</p>
          <strong>{score}</strong>
        </Score>
      </Board>
    </Container>
  );
};

const Container = styled("div")({
  width: "100%",
  display: "grid",
  placeItems: "center",
});

const Board = styled("div")({
  width: "50%",
  height: "120px",
  border: "3px solid hsl(217, 16%, 45%)",
  borderRadius: "10px",
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "@media (max-width: 768px)": {
    width: "85%",
    height: "100px",
    marginTop: "20px",
    padding: "0 10px",
  },
});

const Logo = styled("div")({
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  "> img": {
    width: "100%",
    height: "100px",
    objectFit: "contain",
  },
  "@media (max-width: 768px)": {
    "> img": {
      width: "100%",
      height: "80px",
      objectFit: "contain",
    },
  },
});

const Score = styled("div")({
  width: "120px",
  height: "80%",
  backgroundColor: "#fff",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "> p": {
    color: "hsl(229, 64%, 46%)",
  },
  "> strong": {
    fontSize: "3rem",
    color: "hsl(217, 16%, 45%)",
  },
  "@media (max-width: 768px)": {
    width: "90px",
    height: "80%",
    "> p": {
      fontSize: "",
    },
    "> strong": {
      fontSize: "2rem",
    },
  },
});

export default ScoreBoard;
