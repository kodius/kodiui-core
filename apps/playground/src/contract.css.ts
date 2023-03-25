import { defContract, kodiContract } from "@kodiui/ui";

import { createTheme } from "@vanilla-extract/css";
import tokens from "../tokens/playground-tokens.json";

const tokenColors = Object.entries(tokens["kodiui-ds"].colors);

interface ColorsMap {
  [key: string]: string;
}

const transform: ColorsMap[] = tokenColors.map((color) => {
  const key = color[0];
  const value = color[1].value;
  return {
    [key]: value,
  };
});

const colorsToObject = (colorsArray: ColorsMap[]): ColorsMap => {
  const resulst: ColorsMap = {};
  colorsArray.forEach((color) => {
    const keys = Object.keys(color);
    if (keys.length === 1) {
      resulst[keys[0]] = color[keys[0]];
    }
  });
  return resulst;
};

const colorsObject = colorsToObject(transform);

const { colors, ...rest } = defContract;

export const theme = createTheme(kodiContract, {
  colors: colorsObject, 
  ...rest,
});
