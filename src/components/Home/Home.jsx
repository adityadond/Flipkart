import React from "react";
import { styled, Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Banner from "./Banner";

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

function Home() {
  return (
    <>
      <NavBar />
      <Component>
      <Banner />
      </Component>
     
    </>
  );
}

export default Home;
