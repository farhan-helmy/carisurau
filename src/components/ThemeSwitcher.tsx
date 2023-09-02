import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium capitalize text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {theme}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => setTheme("dark")}
                    className={`${
                      active
                        ? "bg-foreground/5 text-foreground"
                        : "text-foreground"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Dark
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => setTheme("light")}
                    className={`${
                      active
                        ? "bg-foreground/5 text-foreground"
                        : "text-foreground"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Light
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={(e) => setTheme("system")}
                    className={`${
                      active
                        ? "bg-foreground/5 text-foreground"
                        : "text-foreground"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    System
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
