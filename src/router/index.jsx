import { createBrowserRouter } from "react-router-dom";
import Auth from "@/modules/auth";
import { MapRoutes } from "@/router/components/map-routes";
import Home from "@/modules/home";
import MainWhiteBoard from "@/modules/white-board";

const routeConfig = [
  {
    path: "/login",
    element: <Auth />,
    public: true,
    handle: {
      crumb: () => "Login",
    },
  },
  {
    path: "/",
    element: <Home />,
    handle: {
      crumb: () => "Home",
    },
  },
  {
    path: "/:sessionId",
    element: <MainWhiteBoard />,
    handle: {
      crumb: () => "Board",
    },
  },
];

const routes = createBrowserRouter(MapRoutes(routeConfig));

export default routes;
