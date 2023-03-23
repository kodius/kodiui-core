import "@kodiui/ui/style.css";
import { Box, FlexBox, Animation } from "@kodiui/ui";

import { theme } from "./contract.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(true);

  return (
    <div className={theme}>
      <div>shoud animate: {state ? "yes" : "no"}</div>
      <button onClick={() => setState(!state)}>animate</button>
      <FlexBox>
        <Animation animation={"fade-in"}>
          <Box>fade in</Box>
          <Animation animation="bounce" shouldAnimate={state}>
            <Box
              borderColor={"red-10"}
              boxShadow={"shadow-3"}
              borderRadius={"sm"}
            >
              box
            </Box>
          </Animation>
        </Animation>
      </FlexBox>
    </div>
  );
}

export default App;
