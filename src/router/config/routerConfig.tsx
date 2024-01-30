import { lazy } from "react";
const HomePage = lazy(() => import("../../pages/home/HomePage"));

export const routes = [{ id: 0, path: "/", element: <HomePage /> }];
