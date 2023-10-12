import Header, { NotAuthHeader } from "@/components/Header/Header";
import { useModel } from "@/hooks/useModel";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import { Model } from "@/components/Model/Model";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  connectSocketServer,
  disconnectSocketServer,
} from "@/realtime/socketConnection";
import { fetchNotifications } from "@/reducers/notificationReducer";

export const ModelContext = createContext();

function HomeLayout() {
  const [model, setModel] = useModel();
  const user = useSelector((state) => state.user);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      console.log("connect in layout");
      if (notifications.status === "idle") {
        dispatch(fetchNotifications());
      }
      connectSocketServer(user);
    }
    return () => {
      disconnectSocketServer();
    };
  }, [user]);
  return (
    <div className="relative">
      <ModelContext.Provider value={[model, setModel]}>
        <div className="relative z-0">
          {user ? <Header /> : <NotAuthHeader />}
          <div className="pt-header w-full z-0 min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>

        <div
          className={`${
            model === "none" ? "hidden" : ""
          } fixed top-0 left-0 right-0 bottom-0 z-10 bg-gray-400/50`}
        >
          <Model model={model} />
        </div>
      </ModelContext.Provider>
    </div>
  );
}

export default HomeLayout;
