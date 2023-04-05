export const copyText = (text: string) => {
  if (!text) alert("no tekst");
  navigator.clipboard.writeText(text);
};
