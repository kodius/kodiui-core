import { FlexBox, vars } from "@kodiui/ui";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import React from "react";

interface Checkbox {
  name: string;
  label: string;
  checked: boolean;
  value: Sprinkles["gap"];
}

interface Props {
  children: (item: Checkbox | undefined) => JSX.Element;
}

console.log(Object.keys(vars.space));

export const Checkboxes = ({ children }: Props) => {
  const [checkboxes, setCheckboxes] = React.useState<Checkbox[]>([
    {
      name: "auto",
      label: "auto",
      value: "auto",
      checked: false,
    },
    {
      name: "xxs",
      label: "xxs",
      value: "xxs",
      checked: false,
    },
    {
      name: "xs",
      label: "xs",
      value: "xs",
      checked: false,
    },
    {
      name: "md",
      label: "md",
      value: "md",
      checked: true,
    },
    {
      name: "lg",
      label: "lg",
      value: "lg",
      checked: false,
    },
    {
      name: "xl",
      label: "xl",
      value: "xl",
      checked: false,
    },
    {
      name: "2xl",
      label: "2xl",
      value: "2xl",
      checked: false,
    },
    {
      name: "3xl",
      label: "3xl",
      value: "3xl",
      checked: false,
    },
    {
      name: "5xl",
      label: "5xl",
      value: "5xxl",
      checked: false,
    },
  ]);

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
    <>
      <FlexBox alignItems="center" gap="sm">
        {checkboxes.map((c) => {
          const checked = selectedItem?.checked === c.checked;
          return (
            <FlexBox alignItems="center" key={c.name}>
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
    </>
  );
};
