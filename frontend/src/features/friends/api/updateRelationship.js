import api from "@/lib/axios";

export const sendFriendRequest = async (userId, token) => {
  await api.put(
    `users/${userId}/addFriend`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return "ok";
};

export const cancelFriendRequest = async (userId, token) => {
  await api.put(
    `users/${userId}/cancelFriendRequest`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return "ok";
};

export const unfriend = async (userId, token) => {
  await api.put(
    `users/${userId}/unfriend`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return "ok";
};

export const acceptFriend = async (userId, token) => {
  await api.put(
    `users/${userId}/acceptFriend`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return "ok";
};

export const removeRequest = async (userId, token) => {
  await api.put(
    `users/${userId}/deleteFriendRequest`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return "ok";
};
