import { LoaderIcon } from "lucide-react";
import React from "react";
import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  const {theme} = useThemeStore()
  return (
    <section className="min-h-screen flex items-center justify-center" data-theme={theme}>
      <LoaderIcon className="size-10 text-primary animate-spin" />
    </section>
  );
};

export default PageLoader;
