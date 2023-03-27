import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  it("renders headline", () => {
    render(<Box>box</Box>);

    screen.debug();

    // check if App components renders headline
  });
});
