import { useSelector } from "react-redux";

function NotificationItem({ from, to, text, seen }) {
  return (
    <div
      className={`p-4 border-b hover:bg-gray-300 duration-150 ${
        seen ? "bg-gray-200 hover:bg-gray-300" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img className="h-10 w-10 rounded-full" src={from.picture} alt="" />
        <div className="flex-1">
          <div className="text-sm font-semibold">
            {from.first_name + " " + from.last_name}
          </div>
          <div className="text-sm text-gray-500">{text}</div>
        </div>
      </div>
    </div>
  );
}

export function NotificationList() {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  return (
    <div>
      {notifications.map((notification, index) => (
        <NotificationItem key={index} {...notification} />
      ))}
    </div>
  );
}

export default NotificationItem;
