import { Outlet, useFetcher } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";

export default function RootLayout() {
  const { state } = useFetcher();

  return (
    <div className="flex flex-col min-h-screen">
      {state === "loading" && <Loading />}

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
