import Header from "@/components/Header/Header";

import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="relative">
      <div className="relative z-0">
        <Header></Header>
        <div className="pt-header w-full z-0 min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="models fixed top-0 left-0 right-0 bottom-0 z-100 bg-gray-400/50 hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-xl">
          <p>Model Content</p>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
