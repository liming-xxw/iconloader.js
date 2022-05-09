import { CreateNsDom } from "../../utils/CreateNsDom";
import { color95B3BD, colorDE3226 } from "../../utils/colors";
import { options } from "../../intface/utilsintface";
let patha =
  "M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z";
let pathb =
  "M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z";
let pathd = patha;
let pathcolor = color95B3BD;

let svg: SVGElement;
let path: SVGElement;
export const good = (dom: HTMLHRElement, options: options) => {
  const type: string = options.type || "scale";
  const width: string | number = options?.width || "20";
  const height: string | number = options?.height || "20";
  svg = CreateNsDom("svg", {
    width: width + "px",
    height: height + "px",
    viewbox: "0 0 1024 1024",
  });
  svg.onclick = () => {
    if (type == "scale") {
      iconscale();
    } else if (type == "rotate") {
      iconrotate();
    } else if (type == "change") {
      iconchange();
    }
  };
  path = CreateNsDom("path");
  path.setAttribute("fill", pathcolor);
  path.setAttribute("d", pathd);
  svg.appendChild(path);
  dom.appendChild(svg);
};

const iconscale = () => {
  if (svg.classList.contains("iconscale")) {
    svg.classList.remove("iconscale");
    pathd = patha;
    pathcolor = color95B3BD;
    path.setAttribute("d", pathd);
    path.setAttribute("fill", pathcolor);
  } else {
    svg.classList.add("iconscale");
    pathd = pathb;
    pathcolor = colorDE3226;
    path.setAttribute("d", pathd);
    path.setAttribute("fill", pathcolor);
  }
};

const iconrotate = () => {
  if (svg.classList.contains("iconrotate")) {
    svg.classList.remove("iconrotate");
    pathd = patha;
    pathcolor = color95B3BD;
    path.setAttribute("d", pathd);
    path.setAttribute("fill", pathcolor);
  } else {
    svg.classList.add("iconrotate");
    pathd = pathb;
    path.setAttribute("d", pathd);
    setTimeout(() => {
      pathcolor = colorDE3226;
      path.setAttribute("fill", pathcolor);
    }, 300);
  }
};

const iconchange = () => {
  if (svg.classList.contains("iconchange")) {
    svg.classList.remove("iconchange");
    pathd = patha;
    pathcolor = color95B3BD;
    path.setAttribute("d", pathd);
    path.setAttribute("fill", pathcolor);
  } else {
    svg.classList.add("iconchange");
    pathd = pathb;
    pathcolor = colorDE3226;
    path.setAttribute("d", pathd);
    path.setAttribute("fill", pathcolor);
  }
};
