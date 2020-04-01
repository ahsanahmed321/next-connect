import Button from "@material-ui/core/Button";
import { followUser, unfollowUser } from "../../lib/api";

const FollowUser = ({ isFollowing, toggleFollow }) => {
  const request = isFollowing ? unfollowUser : followUser;

  return (
    <Button
      onClick={() => toggleFollow(request)}
      variant="contained"
      color={isFollowing ? "primary" : "secondary"}
    >
      {isFollowing ? "Un Follow" : "Follow"}
    </Button>
  );
};

export default FollowUser;
