import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
