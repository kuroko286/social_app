const getRelationship = (user, viewedUser) => {
  const relationship = {
    following: false, // user following viewedUser
    friends: false, // both be friends
    requests: false, // user requested viewedUser
    beRequests: false, // viewedUser requested user
  };

  if (viewedUser.requests.includes(user._id)) {
    relationship.requests = true;
  }

  if (user.following.includes(viewedUser._id)) {
    relationship.following = true;
  }
  if (user.friends.includes(viewedUser._id)) {
    relationship.friends = true;
  }
  if (user.requests.includes(viewedUser._id)) {
    relationship.beRequests = true;
  }
  return relationship;
};

module.exports = {
  getRelationship,
};
