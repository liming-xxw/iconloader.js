import { options } from "../intface/utilsintface";
export const CreateNsDom = (dom: string, options?: options) => {
  const ns = "http://www.w3.org/2000/svg";
  const width: string | number = options?.width || "20";
  const height: string | number = options?.height || "20";
  const vdom = document.createElementNS(ns, dom);
  if (dom == "svg") {
    vdom.setAttribute("width", String(width));
    vdom.setAttribute("height", String(height));
    vdom.setAttribute("viewBox", options?.viewbox as any);
    vdom.setAttribute("version", "1.1");
  }
  return vdom;
};
