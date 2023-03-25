import "@kodiui/ui/style.css";
import { Box } from "@kodiui/ui";
import { theme } from "./contract.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);

  // console.log("tokens>", tokens);

  return (
    //@ts-ignore
    <div className={theme}>
      <Box as="button" background="blue8" color="blue1" p="xs" px="sm">
        Button
      </Box>
    </div>
  );
}

export default App;
