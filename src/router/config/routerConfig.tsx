import { lazy } from "react";
const HomePage = lazy(() => import("../../pages/home/HomePage"));
// const Contacts = lazy(() => import("../../pages/contacts/Contacts"));
// const AboutPage = lazy(() => import("../../pages/about/AboutPage"));
// const SkillsPage = lazy(() => import("../../pages/skills/SkillsPage"));

export const routes = [
  { id: 0, path: "/", element: <HomePage /> },
  // { id: 2, path: "/about", element: <AboutPage /> },
  // { id: 3, path: "/skills", element: <SkillsPage /> },
  // { id: 3, path: "/profile", element: <CgProfile /> },
];
