import { BoxProps } from "../components/primitives/Box/Box";
import { hardStyle } from "./hardStyle";

const props: BoxProps = {
  __margin: "100px",
  __padding: "200px",
  __background: "red",
  __width: "50px",
  children: "",
};

const returnedStyles = {
  margin: "100px",
  padding: "200px",
  background: "red",
  width: "50px",
};

test("should return styles as expected", () => {
  expect(hardStyle(props)).toEqual(returnedStyles);
});
