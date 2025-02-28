"use client";

import { FC, useEffect, useState } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const [cursorImage, setCursorImage] = useState("cursor.png");

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      setCursorImage("w_cursor.png");
      htmlElement.style.cursor = `url('w_cursor.png'), auto`;
    } else {
      setCursorImage("cursor.png");
      htmlElement.style.cursor = `url('cursor.png'), auto`;
    }
  }, [theme]);

  const onChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Directly set cursor image based on the new theme
    const htmlElement = document.documentElement;
    if (newTheme === "dark") {
      setCursorImage("w_cursor.png");
      htmlElement.style.cursor = `url('w_cursor.png'), auto`;
    } else {
      setCursorImage("cursor.png");
      htmlElement.style.cursor = `url('cursor.png'), auto`;
    }
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </Component>
  );
};
