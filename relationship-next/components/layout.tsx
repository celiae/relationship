import { Container, Toolbar } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./app-bar";
import ScrollTop from "./scroll-top";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ResponsiveAppBar />
      <Toolbar id="back-to-top-anchor" />
      <Container>{children}</Container>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
