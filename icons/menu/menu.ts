import { CreateNsDom } from "../../utils/CreateNsDom";
import { color95B3BD, colorDE3226 } from "../../utils/colors";
import { options } from "../../intface/utilsintface";
let svg: SVGElement;
let pathdomA: SVGElement;
let pathdomB: SVGElement;
let pathdomC: SVGElement;

let pathA =
  "m 10,13 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40";
let pathB = "m 10,30 h 40";
let pathC =
  "m 10,47 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40";

const menu = (dom: HTMLElement, options: options) => {
  svg = CreateNsDom("svg", {
    width: options.width,
    height: options.height,
    viewbox: "0 0 60 60",
  });
  svg.classList.add("icon", "hamRotate", "iconmenu");
  pathdomA = CreateNsDom("path");
  pathdomA.setAttribute("d", pathA);
  pathdomA.classList.add("menuline", "menutop");
  pathdomB = CreateNsDom("path");
  pathdomB.setAttribute("d", pathB);
  pathdomB.classList.add("menuline");
  pathdomC = CreateNsDom("path");
  pathdomC.setAttribute("d", pathC);
  pathdomC.classList.add("menuline", "menubottom");
  svg.onclick = () => {
    svg.classList.toggle("active");
  };
  svg.appendChild(pathdomA);
  svg.appendChild(pathdomB);
  svg.appendChild(pathdomC);
  dom.appendChild(svg);
};

export default menu;
