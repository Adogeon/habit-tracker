import React from "react";
import Avatar from "@material-ui/core/Avatar";

const UserAvatarView = ({ link, username, ...props }) => {
  return username ? (
    link ? (
      <Avatar src={link} alt={username} {...props} />
    ) : (
      <Avatar alt={username} {...props}>
        {username[0].toUpperCase()}
      </Avatar>
    )
  ) : (
    <div>Loading...</div>
  );
};
export default UserAvatarView;
