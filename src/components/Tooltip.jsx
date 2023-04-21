import { useState } from "react";
import style from "../styles/components/tooltip.module.scss";

function Tooltip({ content, delay, children }) {
  let timeout;
  const [active, setActive] = useState(false);

  const show = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 600);
  };

  const hide = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <span className={style.tooltipWrap} onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {active && <span className={style.tooltip}>{content}</span>}
    </span>
  );
}

export default Tooltip;
