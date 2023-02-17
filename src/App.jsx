import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 55 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
