import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PaperWrapper } from "@common/ui";

export const PrivateLayout = () => (
  <PaperWrapper component="main">
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  </PaperWrapper>
);
