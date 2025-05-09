import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: { duration: 0.3 },
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      <button
        className="lg:hidden z-[999] relative"
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.nav
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        exit={{ x: "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="my-2">
                <button
                  className="flex justify-between items-center p-4 hover:bg-white/5 rounded-md w-full text-left"
                  onClick={() => setClicked(isClicked ? null : i)}
                  aria-expanded={isClicked}
                >
                  <span>{name}</span>
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform ${
                        isClicked ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>
                {hasSubMenu && (
                  <ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Icon size={17} />
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}
