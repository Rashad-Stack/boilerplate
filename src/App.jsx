import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  );
}

export default App;
