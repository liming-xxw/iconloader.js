import { good } from "../icons/good/index.js";

const iconloader = (dom, options) => {
  let icon = options.icon;
  if (icon == "good") {
    good(dom, options);
  }
};

export default iconloader;
