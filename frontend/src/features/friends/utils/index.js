export const getOnlineFriendsId = (friends, connectedUser) => {
  const res = friends
    .map((friend) => {
      return friend._id;
    })
    .filter((id) => connectedUser.some((u) => u.userId === id));
  console.log(res);
  return res;
};

export const addFriendStatus = (friends, connectedUser) => {
  const onlineIds = getOnlineFriendsId(friends, connectedUser);
  const res = friends.map((friend) => {
    return {
      ...friend,
      online: onlineIds.includes(friend._id),
    };
  });
  console.log(res);
  return res;
};
