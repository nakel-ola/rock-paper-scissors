import React, { useState } from "react";
import styled from "styled-components";
import { Setting } from "../App";
import Popup from "./Popup";
import Tooltip from "./Tooltip";

const Footer = ({ setting, setSetting }: { setting: Setting, setSetting(value: Setting): void}) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <Container>
      <button onClick={() => setShow(true)}>Board</button>
      <button onClick={() => setOpen(true)}>Rules</button>
      {open && <Popup setOpen={setOpen} setting={setting}/>}
      {show && <Tooltip setShow={setShow} setting={setting} setSetting={setSetting}/>}
    </Container>
  );
};

const Container = styled("footer")({
  // position: "fixed",
  // bottom: "10px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 30px",
  "> button": {
    backgroundColor: "transparent",
    border: "2px solid #fff",
    padding: "5px",
    width: "100px",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#fff",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },
});

export default Footer;
