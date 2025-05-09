import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function DesktopMenu({ menu }) {
  const [isHover, setHover] = useState(false);
  const hasSubMenu = menu?.subMenu?.length;

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <div className="bg-white">
      <li
        className="group/link relative"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        key={menu.name}
        aria-haspopup={hasSubMenu ? "true" : "false"}
        aria-expanded={isHover}
      >
        <button
          className="flex items-center gap-1 px-3 py-1 rounded-xl hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 cursor-pointer"
          tabIndex={0}
        >
          {menu.name}
          {hasSubMenu && (
            <ChevronDown
              className={`mt-[0.6px] transition-transform duration-200 ${
                isHover ? "rotate-180" : ""
              }`}
            />
          )}
        </button>
      </li>
    </div>
  );
}
