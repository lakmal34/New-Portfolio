import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyDetail,
  },
]);
