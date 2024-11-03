import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import Footer from "../common/Footer";
function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full min-h-screen">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ShoppingLayout;
