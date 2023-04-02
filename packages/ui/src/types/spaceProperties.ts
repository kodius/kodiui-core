import { kodiContract } from "../styles/kodiContract.css";

export const spaceProperties = {
  padding: kodiContract.space,
  paddingTop: kodiContract.space,
  paddingBottom: kodiContract.space,
  paddingLeft: kodiContract.space,
  paddingRight: kodiContract.space,
  margin: kodiContract.space,
  marginTop: kodiContract.space,
  marginBottom: kodiContract.space,
  marginLeft: kodiContract.space,
  marginRight: kodiContract.space,
  top: kodiContract.space,
  bottom: kodiContract.space,
  left: kodiContract.space,
  right: kodiContract.space,
};

export type SpacePropertiesKeys = keyof typeof spaceProperties;
