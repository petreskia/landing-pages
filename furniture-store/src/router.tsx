import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CardsCont } from "./components/CardsCont";
import { CardDetail } from "./components/CardDetail";
import products from "./library";
import { ErrorPage } from "./components/ErrorPage";

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => {
          return products;
        },
        errorElement: <h1>Error pri fetch</h1>,
        element: <CardsCont />,
      },
      {
        path: "/details/:id",
        element: <CardDetail />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
