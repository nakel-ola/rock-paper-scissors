import React from "react";
import styled from "styled-components";
import { Setting } from "../App";
import close from "../assets/images/icon-close.svg";
import pentagon from "../assets/images/image-rules-bonus.svg";
import triangle from "../assets/images/image-rules.svg";

const Popup = ({
  setOpen,
  setting,
}: {
  setOpen(value: boolean): void;
  setting: Setting;
}) => {
  return (
    <Container>
      <Card>
        <header>
          <p>Rules</p>
          <div onClick={() => setOpen(false)}>
            <img src={close} alt="" />
          </div>
        </header>

        <div>
          <img
            src={setting.board === "triangle" ? triangle : pentagon}
            alt=""
          />
        </div>
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
  "> header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    "> p": {
      fontSize: "2rem",
    },
  },
  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    "> img": {
      width: "300px",
      height: "300px",
      objectFit: "contain",
    },
  },
});
export default Popup;
