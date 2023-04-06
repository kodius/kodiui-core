import { FlexBox, Stack, vars } from "@kodiui/ui";
import React from "react";

export interface Checkbox<T> {
  name: string;
  label: string;
  checked: boolean;
  value: T;
}
export interface Props<T> {
  children: (item: Checkbox<T> | undefined) => JSX.Element;
  checkboxes: Checkbox<T>[];
  setCheckboxes: React.Dispatch<React.SetStateAction<Checkbox<T>[]>>;
}

export const Checkboxes = <T,>({
  children,
  checkboxes,
  setCheckboxes,
}: Props<T>) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const resetCheckboxes = checkboxes.map((checkbox) => {
      return { ...checkbox, checked: false };
    });

    const updatedCheckboxes = resetCheckboxes.map((checkbox) => {
      if (checkbox.name === event.target.name) {
        return {
          ...checkbox,
          checked: !checkbox.checked,
        };
      }

      return checkbox;
    });

    setCheckboxes(updatedCheckboxes);
  };

  const selectedItem = checkboxes.find((c) => c.checked === true);
  return (
    <Stack gap="md">
      <FlexBox alignItems="center" gap="sm" flexWrap="wrap">
        {checkboxes.map((c) => {
          const checked = selectedItem?.checked === c.checked;
          return (
            <FlexBox alignItems="center" key={c.name} gap="xxs">
              <input
                name={c.name}
                value={c.name}
                checked={checked}
                onChange={handleOnChange}
                type="checkbox"
              />
              <label>{c.label}</label>
            </FlexBox>
          );
        })}
      </FlexBox>

      {children(selectedItem)}
    </Stack>
  );
};
