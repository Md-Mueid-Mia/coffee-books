import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      {/* navbar */}
      <div className="h-12 container mx-auto">
        <Navbar />
      </div>
      {/* Dynamic section */}
      <section className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
        <Outlet />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
