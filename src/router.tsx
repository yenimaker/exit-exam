import { QueryClient } from "@tanstack/react-query";
import { createRouter, RootRoute, Route } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import App from "./routes/__root";

export const getRouter = (queryClient: QueryClient) => {
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
