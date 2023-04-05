export type BuildElement = {
  label: string;
  example?: BuildExemple;
  codeSnippet?: string;
  isCodeOpen?: boolean;
};

export type BuildExemple = {
  component: JSX.Element[];
  label?: string[];
};

export type BuillderProps = {
  title: string;
  isCodeOpen?: boolean;
  build: () => BuildElement[];
};
