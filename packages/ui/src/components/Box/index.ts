import { createBox } from "@dessert-box/react";
import { sprinkles } from "../../styles/sprinkles.css";

// desert box is not a solution for the library becose of the interface sharing
// extramly cost 22 kb the packange without is 1.25kb
// todo: Create with create react 

export const Box = createBox({ atoms: sprinkles });

