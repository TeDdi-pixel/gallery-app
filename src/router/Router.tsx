import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routerConfig";
import loading from "../assets/icons/loading.svg";

type TypeRoutes = {
  id: number;
  path: string;
  element: ReactElement;
};

export default function Router() {
  return (
    <Routes>
      {routes.map((route: TypeRoutes) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <img
                    src={loading}
                    alt="loading"
                    className="loading-spinner"
                  />
                }
              >
                {route.element}
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}
