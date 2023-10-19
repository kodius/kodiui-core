import { vars } from "../styles/vars.css";

export const spaceProperties = {
  padding: vars.space,
  paddingTop: vars.space,
  paddingBottom: vars.space,
  paddingLeft: vars.space,
  paddingRight: vars.space,
  margin: vars.space,
  marginTop: vars.space,
  marginBottom: vars.space,
  marginLeft: vars.space,
  marginRight: vars.space,
  top: vars.space,
  bottom: vars.space,
  left: vars.space,
  right: vars.space,
};

export type SpacePropertiesKeys = keyof typeof spaceProperties;
