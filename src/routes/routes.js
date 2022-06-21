import React, { Suspense } from "react";
import { RenderRoutes } from "./RenderRoutes";
import SuspenseSpinner from "../components/SuspenseFallback";

export const routes = () => {
  return (
    <Suspense fallback={<SuspenseSpinner />}>
      <RenderRoutes />
    </Suspense>
  );
};
