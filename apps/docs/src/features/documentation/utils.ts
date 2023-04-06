import { Checkbox } from "./Checkboxes";

export const generateCheckboxes = <S>(keys: S[]): Checkbox<S>[] => {
  const arr = keys.map((k) => {
    return {
      name: `${k}`,
      label: `${k}`,
      value: k,
      checked: false,
    };
  });
  return arr;
};
