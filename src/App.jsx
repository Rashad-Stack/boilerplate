import { ToastWrapper } from "keep-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />
      <ToastWrapper
        richColors={true}
        toastOptions={{
          classNames: {
            title: "text-body-3 font-medium",
            toast: "rounded-xl shadow-large",
            description: "text-body-4 font-normal",
          },
        }}
      />
    </GlobalStateProvider>
  );
}

export default App;
