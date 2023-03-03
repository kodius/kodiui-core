import { kodiContract } from "../styles/kodiContract.css";
import { Sizes } from "./global";

interface SpaceProperties {
  padding: Sizes;
  paddingTop: Sizes;
  paddingBottom: Sizes;
  paddingRight: Sizes;
  paddingLeft: Sizes;
  margin: Sizes;
  marginTop: Sizes;
  marginBottom: Sizes;
  marginLeft: Sizes;
  marginRight: Sizes;
}

export const spaceProperties: SpaceProperties = {
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
};

export type SpacePropertiesKeys = keyof typeof spaceProperties;
