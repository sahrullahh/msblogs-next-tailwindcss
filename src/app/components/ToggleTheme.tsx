import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-2xl"
    >
      {theme === "light" ? (
        <Icon icon="ph:sun-light" />
      ) : theme === "dark" ? (
        <Icon icon="solar:moon-bold" />
      ) : (
        <Icon icon="ri:computer-line" />
      )}
    </button>
  );
};

export default ThemeToggle;
