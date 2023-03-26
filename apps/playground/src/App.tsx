import "@kodiui/ui/style.css";
import { Box, properties } from "@kodiui/ui";
import { theme } from "./contract.css";

function App() {
  return (
    <div className={theme}>
      <Box as="button" background="blue8" color="blue1" p="xs" px="sm">
        Button lol
      </Box>
    </div>
  );
}

export default App;
