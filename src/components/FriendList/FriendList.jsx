import { FriendItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(friend => (
            <FriendItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline} />
      ))}
        </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};