import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameDetailPage from "../components/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game/:id",
    element: <GameDetailPage />,
  },
]);

export default router;
