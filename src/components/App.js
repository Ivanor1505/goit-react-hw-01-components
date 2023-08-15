import { Profile } from "./Profile";
import user from "../user.json"


export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};
