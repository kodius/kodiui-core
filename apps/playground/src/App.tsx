import "@kodiui/ui/style.css";
import { Box, FlexBox, Animation, kodiContract, defContract } from "@kodiui/ui";

import { theme } from "./contract.css";
import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [state, setState] = useState(true);
  console.log(JSON.stringify(defContract));
 

  return (
    <div className={theme}>
      <Button>hello</Button>
    </div>
  );
}

export default App;

const ABox = () => (
  <Box borderColor={"red-10"} boxShadow={"shadow-3"} borderRadius={"sm"}>
    box
  </Box>
);
