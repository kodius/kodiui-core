import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  it("renders children", () => {
    render(<Box>foo bar baz</Box>);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
});
