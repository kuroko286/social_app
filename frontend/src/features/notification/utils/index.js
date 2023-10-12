export const getNumberOfNewNotifications = (notifications) => {
  return notifications.filter((notification) => notification.seen === false)
    .length;
};
