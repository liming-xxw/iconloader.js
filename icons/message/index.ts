import { CreateNsDom } from "../../utils/CreateNsDom";
import { color95B3BD, colorDE3226 } from "../../utils/colors";
import { options } from "../../intface/utilsintface";
let pathd =
  "M310.5,112c0,40.65-30.24,76.22-75.42,95.7,146.42,127.8-50.48,15.8-79.58,15.8C69.9,223.5.5,173.58.5,112S69.9.5,155.5.5,310.5,50.42,310.5,112Z";

let svg: SVGElement;
let path: SVGElement;
export const message = (dom: HTMLElement, options: options) => {
  const width: string | number = options?.width || "50";
  const height: string | number = options?.height || "50";
  svg = CreateNsDom("svg", {
    width: width + "px",
    height: height + "px",
    viewbox: "0 0 311 269.41",
  });

  path = CreateNsDom("path");
  path.setAttribute("fill", "white");
  path.setAttribute("stroke", "#000");
  path.setAttribute("d", pathd);

  const circleA = CreateNsDom("circle");
  circleA.setAttribute("cx", "90.5");
  circleA.setAttribute("cy", "119.5");
  circleA.setAttribute("r", "18");
  const circleB = CreateNsDom("circle");
  circleB.setAttribute("cx", "216.5");
  circleB.setAttribute("cy", "119.5");
  circleB.setAttribute("r", "18");
  const circleC = CreateNsDom("circle");
  circleC.setAttribute("cx", "157.5");
  circleC.setAttribute("cy", "119.5");
  circleC.setAttribute("r", "18");

  circleA.classList.add("messagecls");
  circleB.classList.add("messagecls");
  circleC.classList.add("messagecls");

  svg.appendChild(path);
  svg.appendChild(circleA);
  svg.appendChild(circleB);
  svg.appendChild(circleC);
  dom.appendChild(svg);
};
