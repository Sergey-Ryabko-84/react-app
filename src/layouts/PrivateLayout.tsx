import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PaperWrapper } from "@common/ui";
import Stack from "@mui/material/Stack";
import { Header } from "@common/components";

export const PrivateLayout = () => (
  <Stack gap={1} py={1}>
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
    </Suspense>
    <PaperWrapper component="main">
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </PaperWrapper>
  </Stack>
);
