import styled from "styled-components";
import { cardName, cards, Result, Selected, Setting } from "../App";
import pentagon from "../assets/images/bg-pentagon.svg";
import triangle from "../assets/images/bg-triangle.svg";
import lizard from "../assets/images/icon-lizard.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import useLocalStorage from "../hooks/useLocalStorage";

type CircleProps = {
  color1: string;
  color2: string;
  small?: boolean;
  big?: boolean;
};
type ReelFlexProps = {
  short?: boolean;
  up?: boolean;
  triangle?: boolean;
};
const num = (max = 4) => Math.floor(Math.random() * (max - 0 + 1)) + 0;

const PickBoard = ({
  setting,
  setSelected,
  setScore,
  score
}: {
  setting: Setting;
  score: number;
  setSelected(value: Selected): void;
  setScore(value: number): void;
}) => {
  const handleSelect = (value: cardName, max?: number) => {

    const houseValue = num(max);
    const result = getResult(value, cards[houseValue].name);
    setSelected({
      me: value,
      house: cards[houseValue].name,
      result
    });

    if(result === "YOU WIN") {
      const newScore = score + 2;
      setScore(newScore)
    }

    if(result === "YOU LOSE") {
      const newScore = score - 2 <= 0 ? 0 : score -2;
      setScore(newScore)
    }
  };

  const getResult = (me: cardName, house: cardName): Result => {
    if(house === me) {
      return "IT'S A DRAW";
    }else if(house === "scissors" && me === "paper") {
      return "YOU LOSE";
    }else if(house === "paper" && me === "rock") {
      return "YOU LOSE";
    }else if(house === "rock" && me === "scissors") {
      return "YOU LOSE";
    }else if(house === "rock" && me === "lizard") {
      return "YOU LOSE";
    }else if(house === "lizard" && me === "spock"){
      return "YOU LOSE";
    }else if(house === "spock" && me === "scissors"){
      return "YOU LOSE";
    }else if(house === "rock" && me === "scissors") {
      return "YOU LOSE";
    }else if(house === "lizard" && me === "paper") {
      return "YOU LOSE";
    }else if(house === "spock" && me === "rock"){
      return "YOU LOSE";
    }else if(house === "scissors" && me === "lizard"){
      return "YOU LOSE";
    }else if(house === "paper" && me === "spock"){
      return "YOU LOSE";
    }else {
      return "YOU WIN"
    }
  };

  return (
    <Wrapper>
      {setting.board === "triangle" ? (
        <TriangleBoard handleSelect={handleSelect} />
      ) : (
        <PentagonBoard handleSelect={handleSelect} />
      )}
    </Wrapper>
  );
};

const TriangleBoard = ({
  handleSelect,
}: {
  handleSelect(value: cardName, max: number): void;
}) => {
  return (
    <Container>
      <Triangle>
        <img src={triangle} alt="" />
      </Triangle>
      <Content>
        <ReelFlex up triangle>
          <Circle
            color1="hsl(230, 89%, 62%)"
            color2="hsl(230, 89%, 65%)"
            onClick={() => handleSelect("paper", 2)}
          >
            <div>
              <img src={paper} alt="" />
            </div>
          </Circle>
          <Circle
            color1="hsl(39, 89%, 49%)"
            color2="hsl(40, 84%, 53%)"
            onClick={() => handleSelect("scissors", 2)}
          >
            <div>
              <img src={scissors} alt="" />
            </div>
          </Circle>
        </ReelFlex>
        <Circle
          color1="hsl(349, 71%, 52%)"
          color2="hsl(349, 70%, 56%)"
          onClick={() => handleSelect("rock", 2)}
        >
          <div>
            <img src={rock} alt="" />
          </div>
        </Circle>
      </Content>
    </Container>
  );
};

const PentagonBoard = ({
  handleSelect,
}: {
  handleSelect(value: cardName): void;
}) => {
  return (
    <Container>
      <Triangle>
        <img src={pentagon} alt="" />
      </Triangle>

      <Content>
        <Circle
          color1="hsl(39, 89%, 49%)"
          color2="hsl(40, 84%, 53%)"
          small
          onClick={() => handleSelect("scissors")}
        >
          <div>
            <img src={scissors} alt="" />
          </div>
        </Circle>

        <ReelFlex2>
          <Circle
            color1="hsl(189, 59%, 53%)"
            color2="hsl(189, 58%, 57%)"
            small
            onClick={() => handleSelect("spock")}
          >
            <div>
              <img src={spock} alt="" />
            </div>
          </Circle>
          <Circle
            color1="hsl(230, 89%, 62%)"
            color2="hsl(230, 89%, 65%)"
            small
            onClick={() => handleSelect("paper")}
          >
            <div>
              <img src={paper} alt="" />
            </div>
          </Circle>
        </ReelFlex2>
        <ReelFlex short>
          <Circle
            color1="hsl(261, 73%, 60%)"
            color2="hsl(261, 72%, 63%)"
            small
            onClick={() => handleSelect("lizard")}
          >
            <div>
              <img src={lizard} alt="" />
            </div>
          </Circle>
          <Circle
            color1="hsl(349, 71%, 52%)"
            color2="hsl(349, 70%, 56%)"
            small
            onClick={() => handleSelect("rock")}
          >
            <div>
              <img src={rock} alt="" />
            </div>
          </Circle>
        </ReelFlex>
      </Content>
    </Container>
  );
};

const Wrapper = styled("div")({
  display: "grid",
  placeItems: "center",
  marginTop: "30px",
  "@media only screen and (max-width: 768px)": {
    height: "60vh",
  },
});

const Container = styled("div")({
  position: "relative",
  height: "350px",
  display: "grid",
  placeItems: "center",
});

const Triangle = styled("div")({
  position: "relative",
  width: "350px",
  height: "350px",
  "> img ": {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  "@media only screen and (max-width: 768px)": {
    width: "250px",
    height: "250px",
  },
});

const Content = styled("div")({
  position: "absolute",
  top: "-25px",
  height: "400px",
  display: "grid",
  placeItems: "center",
  "@media only screen and (max-width: 768px)": {
    height: "350px",
  },
});

const ReelFlex = styled("div")<ReelFlexProps>(({ short, up }) => ({
  width: short ? "300px" : "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: up ? "-25px" : "",
  "@media only screen and (max-width: 768px)": {
    width: short ? "280px" : "310px",
    marginTop: up && !triangle ? "-35px" : up && triangle ? "-15px" : "",
  },
}));

const ReelFlex2 = styled("div")<ReelFlexProps>(({ short, up }) => ({
  width: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "-25px",
  "@media only screen and (max-width: 768px)": {
    width: "310px",
    marginTop: "-25px",
  },
}));

export const Circle = styled("div")<CircleProps>(
  ({ color1, color2, small, big }) => ({
    position: "relative",
    height: small ? "110px" : big ? "180px" : "130px",
    width: small ? "110px" : big ? "180px" : "130px",
    borderRadius: "50%",
    background: `radial-gradient(circle at top,${color1}, ${color2})`,
    backgroundRepeat: "no-repeat",
    boxShadow: "inset 0px -8px 0px rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
    "> div": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      height: "70%",
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "inset 0px 8px 0px rgba(0, 0, 0, 0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "> img": {
        height: small ? "50px" : big ? "70px" : "",
        width: small ? "50px" : big ? "70px" : "",
        objectFit: "contain",
      },
    },
    "@media only screen and (max-width: 768px)": {
      height: "100px",
      width: "100px",
      "> div > img": {
        height: "40px",
        width: "40px",
      },
    },
  })
);

export default PickBoard;
