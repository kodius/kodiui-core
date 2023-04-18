import { Checkbox } from "./component/Checkboxes";

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

export type DownloadFileArgs = {
  fileName: string;
};

type DownloadFileFn = (args: DownloadFileArgs) => void;

export const downloadFile: DownloadFileFn = ({ fileName }) => {
  const link = document.createElement("a");
  link.href = `${process.env.NEXT_PUBLIC_URL}/compress/${fileName}.zip`;
  link.download = `${fileName}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const installFile = () => {
  // KODIUI_MY_PROJECT_PATH
};
