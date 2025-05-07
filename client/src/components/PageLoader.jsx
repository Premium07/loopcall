import { LoaderIcon } from "lucide-react";
import React from "react";

const PageLoader = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <LoaderIcon className="size-10 text-primary animate-spin" />
    </section>
  );
};

export default PageLoader;
