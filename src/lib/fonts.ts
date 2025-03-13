import { readFile } from "node:fs/promises";
import { cache } from "react";

export const getRegularFont = cache(async () => {
  const response: Buffer = await readFile("src/assets/fonts/Geist-Regular.otf");
  const font: ArrayBuffer = Uint8Array.from(response).buffer;

  return font;
});

export const getBoldFont = cache(async () => {
  const response: Buffer = await readFile("src/assets/fonts/Geist-Medium.otf");
  const font: ArrayBuffer = Uint8Array.from(response).buffer;

  return font;
});
