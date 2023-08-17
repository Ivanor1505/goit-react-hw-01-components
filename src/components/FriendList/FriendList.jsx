import { FriendItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendBoard } from './FriendList.styled';

export const FriendList = ({ friends }) => (
    <FriendBoard>
        {friends.map(friend => (
    <FriendItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline} />
      ))}
    </FriendBoard>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};