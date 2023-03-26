import { TokenKeys, tokens, Tokens } from "../styles/tokens/index.css";

type JSONTokens = {
  [key in TokenKeys]: {
    [variant: string]: {
      value: string;
      type: string;
    };
  };
};

type TokenVariants = {
  [variant: string]: {
    value: string;
    type: string;
  };
};

type ReadableToken = {
  [key: string]: string;
};

function extractTokens(tokenVariant: TokenVariants) {
  const result: ReadableToken = {};
  for (const [key, value] of Object.entries(tokenVariant)) {
    result[key] = value.value;
  }
  return result;
}

export const translateTokens = (jsonTokens: JSONTokens): Tokens => {
  const properties: Tokens = tokens;
  for (const [cssProperty, cssValues] of Object.entries(jsonTokens)) {
    const key = cssProperty as TokenKeys;
    //@ts-ignore
    properties[key] = extractTokens(cssValues);
  }
  return properties;
};
