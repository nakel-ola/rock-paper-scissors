import React, { useRef } from "react";
import styled from "styled-components";
import { Setting } from "../App";
import checkmark from "../assets/images/checkmark-done-outline.svg";
import close from "../assets/images/icon-close.svg";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Tooltip = ({
  setShow,
  setting,
  setSetting,
}: {
  setShow(value: boolean): void;
  setting: Setting;
  setSetting(value: Setting): void;
}) => {

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setShow(false));
  return (
    <Container>
      <Card ref={ref}>
        <header>
          <p>Border</p>
          <div onClick={() => setShow(false)}>
            <img src={close} alt="" />
          </div>
        </header>

        <Reels>
          <div
            onClick={() => {
              setSetting({ ...setting, board: "triangle" });
              setShow(false);
            }}
          >
            <p>Triange</p>
            {setting.board === "triangle" && (
              <div>
                <img src={checkmark} alt="" />
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setSetting({ ...setting, board: "pentagon" });
              setShow(false)
            }}
          >
            <p>Pentagon</p>
            {setting.board === "pentagon" && (
              <div>
                <img src={checkmark} alt="" />
              </div>
            )}
          </div>
        </Reels>
      </Card>
    </Container>
  );
};

const Container = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.75)",
  zIndex: "1",
  display: "grid",
  placeItems: "center",
});

const Card = styled("div")({
  width: "350px",
  borderRadius: "10px",
  backgroundColor: "#fff",
  overflow: "hidden",
  "> header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    "> p": {
      fontSize: "2rem",
    },
  },
});

const Reels = styled("div")({
  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    transition: "all 0.3s ease-out",
    "> p": {
      fontSize: "1.2rem",
    },
    "> div": {
      width: "30px",
      height: "30px",
      "> img": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        color: "green",
      },
    },
    ":hover": {
      backgroundColor: "whitesmoke"
    }
  },
});

export default Tooltip;
