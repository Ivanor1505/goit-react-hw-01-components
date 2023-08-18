import PropTypes from 'prop-types';
import { FriendCard, Status, Name, Ava } from './FriendListItem.styled';


export const FriendItem = ({ avatar, name, isOnline }) => (
    <FriendCard>
    <Status data-isonline={isOnline}></Status>
  <Ava src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
</FriendCard>
);

FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};