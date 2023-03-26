import { PropertyKeys } from "../styles/properties/index.css";

type Tokens = {
  [key in PropertyKeys]: {
    [variant: string]: {
      value: string;
      types: string;
    };
  };
};

type TokenVariants = {
  [variant: string]: {
    value: string;
    type: string;
  };
};

interface ReadableToken {
  [key: string]: string;
}

type ReadableTokens = {
  [key in PropertyKeys]?: ReadableToken;
};

function extractTokens(tokenVariant: TokenVariants): ReadableToken {
  const result: ReadableToken = {};
  for (const [key, value] of Object.entries(tokenVariant)) {
    result[key] = value.value;
  }
  return result;
}

export const translateTokens = (tokens: Tokens): ReadableTokens => {
  const entries = Object.entries(tokens);

  let properties: ReadableTokens = {};

  entries.forEach((entrie) => {
    const cssPropery = entrie[0] as PropertyKeys;
    const cssValues = entrie[1];
    const test = extractTokens(cssValues);
    const newEntrie = {
      [cssPropery]: test,
    };

    properties = { ...properties, ...newEntrie };
  });
  return properties;
};
