import { options } from "../intface/utilsintface";
export const CreateNsDom = (dom: string, options?: options) => {
  const ns = "http://www.w3.org/2000/svg";
  const vdom = document.createElementNS(ns, dom);
  if (dom == "svg") {
    vdom.setAttribute("width", String(options?.width));
    vdom.setAttribute("height", String(options?.height));
    vdom.setAttribute("viewBox", "0 0 1024 1024");
    vdom.setAttribute("version", "1.1");
  }
  return vdom;
};
