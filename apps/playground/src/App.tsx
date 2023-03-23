import "@kodiui/ui/style.css";
import { Box, FlexBox, Animation } from "@kodiui/ui";

import { theme } from "./contract.css";
import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [state, setState] = useState(true);

  return (
    <div className={theme}>
      {/* <div>shoud animate: {state ? "yes" : "no"}</div> */}
      {/* <button onClick={() => setState(!state)}>animate</button> */}
      <Button>hello</Button>
      {/* <FlexBox flexDirection={"column"} alignItems={"center"}> */}
      {/*   <Animation animation="bounce"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="spin"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="ping"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="blink"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="float"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="shakeX"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="shakeY"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="spin"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="ping"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="blink"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="blink"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="float"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="bounce"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="fadeIn"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="fadeOut"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="fadeOutBloom"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="scaleUp"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="scaleDown"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideOutUp"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideOutDown"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideOutDown"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideOutRight"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideOutLeft"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideInUp"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideInDown"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideInRight"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="slideInLeft"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/*   <Animation animation="pulse"> */}
      {/*     <ABox /> */}
      {/*   </Animation> */}
      {/* </FlexBox> */}
    </div>
  );
}

export default App;

const ABox = () => (
  <Box borderColor={"red-10"} boxShadow={"shadow-3"} borderRadius={"sm"}>
    box
  </Box>
);
