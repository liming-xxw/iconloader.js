import { good } from "../icons/good/index";
import { message } from "../icons/message/index";
import { options } from "intface/utilsintface";
const iconloader = (dom: HTMLHRElement, options: options) => {
  let icon = options.icon;
  if (icon == "good") {
    good(dom, options);
  } else if (icon == "message") {
    message(dom, options);
  }
};

export default iconloader;
