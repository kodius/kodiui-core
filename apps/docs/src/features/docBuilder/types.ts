export type BuildElement = {
  label: string;
  example?: BuildExemple;
  codeSnippet?: string;
};

export type BuildExemple = {
  component: JSX.Element[];
  label?: string[];
};

export type BuillderProps = {
  title: string;
  build: () => BuildElement[];
};
