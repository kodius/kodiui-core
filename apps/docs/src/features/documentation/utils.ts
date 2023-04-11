import { Checkbox } from "./Checkboxes";

export const generateCheckboxes = <S>(
  keys: S[],
  defaultValue: number = 5
): Checkbox<S>[] => {
  const arr = keys.map((k, i) => {
    if (defaultValue === i) {
      return {
        name: `${k}`,
        label: `${k}`,
        value: k,
        checked: true,
      };
    } else {
      return {
        name: `${k}`,
        label: `${k}`,
        value: k,
        checked: false,
      };
    }
  });
  return arr;
};

export const copyText = async (text: string) => {
  if (!text) alert("no text");
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }
  alert("copied");
};
