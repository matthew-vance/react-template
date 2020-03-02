import { ComponentGenerator } from "./generators";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
module.exports = (plop: any): void => {
  plop.setGenerator("component", ComponentGenerator);
};
